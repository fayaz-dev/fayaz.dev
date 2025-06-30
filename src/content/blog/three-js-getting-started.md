---
title: "Getting Started with Three.js: Creating Your First 3D Scene"
description: "Learn the fundamentals of Three.js and create stunning 3D graphics for the web. A beginner-friendly guide to 3D web development."
publishDate: 2025-01-25
tags: ["three-js", "3d-graphics", "webgl", "javascript", "creative-coding"]
readingTime: "12 min read"
---

# Getting Started with Three.js: Creating Your First 3D Scene

Three.js has revolutionized 3D graphics on the web, making it accessible to developers without deep WebGL knowledge. In this comprehensive guide, we'll explore the fundamentals and build your first 3D scene.

## What is Three.js?

Three.js is a JavaScript library that simplifies WebGL development, allowing you to create complex 3D graphics with relatively simple code. It abstracts away the complexity of WebGL while still providing powerful features for advanced users.

### Why Choose Three.js?

- **Ease of Use**: High-level API that's beginner-friendly
- **Performance**: Optimized for web performance
- **Rich Ecosystem**: Extensive documentation and community
- **Cross-Platform**: Works across all modern browsers
- **Flexible**: From simple scenes to complex applications

## Setting Up Your Environment

Let's start by setting up a basic Three.js project:

```bash
npm install three
# or
yarn add three
```

For TypeScript projects, also install the types:

```bash
npm install @types/three --save-dev
```

## Core Concepts

Every Three.js application consists of three fundamental components:

### 1. Scene
The scene is a container that holds all your 3D objects, lights, and cameras.

```javascript
const scene = new THREE.Scene();
```

### 2. Camera
The camera defines the perspective from which the scene is viewed.

```javascript
const camera = new THREE.PerspectiveCamera(
  75,                                    // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1,                                   // Near clipping plane
  1000                                   // Far clipping plane
);
```

### 3. Renderer
The renderer draws the scene from the camera's perspective.

```javascript
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## Creating Your First Scene

Let's build a simple scene with a rotating cube:

```javascript
import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}

animate();
```

## Understanding Geometries

Geometries define the shape of your 3D objects. Three.js provides many built-in geometries:

### Basic Geometries

```javascript
// Box geometry
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

// Sphere geometry
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

// Plane geometry
const planeGeometry = new THREE.PlaneGeometry(2, 2);

// Cylinder geometry
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
```

### Custom Geometries

You can also create custom geometries:

```javascript
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  -1.0, -1.0,  1.0,
   1.0, -1.0,  1.0,
   1.0,  1.0,  1.0,
]);

geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
```

## Materials and Textures

Materials define how surfaces appear. Three.js offers various material types:

### Basic Materials

```javascript
// Basic material (unaffected by lights)
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Lambert material (responds to lights)
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

// Phong material (shiny surfaces)
const phongMaterial = new THREE.MeshPhongMaterial({ 
  color: 0x0000ff,
  shininess: 100
});

// Standard material (physically based)
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  metalness: 0.5,
  roughness: 0.5
});
```

### Adding Textures

```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('path/to/texture.jpg');

const material = new THREE.MeshStandardMaterial({
  map: texture
});
```

## Lighting Your Scene

Proper lighting brings your 3D scenes to life:

### Ambient Light
Provides overall illumination:

```javascript
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);
```

### Directional Light
Simulates sunlight:

```javascript
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);
```

### Point Light
Emits light in all directions:

```javascript
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);
```

## Camera Controls

Add interactivity with camera controls:

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Update controls in your animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
```

## Performance Optimization

### 1. Efficient Rendering
```javascript
// Only render when necessary
let needsRender = true;

function render() {
  if (needsRender) {
    renderer.render(scene, camera);
    needsRender = false;
  }
}

// Trigger render on changes
controls.addEventListener('change', () => {
  needsRender = true;
});
```

### 2. Geometry Instancing
For multiple similar objects:

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

const instancedMesh = new THREE.InstancedMesh(geometry, material, 1000);
scene.add(instancedMesh);

// Set positions for each instance
const matrix = new THREE.Matrix4();
for (let i = 0; i < 1000; i++) {
  matrix.setPosition(
    Math.random() * 100 - 50,
    Math.random() * 100 - 50,
    Math.random() * 100 - 50
  );
  instancedMesh.setMatrixAt(i, matrix);
}
```

### 3. Level of Detail (LOD)
Reduce complexity based on distance:

```javascript
const lod = new THREE.LOD();

// High detail version
const highDetail = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  material
);

// Low detail version
const lowDetail = new THREE.Mesh(
  new THREE.SphereGeometry(1, 8, 8),
  material
);

lod.addLevel(highDetail, 0);
lod.addLevel(lowDetail, 50);
scene.add(lod);
```

## Responsive Design

Make your 3D scenes responsive:

```javascript
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);
```

## Advanced Features

### Post-Processing Effects
Add visual effects with post-processing:

```javascript
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new BloomPass(1.5));

// Render with composer instead of renderer
function animate() {
  requestAnimationFrame(animate);
  composer.render();
}
```

### Loading 3D Models
Import external 3D models:

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
loader.load('path/to/model.gltf', (gltf) => {
  scene.add(gltf.scene);
});
```

## Best Practices

### 1. Memory Management
```javascript
// Dispose of geometries and materials when no longer needed
geometry.dispose();
material.dispose();
texture.dispose();
```

### 2. Error Handling
```javascript
renderer.domElement.addEventListener('webglcontextlost', (event) => {
  event.preventDefault();
  console.log('WebGL context lost');
});
```

### 3. Progressive Loading
Load assets progressively to improve perceived performance:

```javascript
const loadingManager = new THREE.LoadingManager();
loadingManager.onProgress = (url, loaded, total) => {
  console.log(`Loading: ${(loaded / total * 100)}%`);
};
```

## Common Pitfalls and Solutions

### 1. Black Screen Issues
- Check camera position
- Ensure objects are within camera's view frustum
- Verify lighting setup

### 2. Performance Problems
- Use geometry instancing for repeated objects
- Implement frustum culling
- Optimize texture sizes

### 3. Mobile Compatibility
- Test on various devices
- Implement fallbacks for limited WebGL support
- Consider reduced quality modes

## Conclusion

Three.js opens up a world of creative possibilities for web developers. Start with simple scenes and gradually explore advanced features as you become more comfortable with the library.

The key to mastering Three.js is practice and experimentation. Don't be afraid to break things and try new approaches—that's how you'll discover the most creative solutions.

## Next Steps

- Explore the Three.js examples gallery
- Learn about shaders for custom visual effects
- Experiment with physics libraries like Cannon.js
- Try building a complete 3D application

---

*Ready to dive deeper into 3D web development? Check out my upcoming series on advanced Three.js techniques and creative coding patterns!*