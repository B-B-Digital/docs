# B&B Digital — Centrum pomocy / Help Center

Client-facing help center for B&B Digital. Built with [Docusaurus](https://docusaurus.io/) in docs-only mode, deployed as a Cloudflare Worker (static assets, no server code). Polish is the canonical language; English is a translation.

Live at **https://bb-digital-docs.gustaw-beznicki-5bb.workers.dev** for now. `docs.bbdigital.pl` is the intended final domain, but the `bbdigital.pl` zone currently lives on a different Cloudflare account than this Worker — see [Custom domain](#custom-domain) below.

Primary content: an educational FAQ for clients ordering a website for the first time (domains, hosting, SSL, CMS), plus a step-by-step overview of how working with B&B Digital looks.

## Prerequisites

- Node.js >= 20
- pnpm — never npm or yarn

## Development

```bash
pnpm install
pnpm start                # Polish (default locale)
pnpm start --locale en    # English
```

The dev server only renders one locale at a time. To test the locale dropdown switching between languages, use a full build + serve instead:

```bash
pnpm build
pnpm serve
```

## Build

```bash
pnpm build
```

Generates static output for both locales into `build/` (Polish at the root, English under `build/en/`).

## Adding a new FAQ or process page (both locales)

1. Create `docs/<category>/<polish-slug>.md` with frontmatter:
   ```yaml
   ---
   slug: /<polish-slug>
   sidebar_position: <n>
   title: <Polish title>
   ---
   ```
2. Add its doc ID to `sidebars.ts`.
3. Copy the file to `i18n/en/docusaurus-plugin-content-docs/current/<category>/<same-filename>.md` — **the filename must stay identical** to the Polish source (the doc ID is derived from the file path). Translate the content and override `slug` and `title` in the frontmatter to the English equivalents.
4. Link to other docs using file-relative Markdown links (e.g. `../faq/czym-jest-domena.md`), not hardcoded absolute paths — relative links resolve to the correct slug per locale automatically.
5. Run `pnpm build` and confirm it completes with zero errors for both locales.

### A note on missing translations

Docusaurus does **not** fail the build when an English translation is missing — it silently falls back to rendering the Polish content under the Polish slug. Always verify a new English file actually exists and was picked up; don't rely on the build succeeding as proof of a complete translation.

## Deploy — Cloudflare Workers (via GitHub Actions)

The site is a Worker with static assets only (`wrangler.jsonc` → `assets.directory: ./build`, no `main` script — Docusaurus's output needs no server code). Deployment is handled by `.github/workflows/deploy.yml`: runs after `CI` succeeds on `main`, deploys with `wrangler deploy`. Same CI-gated pattern as `BB-Digital_Portfolio`'s `deploy.yml`, minus the Workers-with-server-code parts it needs and this repo doesn't.

**One-time setup (manual, required before the first CI-driven deploy):**

1. This Cloudflare account (`5bbc215d278201381d2dc26883b49083`, a fresh account separate from wherever `BB-Digital_Portfolio` deploys) needs a `workers.dev` subdomain registered once — done via the Cloudflare dashboard, no CLI/API shortcut for it. Already done for this account.
2. Add two Actions secrets to this repo:
   ```bash
   gh secret set CLOUDFLARE_API_TOKEN --repo B-B-Digital/docs
   gh secret set CLOUDFLARE_ACCOUNT_ID --repo B-B-Digital/docs
   ```
   These are **not** the same values as `BB-Digital_Portfolio`'s secrets — different Cloudflare account. Create a token scoped to this account (My Profile → API Tokens → "Edit Cloudflare Workers" template).

After that, every push to `main` that passes CI deploys automatically to `bb-digital-docs.gustaw-beznicki-5bb.workers.dev`.

### Custom domain

`docs.bbdigital.pl` can't be attached yet — Cloudflare only lets you attach a custom domain to a Worker if the domain's zone lives in the *same* account, and `bbdigital.pl` is currently on a different (older) Cloudflare account. Options, in order of likely preference:
- Migrate the `bbdigital.pl` zone to this account, then attach the custom domain to this Worker.
- Keep the zone where it is and instead deploy this Worker under that same account (would need re-running the one-time setup above against that account's credentials).

Until resolved, the `workers.dev` URL is the canonical link for this site.

## Branding

Colors, fonts, and logo match `docs/branding/brand-guide.html` in `BB-Digital_Portfolio`:

- Primary `#0c7e93` (light mode) / secondary `#22c3da` (dark mode) — see `src/css/custom.css`
- Space Grotesk (headings) + Inter (body) via Google Fonts
- Logo: black mark (`static/img/logo-light.svg`) on light navbar, white mark (`static/img/logo-dark.svg`) on dark navbar
- Favicon and touch icons copied from the portfolio repo's `public/` folder

## Follow-ups (tracked separately)

- Link to this docs site from the pricing page in `B-B-Digital/BB-Digital_Portfolio` (separate issue).
