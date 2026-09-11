# Lala Land Child Care and Preschool — Content Source of Truth
Every fact on the site must trace back to this sheet. Anything not here is a placeholder and must be visibly marked as such.

Sources: the owner's instructions (2026-07-20), **LalaLandHandBook.docx** + **FILE_7558.docx**
(attached 2026-07-20, content authored ~Oct 2025), previous-site text ("LalaLandWebsite text EN - RU"),
video shot list ("Lala Land Kids - Video List, Scripts & Editing Plan.docx").

## ✅ Resolved by the owner (2026-07-20/21)
- **No email on the site — "no email for now."** All email addresses removed (contact section,
  footers, forms). Contact is **phone/text (415) 350-5015 + Instagram DM** only. This also moots
  the earlier info@lalalandkids.org question. Restore email only when the owner says so.
- **No emojis anywhere.** Professional inline-SVG icon sprite instead (defined at the top of
  each page; classes `.ic` / `.icon`). Typographic glyphs (★ ratings, ☰ menu, ✕ close) are
  UI characters, not emoji, and stay.
- **HYBRID BRAND (owner, 2026-08-05):** dragon logo untouched; site palette = sky blue
  (brand) + amber (action buttons ONLY) + neutrals; Nunito 800 headings (no rounded display
  font). Mint/pink/grape exist only inside the logo and photos. Legacy CSS hue variables are
  deliberately remapped to sky in styles.css — do not "fix" that.
- **GO-LIVE approved by the owner, 2026-08-05** ("place holders for now, and we go live").
  Placeholder photos/videos may ship; SAMPLE testimonials may NOT — they live in
  `drafts/testimonials-quotes-DRAFT.html` (excluded from deploy) until real quotes exist.
  DNS cutover per ~/Documents/LalaLandKids-Domain-Cutover-2026-08-05.md (MX untouchable).
- **No prices on the website — ever.** "We do not show prices any more, we simply show what
  type of services we offer and we talk price during the tour." No dollar amounts of any kind
  (monthly, PT, hourly) anywhere on the site. This supersedes the handbook's published rates
  and closes the earlier rate conflict.
- **Infants = 0–24 months** (not 0–18). Toddlers & preschoolers = 24 months – 5 years.

## Identity
- Formal name (owner, 2026-08-05): **"Lala Land Child Care and Preschool"** — use in titles,
  footers, © lines, license lines. Short form in flowing copy: **"Lala Land"**.
  ("Lala Land Kids" is retired as a public name; the domain/IG handle keep the old slug.)
- Domain: **lalalandkids.care** · Instagram: **@lalalandkids_fostercity**
- Licensed provider: **Gulsum Ahmadova** · CDSS Community Care Licensing **#414005148**
- Mother–daughter duo: **Gulsum** (mother of three, founder) + **Lala** (mother of one, activities)
- **MULTILINGUAL (owner, 2026-08-05): English-focused, with Turkish, Azerbaijani, and Russian.**
  "Bilingual EN–RU" positioning is retired. The site's EN/RU UI toggle stays (UI languages ≠
  spoken languages). Tagline: "Powered by a mother's love. Guided by a daughter's heart."

## Contact
- Phone: **(415) 350-5015** (call or text) — the primary CTA site-wide
- **No email displayed anywhere** (owner, 2026-07-21)
- Address: **842 Chrysopolis Dr, Foster City, CA 94404** (footer must include ZIP)
- Instagram: **@lalalandkids_fostercity** (secondary contact channel)

## Hours (handbook)
- Drop-off 8:00–9:30 AM · pick-up until 6:00 PM · Monday–Friday
- After-hours care by appointment · holiday closures announced in advance

## Programs & enrollment (NO PRICES — see Resolved above)
- **Full-time Infants: 0–24 months** · Monday–Friday, 8 AM–6 PM
- **Full-time Toddlers & Preschoolers: 24 months–5 years** · Monday–Friday, 8 AM–6 PM
- **Part-time:** all age groups · custom schedules
- **Full & half-day care:** no age requirement · appointment needed · minimum half day ·
  hourly options exist (mention the format, never a number)
- All pricing is discussed in person at the free tour (or by phone) — never in writing on the site
- Free tour; every child who tours takes home a plush dragon 🐉

## Program (handbook + previous site)
- Activities: free play, storytime, brain & movement games, imaginative play, outdoor fun,
  snack & rest, music & movement, arts & crafts
- Skills: reasoning, pronunciation, language skills, motor skills, social skills, imagination
- Sample daily schedule (ages 18 months–5 years): breakfast 9:00, activities 9:30, snack 10:00,
  outdoor 10:30, lunch 12:00, nap 12:30–2:30, creative 3:00, dinner 4:00, play/quiet until 6:00
- Nutrition: 5 meals/day (3 main + 2 snacks) · low salt & sugar · fresh vegetables, fruits,
  whole grains, proteins, yogurt, milk, eggs

## Parents & safety (handbook)
- Individual requests: flexible feeding/nap schedules, early drop-off or pick-up
- Daily updates: written summaries + photos
- Secure entrances/exits, restricted electronic access, surveillance systems
- Child-proofed rooms (rounded edges, non-toxic materials), safety drills & emergency plans
- Daily cleaning/sanitation, **HEPA air filtration**, sick-child policies with isolation procedures
- Fully enclosed playgrounds, safety surfaces, weather-adjusted outdoor play
- Staff trained in first aid, CPR, emergency response (handbook "Certified Teachers and Staff")

## From the owner's video scripts (approved marketing language)
- "Small groups, low ratios" (no specific number — never invent one)
- Sign-in/sign-out by approved adults only; teachers trained and background-checked
- "Come see a normal day, unannounced — a great daycare always says yes"

## Placeholders (replace before any launch)
- Testimonial quotes/names (marked Sample) · gallery photos · all 9:16 video slots ·
  Google review link · newsletter signup (returns when an email service is connected)

## Hard rules
- Never publish ANY dollar amount — full-time, part-time, or hourly (owner, 2026-07-20)
- License number + provider name in the footer of every page
- Site is LIVE at https://lalalandkids.care (since 2026-08-06). A merge to `main` publishes immediately.
