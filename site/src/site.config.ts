/**
 * Everything the team edits lives here. No copy or URL is hard-coded in the markup.
 */

/**
 * Fillout sign-up form, embedded inline in the "Sign up" section.
 * Find the id in Fillout under Share → Embed (`data-fillout-id`).
 */
export const FORM_ID = 'ohcHRmdAFLus';

/**
 * Hosted version of the same form. Used only by the "Form not loading?" fallback
 * link under the embed — the hero CTA jumps to FORM_ANCHOR, it does not leave the page.
 * `campfire` is the team's Fillout workspace subdomain. The generic
 * `forms.fillout.com/t/<id>` host serves the same form, so either works.
 */
export const FORM_URL = `https://campfire.fillout.com/t/${FORM_ID}`;

/** The hero CTA scrolls to the embed rather than leaving the page. */
export const FORM_ANCHOR = '#signup-form';

export const team = {
	name: 'Cyber Knights',
	number: 'FRC 11243',
	/** TODO(team): confirm — the handoff spelled this "cybernights11243@gmail.com". */
	email: 'hello@frc11243.org',
	instagram: '#',
	github: 'https://github.com/Learning-howto-Code/Cyber-knights',
} as const;

/** TODO(team): confirm these before launch — they are placeholder facts from the handoff. */
export const facts = [
	{ label: 'Season', value: 'Now – April' },
	{ label: 'Meets', value: 'Every day after school' },
	{ label: 'Where', value: 'TBD' },
] as const;

/**
 * Sponsor logos. Drop files in `public/sponsors/` and set `src` to e.g. `/sponsors/acme.svg`.
 * A slot with no `src` renders a labelled placeholder box.
 */
export const sponsors = [
	{ name: 'Sponsor one', src: undefined as string | undefined },
	{ name: 'Sponsor two', src: undefined as string | undefined },
	{ name: 'Sponsor three', src: undefined as string | undefined },
	{ name: 'Sponsor four', src: undefined as string | undefined },
];

/**
 * Hero photograph — landscape, at least 1200×900. Drop it in `public/` and set `src`.
 */
export const hero = {
	src: '/hero.JPG' as string | undefined,
	alt: 'Cyber Knights students working on the competition robot',
};
