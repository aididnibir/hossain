# Hossain Ucchas — Portfolio Site Plan

Build a single-page portfolio replacing `src/routes/index.tsx`, styled with a warm "Sage & Clay" design system. No backend needed.

## Design System

Update `src/styles.css`:
- Replace token values with the specified palette (converted to oklch):
  - `--background` = Warm Sand `#F4EFE6`
  - `--foreground` = Ink Navy `#20293A`
  - `--card` = Cream `#FBF8F2`
  - `--primary` = Clay `#C6785A` (CTAs, accent numbers)
  - `--secondary` / accent = Sage `#8FA98F`
  - `--muted-foreground` = Charcoal `#4A4F55`
  - `--border` = Hairline `#DED6C7`
  - Add custom tokens: `--deep-sage` `#5F7A66`, `--sage` `#8FA98F`, `--clay` `#C6785A`, `--ink` `#20293A`
- Register in `@theme inline` so `bg-sage`, `text-clay`, etc. work.
- Add font families `--font-serif` (Fraunces) and `--font-sans` (Inter).
- Load Fraunces + Inter via `<link>` in `src/routes/__root.tsx` head (Google Fonts preconnect + stylesheet).
- Update body default to `font-sans`; headings use `font-serif`.
- Radius base 14px; soft shadow token.

## Head Metadata (`src/routes/__root.tsx` + `index.tsx`)

- Root: keep defaults but change title/description to Hossain Ucchas branding.
- Add Google Fonts `<link>` entries.
- `index.tsx` head(): unique title "Hossain Ucchas — Senior Talent Acquisition Specialist", meta description, og/twitter tags.

## Page Structure (`src/routes/index.tsx`)

Single component composed of section components (kept in same file or `src/components/portfolio/*.tsx` for clarity):

1. `StickyNav` — sticky top nav, active-section tracking via IntersectionObserver, backdrop-blur cream on scroll. Links: About, Experience, Skills, Education, Contact.
2. `Hero` — eyebrow, serif headline, subhead, two CTAs (Clay primary "Let's Talk", outline "View Experience"), portrait placeholder circle with location badge, 4-item stat strip below (clay numbers).
3. `About` — cream card, split two-column (copy left, pull-quote box right with current roles + "Refer a candidate" link).
4. `Experience` — vertical timeline with sage vertical line and dot markers, 5 cream cards (title/company/dates/location/description). Bevy Commerce entries share a small sage "4 yrs 6 mos total tenure" badge.
5. `Skills` — 3-column grid (stacks on mobile), each column with subheading and pill/chip list. Chip: cream bg, sage border, hover deep-sage bg + cream text.
6. `Education` — two-column cards on sand background: Education (Khulna University, Master's, 2021) and Certifications (IELTS, Generative AI MasterMind with "Certificate Completed" badge).
7. `Contact` — full-width dark section (Ink Navy bg, cream text). Headline, subtext, icon rows (email, phone, LinkedIn, location), two buttons (mailto Clay, LinkedIn outline external).
8. `Footer` — "© 2026 Hossain Ucchas. Built with intention."

## Interactions

- Scroll-triggered fade/slide-up: small hook `useInView` with IntersectionObserver toggling `animate-fade-in` + `translate-y` classes (400–600ms ease).
- Smooth scroll via `scroll-behavior: smooth` on `html` and anchor `href="#..."`.
- Active nav link highlighting via IntersectionObserver watching section IDs.
- Button hover: `-translate-y-0.5` transition.
- Responsive: mobile stacks columns; timeline collapses to left-border list; skill pills wrap; hero image moves above text.

## Icons

Use `lucide-react` (already available): Mail, Phone, MapPin, Linkedin, ArrowRight, GraduationCap, Award, CheckCircle2.

## Files to create/modify

- Modify: `src/styles.css`, `src/routes/__root.tsx`, `src/routes/index.tsx`
- Create: `src/components/portfolio/StickyNav.tsx`, `Hero.tsx`, `About.tsx`, `Experience.tsx`, `Skills.tsx`, `Education.tsx`, `Contact.tsx`, `useInView.ts` (hook)

## Out of scope

- No CMS/backend, no contact form submission (mailto only), no image generation (portrait uses initials-based circular placeholder with sage/clay gradient).

## Technical Details

- Tailwind v4 tokens registered in `@theme inline` — no `tailwind.config.js`.
- All colors via semantic tokens or extended tokens (`bg-clay`, `text-sage`); no hardcoded hex in JSX.
- Fonts loaded via `<link>` in root head, not `@import` in CSS.
- WCAG AA: Ink Navy (#20293A) on Warm Sand (#F4EFE6) ≈ 12:1 ✓; Cream on Ink Navy ≈ 14:1 ✓.
