# Town Web — Design System

This document defines the visual language for towNweb.com and the Clerkware™ product surface. It exists because the current build still drifts toward generic AI/SaaS aesthetics (italic-heavy headings, plastic floating cards, repetitive section rhythm, predictable hero layouts). The rules below are the corrective.

If a future change disagrees with one of these rules, **update this document first**, then change the code. Rules without rationale rot fast.

---

## 1. Brand visual voice

Town Web sells civic infrastructure software to municipal clerks. The visual language must read like a piece of trustworthy public-sector tooling that happens to be modern — closer in spirit to GOV.UK, Boston.gov, or a financial-document brand than to a Silicon Valley landing page.

The goal: a small-town clerk and a county IT director both feel "this looks serious, capable, and intentional."

**Voice attributes (visual):**

| Lean into | Avoid |
|---|---|
| Trustworthy | Trendy |
| Editorial | Promotional |
| Anchored | Floating |
| Specific | Aspirational |
| Civic | Corporate |
| Quiet | Loud |
| Document-feeling | Brochure-feeling |

**Reference benchmarks (look at these before adding anything new):**

- Lean into: **GOV.UK**, **Hel.fi**, **Boston.gov**, **Cambridge MA**, **NYC.gov**, **US Web Design System**, **FT.com**, **NYT product pages**, **Stripe Docs**.
- Avoid: Linear, Vercel, Notion marketing, Airbnb, Webflow templates, most YC company sites.

If you find yourself reaching for something that's on the second list, stop. Either find a precedent on the first list, or simplify until you don't need a precedent at all.

---

## 2. Colour

### 2.1 Roles, not options

Colour decisions are made by role, not by hex. There are seven roles. Designers pick a role; the role resolves to a token; the token resolves to a hex. New shades aren't allowed without adding a role to this table.

| Role | Token | Hex | Where it appears |
|---|---|---|---|
| Canvas (default page bg) | `--canvas` | `#fbfaf7` | Body, light section default |
| Surface (cards) | `--paper` | `#ffffff` | Card bodies, panels |
| Warm surface (rare) | `--paper-warm` | `#fafafa` | Bento cards |
| Civic beige | `--canvas-beige` | `#f8f5e8` | Hero + marquee continuity only |
| Ink (text + dark sections) | `--ink-900` → `--ink-100` | `#0a0c12` → `#e6e8ee` | All text, dark CTAs |
| Brand red | `--accent` | `#e7000b` | Primary CTAs, focus, single emphasis |
| Compliance green | `--mint` | `#0fb37e` | Status: online / success / compliance only |

### 2.2 Red is not decoration

Red appears in **at most five places** on any page:

1. The brand mark (logo swooshes).
2. The primary CTA button.
3. One emphasised word in the H1 (only one).
4. Keyboard focus rings.
5. The Clerkware column in the compare table, or a single live-status dot.

Red is never a default border colour, never a hover background, never a generic "section accent dot," never a label colour for routine eyebrows.

**Rule of thumb:** if more than two reds are visible in a single viewport at once, something is wrong.

### 2.3 Beige is a wash, not a backdrop

`#F8F5E8` is the civic-beige that ties the hero into the marquee strip. It does not reappear lower on the page. The body of the site lives on `#fbfaf7` → `#fff`. Alternating beige/white section stripes are forbidden (see §5.1).

### 2.4 Green is for safety, not flavour

Mint green (`--mint`) is reserved for compliance/success states (live indicator, "Subscribed", "All systems operational", ADA pass). It is not a third brand colour. Don't introduce green as a "soft accent" — that's how SaaS sites end up with rainbow chip rows.

---

## 3. Typography

### 3.1 Type stack

- **Headings: Exo** — weights 500, 600, 700, 800. Modern, slightly bold sans for all h1–h6 across the site. Civic-tech tone — confident but not playful or sci-fi.
- **UI / body: Inter** — weights 400, 550, 600, 650, 700. Feature settings `"ss01", "cv11"` enabled site-wide. Numerals (stats, step badges, big-stat blocks) stay in Inter for clean tabular figures.
- **Editorial display: Source Serif 4** — italic 500 only. Reserved for emphasis on internal pages (see §3.4). Not used on the homepage hero anymore (see §6).
- **Mono: JetBrains Mono** — only used inside mock screenshot chrome (URL bars).

No other typefaces. No second sans for "personality." Exo is for hierarchy, not flavour.

### 3.2 Scale (do not drift)

| Token | Size | Use |
|---|---|---|
| Display | `clamp(40px, 5.6vw, 76px)` | One per page — the homepage hero |
| H1 | `clamp(34px, 4.4vw, 58px)` | Page-hero title |
| H2 | `clamp(28px, 3.6vw, 44px)` | Section heading |
| H3 | `clamp(20px, 2.2vw, 28px)` | Sub-section / pillar header |
| H4 | 17–18px | Card title |
| Lead | 17–19px | Hero sub, section intro |
| Body | 15–16px | Default running text |
| Meta / caption | 12–13px | Labels, breadcrumbs |
| Eyebrow | 10.5–11px, 0.14em tracking, uppercase | Section tag |

### 3.3 Weight rules

- Headings: **650–700**. Never 800/900 (that's startup heavy-display). Never thin.
- Body: 400 default, 500 for lead paragraphs, 600 for inline emphasis.
- Buttons: 650.
- Eyebrows: 700.

### 3.4 Emphasis (strict)

Italic Source Serif emphasis is the single most over-used pattern in earlier builds. The rules:

- **At most one italic-serif phrase per page**, and it sits inside an internal-page H1. Example: "for *modern* municipalities."
- The **homepage hero is an exception going the other way**: its H1 accent ("Clerkware™") is rendered in red, in the same Exo heading face as the rest of the title — **no italic serif, no font swap**. The hero leads with brand colour for emphasis, not type style.
- Subsequent H2s, H3s, paragraph copy, and CTA labels: **no italic serif**. To emphasise: use ink-900 weight 700, or a quoted phrase, or a small accent dot — anything but more italics.
- Lists, captions, eyebrows, breadcrumbs: **never** italic.
- Italic must always carry a semantic `<em>` for screen readers.

### 3.5 Tracking + leading

| Style | Letter-spacing | Line-height |
|---|---|---|
| Display | -0.035em | 1.05 |
| H1–H2 | -0.025em | 1.10 |
| H3–H4 | -0.015em | 1.20 |
| Body | 0 | 1.55 |
| Lead | -0.005em | 1.55 |
| Eyebrow | 0.14em | 1.0 |

### 3.6 Don't

- No thin (100–300) weights anywhere visible.
- No serif body text. Inter only for body.
- Don't centre body paragraphs longer than two lines.
- Don't all-caps anything longer than four words.
- Don't justify text. Ragged-right always.
- Don't fade text with low opacity to convey hierarchy. Use weight + size.

---

## 4. Borders, radius, shadows

### 4.1 Radius is restrained

| Element | Radius |
|---|---|
| Buttons | 10–14px |
| Inputs | 10–12px |
| Cards | 16–18px (NOT 24+) |
| Section panels | 20–24px |
| Pills / badges | 999px |
| Photographs | 0 or 4px |
| Avatar circles | 50% |

**Rule:** a radius is never larger than the element's smallest visible padding. A card with 28px padding can have at most ~24px radius — but 16–18px reads more grounded.

### 4.2 Borders are structural

- Default border: `1px solid var(--ink-100)`.
- Strong border (rare, used for the Clerkware column or a featured insert): `1.5px solid var(--ink-900)`.
- Coloured borders: only when the element *is* the colour (e.g., the red Clerkware column has accent-line borders top + bottom).

**Forbidden:** gradient borders, glowing borders, "outline + drop-shadow" combinations, double-stacked borders, dashed-border decorative rectangles around real content.

### 4.3 Shadows are reluctant

| Token | When |
|---|---|
| `--shadow-xs` | Cards, inputs at rest |
| `--shadow-sm` | Subtle elevated panels (call card, status bar) |
| `--shadow-md` | On hover only, or the AI-Minutes flagship screenshot |
| `--shadow-lg` | Reserved for the AI Minutes screenshot frame and the Clerkware core. Used at most twice per page. |
| `--shadow-ink` | Forbidden on cards. Reserved for the eco-core. |

No "elevated card on entry" patterns. Cards sit on the page. They lift only on hover, and by no more than 2px.

---

## 5. Spacing philosophy

### 5.1 Section rhythm (most important rule on this page)

The current page risks a pattern of "white / beige / white / beige / dark / white" — that's SaaS landing rhythm.

Use four section types and **never repeat the same type twice in a row**:

1. **Light editorial** — text on white/canvas, no grid. (Section *heading alignment* is governed separately; see §5.5 — homepage section heads default to centred.)
2. **Two-column** — comparison split, sticky storytelling, bento.
3. **Dark anchor** — single CTA, quote, or full-bleed dark band. One per page maximum.
4. **Bordered insert** — table, dashboard mock, stat strip on its own surface.

Document the page as a sequence: `1 → 2 → 1 → 4 → 2 → 3 → 1 → 3`. If you find yourself writing `1 → 1 → 1`, refactor.

### 5.5 Section-heading alignment

Independent of section *type*, the heading block (eyebrow + h2 + lead) has a default alignment per page:

**Homepage:** section headings + subheadings are **centred** by default. Three explicit exceptions stay left-aligned because their layout is asymmetric and the heading anchors a specific column:

- "Trusted by municipalities across the U.S." (the trust strip — heading is not a `.sec-head`, it's the row's left label).
- "Considering a switch from a larger provider?" (`.switch-home` — heading sits in the left copy column).
- "The civic workflow, end-to-end / From request to resolution." (the dark workflow band — heading anchors the left of a 2-col split).

**Internal pages:** section headings + subheadings are **centred** by default. The **only** exception is the page hero / page intro block at the top, which stays left-aligned (it's an asymmetric editorial intro, not a section head).

Implementation: `.sec-head` is centred by default in CSS. Opt out with `.sec-head-left`, `.sec-head.split`, `.sec-head.sec-head-split`, or a section-specific modifier (e.g. `.wf-head` on the workflow dark band).

### 5.2 Section padding

| Section | Padding (top / bottom) |
|---|---|
| Hero | 96–140px / 80–120px |
| Standard | 80–128px / 80–128px |
| Tight (related blocks) | 48–72px / 48–72px |
| Stripe (logos, single stat row) | 32–60px / 32–60px |
| Dark anchor | 96–160px / 96–160px |

### 5.3 Grid + container

- `container`: 1240px max
- `container-wide`: 1360px max
- Gutter: 48px desktop, 28px mobile
- **Never centre-align a column wider than 720px.** Beyond that, anchor left or use a real grid.

### 5.4 Inline spacing

- Vertical rhythm between siblings: 14 / 18 / 24 / 32 / 48 / 64. No 17px, no 23px gaps.
- Eyebrow-to-heading: 8px.
- Heading-to-lead: 14–18px.
- Lead-to-CTA: 28–32px.
- Card padding: 24–28px.

---

## 6. Hero philosophy

### 6.1 What the hero is NOT

- Centred title + sub + two buttons + four logos.
- Floating product card or screenshot levitating on the right.
- Word-cycling headline ("websites / payments / AI minutes ...").
- 12-logo "trusted by" carousel strip across the bottom.
- Stock photo with a colour wash.

### 6.2 What the hero IS

- **Asymmetric.** Copy left, single anchor visual right (video, photo, or carved-out illustration). The visual sits with breathing room on the right edge — no full bleed; padded ~24–56px from the container edge so the image doesn't run hard against the viewport.
- **Named.** The headline must contain a noun a clerk recognises: "Clerkware", "minutes", "permits", "ADA". Never abstract verbs ("Empower. Transform. Modernise.").
- **Brand-coloured accent, same face.** The accent word in the H1 ("Clerkware™") is set in red (`--accent`) in the same Exo heading face as the rest of the title. **No italic serif on the homepage hero** — emphasis comes from colour, not type style.
- **One primary, one secondary CTA.** No third button.
- **A tight trust strip:** three stats max, set in Inter, no logos, no marquee. The marquee is its own section directly below.
- **Beige.** The hero sits on `#F8F5E8`, no gradient.

### 6.3 Hero video rules

- `object-fit: contain` with `object-position: right center`. Never `cover` (that crops).
- Left-side gradient overlay in matching beige rgba stops so the copy stays legible.
- Video must be brand-palette (warm beige + ink). No teal/purple SaaS gradients.
- Respect `prefers-reduced-motion`: pause autoplay.

---

## 7. Mega menu philosophy

### 7.1 What it is NOT

The default SaaS mega-menu — three identical columns of "icon · feature name · short tagline" with rounded gray icon squares — should be avoided. It's the Notion/Linear template, and clerks recognise it instantly as generic.

### 7.2 What it IS

- Editorial. At least one element is a *featured item* (image thumbnail, short paragraph, or a single product hero), not just a flat list.
- Items horizontally legible in 1 or 2 columns. Three columns only if the dropdown is full-width and items are intentionally bucketed (Operations / Resident services / Revenue, as we currently use).
- Item descriptions are 2–4 words max ("Email · text · voice"), never sentences.
- Icons are **monochrome ink at rest**, no colour fills. Hover tints them with `--accent`.
- Hover state: faint background + icon colour shift. Not a card lift, not a shadow.

### 7.3 Hard caps

- Max 9 items per dropdown (Town Web has exactly 9 products — keep it that way).
- Max 2 nesting levels (h6 category → item).
- No emoji.
- No "New" / "Popular" badges unless something is genuinely new in the last 30 days.
- No video previews or thumbnails on hover (we're not Vercel).

---

## 8. Card philosophy

### 8.1 Anchoring, not floating

Cards on Town Web should feel like inset panels in a document, not floating tiles. Concretely:

- Border: `1px solid var(--ink-100)`, always visible.
- Shadow: `none` or `--shadow-xs` at rest. **Never** `--shadow-lg` on a card at rest.
- Background: `--paper` (#fff) or `--paper-warm`. No gradient backgrounds on standard cards.
- Hover lift: max 2px transform; shadow may step from `xs` to `sm`, not above.
- Radius: 16–18px. Cards larger than 320×320 may go to 20px, never higher.

### 8.2 Composition (what's IN a card)

Top to bottom, in order, with optional layers marked:

1. (Optional) small kicker — 10.5px uppercase, used sparingly.
2. Title — 16–22px, weight 650.
3. Body — 14px, two lines maximum.
4. (Optional, but only ONE of these) one row of metadata, OR one inline illustration. Not both.

### 8.3 What a card never has

- A "big stat number" inside a small product card. Stats live in their own band.
- A circle "→" pill at the bottom of every card. If the entire card is a link, the chevron is redundant.
- Multiple coloured pills. One status pill is the maximum.
- Photograph + icon + title + stat in the same card. Pick two.
- A different background colour to indicate it's "the important one." Use position and size for hierarchy, not a darker fill.

### 8.4 The "flagship" treatment

The dark-inverted card pattern (used on bento for Signature products) appears **at most once per section**. We currently have three pillars in a row — that's three identical dark cards stacked on the page. Either differentiate (one dark per pillar) or remove the variant entirely and rely on size to signal hierarchy.

---

## 9. Buttons + interactions

### 9.1 Variants (only these)

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | Red gradient | White | None |
| Outline | White | Ink-900 | Ink-100 |
| Ghost | Transparent | Ink-900 | None (hover: paper) |
| On-dark | White | Ink-900 | None |

No "primary on dark inverse," no "tertiary," no "danger."

### 9.2 Sizing

- `sm` — 40px min-height. Used in nav and inside forms only.
- default — 50px.
- `lg` — 56–58px. Used in hero CTA and final CTA only.

### 9.3 One primary per viewport

Only one primary red gradient button should be visible above the fold of any section. If you find two side-by-side, the second should be outline.

### 9.4 Don'ts

- No glowing shadow on a button at rest.
- No trailing circular arrow-pill around the chevron. Use a single → glyph or none.
- No icon-only buttons except in toolbars (hamburger, close).
- Button labels are verbs: "Book a demo", "Request a quote", "Get help". Never "Get started", "Learn more", or "Click here".

---

## 10. Iconography

### 10.1 Style

- One family throughout. **Stroke 1.8, rounded line caps + joins, viewBox 24×24, no fill** is the default.
- Filled (currentColor) icons reserved for: the eco-core orbit, dark sections, and the brand mark.
- The current build mixes stroked and filled variants — pick stroked as the default and convert any stray filled icons (other than the orbit) to outline.

### 10.2 Containers

- A square icon container (rounded 9–12px, faint background) is allowed only when every sibling icon uses the exact same container shape and size.
- Don't wrap a standalone glyph in a coloured square for decoration. A 16px glyph next to a sentence is fine on its own.

### 10.3 Forbidden

- Emoji icons in product UI. The article thumbnails currently use 📱 ♿ 🔒 — replace with monochrome glyphs or a uniform set of hand-illustrated thumbnails.
- Two-tone icons.
- Icons in heading text used decoratively (✨ Introducing... → no).
- Icon-and-pill combos: icon, then a small coloured background pill, then text. Pick icon OR pill.

---

## 11. Imagery + screenshots

### 11.1 Photography

When real photos appear (team, office, civic spaces):

- **Real photography only.** No stock smiling-team-around-laptop.
- Suggested subjects: town hall buildings, civic interiors, paper documents on desks, telephones, hands on keyboards.
- Treatment: mid-tone, slightly desaturated, warm. Lean into Wisconsin afternoon light.
- Crop with intent. Off-centre subjects. No symmetric portraits.
- Radius: 0 or 4px. Photos are documents, not stickers.

### 11.2 Product screenshots

- Always inside a thin chrome frame: 3 dots + URL on the left, no glow, no perspective tilt, no detached floating shadow.
- Frame border: `1px solid var(--ink-100)`. Radius: 12–16px.
- Caption underneath in 12px `--ink-400`, left-aligned, never centred.
- One screenshot per section maximum.

### 11.3 Placeholder screenshots (current state)

We use the "Screenshot placeholder" pattern. Keep it. Rules:

- Always name what should be in the slot. "ClerkMinutes editor — left timeline, decision sidebar, publish bar." Not "Some dashboard."
- The placeholder frame should match the eventual real frame (same chrome, same radius, same border) so the design doesn't shift when assets land.
- Once a real asset is available, drop it in directly — never style the real asset to look like the placeholder.

### 11.4 Forbidden imagery

- 3D dashboard mockups tilted at -15°.
- Glassmorphism overlay panels.
- "Floating" product card mocks at -7° rotation.
- Cartoon civic illustrations (firefighters waving, animated mailboxes).
- Anything generated by an obviously identifiable AI image model.

---

## 12. Motion philosophy

### 12.1 When to animate

- **Entrance reveal:** `opacity 0 → 1` + `translateY(20px → 0)`, 0.8s ease-out, exactly once per element. Driven by IntersectionObserver. Default for `[data-reveal]`.
- **Hover:** 200ms ease, max 2px transform or a colour change. Never both AND a shadow change at the same time.
- **Live state:** a single pulsing dot is allowed for genuinely-live indicators (online, recording). **One per page.**

### 12.2 Forbidden

- Floating cards on an infinite Y-axis loop (the previous hero had three).
- Word-cycling headlines.
- Auto-rotating carousels — with one tightly scoped exception: the homepage testimonial block may auto-shuffle (≥7s interval, pauses on hover, respects `prefers-reduced-motion`). It must remain minimal — single quote visible, arrow + dot controls only — and is the only auto-advancing component on the site.
- Parallax on hero background.
- Gradient hue-rotate animation.
- Any entrance animation longer than 1 second.
- Animations on body copy paragraphs.
- Counters animating up from 0.
- Marquees longer than one row of logos.

### 12.3 Reduced motion

Respect `prefers-reduced-motion: reduce` for **everything decorative**. Specifically: the radar pulse, the flow line, the marquee, the floating cards, the eco-core rotating dashed ring, the flagship step auto-cycle. They all stop. Buttons may still transition colour/border.

---

## 13. Accessibility

These are non-negotiable. A municipal product that fails accessibility is a contradiction.

### 13.1 Contrast

- WCAG 2.1 AA minimum: 4.5:1 for body text, 3:1 for text ≥18px.
- All red-on-white pairings audited (`--accent` on white passes; `--accent` on `--paper-warm` borderline — verify).
- All white-on-dark pairings audited.
- Test every new colour pairing.

### 13.2 Focus

- Visible focus on every interactive element: `2px solid var(--accent)`, `3px outline-offset`. Already set globally via `:focus-visible`.
- Never disable focus outlines. Use `:focus-visible` not `:focus` so mouse users don't see rings.

### 13.3 Targets + structure

- All buttons + inputs reach 44×44 hit target on mobile.
- Form labels are real `<label>` elements, never placeholders-as-labels.
- Tables use proper `<thead>` + `<th scope>`.
- Skip-to-main link is present and visible on focus.
- Headings step down without skipping levels (h1 → h2 → h3, never h1 → h3).

### 13.4 Decorative vs semantic

- Decorative icons: `aria-hidden="true"`. Icon-only buttons get `aria-label`.
- The Clerkware orbit diagram gets `role="img"` + `aria-label="Clerkware — the core of the Town Web civic platform"` on the core. Don't try to make the orbit interactive for keyboard users — each product node is reachable via the normal product list further down.

### 13.5 Content-level

- All-caps text limited to ≤4 words and given `letter-spacing: 0.12em` minimum.
- Italic emphasis always doubled with semantic markup (`<em>`).
- Smart quotes (" "), not straight (" ").
- Em dash with spaces (` — `), not hyphens used as dashes.

---

## 14. Forbidden patterns

A short list. These should never appear on Town Web.

1. **Floating shadowed cards stacked on a video background** (the previous hero).
2. **Three icon-and-paragraph columns** describing benefits.
3. **Identical 12-logo "trusted by" strips** with greyscale corporate logos.
4. **Faux 3D dashboard screenshots** tilted at -15°.
5. **Word-rotators in headlines** ("for clerks / for residents / for revenue / ...").
6. **Gradient brand text fills** (e.g. red-to-orange `background-clip: text`).
7. **Glassmorphism panels** with blur + low-opacity border.
8. **Glowing buttons** with hue-rotating shadow.
9. **Centred everything** (centred hero, centred section, centred footer columns).
10. **Italic emphasis** on more than one phrase per page.
11. **Stock photography** of smiling diverse office workers around a MacBook.
12. **Animated dotted lines** connecting cards to each other. Static lines fine.
13. **"Floating" product card mocks** at -7° rotation.
14. **"Get started"** as a button label. Use specific verbs: "Book a demo", "Request a quote".
15. **Generic SaaS jargon:** "Empower." "Transform." "Reimagine." "Built for the next generation of..."
16. **Trinity headlines:** "Fast. Simple. Reliable."
17. **Counter-up number animations.** Numbers stay still.
18. **Auto-playing audio.**

---

## 15. Do / Don't quick reference

### Section headings

- **Do:** `For your team` followed by a smaller `Internal Operations` line.
- **Don't:** `Built for the next generation of municipal teams ✨`.

### Stats

- **Do:** A single, anchored stat band, 3 cells, sans-serif weight-700 numerals.
- **Don't:** Serif-italic numerals scattered into every product card.

### Backgrounds

- **Do:** 90% white/canvas, 10% deep ink, one beige moment (hero/marquee continuity).
- **Don't:** Alternating beige/white stripes top-to-bottom.

### Hero

- **Do:** Real noun in the title, real video, asymmetric layout.
- **Don't:** "Software. For your town. Reimagined." centred, with a floating dashboard.

### Cards

- **Do:** One inline icon, title, two lines of copy. Optional kicker.
- **Don't:** Kicker + title + body + stat + chevron + hover-glow.

### CTAs

- **Do:** "Book a demo" / "Request a quote" / "Get help".
- **Don't:** "Get started" / "Learn more" / "Discover more" / "Explore →".

### Emphasis

- **Do:** One italic-serif phrase, in the H1, with `<em>`.
- **Don't:** Italic-serif in every section heading.

### Eyebrows

- **Do:** Compact pill that hugs its text, 10.5px / 0.14em tracking.
- **Don't:** Wide pill with stretched padding, dot + label, repeated above every section.

### Icons

- **Do:** Stroke 1.8, rounded caps, monochrome ink, sized 16–22px.
- **Don't:** Emoji, two-tone, gradient-filled, or in a coloured rounded square for decoration.

### Compare table

- **Do:** Mute competitor columns (gray text, no icons). Highlight Clerkware with one coloured column.
- **Don't:** Give every "yes" cell a green pill — the table reads as a green wall.

---

## 16. Summary — read this if nothing else

1. **Anchored, not floating.** Cards sit in the page with thin borders and minimal shadow. Nothing levitates.
2. **Editorial, not promotional.** The site reads like a public document: tight type, restrained emphasis, hierarchical headings.
3. **Italic emphasis at most once per page.** Source Serif italic is the seasoning, not the dish.
4. **Red is reserved.** Brand red shows up only for true emphasis: primary CTA, brand mark, headline accent, focus state.
5. **One beige moment per page.** The warm tone belongs at the hero/marquee continuity, not as alternating section paint.
6. **Predictable rhythm is the enemy.** Vary section types (editorial, comparison, dark anchor, bordered insert). Never repeat the same type twice in a row.
7. **Specific over generic.** Real nouns ("Clerkware", "minutes", "FOIA"), real cards, real CTA verbs, no SaaS jargon.
8. **Civic, not corporate.** Reference GOV.UK and Hel.fi, not Linear and Notion.

When in doubt, ask: "would this fit on a published town-hall document?" If the answer is no — it doesn't belong.
