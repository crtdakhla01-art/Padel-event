# Padel Maroc Pro - Premium Frontend

A **production-ready**, premium sports federation website built with React, Vite, Tailwind CSS, and React Router.

## 🎯 Project Features

- **6 Main Pages:** Accueil, Clubs, Événements, Calendrier, Partenaires, Contact
- **Premium UI/UX:** Dark mode, smooth animations, scroll reveals, editorial layouts
- **Sport Green Theme:** Brand color #7ED957 on ink backgrounds (#111111)
- **Responsive:** Mobile-first, tablet and desktop optimized
- **SEO Ready:** Semantic HTML, meta tags, optimized structure
- **Reusable Components:** ClubCard, EventCard, PageHero, TimelineItem, SponsorMarquee, CtaBanner

## 📁 Project Structure

```
src/
├── components/        # Reusable UI blocks
├── pages/            # Route pages (6 pages)
├── layouts/          # MainLayout wrapper with navbar/footer
├── data/             # siteData.js (all content, navigation, sponsors)
├── hooks/            # Custom hooks (usePageSeo)
├── assets/           # Reference images + any additional assets
├── App.jsx           # Router setup
├── main.jsx          # Entry point
└── index.css         # Global styles + Tailwind directives
```

## 🚀 Quick Start

```bash
# Dev server (already running on http://localhost:5173)
npm run dev

# Production build
npm build

# Preview build
npm run preview
```

## 🎨 Design System

**Colors:**
- Primary: #7ED957 (brand green)
- Dark Background: #111111 (ink)
- Surfaces: #1A1A1A, #2a2a2a (ash)
- Text: white, white/75 (tints)

**Typography:**
- Display: Bold, uppercase headings
- Accent: Poppins for features
- Sans: Inter for body text

**Motion:**
- Scroll reveals (.reveal class)
- Smooth transitions (300ms default)
- Hover animations on cards/buttons
- Marquee animation on sponsor row

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Hero, stats, clubs, events, sponsors, CTAs |
| Clubs | `/clubs` | Club spotlight, network grid, features |
| Événements | `/evenements` | Featured tournament, timeline, event blocks |
| Calendrier | `/calendrier` | Monthly competition schedule |
| Partenaires | `/partenaires` | Sponsor showcase, grids, animations |
| Contact | `/contact` | Contact form, map, info section |

## 🔧 Tech Stack

- **React 19** - UI library
- **Vite 8** - Build tool
- **Tailwind CSS 4** - Styling
- **React Router DOM 7** - Routing
- **JavaScript (JSX)** - No TypeScript

## 📱 Responsive

Mobile, tablet, and desktop optimized:
- Navbar with mobile dropdown menu
- Grid layouts adapt (1/2/3/4 cols)
- Touch-friendly buttons and links
- Viewport-aware images

## 🔍 SEO Features

- Semantic HTML structure
- Meta descriptions per page (usePageSeo hook)
- Proper heading hierarchy (h1 > h2 > h3)
- Image alt attributes
- Descriptive link text
- Open Graph ready (can add to HTML head)

## ✨ Custom Components

- **ClubCard:** Image, name, city, description
- **EventCard:** Split layout with image and details
- **PageHero:** Cinematic header with overlay gradient
- **TimelineItem:** Timeline blocks with markers
- **SponsorMarquee:** Animated scrolling logo row
- **CtaBanner:** Dark gradient call-to-action sections

## 📝 Content Management

All content lives in `src/data/siteData.js`:
- Navigation items
- Site branding
- Hero content
- Clubs, Events, Calendar
- Sponsors, Contact info

Edit this file to update site content across all pages.

## 🔄 Development Workflow

1. **Dev mode:** `npm run dev` - HMR enabled, instant reloads
2. **Build:** `npm run build` - Optimized for production
3. **Preview:** `npm run preview` - Test build locally

## 🎬 Performance

- Code splitting by route (React Router lazy)
- Optimized images
- Tailwind purging (unused CSS removed)
- Smooth scrolling with Intersection Observer
- Efficient animation transforms

## 🌍 Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge):
- CSS Grid/Flexbox
- ES6+ JavaScript
- CSS custom properties
- Intersection Observer API

## 📚 Documentation

Refer to:
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

---

**Status:** ✅ Production Ready  
**Version:** 1.0.0  
**Last Updated:** 2026-05-07
