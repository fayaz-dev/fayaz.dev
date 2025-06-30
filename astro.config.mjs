import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://fayaz.dev',
  integrations: [
    react(),
    tailwind(),
    mdx(),
    sitemap()
  ],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  }),
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  },
  vite: {
    optimizeDeps: {
      include: ['three', 'd3']
    }
  }
});