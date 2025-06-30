# fayaz.dev

A modern, creative developer blog built with Astro, TypeScript, and Tailwind CSS. Features interactive 3D animations, a mind-map visualization of blog posts, and a comprehensive comment system powered by Supabase.

## ✨ Features

### 🎨 Design & UX
- **Modern Design**: Clean, minimal aesthetic with creative touches
- **Dark Mode**: Seamless light/dark theme switching
- **Responsive**: Optimized for all device sizes
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Animations**: Subtle, meaningful micro-interactions and transitions

### 🚀 Performance
- **Astro**: Lightning-fast static site generation with islands architecture
- **Optimized Images**: Lazy loading with blur-up placeholders
- **Minimal JavaScript**: Only loads what's needed, when it's needed
- **Perfect Lighthouse Scores**: Optimized for Core Web Vitals

### 📝 Content Management
- **MDX Support**: Rich content with embedded React components
- **Tag System**: Organized content with filtering capabilities
- **Reading Time**: Automatic calculation of estimated reading time
- **RSS Feed**: Stay updated with new content
- **Sitemap**: SEO-optimized site structure

### 🎯 Interactive Features
- **3D Hero Animation**: Three.js powered background with fallbacks
- **Blog Mind Map**: Interactive visualization of post connections
- **Comment System**: Nested comments with Markdown support (Supabase)
- **Subscribe Modal**: Animated newsletter signup
- **Quote Generator**: Rotating developer quotes with typewriter effect
- **AMA Section**: Anonymous question submission system

### 🛠 Developer Experience
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first styling with custom design system
- **ESLint & Prettier**: Code quality and formatting
- **Component Architecture**: Reusable, maintainable components

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fayazahmed/fayaz.dev.git
   cd fayaz.dev
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables:
   ```env
   PUBLIC_SUPABASE_URL=your_supabase_url
   PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   PUBLIC_SITE_URL=http://localhost:4321
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:4321`

## 🗄️ Supabase Setup

### Database Schema

Run these SQL commands in your Supabase SQL editor:

```sql
-- Subscribers table
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  joined_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Comments table
CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_slug TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for comments
CREATE POLICY "Anyone can read comments" ON comments
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert comments" ON comments
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments" ON comments
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);

-- AMA Questions table
CREATE TABLE ama_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  answered_at TIMESTAMPTZ
);

-- Enable RLS
ALTER TABLE ama_questions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for AMA
CREATE POLICY "Anyone can insert questions" ON ama_questions
  FOR INSERT USING (true);

CREATE POLICY "Anyone can read published questions" ON ama_questions
  FOR SELECT USING (is_published = true);
```

### Authentication Setup

1. Go to Authentication > Settings in your Supabase dashboard
2. Configure your site URL: `http://localhost:4321` (development) or your production URL
3. Enable email authentication
4. Optionally enable social providers (GitHub, Twitter, etc.)

## 📝 Adding Blog Posts

Create new blog posts in the `src/content/blog/` directory:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
publishDate: 2025-01-27
tags: ["web-development", "javascript", "tutorial"]
featured: false
readingTime: "5 min read"
heroImage: "/images/your-hero-image.jpg" # optional
---

# Your Post Content

Write your content here using Markdown or MDX.
```

### Frontmatter Options

- `title`: Post title (required)
- `description`: Meta description (required)
- `publishDate`: Publication date (required)
- `updatedDate`: Last updated date (optional)
- `tags`: Array of tags (optional)
- `featured`: Whether to feature the post (optional)
- `readingTime`: Estimated reading time (optional)
- `heroImage`: Hero image path (optional)
- `draft`: Set to true to hide from production (optional)

## 🎨 Customization

### Design System

The design system is built with Tailwind CSS and includes:

- **Colors**: Primary and accent color ramps
- **Typography**: Three font families (sans, mono, display)
- **Spacing**: 8px grid system
- **Animations**: Custom keyframes and transitions

Customize in `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color palette
      },
      accent: {
        // Your accent color palette
      }
    }
  }
}
```

### Components

All components are located in `src/components/` and are built with:
- Astro components for static content
- React components for interactive features
- TypeScript for type safety

### Data Sources

Static data is managed through YAML files in `src/data/`:
- `tools.yaml`: Developer toolbox content
- `quotes.yaml`: Random quote generator content
- `now.yaml`: Current status and workspace info

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Set build settings**:
   - Build command: `pnpm build`
   - Publish directory: `dist`
3. **Add environment variables** in Netlify dashboard
4. **Deploy**!

### Manual Deployment

```bash
# Build the site
pnpm build

# Preview the build
pnpm preview

# Deploy the dist/ folder to your hosting provider
```

## 📊 Analytics & SEO

### Built-in SEO Features
- Semantic HTML structure
- Open Graph meta tags
- Twitter Card support
- JSON-LD structured data
- Automatic sitemap generation
- RSS feed generation

### Analytics Integration
Add your Google Analytics ID to the environment variables:

```env
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## 🛠️ Development

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
pnpm check        # Run Astro check
```

### Project Structure

```
src/
├── components/          # Reusable components
├── content/            # Blog posts and content
├── data/               # Static data files
├── layouts/            # Page layouts
├── pages/              # Route pages
├── utils/              # Utility functions
└── env.d.ts           # Environment types

public/                 # Static assets
├── favicon.svg
└── robots.txt
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Follow the existing code style
2. Write meaningful commit messages
3. Add tests for new features
4. Update documentation as needed
5. Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Astro** - For the amazing static site generator
- **Tailwind CSS** - For the utility-first CSS framework
- **Supabase** - For the backend-as-a-service platform
- **Three.js** - For 3D graphics capabilities
- **Netlify** - For seamless deployment and hosting

## 📞 Support

If you have any questions or need help with setup, feel free to:

- Open an issue on GitHub
- Reach out on [Twitter](https://twitter.com/fayazahmed)
- Connect on [LinkedIn](https://linkedin.com/in/fayazahmed)

---

Built with ❤️ by [Fayaz Ahmed](https://fayaz.dev)