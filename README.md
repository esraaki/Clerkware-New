# Town Web — Clerkware site (static)

This is the **static** version of the Clerkware marketing site: a single
self-contained `index.html` (inline CSS + a small amount of vanilla JS) plus
image assets. There is no build step, no bundler, and no Node/React toolchain.

> Heads-up: a `src/` folder of React/`.jsx` components remains in the repo from
> the earlier Vite/React experiment. **None of it is used** — `index.html` does
> not load `/src/main.jsx` or any module. It can be deleted whenever you like;
> it has no effect on the deployed site.

---

## Quick start

No install or build. Open `index.html` directly, or serve the folder with any
static file server:

```bash
# any of these work — pick one
python3 -m http.server 8000      # → http://localhost:8000
npx serve .                      # → http://localhost:3000
```

No backend. No database. Static frontend only.

---

## Project layout

```
.
├── index.html              # the entire site (inline CSS + JS)
├── vercel.json             # static deployment config (no build)
├── README.md
├── images/                 # logos, photographs, screenshots referenced by index.html
├── frames/                 # animation frames used by the hero → websites transition
└── src/                    # UNUSED leftover React/Vite source (safe to delete)
```

### Asset paths

`index.html` references assets with **relative** paths (e.g.
`images/town web logo11.png`). Keep new assets under `images/` (or `frames/`)
and reference them relatively so they resolve the same locally and in
production.

### Routing

The page uses in-page anchors / hash links (`#...`). It is a single HTML
document, so no server-side rewrite rules are required.

---

## Deployment (Vercel)

This repo deploys as a **static site with no build step**. The configuration
lives in [`vercel.json`](./vercel.json):

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": null,
  "installCommand": null,
  "outputDirectory": "."
}
```

- `framework: null` — stops Vercel from auto-detecting Vite/React and running
  `npm install` / `npm run build` (the old behavior that was failing because
  `package.json` was removed).
- `buildCommand` / `installCommand` `null` — no build, no install.
- `outputDirectory: "."` — serve the repo root, so `index.html` is the entry
  point at `/`.

Push to `main` and Vercel redeploys automatically. No environment variables,
no `package.json`, no Node version setting required.

If the Vercel dashboard still shows a **Vite** framework preset or a custom
Install/Build command from the old setup, `vercel.json` overrides it — but you
can also reset the dashboard's *Framework Preset* to **Other** for good measure.

---

## Editing the site

Everything is in `index.html`:

| Want to change…            | Edit…                                              |
| -------------------------- | -------------------------------------------------- |
| Any section / copy         | the relevant block in `index.html`                 |
| Styles / spacing / colour  | the inline `<style>` block at the top of `index.html` |
| Behavior / animations      | the inline `<script>` block at the bottom of `index.html` |
| Images                     | add to `images/` and reference relatively          |
