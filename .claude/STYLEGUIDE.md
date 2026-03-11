# NyxWorks Design System — Machine-Readable Spec

Use this file when building any NyxWorks sub-project to maintain visual consistency.

## Tech Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS v4 with `@theme` block
- Geist Sans + Mono fonts (via `geist` npm package)
- Framer Motion for animations
- Lucide React for icons
- TypeScript

## Design Tokens

### Colors — Core Palette

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| bg | `--color-bg` | `#0a0a0f` | Page background |
| bg-card | `--color-bg-card` | `#13131a` | Card/panel backgrounds |
| bg-card-hover | `--color-bg-card-hover` | `#1a1a24` | Card hover state |
| border | `--color-border` | `#1e1e2e` | Borders, dividers |
| text-primary | `--color-text-primary` | `#e4e4e7` | Headings, body text |
| text-secondary | `--color-text-secondary` | `#a1a1aa` | Descriptions |
| text-muted | `--color-text-muted` | `#71717a` | Captions, placeholders |
| accent | `--color-accent` | `#7c3aed` | Primary brand, buttons |
| accent-light | `--color-accent-light` | `#a78bfa` | Hover states, highlights |
| accent-dark | `--color-accent-dark` | `#6d28d9` | Active states, gradients |

### Colors — Semantic

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| success | `--color-success` | `#22c55e` | Success states |
| success-light | `--color-success-light` | `#4ade80` | Success highlights |
| warning | `--color-warning` | `#f59e0b` | Warnings |
| warning-light | `--color-warning-light` | `#fbbf24` | Warning highlights |
| error | `--color-error` | `#ef4444` | Errors, destructive |
| error-light | `--color-error-light` | `#f87171` | Error highlights |
| info | `--color-info` | `#3b82f6` | Informational |
| info-light | `--color-info-light` | `#60a5fa` | Info highlights |

### Tailwind Usage

Use CSS variables via bracket syntax:

```tsx
// Backgrounds
className="bg-[var(--color-bg-card)]"
className="bg-[var(--color-accent)]/10"  // with opacity

// Text
className="text-[var(--color-text-primary)]"
className="text-[var(--color-text-muted)]"

// Borders
className="border border-[var(--color-border)]"
className="hover:border-[var(--color-accent)]/40"
```

## Typography

### Fonts

- **Geist Sans** (`font-sans` / `--font-geist-sans`): All body text and UI elements
- **Geist Mono** (`font-mono` / `--font-geist-mono`): Code blocks, data, technical content

### Setup in layout.tsx

```tsx
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

<html className={`${GeistSans.variable} ${GeistMono.variable}`}>
  <body className="font-sans antialiased">
```

### globals.css @theme block

```css
@theme {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### Scale

Use standard Tailwind text sizes: `text-xs` through `text-5xl`.

- Headings: `text-3xl md:text-4xl font-bold` or `text-2xl font-semibold`
- Body: `text-base` or `text-sm`
- Captions: `text-xs text-[var(--color-text-muted)]`
- Code: `text-sm font-mono`

## Component Recipes

### Button

```tsx
// Primary
<button className="px-4 py-2 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-sm font-medium transition-colors">
  Click me
</button>

// Secondary
<button className="px-4 py-2 rounded-lg bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] text-[var(--color-text-primary)] border border-[var(--color-border)] text-sm font-medium transition-colors">
  Secondary
</button>

// Ghost
<button className="px-4 py-2 rounded-lg bg-transparent hover:bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] text-sm font-medium transition-colors">
  Ghost
</button>
```

### Card

```tsx
// Default
<div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-6">
  Content
</div>

// Interactive (hoverable)
<div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-bg-card-hover)] transition-all cursor-pointer glow-border p-6">
  Content
</div>

// Featured (accent border + glow)
<div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-accent)]/30 shadow-[0_0_24px_-6px_var(--color-accent)] overflow-hidden">
  <div className="h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]" />
  <div className="p-6">Content</div>
</div>
```

### Badge

```tsx
<span className="text-xs px-3 py-1 rounded-full border font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] border-[var(--color-accent)]/20">
  Label
</span>
```

### Input

```tsx
<input className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/30 transition-colors" />
```

### Alert

```tsx
<div className="flex gap-3 p-4 rounded-xl border border-[var(--color-info)]/30 bg-[var(--color-info)]/5 text-[var(--color-info-light)]">
  <InfoIcon />
  <p className="text-sm text-[var(--color-text-secondary)]">Message</p>
</div>
```

### Table

```tsx
<div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
  <table className="w-full text-sm">
    <thead>
      <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <th className="text-left px-4 py-3 font-medium text-[var(--color-text-muted)]">Header</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-bg-card-hover)] transition-colors">
        <td className="px-4 py-3">Cell</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Layout Patterns

### Page Shell

```tsx
<section className="py-24 px-6">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Title</h2>
    <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mb-4" />
    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mb-16">
      Description.
    </p>
    {/* Content grid */}
  </div>
</section>
```

### Section Heading

```tsx
<h2 className="text-3xl md:text-4xl font-bold mb-4">Section Title</h2>
<div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mb-4" />
```

### Gradient Text

```tsx
<span className="text-gradient">Gradient Text</span>
// Requires .text-gradient class in globals.css
```

## Animation Patterns

### Scroll-Triggered Entrance

```tsx
import AnimateOnScroll from "@/components/AnimateOnScroll";

<AnimateOnScroll>
  <div>Fades in when scrolled into view</div>
</AnimateOnScroll>

<AnimateOnScroll delay={0.2}>
  <div>Staggered entrance</div>
</AnimateOnScroll>
```

### Glow Border Effect

Add `glow-border` class — requires the CSS in globals.css:

```css
.glow-border { position: relative; }
.glow-border::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--color-accent), transparent, var(--color-accent-dark));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}
.glow-border:hover::before { opacity: 0.5; }
```

## Icons

Use **Lucide React** icons at sizes 14, 16, 18, 20, or 24.

```tsx
import { Search, Settings, User } from "lucide-react";
<Search size={16} className="text-[var(--color-text-muted)]" />
```

## Do's and Don'ts

### Do

- Use CSS variables via `var(--color-*)` for all colors
- Use `rounded-2xl` for cards, `rounded-lg` for inputs/buttons
- Use `transition-colors` or `transition-all` on interactive elements
- Use `border border-[var(--color-border)]` for all borders
- Use `text-sm` for most body text, `text-xs` for captions
- Use `gap-6` or `gap-8` between grid items
- Use `py-24 px-6` for page sections
- Use `max-w-6xl mx-auto` for content constraint
- Use Geist Sans for all text, Geist Mono for code

### Don't

- Don't use raw hex colors — always use CSS variables
- Don't use `rounded-md` or `rounded-sm` — use `rounded-lg` or `rounded-2xl`
- Don't use light/white backgrounds — this is a dark theme
- Don't add `!important` to override styles
- Don't use Inter, system fonts, or other typefaces
- Don't use opacity-based text colors — use the text-primary/secondary/muted tokens
- Don't forget `no-underline` on card-wrapping `<a>` tags

## File Structure Convention

```
src/
├── app/           # Pages (App Router)
├── components/
│   ├── ui/        # Reusable primitives (Button, Card, Input, etc.)
│   └── *.tsx      # Feature/layout components
└── data/          # Static data and type definitions
```

## globals.css Template

```css
@import "tailwindcss";

@theme {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-bg: #0a0a0f;
  --color-bg-card: #13131a;
  --color-bg-card-hover: #1a1a24;
  --color-border: #1e1e2e;
  --color-text-primary: #e4e4e7;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
  --color-accent: #7c3aed;
  --color-accent-light: #a78bfa;
  --color-accent-dark: #6d28d9;
  --color-success: #22c55e;
  --color-success-light: #4ade80;
  --color-warning: #f59e0b;
  --color-warning-light: #fbbf24;
  --color-error: #ef4444;
  --color-error-light: #f87171;
  --color-info: #3b82f6;
  --color-info-light: #60a5fa;
}

html { scroll-behavior: smooth; }
body { background-color: var(--color-bg); color: var(--color-text-primary); }

.text-gradient {
  background: linear-gradient(135deg, var(--color-accent-light), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glow-border { position: relative; }
.glow-border::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--color-accent), transparent, var(--color-accent-dark));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}
.glow-border:hover::before { opacity: 0.5; }
```
