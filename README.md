# Lala Land Kids - Website

Marketing site for Lala Land Child Care & Preschool, a licensed family daycare
and preschool in Foster City, California. Bilingual (English/Russian),
statically prerendered per route for performance and SEO.

🔗 **Live site:** https://lalalandkids.care

## Stack

- **React 19 + TypeScript**
- **Tailwind CSS v4**
- **Vite 8** - build tooling
- **[vite-react-ssg](https://github.com/userquin/vite-react-ssg)** - static
  prerendering per route (built on React Router v6)
- **[vite-imagetools](https://github.com/JonasKruckenberg/imagetools)** -
  generates resized, WebP image variants at build time (see
  `src/vite-env.d.ts` for the custom import types this needs)
- **oxlint** - linting (see `.oxlintrc.json`)

## Getting started

```bash
npm install
npm run dev       # dev server with HMR
```

## Building

```bash
npm run build      # prerenders all routes into dist/
npm run preview    # serve the production build locally
```

> **Always test Lighthouse against `npm run preview`, not `npm run dev`.**
> Dev mode serves unminified, unbundled assets (e.g. `/src/index.css`
> directly) and produces misleading performance scores.

## Project structure

```
src/
  components/
    layout/     # Header, Footer, IconSprite, Layout, AnchorLink, ScrollToTop
    sections/   # Homepage sections (Hero, About, Programs, FAQ, etc.)
    SEO.tsx     # Per-page <head> tags, via vite-react-ssg's <Head>
  context/
    languageContext.tsx   # EN/RU toggle, persisted to localStorage
  pages/        # Route-level pages: Home, Gallery, Testimonials, Newsletter
  routes.tsx    # Route definitions, consumed by vite-react-ssg
  vite-env.d.ts # Vite's base types + custom module types for imagetools imports
```

## Images

Logo/photo imports use `vite-imagetools` query suffixes to generate
resized WebP variants at build time, e.g.:

```tsx
import logoSrcSet from "../../assets/logo.jpg?w=280;560&format=webp&as=srcset";
import logoFallback from "../../assets/logo.jpg?w=280&format=webp";

<img src={logoFallback} srcSet={logoSrcSet} width="280" height="249" ... />
```

`srcSet` lets the browser pick the right resolution for the visitor's
screen; `src` is the required plain fallback. Match the requested widths
to the image's actual displayed size (check Tailwind width classes) -
don't default to the original asset dimensions.

## Deployment

Deployed via GitHub Pages to a custom domain.

- `public/CNAME` must be present for the custom domain to survive a
  deploy - Vite only copies `public/`'s contents into `dist/`, so this
  file cannot live at the project root.
- `public/robots.txt`, `public/sitemap.xml`, `public/favicon.svg` are
  static passthrough assets, copied into `dist/` unmodified.

<!-- TODO: document the actual deploy command / GitHub Actions workflow -->

## Known accepted risks

- `npm audit` flags moderate-severity CVEs in `react-router` (fixed only
  in v7.18+). `vite-react-ssg` pins `react-router-dom` to `^6.x` and has
  no v7 support, so this can't be resolved without migrating off
  `vite-react-ssg` to React Router v7's native SSG. Not currently
  exploitable in this app (no dynamic redirects, no custom SSR error
  handling). Revisit if/when migrating away from `vite-react-ssg`.

## Linting

```bash
npm run lint    # oxlint
```

See `.oxlintrc.json` for rule configuration.
