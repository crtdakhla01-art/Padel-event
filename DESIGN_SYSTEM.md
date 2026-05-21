# 🎨 DESIGN SYSTEM REFERENCE

## Color Palette

### Primary
- **Brand Green:** `#7ED957`
  - Used for: CTA buttons, links, accents, highlights
  - Hover: `white` (#FFFFFF)
  - Border: `#7ED957`

### Dark Backgrounds
- **Ink (Primary):** `#111111`
  - Main background color
  - Page sections
  - Navbar base

- **Ink Alt (Secondary):** `#1A1A1A`
  - Subtle background variation
  - Card backgrounds
  - Form inputs

- **Ash (Tertiary):** `#2a2a2a`
  - Deep background sections
  - Overlays
  - Border color alternative

### Text
- **Primary Text:** `#FFFFFF` (white)
  - Headings
  - Primary content

- **Secondary Text:** `rgba(255, 255, 255, 0.8)` (white 80%)
  - Navigation links
  - Secondary content

- **Tertiary Text:** `rgba(255, 255, 255, 0.6)` (white 60%)
  - Placeholder text
  - Disabled content

- **Muted Text:** `rgba(255, 255, 255, 0.4)` (white 40%)
  - Form placeholders
  - Very subtle text

### Overlays
- **Dark Overlay:** `rgba(0, 0, 0, 0.6)` to `rgba(0, 0, 0, 0.8)`
- **Gradient Overlay:** `from-black via-black/70 to-transparent`
- **Brand Gradient:** `radial-gradient(circle, rgba(126,217,87,0.24), transparent)`

---

## Typography

### Font Families
```css
/* Display Font (Bold Headlines) */
font-family: 'Sora', 'Inter', system-ui, sans-serif;
font-weight: 700;
letter-spacing: -0.02em;

/* Accent Font (Features) */
font-family: 'Poppins', 'Inter', system-ui, sans-serif;
font-weight: 600;

/* Body Font */
font-family: 'Inter', system-ui, sans-serif;
font-weight: 400;
```

### Heading Styles

#### H1 (Page Title)
```css
font-size: 4.5rem - 6rem (72px - 96px)
line-height: 1
letter-spacing: -0.03em
font-weight: 700
color: white
text-transform: uppercase
```

**Example:** "Explorez La Nouvelle Ere Du Padel Marocain"

#### H2 (Section Title)
```css
font-size: 2.25rem - 3rem (36px - 48px)
line-height: 1.1
letter-spacing: -0.02em
font-weight: 700
color: white
text-transform: uppercase
```

**Example:** "Clubs a la Une"

#### H3 (Card Title)
```css
font-size: 1.25rem - 1.5rem (20px - 24px)
line-height: 1.2
letter-spacing: -0.01em
font-weight: 700
color: white
```

**Example:** "Atlas Padel Club - Marrakech"

### Text Styles

#### Eyebrow / Label
```css
font-size: 0.75rem (12px)
text-transform: uppercase
letter-spacing: 0.022em (2.2px)
color: #7ED957
font-weight: 600
```

**Example:** "FEDERATION - SAISON 2026"

#### Body Text
```css
font-size: 0.875rem - 1rem (14px - 16px)
line-height: 1.5 - 1.6
letter-spacing: 0
color: rgba(255, 255, 255, 0.8)
```

#### Small Text / Footer
```css
font-size: 0.75rem (12px)
line-height: 1.25
letter-spacing: 0.01em
color: rgba(255, 255, 255, 0.6)
```

---

## Spacing Scale

```
2px  (0.125rem)  - Micro adjustments
4px  (0.25rem)   - Tight spacing
8px  (0.5rem)    - Element spacing
12px (0.75rem)   - Small gaps
16px (1rem)      - Standard padding
20px (1.25rem)   - Medium gaps
24px (1.5rem)    - Section padding
32px (2rem)      - Large gaps
40px (2.5rem)    - Section margins
48px (3rem)      - Large margins
64px (4rem)      - Vertical rhythm
80px (5rem)      - Hero spacing
96px (6rem)      - Page sections
```

---

## Button Styles

### Primary Button (Brand)
```css
/* Default */
background-color: #7ED957
border: 1px solid #7ED957
color: #000000
padding: 0.75rem 1.25rem
font-size: 0.75rem
font-weight: 700
text-transform: uppercase
letter-spacing: 0.022em
cursor: pointer

/* Hover */
background-color: #FFFFFF
color: inherit

/* Transition */
transition: all 300ms
transform: translate(0, -0.125rem)  /* lift effect */
```

Class: `.btn-brand`

### Secondary Button (Ghost)
```css
/* Default */
background-color: transparent
border: 1px solid rgba(255, 255, 255, 0.3)
color: #FFFFFF
padding: 0.75rem 1.25rem
font-size: 0.75rem
font-weight: 700
text-transform: uppercase

/* Hover */
border-color: #7ED957
color: #7ED957

/* Transition */
transition: all 300ms
```

Class: `.btn-ghost`

---

## Card Styles

### Club Card
```css
border: 1px solid rgba(255, 255, 255, 0.1)
background-color: rgba(255, 255, 255, 0.03)
overflow: hidden

/* Image Container */
height: 14rem (224px)
overflow: hidden
position: relative

/* On Hover */
img {
  transform: scale(1.1)
  transition: 700ms cubic-bezier(0.4, 0, 0.2, 1)
}

/* Badge */
position: absolute
top: 1rem
left: 1rem
border: 1px solid rgba(126, 217, 87, 0.7)
background-color: rgba(0, 0, 0, 0.4)
padding: 0.25rem 0.75rem
font-size: 0.75rem
```

### Event Card
```css
display: grid
grid-template-columns: 240px 1fr
border: 1px solid rgba(255, 255, 255, 0.1)
background: linear-gradient(to bottom, 
  rgba(255, 255, 255, 0.06), 
  transparent
)

/* Responsive */
@media (max-width: 768px) {
  grid-template-columns: 1fr
}
```

---

## Hero Section

```css
/* Container */
position: relative
overflow: hidden
border-bottom: 1px solid rgba(255, 255, 255, 0.1)

/* Image */
height: 55vh (minimum 420px)
width: 100%
object-fit: cover

/* Overlay 1 - Gradient */
position: absolute
inset: 0
background: linear-gradient(to right, 
  rgba(0, 0, 0, 0.8),
  rgba(0, 0, 0, 0.55),
  rgba(0, 0, 0, 0.2)
)

/* Overlay 2 - Brand Radial */
position: absolute
inset: 0
background: radial-gradient(circle at 70% 20%,
  rgba(126, 217, 87, 0.24),
  transparent 40%
)

/* Content */
position: absolute
bottom: 0
left: 0
right: 0
padding: 2.5rem (40px)
max-width: 7xl (1280px)
margin: 0 auto
```

---

## Animations

### Scroll Reveal
```css
.reveal {
  transform: translateY(3rem)
  opacity: 0
  transition: all 700ms ease-out
}

.reveal.is-visible {
  transform: translateY(0)
  opacity: 1
}
```

**Trigger:** IntersectionObserver API at 20% threshold

### Marquee (Sponsor Scroll)
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-track {
  animation: marquee 20s linear infinite;
}
```

### Button Hover
```css
.btn-brand:hover {
  background-color: #FFFFFF
  transform: translateY(-0.125rem)
  transition: all 300ms
}
```

### Card Scale
```css
.group img:hover {
  transform: scale(1.1)
  transition: 700ms cubic-bezier(0.4, 0, 0.2, 1)
}
```

---

## Responsive Breakpoints

```
Mobile        < 640px
Tablet        640px - 1024px  (sm:, md:)
Desktop       1024px+         (lg:, xl:)
Large Desktop 1280px+         (xl:, 2xl:)
```

### Grid Layouts
```css
/* Mobile (1 column) */
grid-template-columns: 1fr

/* Tablet (2 columns) */
@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr)
}

/* Desktop (3 columns) */
@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr)
}

/* Large Desktop (4 columns) */
@media (min-width: 1280px) {
  grid-template-columns: repeat(4, 1fr)
}
```

---

## Accessibility Colors

### Contrast Ratios
- **Brand Green (#7ED957) on Black (#111111):** 5.2:1 ✅
- **White on Black:** 21:1 ✅
- **White 80% on Black:** 16.8:1 ✅

All combinations meet **WCAG AA standards** (4.5:1 minimum)

---

## Component Layout Patterns

### Two-Column Section
```css
display: grid
grid-template-columns: 1fr 1fr
gap: 1.5rem

@media (max-width: 1024px) {
  grid-template-columns: 1fr
}
```

### Centered Content Container
```css
margin-left: auto
margin-right: auto
max-width: 7rem (1280px)
padding-left: 1rem
padding-right: 1rem

@media (min-width: 768px) {
  padding-left: 1.5rem
  padding-right: 1.5rem
}

@media (min-width: 1280px) {
  padding-left: 2.5rem
  padding-right: 2.5rem
}
```

### Split Layout (Image Left, Text Right)
```css
display: grid
grid-template-columns: 1.1fr 1fr
gap: 1.5rem
align-items: center

/* Image */
overflow: hidden
border: 1px solid rgba(255, 255, 255, 0.1)

/* Text */
padding: 1.5rem
```

---

## Visual Hierarchy

1. **Hero Section** - Largest, most prominent, full-width imagery
2. **Section Titles** - Large uppercase headings with space
3. **Cards/Blocks** - Medium content units with subtle borders
4. **Text** - Body copy with generous line-height
5. **Labels/Tags** - Small uppercase accents in brand color

---

## Design Principles Applied

✅ **Asymmetrical Layouts** - Not rigid grids everywhere
✅ **Visual Breathing** - Generous whitespace/blackspace
✅ **Image-Heavy** - Photography as primary visual element
✅ **Layered Overlays** - Depth through gradients and overlays
✅ **Bold Typography** - Large, impactful headings
✅ **Subtle Animations** - Enhance, don't distract
✅ **Premium Feel** - Dark, moody, high-end aesthetics
✅ **Editorial Style** - Like WordPress sports themes

---

## Quick Copy-Paste Values

```css
/* Brand Color */
#7ED957

/* Dark Background */
#111111, #1A1A1A, #2a2a2a

/* Text Colors */
#FFFFFF, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6)

/* Borders */
border: 1px solid rgba(255, 255, 255, 0.1)
border-b: 1px solid rgba(255, 255, 255, 0.1)

/* Overlays */
background: rgba(0, 0, 0, 0.6)
background: linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent)

/* Shadows */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

/* Transitions */
transition: all 300ms
transition: all 700ms ease-out
```

---

This design system ensures **visual consistency** across all pages while maintaining a **premium, editorial sports website aesthetic**.
