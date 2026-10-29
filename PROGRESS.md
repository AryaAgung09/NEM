# PROGRESS.md - PT Nusantara Mineral Energi Website

> Updated: 2026-10-29 | Current Phase: 5b part 2 (in progress) | Last Commit: `b240bfd`

---

## ✅ Completed Phases

### Phase 1: Foundation
- **Commit**: `5977179` (Build homepage sections 9-12) - *last known before session reset*
- **Work**: Project setup, TypeScript config, Tailwind, global utilities, motion components library
- **Key Files**: `src/components/motion/*`, `src/data/media.ts`, `src/data/dictionary.ts`, `src/components/locale-provider.tsx`

### Phase 2: Global Layout
- **Commit**: `5977179` (included)
- **Work**: TopBar, Navbar, MegaMenu, Footer, Loader, PageTransition, ScrollProgress
- **Key Files**: `src/components/site-shell.tsx`, `src/app/layout.tsx`

### Phase 3: Homepage (12 Sections)
- **Commit**: `5977179` (Build homepage sections 9-12)
- **Sections**: Hero, Statement, Statistics, Video Banner, Journey, Businesses, Operations Map, Subsidiaries, Sustainability, Investor Relations, News Updates, Career CTA
- **Key Files**: `src/app/page.tsx`, `src/components/home/*`, `src/data/homepage.ts`

### Phase 4: Tentang Kami & Bisnis Kami + Proyek
- **Commit**: `8abd4cc` (Build Proyek pages)
- **Pages**:
  - `/tentang-kami` - Visi/Misi, Nilai, Timeline (horizontal scroll), Manajemen, Tata Kelola (accordion)
  - `/bisnis-kami` - 5 lini bisnis overview (horizontal scroll)
  - `/bisnis-kami/[slug]` - 5 detail: kapabilitas, alat/teknologi, studi kasus, CTA
  - `/proyek` - 6 proyek dengan filter wilayah/komoditas (animasi)
  - `/proyek/[slug]` - 6 detail: spesifikasi, galeri, peta lokasi, proyek terkait
- **Data**: `src/data/company-pages.ts` (extended with projects)
- **Components**: `src/components/company/*` (about-page, business-overview-page, business-detail-page, project-overview-page, project-detail-page, page-hero, company.module.css)

### Phase 5(a): Hubungan Investor & Keberlanjutan
- **Commit**: `cf9c3ab` (Update Investor & Sustainability: disable missing report downloads + add illustrative data disclaimer)
- **Previous**: `f35b687` (Build Investor Relations & Sustainability pages)
- **Pages**:
  - `/hubungan-investor` - 8 metrik keuangan dengan Counter, 7 laporan (tahunan/kuartalan/keberlanjutan/tata kelola), 3 RUPS (upcoming/completed), 8 FAQ accordion, CTA kontak IR, **tombol unduh dinonaktifkan untuk laporan belum tersedia, disclaimer data ilustratif**
  - `/keberlanjutan` - 10 target ESG 2030 (progress bar), 3 program reklamasi (horizontal scroll), 8 impact counters (react-countup), 6 program keberlanjutan (pinned horizontal scroll), 5 komitmen, **disclaimer data ilustratif**
- **Data**: `src/data/investor-sustainability.ts` (bilingual ID/EN)
- **Components**: `src/components/company/investor-relations-page.tsx`, `sustainability-page.tsx`, updated `company.module.css`

### Phase 5(b) Part 1: Media & Informasi
- **Commit**: `b240bfd` (Build Media & Informasi pages)
- **Pages**:
  - `/media-informasi` - Hero, filter kategori animasi (6 kategori: semua, berita, pengumuman, keberlanjutan, investor, operasional), horizontal scroll 11 kartu (artikel, video, foto, pengumuman), galeri horizontal scroll 12 item (foto/video), CTA
  - `/media-informasi/[slug]` - 11 item detail: hero, konten HTML, tags, tombol share/copy link, related articles horizontal scroll, generateStaticParams + not-found
- **Data**: `src/data/media-pages.ts` (11 item bilingual ID/EN: artikel, video, foto, pengumuman)
- **Components**: `src/components/company/media-overview-page.tsx`, `media-detail-page.tsx`, updated `company.module.css`

### UI Revision: Tim Kami — Direksi (Leadership Band)
- **Status**: applied 2026-10-29 — lint clean, build 27/27 pages
- **Change** (matched to the supplied reference design):
  - Direksi section now sits on a deep-blue gradient band with gold eyebrow and white "Pemimpin Kami / Our Leaders" heading
  - 4-up portrait grid (3:4), white studio-style photos, name + role caption bar under each portrait
  - Hover: portrait lifts 20px out of the card frame, photo scales 1.05, shadow deepens
  - Responsive 4 → 2 → 1 columns; verified no horizontal overflow at 390px
- **Files**: `src/components/company/team-page.tsx` (direksi data uses portrait Unsplash URLs), `company.module.css` (`.leaders*`, `.leader*`)

---

## 📁 Important Folder Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles
│   ├── tentang-kami/page.tsx      # About Us
│   ├── bisnis-kami/
│   │   ├── page.tsx               # Business Overview
│   │   └── [slug]/
│   │       ├── page.tsx           # Business Detail
│   │       └── not-found.tsx      # 404 for Business
│   ├── proyek/
│   │   ├── page.tsx               # Projects Overview
│   │   └── [slug]/
│   │       ├── page.tsx           # Project Detail
│   │       └── not-found.tsx      # 404 for Project
│   ├── karir/page.tsx             # Careers (placeholder)
│   └── [locale]/...               # i18n routing ready
├── components/
│   ├── motion/                    # Reusable motion components
│   │   ├── horizontal-scroll.tsx  # GSAP horizontal scroll
│   │   ├── parallax.tsx           # Framer Motion parallax
│   │   ├── reveal.tsx             # Scroll reveal
│   │   ├── split-text.tsx         # Text split animation
│   │   ├── pinned-story.tsx       # Scroll-triggered pinning
│   │   └── index.ts               # Barrel export
│   ├── company/                   # Company pages components
│   │   ├── about-page.tsx
│   │   ├── business-overview-page.tsx
│   │   ├── business-detail-page.tsx
│   │   ├── project-overview-page.tsx
│   │   ├── project-detail-page.tsx
│   │   ├── investor-relations-page.tsx
│   │   ├── sustainability-page.tsx
│   │   ├── media-overview-page.tsx
│   │   ├── media-detail-page.tsx
│   │   ├── page-hero.tsx
│   │   └── company.module.css
│   ├── home/                      # Homepage sections
│   ├── locale-provider.tsx        # Locale context
│   └── site-shell.tsx             # Global layout shell
├── data/
│   ├── media.ts                   # Images/videos (external URLs)
│   ├── dictionary.ts              # ID/EN translations
│   ├── homepage.ts                # Homepage copy
│   ├── company-pages.ts           # About, Business, Projects data
│   ├── investor-sustainability.ts # Investor Relations & Sustainability data
│   └── media-pages.ts             # Media & Information data
└── lib/                           # Utilities (empty)
```

---

## 🗺️ Existing Routes

| Route | Type | Status |
|-------|------|--------|
| `/` | Static | ✅ Complete (12 sections) |
| `/tentang-kami` | Static | ✅ Complete |
| `/bisnis-kami` | Static | ✅ Complete |
| `/bisnis-kami/[slug]` | SSG (6 slugs) | ✅ Complete + 404 |
| `/proyek` | Static | ✅ Complete |
| `/proyek/[slug]` | SSG (6 slugs) | ✅ Complete + 404 |
| `/karir` | Static | ✅ Placeholder |
| `/hubungan-investor` | Static | ✅ Complete (Phase 5a) |
| `/keberlanjutan` | Static | ✅ Complete (Phase 5a) |
| `/media-informasi` | Static | ✅ Complete (Phase 5b part 1) |
| `/media-informasi/[slug]` | SSG (11 slugs) | ✅ Complete (Phase 5b part 1) + 404 |
| `/kontak` | — | ⏳ Phase 5b part 2 |

---

## ⚠️ Placeholder Data to Replace Before Production

| File | Section | Placeholder | Action Required |
|------|---------|-------------|-----------------|
| `src/data/company-pages.ts` | About → Leadership | 3 generic role cards (Direktur Utama, Operasi, Keuangan) | Replace with official management team & photos |
| `src/data/company-pages.ts` | About → History | 4 illustrative milestones (2010, 2015, 2020, 2025) | Update with verified company history |
| `src/data/company-pages.ts` | Business Detail | Generic capabilities/tools/case studies per slug | Replace with real data per business line |
| `src/data/company-pages.ts` | Projects | 6 illustrative projects with dummy specs | Replace with real project portfolio |
| `src/data/homepage.ts` | Statistics | 3 generic metrics (3, 2, 1) | Replace with real KPIs |
| `src/data/homepage.ts` | Investor Relations | Illustrative financial figures | Replace with audited financial data |
| `src/data/homepage.ts` | News Updates | 3 dummy news items | Replace with real press releases |
| `src/data/homepage.ts` | Subsidiaries | 4 placeholder subsidiaries | Replace with real affiliates |
| `src/data/homepage.ts` | Sustainability | Generic ESG slides | Replace with real sustainability data |
| `src/data/homepage.ts` | Video Banner | Pexels video placeholder | Replace with corporate video |
| `src/data/media.ts` | All images | Pexels/Unsplash stock photos | Replace with corporate photography |
| `src/data/investor-sustainability.ts` | Investor Metrics | 8 illustrative financial metrics | Replace with audited financial data |
| `src/data/investor-sustainability.ts` | Annual Reports | 7 placeholder report entries | Replace with real PDF reports |
| `src/data/investor-sustainability.ts` | RUPS Calendar | 3 illustrative RUPS entries | Replace with real GMS schedule & documents |
| `src/data/investor-sustainability.ts` | ESG Targets | 10 targets with dummy progress | Replace with verified SBTi/ESG data |
| `src/data/investor-sustainability.ts` | Reclamation Programs | 3 illustrative programs | Replace with real reclamation data |
| `src/data/investor-sustainability.ts` | Impact Counters | 8 counters with placeholder values | Replace with verified impact measurements |
| `src/data/media-pages.ts` | Media Items | 11 illustrative items (news, announcements, gallery) | Replace with real press releases & media assets |
| `src/app/karir/page.tsx` | Career | Placeholder content | Build real careers page |

---

## 📋 Remaining Work

### Phase 5: Investor Relations, Sustainability, Media, Contact
#### Part (a) - Investor Relations & Sustainability ✅ **COMPLETED**
- [x] `/hubungan-investor` - Metrics cards, annual reports download, RUPS calendar, FAQ accordion
- [x] `/keberlanjutan` - ESG targets, reclamation programs, impact counters (react-countup), horizontal scroll programs

#### Part (b) - Media & Contact
- [x] `/media-informasi` - News/announcements, photo/video gallery, category filter (horizontal scroll)
- [x] `/media-informasi/[slug]` - Article detail with gallery, related posts, share/copy link
- [ ] `/kontak` - Form with validation (React Hook Form + Zod), map, FAQ accordion

### Phase 6: Polish & Deploy
- [ ] Cross-browser testing, accessibility audit (WCAG AA)
- [ ] Performance optimization (image optimization, bundle analysis)
- [ ] SEO: sitemap, robots.txt, meta tags, structured data
- [ ] Production deployment config (Vercel/Netlify/Docker)
- [ ] Analytics integration (GA4, plausible)
- [ ] Content review & final copy editing (ID/EN)
- [ ] Error boundary & monitoring (Sentry)

---

## 📝 Notes for Next Session

- All motion components are in `src/components/motion/` - reuse them
- Data pattern: `src/data/*.ts` with `Locale` type, `as const` for inference
- Styling: CSS Modules with `company.module.css` for company pages
- i18n: `useLocale()` hook from `locale-provider.tsx`
- Static generation: `generateStaticParams` + `not-found.tsx` for all `[slug]` routes
- Images: All in `src/data/media.ts` as `ImageAsset { src, alt, blurDataURL }`