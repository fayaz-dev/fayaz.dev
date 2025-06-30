# fayaz.dev

A visually stunning, responsive developer blog built with Astro, TypeScript, and modern web technologies. This blog prioritizes accessibility, typography, and creative excellence while maintaining exceptional performance.

## ✨ Features

### 🎨 Creative & Visual
- **Three.js Hero Animation** - Interactive 3D geometric shapes with fallback SVG animation
- **Interactive Mind Map** - SVG visualization of blog post connections using D3.js
- **Typewriter Quote Generator** - Random developer quotes with smooth animations
- **404 Mini-Game** - Three.js-powered interactive game for error pages
- **Smooth Animations** - Subtle micro-interactions and transitions throughout

### 📝 Content & Blog
- **Markdown Blog Posts** - Full MDX support with custom components
- **Tag-based Filtering** - Dynamic post filtering with animated transitions
- **Related Posts** - Intelligent content suggestions based on tags
- **Reading Time** - Automatic calculation and display
- **Table of Contents** - Sticky, collapsible TOC with active link highlighting
- **Breadcrumb Navigation** - Full path hierarchy for easy navigation

### 🚀 Performance & SEO
- **Lightning Fast** - Astro's zero-JS approach with selective hydration
- **SEO Optimized** - Complete meta tags, Open Graph, and JSON-LD
- **RSS Feed** - Automatic feed generation
- **Sitemap** - Auto-generated XML sitemap
- **Optimized Images** - Lazy loading with blur-up placeholders

### ♿ Accessibility
- **WCAG Compliant** - Full keyboard navigation and screen reader support
- **High Contrast** - Accessible color palette with proper contrast ratios
- **Semantic HTML** - Proper heading hierarchy and ARIA labels
- **Focus Management** - Clear focus indicators and logical tab order

### 🛠 Developer Experience
- **TypeScript** - Full type safety throughout the codebase
- **Modern Tooling** - ESLint, Prettier, and automated formatting
- **Component Architecture** - Modular, reusable components
- **Build-time Generation** - Mind map and related content generated at build time

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/fayazara/fayaz.dev.git
cd fayaz.dev

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── HeroAnimation.astro
│   ├── BlogMindMap.astro
│   ├── QuoteGenerator.astro
│   └── ...
├── content/
│   └── blog/           # Blog posts in Markdown
├── data/               # YAML data files
│   ├── tools.yaml      # Developer toolbox
│   ├── quotes.yaml     # Quote generator data
│   └── now.yaml        # Current status/workspace
├── layouts/            # Page layouts
│   ├── BaseLayout.astro
│   └── BlogLayout.astro
├── pages/              # File-based routing
│   ├── index.astro     # Homepage
│   ├── blog/           # Blog pages
│   ├── about.astro     # About page
│   └── 404.astro       # Custom 404 with mini-game
├── styles/             # Global styles
└── utils/              # Utility functions
```

## 🎯 Local Development

### Available Scripts

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build

# Code Quality
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm format       # Format with Prettier
pnpm format:check # Check formatting

# Type Checking
pnpm astro check  # Type check Astro files
```

### Development Workflow

1. **Start the dev server**: `pnpm dev`
2. **Make your changes** - Hot reload is enabled
3. **Check types**: `pnpm astro check`
4. **Lint and format**: `pnpm lint:fix && pnpm format`
5. **Build and test**: `pnpm build && pnpm preview`

## 🚀 GitHub Pages Setup & Deployment

### Automatic Deployment

This project includes a GitHub Action that automatically builds and deploys to GitHub Pages on every push to the `main` branch.

### Manual Setup

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Configure base URL** in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
  // ... other config
});
```

4. **Push to main branch** - Deployment happens automatically

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Update the `site` URL in `astro.config.mjs`

## ✍️ Adding Posts

### Creating a New Post

1. **Create a new `.md` file** in `src/content/blog/`
2. **Add frontmatter**:

```yaml
---
title: "Your Post Title"
description: "Brief description of your post"
publishDate: 2025-01-27
tags: ["tag1", "tag2", "tag3"]
featured: false
image: "https://example.com/image.jpg" # Optional
author: "Your Name" # Optional
draft: false # Set to true to hide from production
---
```

3. **Write your content** in Markdown
4. **Build and preview**: `pnpm build && pnpm preview`

### Content Guidelines

- **Use descriptive titles** that clearly indicate the post topic
- **Write compelling descriptions** for better SEO and social sharing
- **Tag consistently** - tags power the mind map visualization
- **Include images** when relevant (use external URLs like Pexels)
- **Mark featured posts** to highlight them on the homepage

### Markdown Features

- **Standard Markdown** - All standard syntax supported
- **Code highlighting** - Syntax highlighting with Shiki
- **Custom components** - Use Astro components in MDX files
- **Automatic TOC** - Headings automatically generate table of contents

## 🎨 Typography Guidelines

This blog emphasizes excellent typography for optimal reading experience:

### Font Stack
- **Body**: Inter Variable with system font fallbacks
- **Headings**: Inter Variable with optimized weights
- **Code**: JetBrains Mono with ligature support

### Typography Scale
- **H1**: 2.5rem (40px) - Page titles
- **H2**: 2rem (32px) - Section headings  
- **H3**: 1.5rem (24px) - Subsection headings
- **Body**: 1.125rem (18px) - Optimal reading size
- **Small**: 0.875rem (14px) - Captions and metadata

### Best Practices
- **Line Length**: Maximum 70 characters for optimal readability
- **Line Height**: 1.7 for body text, 1.2 for headings
- **Font Features**: Ligatures, kerning, and contextual alternates enabled
- **Contrast**: Minimum 4.5:1 ratio for all text
- **Responsive**: Scales appropriately across all device sizes

## 🔧 Customization

### Theming

Colors are defined using CSS custom properties in `src/styles/global.css`:

```css
:root {
  --color-primary: 14 165 233;    /* Blue */
  --color-accent: 217 70 239;     /* Purple */
  --color-neutral: 64 64 64;      /* Gray */
  /* ... more colors */
}
```

### Components

All components are modular and can be easily customized:

- **Modify styles** in component files or global CSS
- **Update animations** by adjusting CSS keyframes
- **Change behavior** by editing component scripts

### Data Sources

Update YAML files in `src/data/` to customize:

- **Tools**: `tools.yaml` - Developer toolbox items
- **Quotes**: `quotes.yaml` - Quote generator content  
- **Status**: `now.yaml` - Current projects and workspace

## 🐛 FAQ & Troubleshooting

### Common Issues

**Q: Mind map not showing?**
A: Ensure you have blog posts with tags. The mind map requires at least 2 posts with shared tags.

**Q: Three.js animations not working?**
A: Check browser console for WebGL errors. Fallback animations should display automatically.

**Q: Build failing on GitHub Pages?**
A: Verify your `astro.config.mjs` has the correct `site` and `base` URLs for your repository.

**Q: Images not loading?**
A: Ensure image URLs are accessible and use HTTPS. Consider using a CDN like Pexels for external images.

### Performance Tips

- **Optimize images** - Use appropriate formats and sizes
- **Minimize JavaScript** - Only hydrate components that need interactivity
- **Monitor bundle size** - Use `pnpm build` to check output sizes
- **Test on slow connections** - Ensure good experience on 3G

### Development Tips

- **Use TypeScript** - Take advantage of full type safety
- **Follow component patterns** - Keep components focused and reusable
- **Test accessibility** - Use screen readers and keyboard navigation
- **Validate HTML** - Ensure semantic markup throughout

## 📄 Credits & License

### Built With
- **[Astro](https://astro.build)** - Static site generator
- **[TypeScript](https://typescriptlang.org)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[Three.js](https://threejs.org)** - 3D graphics
- **[D3.js](https://d3js.org)** - Data visualization

### Fonts
- **[Inter](https://rsms.me/inter/)** - Primary typeface
- **[JetBrains Mono](https://jetbrains.com/mono/)** - Monospace font

### Images
- **[Pexels](https://pexels.com)** - Stock photography

### License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by [Fayaz Ahmed](https://github.com/fayazara)**

*If you found this project helpful, please consider giving it a ⭐ on GitHub!*