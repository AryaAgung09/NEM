# NEXORA ENERGY — PT Nusantara Mineral Energi Corporate Website

A production-ready corporate website for **PT Nusantara Mineral Energi (NME)**, a fictional Indonesian energy and mining company. Built with Next.js 16 (App Router), React 19, TypeScript, and a modern animation stack featuring GSAP, Lenis, and Framer Motion.

---

## 📸 Preview

| Page | Description |
|------|-------------|
| Homepage | Cinematic hero with auto-playing video background, animated headlines, news slider, and scroll-driven entrance animations |
| Company Profile | Vision/mission, history timeline, leadership, governance |
| Business Areas | Overview with mega-menu navigation, 5 business detail pages |
| Projects Portfolio | Filterable project gallery with detail pages (specifications, gallery, map) |
| Investor Relations | Key metrics, reports archive, RUPS calendar, FAQ |
| Media & Newsroom | Article listing with dynamic detail pages |
| Sustainability | ESG targets, reclamation programs, impact counters, program cards |
| Contact | Validated form with server-side API route, FAQ accordion |

> **Note:** Screenshots are not included in this repository. The project uses external image/video assets from Pexels and Unsplash (see `src/data/media.ts` for sources and licenses).

---

## ✨ Features

### Core Features
- **Next.js 16 App Router** with TypeScript and Server Components by default
- **Internationalization (i18n)** — Indonesian & English with client-side locale switching
- **Responsive Design** — Mobile-first with breakpoints at 560px, 720px, 900px, 1100px, 1200px
- **Accessibility** — Semantic HTML, focus-visible states, ARIA labels, keyboard navigation, escape-key handling, `prefers-reduced-motion` support

### Animation & Interaction
| Library | Purpose |
|---------|---------|
| **GSAP + ScrollTrigger** | Scroll-driven animations, parallax, pinning, horizontal scroll sections |
| **Lenis** | Smooth scrolling (autoRAF disabled, manual GSAP ticker integration) |
| **Framer Motion** | Component-level transitions, Reveal on scroll, stagger children, hover/tap micro-interactions, reduced-motion respect |
| **@gsap/react** | React integration for GSAP |

#### Implemented Animation Patterns
- **Reveal on scroll** — Staggered entrance with `whileInView` viewport detection
- **Split text animations** — Hero headlines animate word-by-word
- **Parallax layers** — Multi-layer depth scrolling with `transform: translateZ()`
- **Horizontal scroll sections** — Project/business cards with snap scrolling
- **Pinned storytelling** — Content pins while media parallaxes
- **Magnetic hover** — CTA buttons follow cursor
- **Marquee** — Infinite looping text in footer
- **Counter** — Animated number counting on viewport entry
- **Image reveal** — Clip-path / scale transitions on scroll
- **Page transitions** — Smooth route transitions with AnimatePresence

### Navigation
- **Desktop** — Fixed header with mega-menu dropdowns (Business, About) on hover/focus
- **Mobile** — Full-screen slide-in menu with animated links
- **Top bar** — Quick links (Investor, Careers, Email) + locale switcher (ID/EN)
- **Scroll-aware header** — Collapses top bar, adds backdrop blur on scroll
- **Focus trap & escape key** — Mobile menu traps focus, closes on Escape

### Pages & Dynamic Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage with hero, statement, stats, video banner, journey, businesses, operations map, sustainability, investor, news, career CTA |
| `/tentang-kami` | Static | Company overview (vision, mission, values, history, leadership, governance) |
| `/tentang-kami/sejarah-kami` | Static | Detailed history timeline |
| `/tentang-kami/tim-kami` | Static | Leadership & team |
| `/bisnis-kami` | Static | Business overview with horizontal scroll cards |
| `/bisnis-kami/[slug]` | Dynamic | 5 business detail pages (Pertambangan, Jasa, Pengolahan, Energi, Teknologi) |
| `/proyek` | Static | Project portfolio with filter sidebar (region, commodity) |
| `/proyek/[slug]` | Dynamic | 6 project detail pages (specs, gallery, map, highlights) |
| `/hubungan-investor` | Static | Metrics, reports archive, RUPS calendar, FAQ |
| `/media-informasi` | Static | Article listing |
| `/media-informasi/[slug]` | Dynamic | Article detail pages |
| `/keberlanjutan` | Static | ESG targets, reclamation programs, impact counters, program carousel |
| `/karir` | Static | Career landing page |
| `/kontak` | Static | Contact form (validated, API submission), info cards, FAQ accordion |
| `/api/kontak` | API Route | POST-only, validates required fields, email format, message length; logs to console (no email service) |

### Content Management
- **Structured data files** in `src/data/` (TypeScript objects with full type safety)
- **Locale dictionaries** in `src/data/locales/` for UI strings
- **Centralized media registry** in `src/data/media.ts` with external URLs (Pexels, Unsplash), blur placeholders, alt text
- **Page-specific data** in `src/data/homepage.ts`, `src/data/company-pages.ts`, `src/data/investor-sustainability.ts`

### Forms & Validation
- **Contact form** — Client-side validation (required fields, email regex, min message length) + server-side validation in API route
- **Loading/Success/Error states** — Toast-style feedback with animated icons
- **FAQ accordion** — Animated expand/collapse with Chevron rotation

---

## 📁 Project Architecture

```text
tambang-company/
├── public/                          # Static assets
│   ├── favicon.ico
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── api/
│   │   │   └── kontak/route.ts      # Contact form API endpoint
│   │   ├── bisnis-kami/
│   │   │   ├── [slug]/page.tsx      # Business detail pages
│   │   │   ├── [slug]/not-found.tsx
│   │   │   └── page.tsx             # Business overview
│   │   ├── proyek/
│   │   │   ├── [slug]/page.tsx      # Project detail pages
│   │   │   ├── [slug]/not-found.tsx
│   │   │   └── page.tsx             # Project portfolio
│   │   ├── media-informasi/
│   │   │   ├── [slug]/page.tsx      # Article detail
│   │   │   ├── [slug]/not-found.tsx
│   │   │   └── page.tsx             # Media listing
│   │   ├── tentang-kami/
│   │   │   ├── sejarah-kami/page.tsx
│   │   │   ├── tim-kami/page.tsx
│   │   │   └── page.tsx
│   │   ├── hubung-investor/page.tsx
│   │   ├── keberlanjutan/page.tsx
│   │   ├── media-informasi/page.tsx
│   │   ├── karir/page.tsx
│   │   ├── kontak/page.tsx
│   │   ├── globals.css              # Tailwind v4 + custom CSS
│   │   ├── layout.tsx               # Root layout (providers, fonts)
│   │   ├── page.tsx                 # Homepage
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── motion/                  # Reusable animation primitives
│   │   │   ├── counter.tsx          # Animated number counter
│   │   │   ├── horizontal-scroll.tsx
│   │   │   ├── image-reveal.tsx
│   │   │   ├── loader.tsx           # Page loader with N logo
│   │   │   ├── magnetic.tsx         # Cursor-following magnetic effect
│   │   │   ├── marquee.tsx          # Infinite looping text
│   │   │   ├── page-transition.tsx  # Route transition wrapper
│   │   │   ├── parallax.tsx         # Multi-layer parallax
│   │   │   ├── pinned-story.tsx     # Pinned content + parallax media
│   │   │   ├── reveal.tsx           # Framer Motion scroll reveal
│   │   │   ├── scroll-progress.tsx  # Top progress bar
│   │   │   ├── smooth-scroll-provider.tsx  # Lenis + GSAP integration
│   │   │   ├── split-text.tsx       # Word/line split animation
│   │   │   └── index.ts             # Barrel exports
│   │   ├── home/                    # Homepage sections
│   │   │   ├── businesses.tsx
│   │   │   ├── career-cta.tsx
│   │   │   ├── company-statement.tsx
│   │   │   ├── hero.tsx             # Video hero + fallback
│   │   │   ├── hero-news-slider.tsx
│   │   │   ├── investor-relations.tsx
│   │   │   ├── journey.tsx          # Value chain steps
│   │   │   ├── news-updates.tsx
│   │   │   ├── operations-map.tsx   # Canvas-based map
│   │   │   ├── operations-map-canvas.tsx
│   │   │   ├── statistics.tsx
│   │   │   ├── subsidiaries.tsx
│   │   │   ├── sustainability.tsx
│   │   │   ├── video-banner.tsx     # Modal video player
│   │   │   └── home.module.css
│   │   ├── company/                 # Company pages
│   │   │   ├── about-page.tsx
│   │   │   ├── business-detail-page.tsx
│   │   │   ├── business-overview-page.tsx
│   │   │   ├── contact-page.tsx
│   │   │   ├── history-page.tsx
│   │   │   ├── investor-relations-page.tsx
│   │   │   ├── media-detail-page.tsx
│   │   │   ├── media-overview-page.tsx
│   │   │   ├── page-hero.tsx        # Shared hero component
│   │   │   ├── project-detail-page.tsx
│   │   │   ├── project-overview-page.tsx
│   │   │   ├── sustainability-page.tsx
│   │   │   ├── team-page.tsx
│   │   │   └── company.module.css
│   │   ├── locale-provider.tsx      # Client-side i18n context
│   │   ├── scroll-to-top.tsx        # Smooth scroll to top button
│   │   └── site-shell.tsx           # Header, footer, mobile menu
│   │
│   ├── data/                        # Content & configuration
│   │   ├── company-pages.ts         # Business, project, about data + types
│   │   ├── dictionary.ts            # UI strings (ID/EN)
│   │   ├── homepage.ts              # Homepage section data
│   │   ├── investor-sustainability.ts
│   │   ├── media.ts                 # Image/video registry (external URLs)
│   │   ├── media-pages.ts
│   │   └── locales/
│   │       ├── id.ts                # Indonesian dictionary
│   │       └── en.ts                # English dictionary
│   │
│   ├── components/motion/...        # (see above)
│   │
│   └── lib/                         # (empty — utilities in components)
├── .gitignore
├── AGENTS.md                        # Instructions for AI agents
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── PROGRESS.md                      # Development progress log
├── tsconfig.json
└── README.md
```

### Key Architectural Decisions
- **CSS Modules** for component-scoped styling (`*.module.css`) alongside Tailwind v4 utilities
- **External media assets** — All images/videos hosted on Pexels/Unsplash CDN with `blurDataURL` placeholders
- **No database/CMS** — All content in typed TypeScript files for build-time safety
- **Client components only where needed** — Motion, forms, locale, navigation use `"use client"`; pages default to Server Components
- **Dynamic imports** for heavy components (HeroNewsSlider, VideoModal) with `ssr: false`

---

## ⚙️ Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js | 16.4.3 (Turbopack) |
| **Runtime** | React | 19.3.0 |
| **Language** | TypeScript | ^5 |
| **Styling** | Tailwind CSS | ^4 (via `@tailwindcss/turbopack`) |
| **CSS Architecture** | CSS Modules + CSS Variables | — |
| **Animation** | GSAP | ^3.15.0 |
| | @gsap/react | ^2.1.2 |
| | Lenis | ^1.3.27 |
| | Framer Motion | ^14.7.1 |
| **UI Components** | Lucide React | ^1.63.0 |
| | clsx + tailwind-merge | ^2.1.1 / ^3.7.0 |
| **Maps/Geo** | d3-geo | ^3.1.1 |
| | react-simple-maps | ^5.0.5 |
| **Carousel** | Swiper | ^14.3.0 |
| **Intersection Observer** | react-intersection-observer | ^11.0.1 |
| **Counters** | react-countup | ^6.5.3 |
| **Linting** | ESLint | ^9 (eslint-config-next) |
| **Package Manager** | npm (package-lock.json) | — |

---

## 🏃 Installation & Setup

### Prerequisites
- Node.js ≥ 20
- npm ≥ 10

### Commands

```bash
# 1. Clone repository
git clone <repository-url>
cd tambang-company

# 2. Install dependencies
npm install

# 3. Start development server (Turbopack)
npm run dev
# → http://localhost:3000

# 4. Production build
npm run build

# 5. Start production server
npm run start

# 6. Lint
npm run lint
```

### Environment Variables
No environment variables are required. All content and media are committed to the repository.

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev` | Start dev server with Turbopack |
| `build` | `next build` | Production build (static generation + SSR) |
| `start` | `next start` | Run production server |
| `lint` | `eslint` | Run ESLint with Next.js config |

---

## 🖼️ Asset Management

### Images
All images are external URLs defined in `src/data/media.ts`:

```typescript
export const images = {
  miningTruck: { src: "https://images.pexels.com/...", alt: "...", blurDataURL },
  openPitMine: { src: "https://images.pexels.com/...", alt: "...", blurDataURL },
  industrialFacility: { src: "https://images.unsplash.com/...", alt: "...", blurDataURL },
  // ... etc
}
```

- **Sources**: Pexels (mining truck, open pit mine, video), Unsplash (all others)
- **Licenses**: Pexels License / Unsplash License (free for commercial use)
- **Blur placeholders**: Base64-encoded 16×9 SVG (`blurDataURL`)
- **Usage**: Referenced by key in data files (e.g., `images.openPitMine`)

### Videos
Defined in `src/data/media.ts`:

```typescript
export const videos = {
  mineOperations: {
    src: "https://videos.pexels.com/video-files/9310142/...mp4",
    poster: "https://images.pexels.com/videos/9310142/...jpeg",
    alt: "..."
  }
}
```

- **Hero video** auto-plays muted/looped with poster fallback
- **Error handling** — Falls back to static image if video fails to load
- **Video modal** — Opens in centered overlay with custom controls

### Adding New Assets
1. Add entry to `src/data/media.ts` with `src`, `alt`, `blurDataURL`
2. Reference by key in data files (`images.myNewImage`)
3. Use `next/image` with `fill`, `sizes`, `priority` as appropriate

---

## 📝 Content & Data Management

### Adding/Editing Content
All user-facing text lives in structured TypeScript files:

| File | Purpose |
|------|---------|
| `src/data/locales/id.ts`, `en.ts` | UI strings (navigation, buttons, labels, form messages) |
| `src/data/homepage.ts` | Hero, statement, stats, video banner, journey, businesses, operations, subsidiaries, sustainability, investor, news, career |
| `src/data/company-pages.ts` | About (vision, history, leadership), Businesses (overview + 5 detail pages), Projects (overview + 6 detail pages) |
| `src/data/investor-sustainability.ts` | ESG targets, reclamation, impact counters, programs, commitments |

### Type Safety
All data files export typed constants with `satisfies Record<Locale, T>` for compile-time validation.

### Adding a New Business
1. Add slug to `BusinessSlug` union in `company-pages.ts`
2. Add asset to `businessAssets` map
3. Add detail entry to `detailBySlug`
4. Add to `items` array in both locales
4. Create route: `src/app/bisnis-kami/[slug]/page.tsx` (already dynamic)

---

## ♿ Responsive Design & Accessibility

### Breakpoints (globals.css)
| Breakpoint | Target |
|------------|--------|
| ≤ 560px | Small mobile |
| ≤ 720px | Mobile |
| ≤ 900px | Tablet |
| ≤ 1100px | Small desktop |
| ≤ 1200px | Desktop |

### Navigation
- **Desktop** — Horizontal nav, mega-menus on hover/focus, contact CTA button
- **Mobile** — Hamburger → full-screen overlay, large typography, stacked links
- **Keyboard** — Tab navigation, focus-visible outlines (accent color), Escape closes mobile menu
- **Focus trap** — Mobile menu traps focus until closed

### Reduced Motion
- `prefers-reduced-motion: reduce` disables:
  - Lenis smooth scrolling
  - GSAP ScrollTrigger animations
  - Framer Motion transitions (duration → 0)
  - CSS transitions (duration → 0.01ms)
  - `scroll-behavior: smooth` → `auto`

### Semantic HTML & ARIA
- Landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- `aria-label` on nav, menu toggles, social links
- `aria-expanded` on dropdown triggers
- `aria-hidden` on decorative media
- Form labels linked via `htmlFor` / `id`
- `aria-invalid` + `aria-describedby` on error states

---

## ⚠️ Project Limitations & Notes

| Area | Limitation |
|------|------------|
| **Fictional Company** | PT Nusantara Mineral Energi is a fictional entity created for portfolio/educational purposes |
| **Simulated Data** | All financial metrics, project specs, ESG targets, and operational data are illustrative |
| **Contact Form** | API route logs to console only — **no email delivery, no database storage, no spam protection** |
| **External Media** | Images/videos hotlinked from Pexels/Unsplash — subject to third-party availability |
| **No CMS** | Content changes require code edits and rebuild |
| **No Auth/Backend** | No user accounts, admin panel, or database |
| **No Email Service** | Contact form submissions are logged to server console only |
| **Video Hosting** | Hero video streams from Pexels CDN — no self-hosted transcoding |
| **Map Visualization** | Operations map uses `d3-geo` + `react-simple-maps` with static coordinate data; no real-time GIS |

---

## 🔮 Future Development

| Priority | Item |
|----------|------|
| High | Replace console logging with real email service (Resend, SendGrid, Nodemailer) |
| High | Add CSP headers and security headers in `next.config.ts` |
| Medium | Implement ISR for dynamic routes (`revalidate`) |
| Medium | Add image optimization proxy (avoid external hotlinking) |
| Medium | Unit/integration tests (Vitest + React Testing Library) |
| Low | Dark/light theme toggle (currently dark-only) |
| Low | Search functionality for media/projects |
| Low | Sitemap.xml / robots.txt generation |
| Low | Analytics integration (Plausible, GA4) |

---

## 📄 License & Disclaimer

**No license file is present in this repository.**

> **Disclaimer:** This project is a **portfolio demonstration** for a fictional company, **PT Nusantara Mineral Energi (NEXORA ENERGY)**. All company information, financial figures, project specifications, sustainability metrics, personnel, and operational data are **entirely fictional and illustrative**. They do not represent any real organization, financial performance, or operational capability. This project is intended solely for educational and portfolio demonstration purposes.

External media assets (images, video) are sourced from [Pexels](https://pexels.com) and [Unsplash](https://unsplash.com) under their respective free commercial-use licenses. Attribution is included in `src/data/media.ts`.

---

## ✅ Validation Checklist

| Check | Status |
|-------|--------|
| All documented routes exist in `src/app/` | ✅ |
| All dependencies listed in `package.json` are used | ✅ |
| All data files referenced exist in `src/data/` | ✅ |
| All motion components exported from `src/components/motion/index.ts` | ✅ |
| Installation commands match `package.json` scripts | ✅ |
| No invented environment variables | ✅ |
| No invented routes or features | ✅ |
| Markdown formatting valid | ✅ |

---

*Generated from actual source code inspection — NEXORA ENERGY corporate website portfolio project.*