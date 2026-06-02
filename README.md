# Senior Chess Academy

A chess strategy and brain-training website for older adults, built as a **pre-rendered** React application. Every route is compiled to static HTML at build time, so the full content — headings, articles, FAQs, testimonials, legal pages, and contact details — is present in the raw HTML source and remains fully readable **even with JavaScript disabled**. This makes the site fast, crawlable, and friendly to Google Ads review.

- **Business:** Senior Chess Academy
- **Email:** seniorchessacademy@gmail.com
- **Phone:** (614) 428-7619
- **Address:** 390 Maple Grove Ln, Columbus, OH 43215

## Tech stack

| Concern            | Choice                                  |
| ------------------ | --------------------------------------- |
| UI library         | React 18                                |
| Build tool         | Vite 5                                   |
| Static pre-render  | `vite-react-ssg` (SSG, one HTML/route)  |
| Routing            | React Router DOM 6                      |
| Styling            | Tailwind CSS 3                          |
| Production server  | Express 4 + `compression` middleware    |
| Analytics          | Google Analytics 4 + Consent Mode v2    |
| Node               | 20.x                                    |

No heavy animation libraries are used (no Framer Motion, no GSAP). Motion is limited to subtle CSS hover effects, opacity fades, and small transforms.

## Project structure

```
.
├── index.html               # GA tag + Consent Mode v2 defaults + fonts
├── server.js                # Express server: compression, static, SPA fallback, cache headers
├── vite.config.js           # Vite + SSG (includedRoutes) config
├── tailwind.config.js       # Design tokens (colors, fonts, shadows)
├── postcss.config.js
├── Procfile / app.json      # Heroku
├── amplify.yml              # AWS Amplify
├── netlify.toml             # Netlify
├── vercel.json              # Vercel
├── public/
│   ├── robots.txt           # Allows all crawling, points to sitemap
│   ├── sitemap.xml          # All routes
│   └── favicon.svg
└── src/
    ├── main.jsx             # ViteReactSSG entry
    ├── routes.jsx           # Route table (also the prerender path list)
    ├── index.css            # Tailwind layers + component styles
    ├── assets/
    │   ├── images.js        # ES-module imports of all local images
    │   └── images/          # Locally stored, owned images (no hotlinking)
    │       ├── hero/ openings/ puzzles/ community/
    │       └── blog/ tournaments/ grandmasters/ braintraining/
    ├── components/          # Navbar, Footer, CookieBanner, ScrollToTop,
    │                        # Accordion, Seo, Layout, ArticleCard, GuideLayout, ...
    ├── data/                # site, categories, articles, testimonials, faqs, grandmasters
    ├── pages/               # One component per route (+ legal/)
    └── utils/analytics.js   # trackEvent(), trackPageView(), consent helpers
```

## Routes

`/` · `/about` · `/blog` · `/community` · `/contact` · `/opening-strategies` · `/endgame-techniques` · `/chess-for-brain-health` · `/classic-grandmasters` · `/chess-puzzles` · `/tournament-guides` · `/legal/privacy` · `/legal/terms` · `/legal/refund` · `/404`

Each route returns HTTP 200 with substantial original content and is pre-rendered to its own static HTML file.

## Installation

Requires **Node 20.x**.

```bash
npm install
```

## npm scripts

| Script            | What it does                                            |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server (hot reload) at `:5173`       |
| `npm run build`   | Pre-render every route to static HTML in `dist/`        |
| `npm run preview` | Preview the built static site with Vite                 |
| `npm run serve`   | Run the production Express server (`server.js`)         |
| `npm start`       | Alias of `npm run serve` (used by Heroku)               |

## Development setup

```bash
npm install
npm run dev
# open http://localhost:5173
```

## Production build

```bash
npm run build      # outputs pre-rendered HTML + assets to dist/
npm run serve      # serves dist/ via Express on PORT (default 3000)
```

**Verify the JavaScript-off requirement:** after `npm run build`, open any file
under `dist/` (e.g. `dist/opening-strategies/index.html`) and confirm the article
text, FAQs, and footer are all present in the raw HTML. You can also disable
JavaScript in your browser and browse the served site — all content stays
readable.

## Deployment

### Heroku
The repo includes a `Procfile` (`web: node server.js`) and `app.json`.
```bash
heroku create
git push heroku main
# Heroku runs `npm install`, then `npm run build` (heroku-postbuild not required
# if you add: "heroku-postbuild": "npm run build" to package.json scripts),
# then `npm start`.
```
> Tip: add `"heroku-postbuild": "npm run build"` to `package.json` scripts so the
> static site is generated during the Heroku build.

### Vercel
`vercel.json` sets the build command and output directory. Import the repo in
Vercel; it builds with `npm run build` and serves `dist/` as a static site with
clean URLs. No server needed.

### Netlify
`netlify.toml` sets `command = "npm run build"` and `publish = "dist"`, with a
404 fallback to the pre-rendered 404 page. Import the repo in Netlify or run
`netlify deploy --prod`.

### AWS Amplify
`amplify.yml` installs dependencies, runs `npm run build`, and publishes `dist/`.
Connect the repository in the Amplify console and it will pick up the config.

## SEO & compliance notes

- **Pre-rendered HTML** for every route (no empty root-div SPA shell).
- **robots.txt** allows all crawling and references the sitemap.
- **sitemap.xml** lists every public route.
- **Canonical URLs, Open Graph, and Twitter Card** tags per page.
- **JSON-LD**: Organization on the homepage, FAQ schema, Blog and Contact schema.
- **Google Consent Mode v2**: analytics/ad storage default to `denied`; the
  cookie banner updates consent to `granted` on acceptance and persists the
  choice in `localStorage`.
- **Accessibility**: semantic landmarks, skip link, keyboard focus-visible
  styles, ARIA labels, and accessible `<details>`-based accordions.
- **Images** are generated, owned, and stored locally — no hotlinking.

© Senior Chess Academy. All rights reserved.
