# NyxWorks Style Guide

This repository is the **NyxWorks design system reference**. It contains design tokens, reusable components, layout patterns, and a live style guide site deployed at https://styleguide.nyxworks.ai.

## For Claude: How to Use This Repo

### Bootstrapping a New NyxWorks Project

When asked to create a new project using this style guide:

1. **Copy the template directory** — `template/` contains a minimal scaffold with the correct globals.css, layout.tsx, next.config.ts, postcss.config.mjs, tsconfig.json, and package.json.
2. **Read `.claude/STYLEGUIDE.md`** — This is the full machine-readable spec with all design tokens, component recipes, layout patterns, and conventions. Follow it precisely.
3. **Install dependencies** — Run `npm install` after copying template files.
4. **Dark mode is default** — The template is pre-configured with dark mode as the default. The inline `<script>` in layout.tsx prevents flash of light theme.

### Quick Reference

- **Colors**: All via CSS variables (`var(--color-*)`) — never use raw hex
- **Fonts**: Geist Sans (body) + Geist Mono (code) via `geist` npm package
- **Brand Wordmark**: Orbitron Bold for entire "NyxWorks.ai" — "NyxWorks." in text-primary, "ai" in Electric Violet `#8A5CFF`
- **Logo**: Theme-aware icons at `public/icon-{dark,light}.png`; use `mix-blend-multiply` on light variant
- **Rounding**: `rounded-2xl` for cards, `rounded-lg` for buttons/inputs
- **Spacing**: `py-24 px-6` for sections, `max-w-6xl mx-auto` for content width
- **Icons**: Lucide React, sizes 14–24
- **Animations**: Framer Motion, `AnimateOnScroll` wrapper for scroll-triggered entrance

### Theme System

- Light values in `@theme` block, dark overrides in `.dark` selector
- Tailwind `@custom-variant dark (&:where(.dark, .dark *));` enables `dark:` utilities
- Toggle persists via `localStorage.theme`, reads on load via inline script
- Both themes share the same CSS variable names — components work automatically

### Key Files

| File | Purpose |
|------|---------|
| `.claude/STYLEGUIDE.md` | Full design spec (tokens, recipes, patterns) |
| `docs/features/README.md` | Feature backlog index and workflow |
| `docs/features/_template.md` | Canonical template for feature docs |
| `docs/features/planned/` | Not-started feature specs |
| `docs/features/in-progress/` | Active implementation specs |
| `docs/features/shipped/` | Completed feature records |
| `template/` | Minimal scaffold for new projects |
| `src/components/ui/` | Reference component implementations |
| `src/app/globals.css` | Complete CSS with both theme palettes |
| `src/data/tokens.ts` | Token data as TypeScript objects |

### Feature Docs Workflow (Agent Instructions)

Treat `docs/features/` as the product backlog and delivery log for this repo.

1. Create new work in `docs/features/planned/` using `docs/features/_template.md`.
2. Move docs to `docs/features/in-progress/` when implementation starts.
3. Move docs to `docs/features/shipped/` when complete and verified.
4. Keep `docs/features/README.md` index in sync whenever files are added or moved.
5. Use real repo paths in "Relevant Files" (for example, `src/components/Header.tsx`, not `components/Header.tsx`).
6. Write docs for AI coding agents: explicit constraints, acceptance criteria, and copy-paste-safe guidance.
7. For shipped docs, update content to match the actual implementation (final behavior, final files, and real constraints).

Filename convention for all feature docs: `YYYY-MM-DD-short-slug.md`.

### Copying Components

UI components in `src/components/ui/` are self-contained and can be copied into new projects. They use only CSS variables and standard Tailwind classes — no external dependencies beyond `lucide-react` and `framer-motion`.

## Environment

This project uses [Direnv](https://direnv.net/) for environment variables. The `.envrc` file is gitignored — never commit it. When setting up a new clone, create `.envrc` manually with the required values.

## Development

```bash
npm install
npm run dev     # starts at http://localhost:3000
npm run build   # static export to out/
```

## Deployment

Pushing to `main` triggers automatic deployment via GitHub Actions (`.github/workflows/deploy.yml`). The workflow builds, syncs to S3, and invalidates CloudFront using OIDC — no static AWS keys.

For manual deploys:

```bash
npm run build
aws s3 sync out/ s3://nyxworks-styleguide-site --delete
aws cloudfront create-invalidation --distribution-id E2G6X9MXKYUVM5 --paths "/*"
```

## Important: Keep README.md Up to Date

After making changes to the repo (new features, structural changes, updated conventions, new sections, or deployment changes), always update `README.md` to reflect the current state. The README is the public face of this open-source project — it must stay accurate and complete.
