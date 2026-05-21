# 🔧 TECHNICAL DOCUMENTATION

## Architecture Overview

```
User Browser
    ↓
Vite Dev Server (http://localhost:5173)
    ↓
React Router (6 Routes)
    ↓
MainLayout (Navbar + Outlet + Footer)
    ↓
Page Components (HomePage, ClubsPage, etc.)
    ↓
Reusable Components (ClubCard, Hero, etc.)
    ↓
Content from siteData.js
    ↓
Tailwind CSS Styling
```

---

## Component Hierarchy

```
App.jsx (Router)
└── BrowserRouter
    └── Routes
        └── Route (MainLayout)
            └── MainLayout
                ├── Navbar
                ├── Outlet (page routes here)
                └── Footer
                    ├── HomePage
                    │   ├── PageHero
                    │   ├── ClubCard (x3)
                    │   ├── EventCard (x3)
                    │   ├── SponsorMarquee
                    │   └── CtaBanner
                    ├── ClubsPage
                    │   ├── PageHero
                    │   ├── ClubCard (x3)
                    │   └── CtaBanner
                    └── [etc...]
```

---

## Data Flow

### Static Content Model
```javascript
// src/data/siteData.js (single source of truth)
export const navItems = [...]
export const clubs = [...]
export const events = [...]
export const sponsors = [...]
export const stats = [...]

// Components consume this data
import { clubs } from '../data/siteData'
// Then render: clubs.map(club => <ClubCard club={club} />)
```

### Component Props
```javascript
// PageHero.jsx
PageHero({
  image: url,
  eyebrow: string,
  title: string,
  description: string,
  cta?: { href, label }
})

// ClubCard.jsx
ClubCard({
  club: { name, city, image, description }
})

// EventCard.jsx
EventCard({
  event: { title, date, location, image, level }
})

// TimelineItem.jsx
TimelineItem({
  item: { stage, date, body }
})
```

---

## Styling System

### Tailwind Classes Used

**Core Utilities:**
```css
/* Spacing */
px-4, py-6, gap-4, mt-3, mb-8, mx-auto

/* Colors */
bg-white, bg-black, text-white, border-brand, bg-ink

/* Layout */
grid, flex, max-w-7xl, mx-auto, gap-4, lg:grid-cols-3

/* Sizing */
h-full, w-full, min-h-screen, h-56

/* Responsive */
sm:px-6, lg:px-10, md:grid-cols-2, lg:grid-cols-3

/* Effects */
hover:scale-110, transition, duration-700, opacity-0, translate-y-12
```

**Custom CSS Classes:**
```css
.site-shell        /* Dark container */
.nav-link          /* Navigation link styling */
.active-link       /* Active nav link */
.btn-brand         /* Green button */
.btn-ghost         /* Outlined button */
.field             /* Form input styling */
.reveal            /* Scroll animation setup */
.reveal.is-visible /* Scroll animation state */
.marquee-track     /* Sponsor marquee animation */
```

---

## Key Features Implementation

### 1. Scroll Reveal Animation
```javascript
// src/layouts/MainLayout.jsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.2 }
  )
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
```

Usage:
```jsx
<div className="reveal">Content will fade in on scroll</div>
```

### 2. Page SEO
```javascript
// src/hooks/usePageSeo.js
function usePageSeo({ title, description }) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [title, description])
}
```

Usage:
```jsx
// In any page component
<Seo title="Page Title" description="Page description" />
```

### 3. Dropdown Navigation
```jsx
// src/components/Navbar.jsx
const [dropdownOpen, setDropdownOpen] = useState(false)

// Trigger on hover
onMouseEnter={() => setDropdownOpen(true)}
onMouseLeave={() => setDropdownOpen(false)}

// Conditional render
{dropdownOpen && <div className="dropdown">...</div>}
```

### 4. Sponsor Marquee
```jsx
// Duplicate items for infinite scroll
const looped = [...sponsors, ...sponsors]

<div className="marquee-track">
  {looped.map((name, i) => (...))}
</div>
```

CSS:
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee 20s linear infinite;
}
```

---

## Routing Structure

```javascript
// src/App.jsx
<BrowserRouter>
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/clubs" element={<ClubsPage />} />
      <Route path="/evenements" element={<EventsPage />} />
      <Route path="/calendrier" element={<CalendarPage />} />
      <Route path="/partenaires" element={<PartnersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/accueil" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### Navigation Links
```jsx
import { NavLink } from 'react-router-dom'

<NavLink to="/clubs" className={({ isActive }) => 
  isActive ? 'active-link' : 'nav-link'
}>
  Clubs
</NavLink>
```

---

## CSS Architecture

### Global Styles (index.css)

1. **Tailwind Import**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. **Reset & Base**
   ```css
   * { transition: all 300ms; }
   html { scroll-behavior: smooth; }
   body { background-color: #111111; color: white; }
   ```

3. **Component Classes**
   ```css
   .btn-brand { /* button styles */ }
   .field { /* form input styles */ }
   .reveal { /* animation setup */ }
   ```

4. **Keyframe Animations**
   ```css
   @keyframes marquee { /* sponsor scroll */ }
   @keyframes reveal { /* could be added */ }
   ```

---

## Performance Optimizations

1. **Code Splitting by Route**
   - React Router lazy loading (potential future)
   - Vite automatically chunks components

2. **CSS Purging**
   - Tailwind removes unused CSS in production
   - `tailwind.config.js` configured with `content` paths

3. **Image Optimization**
   - JPG reference images (compress with tools)
   - Consider WebP format for production

4. **Bundle Analysis**
   ```bash
   npm install --save-dev rollup-plugin-visualizer
   # Add to vite.config.js, then check size
   ```

---

## Development Workflow

### Adding a New Page

1. **Create component**
   ```jsx
   // src/pages/NewPage.jsx
   import Seo from '../components/Seo'
   
   function NewPage() {
     return (
       <>
         <Seo title="..." description="..." />
         <PageHero ... />
         {/* content */}
       </>
     )
   }
   export default NewPage
   ```

2. **Add route**
   ```jsx
   // src/App.jsx
   <Route path="/new" element={<NewPage />} />
   ```

3. **Add navigation**
   ```javascript
   // src/data/siteData.js
   export const navItems = [
     // ...
     { label: 'New Page', path: '/new' }
   ]
   ```

### Adding a New Component

1. **Create component**
   ```jsx
   // src/components/NewComponent.jsx
   function NewComponent({ props }) {
     return <div>{/* JSX */}</div>
   }
   export default NewComponent
   ```

2. **Import and use**
   ```jsx
   import NewComponent from '../components/NewComponent'
   <NewComponent prop={value} />
   ```

---

## Testing

### Manual Testing Checklist
- [ ] All 6 pages render without errors
- [ ] All links navigate correctly
- [ ] Mobile menu dropdown works
- [ ] Images display properly
- [ ] Scroll reveals animate
- [ ] Buttons have hover effects
- [ ] Console has no errors
- [ ] Responsive layouts work

### Browser Testing
```bash
# Test in different browsers
npm run dev
# Open in Chrome, Firefox, Safari, Edge
```

### Performance Testing
```bash
npm run build
npm run preview
# Open in Chrome DevTools → Lighthouse
```

---

## Deployment Checklist

- [ ] `npm run build` succeeds
- [ ] `/dist` folder is generated
- [ ] File sizes are reasonable (~200KB)
- [ ] All images are compressed
- [ ] Meta tags are correct
- [ ] Favicon is set
- [ ] Contact form backend configured
- [ ] Analytics code added
- [ ] Social links updated
- [ ] Lighthouse score > 90

---

## Common Tasks

### Update Brand Color
```javascript
// tailwind.config.js
colors: {
  brand: '#7ED957'  // Change this
}

// Then rebuild
npm run build
```

### Add New Club
```javascript
// src/data/siteData.js
export const clubs = [
  // ... existing clubs
  {
    name: 'New Club Name',
    city: 'City',
    image: newClubImage,
    description: 'Description...'
  }
]
```

### Change Hero Image
```javascript
// src/data/siteData.js - import new image
import newImage from '../assets/new-image.jpg'
export const visualAssets = {
  headerVisual: newImage  // or wherever
}

// Then use in page
<PageHero image={visualAssets.headerVisual} ... />
```

### Add Social Links
```javascript
// src/components/Footer.jsx - update href
<a href="https://instagram.com/yourhandle">Instagram</a>

// Or centralize in siteData.js
export const social = {
  instagram: 'https://...',
  facebook: 'https://...'
}
```

---

## Troubleshooting Guide

### Issue: Styles not loading
**Solution:**
- Restart dev server
- Clear browser cache
- Check `tailwind.config.js` content paths

### Issue: Images missing
**Solution:**
- Verify image path is correct
- Check image exists in `/src/assets` or `/public`
- Use relative import path

### Issue: Routes not working
**Solution:**
- Verify route path in `App.jsx`
- Check component exports `default`
- Ensure NavLink paths match route paths

### Issue: Scroll animation not working
**Solution:**
- Add `reveal` class to element
- Check MainLayout observer is mounted
- Verify threshold is appropriate

---

## Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [MDN Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

## Version Info

- React: 19.2.5
- Vite: 8.0.10
- React Router DOM: 7.15.0
- Tailwind CSS: 4.2.4
- Node: 18+ (recommended)

---

Built with ❤️ for premium sports web experiences.
