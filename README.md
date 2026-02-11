# Emre Küçük — Portfolio

A high-end, immersive portfolio website showcasing expertise in MLOps, Deep Learning, and AI Engineering. Built with precision and modern aesthetics.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** GSAP with ScrollTrigger
- **Smooth Scrolling:** Lenis
- **Deployment:** Cloudflare Pages

## ✨ Features

- **Immersive Scroll Experience:** Smooth, scroll-driven animations using GSAP ScrollTrigger
- **Interactive Particle Mesh:** Dynamic background that responds to mouse movement
- **Horizontal Scroll Projects:** Full-screen project showcases with custom visualizations
- **Custom Cursor:** Elegant cursor with hover effects (desktop only)
- **Preloader:** Sophisticated loading animation
- **Responsive Design:** Optimized for all device sizes
- **Performance Optimized:** Static export for fast loading

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
# Create production build
npm run build
```

The static files will be generated in the `out` directory.

## 🌐 Cloudflare Pages Deployment

This project is configured for automatic deployment on Cloudflare Pages.

### Automatic Deployment (Recommended)

1. **Connect GitHub Repository:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** > **Create application** > **Pages**
   - Click **Connect to Git**
   - Select your GitHub repository
   - Configure build settings:
     - **Production branch:** `main`
     - **Build command:** `npm run build`
     - **Build output directory:** `out`

2. **Environment Variables (if needed):**
   - Add any required environment variables in the Cloudflare dashboard

3. **Deploy:**
   - Every push to `main` branch will trigger an automatic deployment
   - Preview deployments are created for pull requests

### Manual Deployment

```bash
# Install Wrangler CLI
npm install -g wrangler

# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy out --project-name your-project-name
```

### First-time Setup

```bash
# Login to Cloudflare
npx wrangler login

# Create a new Pages project
npx wrangler pages project create your-project-name --production-branch main

# Deploy
npx wrangler pages deploy out --project-name your-project-name
```

Your site will be available at `https://your-project-name.pages.dev`

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page component
├── components/
│   ├── sections/
│   │   ├── Hero.tsx     # Hero section with particle mesh
│   │   ├── About.tsx    # About section with animations
│   │   ├── Projects.tsx # Horizontal scroll projects
│   │   ├── TechStack.tsx# Interactive tech stack display
│   │   └── Contact.tsx  # Contact section
│   ├── CustomCursor.tsx # Custom cursor component
│   ├── Navigation.tsx   # Fixed navigation
│   ├── Preloader.tsx    # Loading animation
│   └── SmoothScroll.tsx # Lenis smooth scroll wrapper
```

## 🎨 Design Philosophy

- **Engineered Luxury:** Minimalist, monochromatic palette with precise typography
- **Typography-First:** Large, sophisticated type as primary design element
- **Immersive Animations:** Scroll-driven transitions and parallax effects
- **Abstract Visualizations:** Custom project visualizations instead of screenshots
- **No Generic AI Imagery:** Zero stock images of glowing brains or binary code

## 📝 Customization

### Updating Projects

Edit the `projects` array in `src/components/sections/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    category: 'Category',
    description: 'Description...',
    technologies: ['Tech1', 'Tech2'],
    visualization: 'neural', // pipeline | nlp | vision | neural | game
    link: 'https://github.com/...',
  },
]
```

### Updating Tech Stack

Edit the `techCategories` array in `src/components/sections/TechStack.tsx`.

### Colors

Modify the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0a0a0a',    // Background
  secondary: '#141414',  // Secondary background
  accent: '#e5e5e5',     // Text
  muted: '#737373',      // Muted text
  highlight: '#fafafa',  // Highlight/white
}
```

## 📄 License

MIT License — Feel free to use this as inspiration for your own portfolio.

---

Engineered with precision by Emre Küçük
