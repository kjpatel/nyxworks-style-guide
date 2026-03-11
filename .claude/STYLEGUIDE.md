# NyxWorks Design System — Machine-Readable Spec

Use this file when building any NyxWorks sub-project to maintain visual consistency.
Reference: https://styleguide.nyxworks.ai

## Tech Stack

- Next.js 16 (App Router, static export via `output: "export"`)
- Tailwind CSS v4 with `@theme` block + `@custom-variant dark`
- Geist Sans + Mono fonts (via `geist` npm package)
- Framer Motion for animations
- Lucide React for icons
- TypeScript

## Brand Colors

| Name | Hex | Role |
|------|-----|------|
| Midnight Black | `#0B0F1A` | Dark backgrounds |
| Deep Space Purple | `#5B3FD6` | Primary accent |
| Electric Violet | `#8A5CFF` | Accent highlights |
| Silver Accent | `#C9CCD6` | Secondary text |

## Dark / Light Theme System

The design system supports **dark mode (default)** and **light mode**. Themes are implemented via CSS custom properties that swap values based on a `.dark` class on `<html>`.

### How It Works

1. **Light mode** values are defined in the `@theme` block (Tailwind's default layer)
2. **Dark mode** values override them inside a `.dark {}` selector
3. Tailwind's `@custom-variant dark` enables `dark:` utility classes
4. A `<script>` in `<head>` applies `.dark` before first paint to prevent flash
5. A toggle in the header reads/writes `localStorage.theme` and toggles `.dark` on `<html>`

### Colors — Light Mode (Default)

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| bg | `--color-bg` | `#F4F3FA` | Page background |
| bg-card | `--color-bg-card` | `#FFFFFF` | Card/panel backgrounds |
| bg-card-hover | `--color-bg-card-hover` | `#EEEDF8` | Card hover state |
| border | `--color-border` | `#D8D6E8` | Borders, dividers |
| text-primary | `--color-text-primary` | `#0B0F1A` | Headings, body text |
| text-secondary | `--color-text-secondary` | `#4A4E5C` | Descriptions |
| text-muted | `--color-text-muted` | `#8B8FA0` | Captions, placeholders |
| accent | `--color-accent` | `#5B3FD6` | Primary brand, buttons |
| accent-light | `--color-accent-light` | `#7B5AEF` | Hover states, highlights |
| accent-dark | `--color-accent-dark` | `#4A2FC0` | Active states, gradients |

### Colors — Dark Mode

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| bg | `--color-bg` | `#0B0F1A` | Page background |
| bg-card | `--color-bg-card` | `#12162A` | Card/panel backgrounds |
| bg-card-hover | `--color-bg-card-hover` | `#1A1F36` | Card hover state |
| border | `--color-border` | `#1E2440` | Borders, dividers |
| text-primary | `--color-text-primary` | `#E8EAF0` | Headings, body text |
| text-secondary | `--color-text-secondary` | `#C9CCD6` | Descriptions |
| text-muted | `--color-text-muted` | `#7B7F8E` | Captions, placeholders |
| accent | `--color-accent` | `#5B3FD6` | Primary brand, buttons |
| accent-light | `--color-accent-light` | `#8A5CFF` | Hover states, highlights |
| accent-dark | `--color-accent-dark` | `#4A2FC0` | Active states, gradients |

### Colors — Semantic (Both Themes)

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

## Brand Identity — Logo & Wordmark

### Wordmark Rules

The company name **NyxWorks.ai** uses **Orbitron Bold** — a geometric, futuristic sans-serif that matches the logo asset:

- **"NyxWorks."** — Orbitron Bold, `var(--color-text-primary)`
- **"ai"** — Orbitron Bold, Electric Violet `#8A5CFF`

This treatment applies only to the wordmark (next to the logo). All other text uses Geist Sans. The hero/page headings may use the `.text-gradient` class instead.

```tsx
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["700"] });

// In layout.tsx <html>:
<html className={`... ${orbitron.variable}`}>

// Wordmark JSX:
<span className="font-[family-name:var(--font-orbitron)] text-[var(--color-text-primary)]">NyxWorks.</span>
<span className="font-[family-name:var(--font-orbitron)] text-[#8A5CFF]">ai</span>
```

### Logo Assets

| File | Usage |
|------|-------|
| `public/icon-dark.png` | Small icon for dark backgrounds (header, favicon) |
| `public/icon-light.png` | Small icon for light backgrounds |
| `public/logo-dark.png` | Full logo for dark backgrounds |
| `public/logo-light.png` | Full logo for light backgrounds |

**Theme-aware logo in components:**

```tsx
<Image
  src={theme === "dark" ? "/icon-dark.png" : "/icon-light.png"}
  alt="NyxWorks"
  width={28}
  height={28}
  className={`rounded-sm ${theme === "light" ? "mix-blend-multiply" : ""}`}
/>
```

- Use `mix-blend-multiply` on the light icon to eliminate white background artifacts
- Always pair the icon with the wordmark using the split font treatment above
- Use icon variants (28px) in headers/nav; use full logo variants for hero sections or splash pages

## Typography

### Fonts

- **Geist Sans** (`font-sans` / `--font-geist-sans`): All body text and UI elements
- **Geist Mono** (`font-mono` / `--font-geist-mono`): Code blocks, data, technical content
- **Orbitron** (`--font-orbitron`): Wordmark "NyxWorks.ai" only — bold 700

### Setup in layout.tsx

```tsx
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["700"] });

<html className={`${GeistSans.variable} ${GeistMono.variable} ${orbitron.variable}`} suppressHydrationWarning>
  <body className="font-sans antialiased">
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
- Support both dark and light themes via CSS variables
- Use `.dark` class on `<html>` for dark mode (Tailwind `@custom-variant dark`)

### Don't

- Don't use raw hex colors — always use CSS variables
- Don't use `rounded-md` or `rounded-sm` — use `rounded-lg` or `rounded-2xl`
- Don't add `!important` to override styles
- Don't use Orbitron for anything other than the brand wordmark
- Don't use opacity-based text colors — use the text-primary/secondary/muted tokens
- Don't forget `no-underline` on card-wrapping `<a>` tags
- Don't hardcode theme-specific colors — always use CSS variables so both themes work

## File Structure Convention

```
src/
├── app/
│   ├── globals.css      # @theme tokens, dark overrides, utility classes
│   ├── layout.tsx       # Root layout with fonts, theme script, Header
│   ├── icon.png         # Favicon (App Router convention)
│   └── [route]/page.tsx # Pages
├── components/
│   ├── ui/              # Reusable primitives (Button, Card, Input, etc.)
│   ├── Header.tsx       # Site header with nav + theme toggle
│   ├── Footer.tsx       # Site footer
│   └── AnimateOnScroll.tsx  # Scroll-triggered entrance wrapper
├── data/                # Static data and type definitions
public/
├── icon-dark.png        # NyxWorks icon for dark mode
├── icon-light.png       # NyxWorks icon for light mode
├── logo-dark.png        # NyxWorks full logo for dark mode
└── logo-light.png       # NyxWorks full logo for light mode
```

## globals.css Template

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* Core palette — Light (default) */
  --color-bg: #F4F3FA;
  --color-bg-card: #FFFFFF;
  --color-bg-card-hover: #EEEDF8;
  --color-border: #D8D6E8;
  --color-text-primary: #0B0F1A;
  --color-text-secondary: #4A4E5C;
  --color-text-muted: #8B8FA0;
  --color-accent: #5B3FD6;
  --color-accent-light: #7B5AEF;
  --color-accent-dark: #4A2FC0;

  /* Semantic colors */
  --color-success: #22c55e;
  --color-success-light: #4ade80;
  --color-warning: #f59e0b;
  --color-warning-light: #fbbf24;
  --color-error: #ef4444;
  --color-error-light: #f87171;
  --color-info: #3b82f6;
  --color-info-light: #60a5fa;
}

/* Dark mode overrides */
.dark {
  --color-bg: #0B0F1A;
  --color-bg-card: #12162A;
  --color-bg-card-hover: #1A1F36;
  --color-border: #1E2440;
  --color-text-primary: #E8EAF0;
  --color-text-secondary: #C9CCD6;
  --color-text-muted: #7B7F8E;
  --color-accent: #5B3FD6;
  --color-accent-light: #8A5CFF;
  --color-accent-dark: #4A2FC0;
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

## layout.tsx Template

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["700"] });

export const metadata: Metadata = {
  title: "My NyxWorks App",
  description: "Built with the NyxWorks design system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${orbitron.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

## Theme Toggle Pattern

```tsx
"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    setTheme(saved ?? "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card)] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
```

## Dependencies (package.json)

```json
{
  "dependencies": {
    "next": "^16",
    "react": "^19",
    "react-dom": "^19",
    "geist": "^1",
    "framer-motion": "^12",
    "lucide-react": "^0.474"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4"
  }
}
```

## next.config.ts (Static Export)

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
```
