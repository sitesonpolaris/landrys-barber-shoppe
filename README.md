# Landry’s Barber Shoppe — website

One-page site for Landry’s Barber Shoppe (Gastonia, NC). Built by Sites on Polaris.

- **Framework:** Next.js 16 (App Router, TypeScript), fully prerendered
- **Hosting:** Netlify (`netlify.toml`) — https://landrys-barber-shoppe.netlify.app
- **Database:** none needed yet. Add Supabase (`@supabase/ssr`) when the site needs forms, bookings or editable content; keep keys in Netlify environment variables.

## Editing content
All business details (phone, links, services and prices, reviews, hours) live in `src/lib/site.ts`.
Change them there — every section reads from that file.

## Structure
- `src/app/page.tsx` — the page (hero, about, services, reviews, visit, footer)
- `src/app/layout.tsx` — fonts (`next/font/local`), SEO metadata, Open Graph, icons
- `src/app/globals.css` — all styles (design tokens at the top under `:root`)
- `src/components/SiteMotion.tsx` — client-side motion: parallax (`data-speed`), scroll reveals (`.reveal`), hero video play/pause, reduced-motion handling
- `src/components/Badge.tsx`, `Icons.tsx`, `MenuList.tsx` — logo badge, stars, icons, price list
- `src/app/robots.ts`, `sitemap.ts`, `manifest.ts` — SEO files
- `public/media` — hero video (1080p + 720p mobile), poster, photos; `public/og.jpg` share image

## Local development
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```
