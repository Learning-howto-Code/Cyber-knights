// @ts-check
import { defineConfig } from 'astro/config';

// Vercel exposes the production domain as VERCEL_PROJECT_PRODUCTION_URL (no scheme).
// SITE_URL overrides it once a custom domain is attached.
const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
	site:
		process.env.SITE_URL ||
		(productionUrl ? `https://${productionUrl}` : 'http://localhost:4321'),
});
