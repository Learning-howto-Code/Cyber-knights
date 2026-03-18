// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
const githubPagesBase = repo ? `/${repo}/` : '/';

export default defineConfig({
	// Local dev uses '/', while GitHub Actions builds from /<repo>/.
	base: process.env.GITHUB_ACTIONS ? githubPagesBase : '/',
	site: process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'https://example.com'),
});
