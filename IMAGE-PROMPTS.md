# Town Web Home — Image Generation Guide (v2)

Every image slot on the page, with exact **filename**, **size**, and a ready-to-paste **prompt** in your style. Drop each file into the path shown and the page picks it up automatically (until then you see a neat labeled placeholder).

> **Built in code — do NOT generate:** the Vanteve chat window, all hero UI chips, the browser/phone frames, the AI-minutes "6 hrs saved" stat. Only the slots listed below need art.
>
> **The AI-minutes visual is now a REAL screenshot slot** (per your note — no invented UI). Drop an actual ClerkMinutes product screenshot there.

---

## 0. Shared style — paste in front of EVERY prompt

> **Style:** Semi-stylized editorial illustration — *not photoreal, not flat 2D, not heavy 3D.* A premium, slightly futuristic civic-tech look: soft dimensional forms, gentle volume, clean shapes, a touch of glow. Warm and human, never cold or corporate. **Palette (strict — no brown, no green):** clean warm-beige (#F3EFE6), true near-black (#131316), white and neutral greys, with confident brand red (#E4291B / deep #BF1A0F) as the single accent. Soft natural light, subtle film grain, gentle depth of field. No text/gibberish, no watermarks, no logos, no clutter. Calm negative space.

Keep this identical across all images so the set is one family. **Avoid brown/tan/sepia AND green entirely — red is the only color accent.**

---

## 1. Hero — `images/hero-clerk.png`  ·  **REQUIRED**
**1200 × 1320 px** (portrait ~5:5.5)

> [shared style] A friendly municipal clerk (warm, capable, mid-career) at a tidy desk in a bright town-hall office, calm and confident. Beside her a softly glowing translucent dashboard floats in mid-air — clean civic UI fragments: a calendar, a list of meeting minutes, a small payment chart — as crisp semi-3D glass panels with red and green highlights. A plant, a coffee mug, a town seal hint blurred behind. Bright cream and red tones, fresh green accents, white light. Optimistic, a little futuristic. **No brown tones.**

---

## 2. Trust logos — `images/logos/muni-1.png` … `muni-5.png`
**~236 × 56 px each · transparent PNG · use your REAL municipality logos (don't generate).**
The strip recolors them to white over the dark band, so any solid logo works. Town-name text shows as fallback.

---

## 3. Website preview (desktop) — `images/website-preview.png`
**1280 × 840 px (16:10.5).** Best: a **real screenshot** of an actual Town Web municipal homepage. If illustrating instead:

> [shared style] A clean, modern municipal government homepage shown flat (straight-on, no perspective): welcoming hero banner with a warm small-town photo, a friendly headline zone, a row of quick-link tiles (Pay Bills · Agendas · Permits · Report an Issue), and a news column. Accessible, trustworthy, current. Cream/red/green tones, white space. Believable layout blocks, no real text.

## 3b. Website preview (mobile) — `images/website-mobile.png`
**440 × 880 px (9:18)** — the same site, single-column mobile.

---

## 4. Showcase gallery (3 sites)
The first is the **large featured tile**; the other two are smaller. Real site screenshots are ideal; otherwise idyllic-town illustrations — vary the landscape but keep one consistent style.

- `images/town-riverdale.png` — **820 × 620** (featured) — riverside New England town, white steeple, fresh light.
- `images/town-oakwood.png` — **560 × 420** — leafy Ohio main street, summer foliage.
- `images/town-pinehollow.png` — **560 × 420** — Vermont mountain village, pines.

*(Removed Clearview & Summit Hills tiles from the layout.)*

> [shared style] A small, picturesque American town as a clean civic illustration — [INSERT town above] — a calm establishing shot. Charming, welcoming, gently stylized; bright natural light; cream/red/green accents; a place a clerk is proud to serve. **No brown/sepia wash.**

---

## 5. Platform worlds — three DISTINCT looks

### `images/ops-internal.png` — World 01 · Internal Operations
**1000 × 850 px · DARK background (#131316), RED accents** — it sits on the dark "engine room" section.

> [shared style, on a near-black #131316 background with subtle glow] Two desktop monitors on a clean desk in a focused dim office, screens glowing with clean civic software: a meeting agenda with checkboxes, a minutes document, a records library. Crisp **red** UI highlights, cool white screen light. Semi-3D, polished, a little futuristic — the command center of a clerk's office. Calm, no clutter. **No brown.**

### `images/engagement-residents.png` — World 02 · Citizen Engagement
**1000 × 850 px · LIGHT cream background (#F3EFE6)** — it sits on the bright section.

> [shared style, bright cream #F3EFE6 background] A modern smartphone at a gentle angle, screen glowing, showing a stack of friendly town notification cards: a road-closure alert (red), a council-meeting reminder, a park-event notice (green). Soft notification bubbles and a faint broadcast/signal motif radiate outward. Warm, human, reassuring. Semi-3D, gentle glow, lots of light. **No brown.**

### `images/revenue-services.png` — World 03 · Revenue & Services
**1000 × 850 px · DEEP RED background (#9C1409), white/soft-red accents** — sits on the deep-red section.

> [shared style, on a deep brand-red #9C1409 background] A clean payments-and-services interface floating in space: a bill-pay panel with a crisp white "Paid" confirmation, a small facility-booking calendar, a permit card. A few soft coins / a card / a receipt as semi-3D props with white and light-red highlights. Money flowing in smoothly, services handled online. Polished, optimistic, futuristic. **White, cream and soft red on deep red — no green, no brown.**

---

## 6. AI Meeting Minutes — `images/minutes-screenshot.png`  ·  **REAL SCREENSHOT**
**1280 × 800 px (16:10).** Per your note — **don't generate a fake UI.** Drop a real ClerkMinutes product screenshot (timeline / transcript on the left, decisions sidebar, publish bar). It sits inside a frame on the **red** flagship section, so a light/neutral UI reads great. If you ever need a stand-in, a clean light app screenshot is fine — but a real product shot is the goal.

---

## 7. Vanteve — *(no image required)*
The Vanteve section is now a **light beige** section with a **dark chat console** (red accents) built in code — no image needed. *Optional only:* `images/vanteve-orb.png` (700×700, transparent) — a friendly glowing **red** AI "presence" orb, semi-3D, futuristic but warm. Skip unless you want extra flourish.

---

## 8. Support — `images/support-rep.png`
**1000 × 1100 px (~4:4.4 portrait).** A `callcard` overlaps its lower-left, so keep the subject slightly right-of-center.

> [shared style] A warm, friendly U.S.-based support specialist wearing a headset, mid-conversation and smiling genuinely, in a bright plant-filled office. A helpful neighbor, not a corporate call center. A faint town-hall view through a window behind, softly blurred. Bright cream/red/green tones, fresh daylight. Subject slightly right of center (leaves room at lower-left). Approachable, trustworthy, human. **No brown.**

---

## Quick checklist
```
images/hero-clerk.png            1200×1320   REQUIRED · light bg
images/logos/muni-1..5.png        236×56     real logos, transparent
images/website-preview.png       1280×840    real screenshot preferred
images/website-mobile.png         440×880    mobile of same site
images/town-riverdale.png         820×620    featured tile
images/town-oakwood.png           560×420
images/town-pinehollow.png        560×420
images/ops-internal.png          1000×850    DARK bg, red accents
images/engagement-residents.png  1000×850    LIGHT cream bg
images/revenue-services.png      1000×850    DEEP RED bg
images/minutes-screenshot.png    1280×800    REAL product screenshot
images/support-rep.png           1000×1100   subject right-of-center
images/vanteve-orb.png            700×700     OPTIONAL, transparent
```
**Built in code (no image):** Vanteve chat, hero chips, browser/phone frames, "6 hrs saved" stat, edit-row list.
