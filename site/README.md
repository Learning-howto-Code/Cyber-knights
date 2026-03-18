# Cyber Knights FRC Website

Astro site for an FRC team, set up for deployment to GitHub Pages.

## Local Development

1. Install dependencies:

```sh
npm install
```

2. Start development server:

```sh
npm run dev
```

3. Build for production:

```sh
npm run build
```

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. In your repo settings, open **Pages** and set source to **GitHub Actions**.
3. Ensure the workflow file in `.github/workflows/deploy.yml` is present.
4. Push to `main` and GitHub Actions will build and publish automatically.

### Optional: Custom Domain

Set the `SITE_URL` repository variable to your production URL, for example:

`https://robotics.yourschool.org`

If `SITE_URL` is not provided, the config falls back to `https://<owner>.github.io`.
