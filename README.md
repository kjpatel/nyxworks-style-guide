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
