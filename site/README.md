# Cyber Knights — FRC 11243 landing page

Single static page built with [Astro](https://astro.build). Recreated from the
`design_handoff_cyber_nights_landing` handoff (option 2a, "sage-led") using the Organic
design system.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build into dist/
npm run preview  # serve the built dist/
```

## What to edit

Everything the team changes lives in **`src/site.config.ts`** — no copy, URL or fact is
hard-coded in the markup.

| Thing | Where |
| --- | --- |
| Sign-up form link | `FORM_URL` |
| Team name, number, email, socials | `team` |
| Season / meeting times / room | `facts` |
| Sponsor logos | `sponsors` |
| Hero photo | `hero` |
| Page copy (headline, two-column text) | `src/pages/index.astro` |
| Colors, type, spacing tokens | `src/styles/organic-ds.css` |
| Page layout on top of the tokens | `src/styles/site.css` |

### Open items

1. **`FORM_URL` is a placeholder.** Replace `https://forms.fillout.com/REPLACE-ME` in
   `src/site.config.ts` with the real Fillout URL. The build prints a warning until you do.
2. Drop the real hero photo (landscape, ≥1200×900) and four sponsor logos into `public/`,
   then point `hero.src` / `sponsors[].src` at them. Slots with no `src` render a dashed
   placeholder box.
3. Set the real Instagram URL in `team.instagram`, and confirm `team.email` — the handoff
   spelled it `cybernights11243@gmail.com` while the team name is "Cyber Knights".
4. Confirm the meeting times, room number and season dates in `facts` — they came from the
   handoff as placeholders.

## Theme

Manual light/dark toggle in the header, persisted to `localStorage`. It deliberately does
**not** follow the OS setting. An inline script in `<head>` restores the stored choice
before first paint so dark never flashes light.

## Deployment — Vercel

Hosted on Vercel with automatic deploys from GitHub. Pushes to `main` go to production;
every other branch and pull request gets its own preview URL.

### One-time setup

1. Go to <https://vercel.com/new> and import `Learning-howto-Code/Cyber-knights`.
2. **Set Root Directory to `site`.** The repo root also holds `CAD/` and `code/`; without
   this Vercel will not find the Astro project.
3. Framework preset should auto-detect as **Astro**. Build settings are pinned in
   `site/vercel.json` (`npm ci` → `npm run build` → `dist`), so leave the defaults alone.
4. Deploy. No environment variables are required.

`SITE_URL` is the only optional env var — set it once a custom domain is attached so
canonical URLs point at the real domain. Without it the build falls back to Vercel's
`VERCEL_PROJECT_PRODUCTION_URL`.

There is no GitHub Actions workflow: Vercel's Git integration handles deploys. The old
GitHub Pages workflow was removed when the site moved to Vercel.
