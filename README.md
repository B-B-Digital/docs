# B&B Digital — Centrum pomocy / Help Center

Client-facing help center for B&B Digital, published at **https://docs.bbdigital.pl**. Built with [Docusaurus](https://docusaurus.io/) in docs-only mode. Polish is the canonical language; English is a translation.

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

## Deploy — Cloudflare Pages (one-time manual setup)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → select `B-B-Digital/docs`.
2. Build settings:
   - Build command: `pnpm build`
   - Build output directory: `build`
   - Environment variable: `NODE_VERSION=22`
3. **Custom domains** tab → add `docs.bbdigital.pl`.
4. Every push to `main` triggers an automatic deploy.

## Branding

Colors, fonts, and logo match `docs/branding/brand-guide.html` in `BB-Digital_Portfolio`:

- Primary `#0c7e93` (light mode) / secondary `#22c3da` (dark mode) — see `src/css/custom.css`
- Space Grotesk (headings) + Inter (body) via Google Fonts
- Logo: black mark (`static/img/logo-light.svg`) on light navbar, white mark (`static/img/logo-dark.svg`) on dark navbar
- Favicon and touch icons copied from the portfolio repo's `public/` folder

## Follow-ups (tracked separately)

- Link to this docs site from the pricing page in `B-B-Digital/BB-Digital_Portfolio` (separate issue).
