# CoArchitive — React Website

An original, copyright-safe multidisciplinary-consultancy website built in the editorial
information architecture used by large design practices (research feed, expertise, projects,
people, offices, careers).

## What is included

- React 18 + Vite
- **Multi-page** app with a dependency-free hash router (`src/router.jsx`)
- Nine pages: Home, Research & Insights, Expertise, Projects, People, Offices, About, Careers, Contact
- Filterable Projects and Insights feeds
- Sticky header with full-screen mobile menu; large editorial footer with newsletter + link columns
- Responsive desktop / tablet / mobile layout, `prefers-reduced-motion` respected
- Original CoArchitive copy; Lucide icons
- No third-party logo, source code, proprietary text, project imagery or branding

## Structure

```
src/
  main.jsx            entry
  App.jsx             route table
  router.jsx          useRoute() / navigate() / <Link>
  data.js             all content (nav, expertise, projects, insights, offices, roles…)
  components/         Header, Footer, Logo, UI (PageHero, SectionHead, Card, Stats)
  pages/              one file per route
  styles.css          design system (tokens at the top of the file)
public/brand/         drop the logo artwork here — see its README.txt
```

## Run

1. Install Node.js 18+
2. `npm install`
3. `npm run dev`
4. Open the local URL shown by Vite

## Build

`npm run build` → `dist/`, then `npm run preview`

## Editing content

Almost everything is in [`src/data.js`](src/data.js) — nav items, the eight expertise verticals,
projects, insights, offices, open roles and values. Company details (name, tagline, head office,
email, phone) are taken from the letterhead and sit at the top of the same file.

Colours, spacing and type scale are CSS custom properties at the top of
[`src/styles.css`](src/styles.css): `--green` and `--sand` are sampled from the brand mark.

## Before launch

- Drop the logo artwork at `public/brand/coarchitive-mark.png` — until then `src/components/Logo.jsx`
  renders an approximate inline SVG reconstruction of the mark.
- Replace the Unsplash placeholder URLs in `src/data.js` with your own or licensed photography.
- Wire the Contact form and the footer newsletter field to a real endpoint — both are inert.
- Routes are hash-based (`/#/projects`) so the site deploys to any static host without server
  rewrites. Swap to a history router if you want clean URLs.

## Brand safety

The design takes general inspiration from architectural/editorial web conventions and from the
information architecture common to multidisciplinary consultancies. It is not a reproduction of
another firm's website.
