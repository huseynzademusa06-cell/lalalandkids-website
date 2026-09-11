# Lala Land Child Care and Preschool — website

**Live site:** https://lalalandkids.care
**Hosting:** GitHub Pages (this repo, `main` branch, root folder) · HTTPS enforced
**Stack:** plain static HTML + one CSS file + one JS file. No framework, no build step, no dependencies, no package manager.

> **New here? Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before your first change.** This is a licensed
> childcare business — a few content rules are legal/trust matters, not preferences.

---

## Quick start

```bash
git clone https://github.com/huseynzademusa06-cell/lalalandkids-website.git
cd lalalandkids-website
python3 -m http.server 8000
```

Open http://localhost:8000. That's the whole dev environment. (Opening `index.html` directly with
`file://` also mostly works, but the server matches production behaviour for paths and the 404 page.)

The only external requests the site makes are Google Fonts and the embedded Google map.

---

## What's in here

| Path | What it is |
|---|---|
| `index.html` | The main one-page site — hero, about, videos, activities, skills, daily schedule, nutrition, for-parents, FAQ, tour booking, contact + map. ~500 lines. |
| `testimonials.html` | Parent testimonials — video slots + written quotes. Currently says quotes are being collected (see rules). |
| `gallery.html` | Photo gallery — rooms/facility and everyday moments, plus video-tour slots. |
| `newsletter.html` | "The Lala Letter" signup + blog (5 posts). |
| `404.html` | Custom 404, served by Pages. |
| `css/styles.css` | The entire design system, ~525 lines. Every page shares it. |
| `js/main.js` | Mobile nav, EN/RU toggle (persisted to `localStorage`), small UI behaviour. ~47 lines. |
| `assets/` | Logo and images. Gallery photos go in `assets/gallery/space/` and `assets/gallery/moments/`. |
| `tools/update_gallery.py` | Regenerates the gallery grids from the photo folders. See below. |
| `FACTS.md` | **Content source of truth.** Every factual claim on the site must trace back to this file. |
| `CNAME`, `robots.txt`, `sitemap.xml` | Domain + SEO plumbing. Read the warnings in `CONTRIBUTING.md` before touching. |
| `_config.yml` | Keeps internal docs (this file, `FACTS.md`, `tools/`) out of the *published* site. |

---

## How deploying works

**Push to `main` → live on lalalandkids.care in about a minute.** There is no staging environment.
GitHub Pages builds the repo root and serves it on the custom domain. That is why the
branch-and-pull-request workflow in `CONTRIBUTING.md` matters: the PR *is* the safety net.

- The `CNAME` file (contents: `lalalandkids.care`) is what binds the domain. **Deleting it takes the
  site off the domain.**
- DNS lives in a Squarespace account the owner controls (A records → GitHub Pages IPs, `www` CNAME,
  plus **MX/SPF/DKIM/DMARC records that run the business email**). Nobody but the owner touches DNS.
- The TLS certificate is issued and auto-renewed by GitHub. Nothing to do.

Check a deploy: the commit gets a green check, and `curl -I https://lalalandkids.care` returns
`HTTP/2 200`.

---

## Adding gallery photos

1. Drop images into `assets/gallery/space/` (rooms, facility) or `assets/gallery/moments/` (everyday life).
2. Name the file after its caption — dashes become spaces: `infant-room.jpg` → "Infant room".
3. Run `python3 tools/update_gallery.py` (add `--optimize` to downscale large photos in place, macOS only).
   It rewrites `gallery.html` between the `GALLERY:SPACE` / `GALLERY:MOMENTS` markers.
4. Commit the photos *and* the regenerated `gallery.html`.

**Only use photos of children whose parents have signed the Photo & Video Release form.** If you
did not personally receive that confirmation from the owner for a specific photo, do not publish it.

---

## Known work queue

These are the open items the site is waiting on — most are content, not code:

- Real photos into the gallery and the about-photo slot (placeholders ship today, by decision).
- Nine 9:16 video slots across the pages — embed snippets are in HTML comments next to each slot.
- Real parent testimonials (see the rule about invented quotes in `CONTRIBUTING.md`).
- Tour-request and newsletter forms currently open a pre-filled email. Connecting a real form or
  scheduler service is an open decision — ask before wiring one up, since it touches parent data.
- Google Business Profile + review link (placeholder `#` on `testimonials.html`).
- `sitemap.xml` is now maintained by hand — update `lastmod` when you add or meaningfully change a page.

---

## Who owns what

| Thing | Who |
|---|---|
| This repo, code, content of the site | Owner + developer |
| Repo settings, Pages settings, collaborators | Owner (repo admin) |
| DNS, domain registration, business email | **Owner only** — never changed by request from anyone else |
| Facts, names, licensing claims, photos of children | **Owner only** — see `FACTS.md` |
