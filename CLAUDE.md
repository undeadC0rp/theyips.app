# theyips-website — Claude Code Context

The marketing site for The Yips at **theyips.app**. Static [Astro](https://astro.build)
site, deployed to Cloudflare (see `wrangler.toml`).

## Stack & layout
- Astro, no framework components — plain `.astro` pages and components.
- `src/pages/` — one file per route (`index`, `cli`, `stats`, `privacy`,
  `releases`, `delete-account`, `guide/*`).
- `src/layouts/Base.astro` — HTML shell, `<head>`, OG/Twitter meta, fonts.
- `src/components/` — `Nav`, `Footer`, `Hero`, `Features`, `Faq`, etc.
- `src/styles/global.css` — the design tokens. **Never hardcode colors**; use the
  CSS vars: `--bg`, `--surface`, `--surface2`, `--border`, `--green`, `--text`,
  `--muted`, `--muted2`.
- Build: `npm run build`; preview: `npm run preview`. Always build before
  shipping — a broken `.astro` fails the build.

## Page conventions
- A content page imports `Base`, `Nav`, `Footer`; wraps content in
  `<main><div class="container">` with `.hero` + `.section` blocks. Copy
  `cli.astro` as the reference for structure and styles.
- Voice is the brand voice: self-deprecating, plain, a little funny
  ("Track it. Face it. Suck less."). No marketing fluff.

## Releases page — keep it current
`src/pages/releases.astro` is the public changelog for **both** products (the
app and the CLI). It is the org-wide release-note requirement (see the root
`undeadcorp/CLAUDE.md` Directives).

**Whenever `theyipsapp` or `theyips-cli` ships a release worth telling users
about, add an entry here.** Rules:
- Edit the `releases` array in the page frontmatter — newest first. Each entry
  is `{ product: 'app' | 'cli', version, date, title, body }`.
- **High-level, golfer-facing, plain English.** Describe what changed and why it
  helps. No version codes, schema/migration notes, PR numbers, or dev jargon.
- **Skip pure chores** — dependency bumps, refactors, CI/release-tooling fixes.
  If a release is only chores, it gets no entry.
- One or two sentences per entry. Title is a short, human headline.
- When one feature spans both products (e.g. elevation: app captures it, CLI
  shows it), give each product its own entry rather than cramming both in one.
- `product: 'app'` is tagged **App** (green badge), `'cli'` is **CLI**.
- Run `npm run build` after editing to confirm it still compiles.
