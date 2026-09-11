# Contributing

This site belongs to a licensed childcare business (CDSS Community Care Licensing **#414005148**).
Parents make a decision about their child based on what it says. A few of the rules below are
compliance and trust matters rather than style preferences — they are marked **hard rule** and are
not negotiable without the owner saying so in writing.

---

## Workflow

**You have direct push access to `main`, and `main` is the live site.** A push is a publish —
it is on lalalandkids.care about a minute later, in front of parents deciding where to send
their child. There is no staging environment and no review gate. That trust is deliberate;
the discipline below is what it assumes.

**Always, before pushing:** run it locally (`python3 -m http.server 8000`), look at the page you
changed at desktop *and* mobile width, and check the console is clean.

**Push straight to `main`** for small, self-evident, low-blast-radius changes — a typo, a broken
link, a CSS nudge on one component.

**Open a pull request** — even though nothing forces you to — when the change is any of:

- new or reworded parent-facing copy, or anything touching facts, names, or claims
- anything involving photos of children, testimonials, or the license line
- a change to the shared design system in `css/styles.css` that affects more than one component
- a new page, a form, an embed, or any third-party script
- anything you are not fully sure about

```bash
git switch -c fix/short-description
# ...work, test locally...
git commit -m "Describe what changed and why"
git push -u origin fix/short-description
gh pr create            # or open the PR on github.com
```

Other rules of the road:

- One topic per commit or PR. A CSS refactor and a copy change are separate.
- Write commit messages that say *why*, not just what. This repo's history is the only changelog.
- Never force-push `main`, never rewrite published history.
- If you break the live site, fix forward or `git revert` immediately, then tell the owner. Don't
  leave a broken page up while you investigate.

## Hard rules — content

| Rule | Why |
|---|---|
| **Never publish a dollar amount.** Not tuition, not part-time, not hourly, not "starting at". | Deliberate sales decision: pricing is discussed in person at the free tour. This overrides any rate sheet or handbook you may be shown. |
| **Never publish an email address.** Contact is phone/text **(415) 350-5015** and Instagram DM only. | Owner decision. Restore only on explicit instruction. |
| **Never invent a testimonial, quote, parent name, review, rating, or staff-to-child ratio.** | Fabricated quotes on a childcare site are a licensing and reputation problem. "Small groups, low ratios" is approved language; a *number* is not, unless the owner supplies it. |
| **Licensed provider name + license #414005148 appear in the footer of every page.** | Required trust signal; removing it from a page is a regression. |
| **No emojis in site copy.** | Use the inline SVG icon sprite at the top of each page (`.ic` / `.icon`). Typographic glyphs (★ ☰ ✕) are UI characters and are fine. |
| **Every fact traces to [`FACTS.md`](FACTS.md).** Anything not in that file is a placeholder and must be visibly marked as one. | It is the single source of truth. Update `FACTS.md` first, then the pages. |
| **Only publish photos of children covered by a signed Photo & Video Release.** | Legal. If you did not get that confirmation from the owner for that specific photo, it does not ship. |

---

## Hard rules — data

**This repository is public.** Everything committed here is world-readable, forever, including in
git history after deletion.

Never commit: family or child names, parent contact details, enrollment or medical paperwork,
staff records, rosters, financial documents, insurance documents, API keys or credentials.

The owner's local working folder for this business holds enrollment agreements, a parent email
list, and insurance and tax documents. **None of that belongs in this repo and no developer needs
access to it.** If you are ever sent such a file, don't commit it — tell the owner.

---

## Design system

`css/styles.css` holds the whole system. Some of it looks wrong and is not:

- **The palette is deliberately collapsed.** The brand is one hue — sky blue `#45beea` — plus amber
  for action buttons **only**, plus neutrals. The legacy `--mint`, `--pink`, `--grape` variables are
  intentionally remapped to sky so old components fold into the current palette. **Do not "fix" them
  back to their original colors.** Mint/pink/grape exist only inside the logo artwork and photos.
- **Amber is for calls to action only.** It is not a decorative color.
- **Headings are Nunito 800.** No rounded display font.
- The dragon logo artwork is untouchable — no recolor, no redraw.
- Container width is 1240px / 94.5% — deliberately tight. Don't widen it.
- **Mobile (≤680px) is left-aligned by design.** Centering it is a regression.

---

## Testing before you open a PR

- Desktop and mobile widths — check ≤680px specifically.
- The **EN/RU toggle** in the header: every section on `index.html` has Russian content that must
  switch. Pages without Russian simply have no `.ru` spans. The choice persists via `localStorage`.
- Mobile nav opens and closes.
- No console errors.
- Every internal link and anchor still resolves; the phone link still dials.
- Bump the `?v=` query on `css/styles.css` links if you changed CSS, so returning visitors don't get
  a stale cached stylesheet.

---

## Don't touch without asking

| File / system | Why |
|---|---|
| `CNAME` | Binds the domain. Deleting or editing it takes the site off lalalandkids.care. |
| `robots.txt`, `sitemap.xml` | Live SEO. Fine to update deliberately; not fine to drop. |
| `_config.yml` | Keeps `README.md`, `CONTRIBUTING.md`, `FACTS.md` and `tools/` out of the published site. |
| **DNS / domain registrar** | Also carries the **MX, SPF, DKIM and DMARC records that run the business email**. A wrong edit silently kills mail. Owner-only, always. |
| Google Workspace / business email | Owner-only. |
| Repository settings, Pages settings, visibility | Owner-only (repo admin). |

---

## Getting help

Anything about facts, names, photos, pricing, licensing, or parent-facing wording → ask the owner,
don't guess. Anything about code structure → the whole site is 1,100 lines; read it.
