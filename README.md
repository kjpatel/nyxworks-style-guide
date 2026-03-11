# NyxWorks Style Guide

Design tokens, components, and patterns for the NyxWorks design system.

**Live site:** https://styleguide.nyxworks.ai

## Getting Started

```bash
git clone https://github.com/kjpatel/nyxworks-style-guide.git
cd nyxworks-style-guide
npm install
npm run dev
```

Open http://localhost:3000 to browse the style guide.

## Using in a New Project

Copy the `template/` directory as your starting point:

```bash
cp -r template/ ../my-new-project
cd ../my-new-project
npm install
npm run dev
```

The template includes a pre-configured Next.js 16 app with the full NyxWorks theme (dark/light mode), Geist fonts, and Tailwind CSS v4.

For the full design spec, see [`.claude/STYLEGUIDE.md`](.claude/STYLEGUIDE.md).

## AI-Assisted Development with CLAUDE.md

This repo includes a `CLAUDE.md` file and a detailed `.claude/STYLEGUIDE.md` spec — purpose-built for AI-assisted workflows with [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

### Why CLAUDE.md Matters

- **Instant project context** — Claude reads `CLAUDE.md` at the start of every session, so it immediately understands the repo structure, conventions, and how to bootstrap new projects. No re-explaining needed.
- **Consistent output across sessions** — Design tokens, component patterns, and brand rules are codified in `.claude/STYLEGUIDE.md`. Every session produces code that matches the design system, whether it's a new component or a full page.
- **Faster iteration** — Instead of describing your stack and preferences each time, Claude already knows to use CSS variables (not raw hex), `rounded-2xl` for cards, Lucide icons at size 16–20, Framer Motion for animations, etc.
- **Cross-project consistency** — When building new NyxWorks sub-projects (like [nyxworks.ai](https://nyxworks.ai)), Claude references the same spec to apply the correct brand palette, Orbitron wordmark, and theme system automatically.
- **Living documentation** — The spec evolves with the design system. Update `.claude/STYLEGUIDE.md` once, and every future session picks up the changes.

### How It Works

1. `CLAUDE.md` (root) — High-level bootstrap instructions: how to scaffold new projects, quick reference for colors/fonts/spacing, key file locations.
2. `.claude/STYLEGUIDE.md` — Full machine-readable spec with every design token, component recipe, layout pattern, and "do / don't" rule. Claude reads this when building UI.
3. `template/` — Starter scaffold that Claude copies when creating new NyxWorks projects, pre-configured with the correct theme, fonts, and Tailwind setup.

## Tech Stack

- **Next.js 16** — App Router with static export
- **Tailwind CSS v4** — `@theme` block + `@custom-variant dark`
- **Geist fonts** — Sans for UI, Mono for code
- **Framer Motion** — Scroll-triggered animations
- **Lucide React** — Icon library
- **TypeScript** — Full type safety

## Project Structure

```
src/
├── app/              # Pages (App Router)
│   ├── globals.css   # Design tokens + theme
│   └── layout.tsx    # Root layout with fonts
├── components/
│   ├── ui/           # Reusable primitives
│   └── *.tsx         # Layout components
├── data/             # Static data + types
template/             # Scaffold for new projects
.claude/
└── STYLEGUIDE.md     # Machine-readable design spec
```

## Brand Colors

| Color | Hex | Role |
|-------|-----|------|
| Midnight Black | `#0B0F1A` | Dark backgrounds |
| Deep Space Purple | `#5B3FD6` | Primary accent |
| Electric Violet | `#8A5CFF` | Accent highlights |
| Silver Accent | `#C9CCD6` | Secondary text |

## Theme Support

Dark mode (default) and light mode, toggled via the header. Theme persists across sessions via `localStorage`.

## Building & Deploying

```bash
npm run build    # Outputs static site to out/
```

Deployed to AWS S3 + CloudFront.

## License

Private — NyxWorks internal use.
