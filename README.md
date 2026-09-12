# shauryavijaysinha.com — portfolio

Personal portfolio for Shaurya Vijay Sinha, built with [Astro](https://astro.build).
Static output, clean URLs (no `.html`), Astro's `<ClientRouter />` for
page-to-page fade transitions.

## Structure

- `src/pages/index.astro` — Home
- `src/pages/experience.astro` — Experience (from resume)
- `src/pages/research/` — Research case studies (ADSBG, CGTMSE), each with a
  downloadable `.xlsx` model in `public/files/`
- `src/pages/writing.astro` — Writing / publication list
- `src/pages/contact.astro` — Contact
- `src/layouts/Layout.astro` — shared masthead, nav, footer
- `src/styles/global.css` — design tokens (Merino / Venice Blue / Rock Blue) and shared styles

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview   # serve the built dist/ locally
```

## Deploy

Deployed on Vercel with the Astro framework preset (auto-detected — no config
needed). See the walkthrough this project shipped with for the exact
`git`/Vercel steps.
