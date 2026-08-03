/**
 * Everything the team edits lives here. No copy or URL is hard-coded in the markup.
 */

/**
 * The Fillout sign-up form. The "Sign up to join" CTA points at this.
 *
 * TODO(team): replace with the real Fillout URL, e.g.
 *   https://forms.fillout.com/t/<your-form-id>
 * Until then the button is disabled-looking and goes nowhere useful.
 */
export const FORM_URL = 'https://forms.fillout.com/REPLACE-ME';

/** True once FORM_URL has been swapped for a real one. Drives a dev-only warning. */
export const FORM_URL_IS_PLACEHOLDER = FORM_URL.includes('REPLACE-ME');

export const team = {
	name: 'Cyber Knights',
	number: 'FRC 11243',
	/** TODO(team): confirm — the handoff spelled this "cybernights11243@gmail.com". */
	email: 'cybernights11243@gmail.com',
	instagram: '#',
	github: 'https://github.com/Learning-howto-Code/Cyber-knights',
} as const;

/** TODO(team): confirm these before launch — they are placeholder facts from the handoff. */
export const facts = [
	{ label: 'Season', value: 'January – April' },
	{ label: 'Meets', value: 'Tue & Thu 6–9pm, Sat 10–4' },
	{ label: 'Where', value: 'School shop, room 114' },
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
	src: undefined as string | undefined,
	alt: 'Cyber Knights students working on the competition robot',
};
