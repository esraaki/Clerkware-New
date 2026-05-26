# Town Web — Clerkware site (Vite / React)

This is the React + Vite version of the Clerkware marketing site.
It mirrors the original static site pixel-for-pixel; the conversion is purely
technical (build tooling + component structure). Design rules live in
[`DESIGN.md`](./DESIGN.md) — update that document before changing visual
behavior.

The previous static version still lives at `../Clerkware Github/` as a backup —
do not delete it.

---

## Quick start

```bash
npm install      # install React + Vite
npm run dev      # local dev server on http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build on http://localhost:4173
```

No backend. No database. Static frontend only.

---

## Project layout

```
.
├── index.html              # Vite entry — loads /src/main.jsx
├── vite.config.js
├── package.json
├── README.md
├── DESIGN.md               # design system rules (authoritative)
├── public/
│   └── assets/
│       ├── images/         # photographs, screenshots, logos
│       ├── icons/          # standalone icon files (currently empty)
│       └── videos/         # video assets (currently empty)
└── src/
    ├── main.jsx            # React entry, mounts <App />
    ├── App.jsx             # router shell — picks a page based on the hash
    ├── styles.css          # full site CSS (single file, organized by section)
    ├── components/
    │   ├── layout/         # Header, Footer, BrandLogo
    │   ├── home/           # one component per homepage section
    │   └── shared/         # FAQ, PageHero, CTABand, DetailTemplate, FormCard, ArticleCard
    ├── pages/              # one file per route (Home, Features, FeatureDetail, …)
    ├── data/               # plain JS data — features.js, services.js, articles.js, testimonials.js, topicIcons.js
    ├── hooks/              # useReveal, useTestimonialCarousel, useFlagshipSteps, useHashRoute
    └── utils/              # reserved for misc helpers (currently empty)
```

### Asset paths

All assets live under `public/assets/` and are referenced with absolute paths
that start with `/assets/...`. For example:

```jsx
<img src="/assets/images/hero-image.png" alt="..." />
```

This works the same way in dev (`vite`), in preview (`vite preview`), and on
Cloudflare Pages.

Do **not** use Mac local paths (`/Users/...`) or paths with leading
`../assets/...` from JSX — those break in production.

### Routing

The app uses hash-based routing — the same scheme as the original static
site — so URLs look like `#/home`, `#/feature/meetings`, `#/legal/privacy`.
Hash routing avoids needing any server-side rewrite rules on Cloudflare.

Route logic lives in [`src/hooks/useHashRoute.js`](./src/hooks/useHashRoute.js)
and [`src/App.jsx`](./src/App.jsx) — `App.jsx` is the single switch statement
that maps a parsed hash to a page component.

To add a route:

1. Create a new file under `src/pages/`.
2. Import it in `App.jsx` and add a case to `renderRoute`.
3. Link to it from anywhere with `href="#/your-route"`.

---

## Cloudflare Pages deployment

| Setting              | Value           |
| -------------------- | --------------- |
| Framework preset     | **None** (Vite) |
| Build command        | `npm run build` |
| Build output dir     | `dist`          |
| Root directory       | `/` (repo root) |
| Node version         | 18 or 20        |

That's the full configuration. No environment variables required. No
`_redirects` file needed (hash routing handles client-side navigation).

### From scratch on Cloudflare

1. Push this folder to a GitHub repo (`git init && git add . && git commit`).
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo, then enter the build settings above.
4. Deploy. Cloudflare will assign you a `*.pages.dev` URL and rebuild on every push to `main`.

### From the existing GitHub repo

If the repo is already connected, push to `main` — Cloudflare rebuilds
automatically. No further configuration needed.

---

## Adding or editing blog articles

Field-notes articles render on `/resources` as cards using the
[`ArticleCard`](./src/components/shared/ArticleCard.jsx) component, sourced
from [`src/data/articles.js`](./src/data/articles.js).

### Add a new card-only article

Append a new entry to `ARTICLES` in `src/data/articles.js`:

```js
{
  icon: `<svg viewBox="0 0 24 24" ...></svg>`, // any inline SVG markup
  meta: 'Operations · 5 min read',
  title: 'Your article title',
  body: 'One-paragraph teaser shown on the resources page card.',
}
```

That's it — the card will appear on the next reload.

### Add a full article *page* later

The data model is already future-proofed. When you're ready for full articles:

1. Add a `slug` and `body` (long-form content, e.g. markdown or JSX) to each
   `ARTICLES` entry. The existing `ArticleCard` component already wires the
   card as a link to `#/article/${slug}` when `slug` is present.
2. Create `src/pages/ArticleDetail.jsx` that looks up the entry by slug and
   renders it (use `PageHero` for the headline, then your body markup).
3. Add a `'article'` case in `src/App.jsx`'s `renderRoute` switch, similar to
   how `feature` and `service` are handled today.

No other changes needed — the rest of the system is already set up for it.

---

## Editing the site

| Want to change…                  | Edit…                                                 |
| -------------------------------- | ----------------------------------------------------- |
| A homepage section               | `src/components/home/<Section>.jsx`                   |
| The header / mega menu           | `src/components/layout/Header.jsx`                    |
| Feature page copy (meetings, …)  | `src/data/features.js`                                |
| Service page copy (design, …)    | `src/data/services.js`                                |
| Testimonials                     | `src/data/testimonials.js`                            |
| Topic icons on feature pages     | `src/data/topicIcons.js`                              |
| Articles on /resources           | `src/data/articles.js`                                |
| Any CSS / spacing / colour       | `src/styles.css` (with `DESIGN.md` as the rulebook)   |

When you change a visual rule, update `DESIGN.md` first, then make the code
change.

---

## What this conversion did NOT change

- No design changes — every section matches the original static site.
- No copy changes.
- No new sections.
- No new dependencies beyond React + Vite.
- Hash-based routing preserved exactly (`#/home`, `#/feature/meetings`, …).
- Testimonial carousel behaviour preserved (arrows + dots + 7s auto-shuffle).
- Animations preserved (`data-reveal` + `data-reveal-section`).
- Mobile responsive behaviour preserved.
