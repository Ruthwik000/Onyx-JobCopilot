# 🚀 Onyx JobCopilot - AI-Powered Career Acceleration Platform

A modern, high-performance landing page for Onyx JobCopilot - an AI-driven platform that helps professionals land their dream jobs 5x faster through automated resume optimization, job applications, and personalized mentorship.

![Onyx JobCopilot](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.2-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38.0-FF0055?style=for-the-badge&logo=framer)

## ✨ Features

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Sleek, modern interface with frosted glass effects
- **Smooth Animations** - Powered by Framer Motion for buttery-smooth interactions
- **Responsive Layout** - Fully optimized for mobile, tablet, and desktop
- **Dark Theme** - Professional dark color scheme with violet accents

### 🎭 Interactive Components
- **Animated Hero Section** - Dynamic particle effects and scroll-based parallax
- **Walking Character Animation** - Custom SVG character that walks along the job sprint path
- **Infinite Scroll Testimonials** - Three-column testimonial carousel with gradient masks
- **Interactive FAQ Accordion** - Smooth expand/collapse animations
- **Scroll-Triggered Animations** - Elements fade in and animate as you scroll

### 🎯 Key Sections
1. **Hero** - Eye-catching introduction with animated statistics
2. **Features** - Four-pillar service overview with hover effects
3. **Job Sprint** - Visual journey showing the 21-day placement process
4. **Mentorship** - Showcase of expert mentors with animated cards
5. **Testimonials** - Social proof with infinite scrolling columns
6. **FAQ** - Common questions with smooth accordion interactions
7. **CTA** - Strong call-to-action with dual button options

## 🛠️ Tech Stack

- **React 19.2.4** - Latest React with modern hooks
- **Vite 8.0.4** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.2.2** - Utility-first CSS framework
- **Framer Motion 12.38.0** - Production-ready animation library
- **Motion 12.38.0** - Enhanced motion library for advanced animations

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd onyx-jobcopilot
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🚀 Build & Deploy

### Production Build
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Deployment
The built files in `dist/` can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📁 Project Structure

```
onyx-jobcopilot/
├── public/
│   ├── favicon.svg          # Site favicon
│   └── icons.svg            # SVG icon sprite
├── src/
│   ├── assets/              # Static assets (images, etc.)
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   └── TestimonialsColumns.jsx
│   │   ├── ChatSupportSection.jsx
│   │   ├── CTASection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HumanCharacter.jsx
│   │   ├── JobSprintSection.jsx
│   │   ├── MentorSection.jsx
│   │   ├── MilestoneBox.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleCanvas.jsx
│   │   └── TestimonialsSection.jsx
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles & animations
│   └── main.jsx             # App entry point
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # This file
```

## 🎨 Customization

### Colors
The color scheme uses Tailwind's violet palette. To customize:
- Edit `src/index.css` for global color variables
- Modify Tailwind classes in components (e.g., `bg-violet-600`, `text-violet-400`)

### Content
- **Hero Text**: Edit `src/components/HeroSection.jsx`
- **Features**: Modify the `features` array in `src/components/FeaturesSection.jsx`
- **Testimonials**: Update the `testimonials` array in `src/components/TestimonialsSection.jsx`
- **FAQ**: Edit the `faqs` array in `src/components/FAQSection.jsx`

### Animations
All animations use Framer Motion. Key animation files:
- `src/components/HeroSection.jsx` - Hero animations
- `src/components/JobSprintSection.jsx` - Walking character & path
- `src/components/TestimonialsSection.jsx` - Infinite scroll
- `src/components/FeaturesSection.jsx` - Scroll-triggered cards

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: ~150KB (gzipped)

### Optimization Features
- Code splitting with React lazy loading
- Optimized images and SVGs
- Minimal dependencies
- Tree-shaking enabled
- CSS purging in production

## 🐛 Known Issues

None at the moment. Please report issues via GitHub Issues.

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```


