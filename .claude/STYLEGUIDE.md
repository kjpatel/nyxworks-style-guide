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

### Divider

```tsx
import Divider from "@/components/ui/Divider";

// Simple horizontal rule
<Divider />

// With centered label (e.g., auth form "or" separator)
<Divider label="or" />

// Custom spacing: "sm" | "md" (default) | "lg"
<Divider label="continue with" spacing="lg" />
```

### ProgressBar

```tsx
import ProgressBar from "@/components/ui/ProgressBar";

// Basic usage
<ProgressBar value={65} />

// With label and percentage
<ProgressBar value={72} label="API Requests" showValue />

// Color variants: "accent" (default) | "success" | "warning" | "error" | "info"
<ProgressBar value={91} color="warning" label="Bandwidth" showValue />

// Sizes: "sm" | "md" (default) | "lg"
<ProgressBar value={50} size="lg" color="success" />
```

### DescriptionList

```tsx
import DescriptionList from "@/components/ui/DescriptionList";

// Horizontal layout (default) — label left, value right
<DescriptionList items={[
  { label: "Name", value: "Alice Chen" },
  { label: "Email", value: "alice@example.com" },
  { label: "Status", value: <Badge color="success" size="sm">Active</Badge> },
]} />

// Stacked layout — label above value, 2-column grid
<DescriptionList layout="stacked" items={[
  { label: "Plan", value: "Pro" },
  { label: "Next Payment", value: "Apr 1, 2026" },
]} />
```

### RadioGroup

```tsx
import RadioGroup from "@/components/ui/RadioGroup";

<RadioGroup
  label="Notification preference"
  options={[
    { value: "all", label: "All notifications", description: "Receive everything" },
    { value: "important", label: "Important only", description: "Critical alerts and mentions" },
    { value: "none", label: "None" },
  ]}
  value={value}
  onChange={setValue}
/>

// With error state
<RadioGroup options={options} value={value} onChange={setValue} error="Please select an option" />
```

### Combobox

```tsx
import Combobox from "@/components/ui/Combobox";

<Combobox
  label="Country"
  placeholder="Search countries..."
  options={[
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
  ]}
  value={value}
  onChange={setValue}
/>
```

### Drawer

```tsx
import Drawer from "@/components/ui/Drawer";

<Drawer open={open} onClose={() => setOpen(false)} title="Project Details">
  <p>Drawer body content.</p>
</Drawer>

// Left side, custom width
<Drawer open={open} onClose={onClose} title="Menu" side="left" width="max-w-sm">
  <nav>...</nav>
</Drawer>
```

### Stepper

```tsx
import Stepper from "@/components/ui/Stepper";

// Horizontal (default)
<Stepper
  steps={[
    { label: "Account" },
    { label: "Workspace" },
    { label: "Invite" },
  ]}
  currentStep={1}
/>

// Vertical with descriptions
<Stepper
  orientation="vertical"
  steps={[
    { label: "Create account", description: "Enter your email and password" },
    { label: "Set up workspace", description: "Configure your team" },
    { label: "Invite members", description: "Add your team" },
  ]}
  currentStep={1}
/>
```

### CommandPalette

```tsx
import CommandPalette from "@/components/ui/CommandPalette";
import { Home, Settings, User } from "lucide-react";

<CommandPalette
  open={open}
  onClose={() => setOpen(false)}
  items={[
    { id: "1", label: "Go to Home", icon: <Home size={16} />, group: "Navigation", shortcut: "⌘H", onSelect: () => {} },
    { id: "2", label: "Settings", icon: <Settings size={16} />, group: "Navigation", shortcut: "⌘,", onSelect: () => {} },
    { id: "3", label: "Search Users", icon: <User size={16} />, group: "Actions", onSelect: () => {} },
  ]}
/>
```

### Banner

```tsx
import Banner from "@/components/ui/Banner";
import { Megaphone } from "lucide-react";

// Info banner (default)
<Banner icon={<Megaphone size={16} />}>
  New feature available — check it out!
</Banner>

// Accent, non-dismissible
<Banner variant="accent" dismissible={false}>
  Limited time offer: 20% off all plans.
</Banner>
```

### ButtonGroup

```tsx
import ButtonGroup from "@/components/ui/ButtonGroup";

<ButtonGroup
  items={[
    { value: "list", label: "List" },
    { value: "grid", label: "Grid" },
    { value: "board", label: "Board" },
  ]}
  value={view}
  onChange={setView}
/>

// Small size
<ButtonGroup items={items} value={value} onChange={onChange} size="sm" />
```

### StatCard

```tsx
import StatCard from "@/components/ui/StatCard";
import { DollarSign } from "lucide-react";

<StatCard
  label="Revenue"
  value="$48.2K"
  change="+12%"
  trend="up"
  icon={<DollarSign size={16} />}
/>
```

### StackedList

```tsx
import StackedList from "@/components/ui/StackedList";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";

<StackedList
  items={[
    {
      id: "1",
      primary: "Leslie Alexander",
      secondary: "leslie@example.com",
      left: <Avatar name="Leslie Alexander" size="sm" />,
      right: <Badge color="success" size="sm">Active</Badge>,
      onClick: () => {},
    },
  ]}
/>
```

### SidebarNav

```tsx
import SidebarNav from "@/components/ui/SidebarNav";
import { Home, Settings, User } from "lucide-react";

<SidebarNav
  sections={[
    {
      heading: "General",
      items: [
        { id: "dashboard", label: "Dashboard", icon: <Home size={16} /> },
        { id: "profile", label: "Profile", icon: <User size={16} /> },
        { id: "settings", label: "Settings", icon: <Settings size={16} /> },
      ],
    },
  ]}
  activeId={active}
  onSelect={setActive}
/>
```

### PageHeading

```tsx
import PageHeading from "@/components/ui/PageHeading";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

<PageHeading
  title="Projects"
  description="Manage your team's projects"
  breadcrumb={<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />}
  actions={<Button size="sm">New Project</Button>}
/>
```

### Feed

```tsx
import Feed from "@/components/ui/Feed";
import { GitCommit, MessageSquare } from "lucide-react";

<Feed
  items={[
    { id: "1", icon: <GitCommit size={14} />, content: <><strong>Alice</strong> pushed a commit</>, timestamp: "2 hours ago" },
    { id: "2", icon: <MessageSquare size={14} />, content: <><strong>Bob</strong> left a comment</>, timestamp: "4 hours ago" },
  ]}
/>
```

### MediaObject

```tsx
import MediaObject from "@/components/ui/MediaObject";
import Avatar from "@/components/ui/Avatar";

<MediaObject
  media={<Avatar name="Alice Chen" size="md" />}
  title="Alice Chen"
  description="Left a comment on your pull request."
  actions={<span className="text-xs text-muted">2h ago</span>}
/>

// Center-aligned variant
<MediaObject media={<Icon />} title="DNS propagated" align="center" />
```

### CardHeading

```tsx
import CardHeading from "@/components/ui/CardHeading";

// Inside a Card
<Card>
  <CardHeading
    title="Team Members"
    badge={<Badge size="sm">12</Badge>}
    actions={<Button size="sm" variant="secondary">Invite</Button>}
  />
  <div className="p-6">Card body content</div>
</Card>

// Without border
<CardHeading title="Activity" description="Last 7 days" border={false} />
```

### SectionHeading

```tsx
import SectionHeading from "@/components/ui/SectionHeading";

<SectionHeading
  title="Projects"
  badge={<Badge size="sm">12</Badge>}
  actions={<Button size="sm">New Project</Button>}
  tabs={[
    { label: "All", active: true, onClick: () => setTab("all") },
    { label: "Active", onClick: () => setTab("active") },
    { label: "Archived", onClick: () => setTab("archived") },
  ]}
/>
```

### ActionPanel

```tsx
import ActionPanel from "@/components/ui/ActionPanel";

// Default (right-aligned)
<ActionPanel>
  <Button variant="ghost">Cancel</Button>
  <Button>Save Changes</Button>
</ActionPanel>

// Card variant with justify-between
<ActionPanel variant="card" align="between">
  <span>Enable notifications?</span>
  <Toggle checked={on} onChange={setOn} />
</ActionPanel>

// Well variant
<ActionPanel variant="well" align="right">
  <Button variant="ghost" size="sm">Discard</Button>
  <Button size="sm">Publish</Button>
</ActionPanel>
```

### FormLayout

```tsx
import FormLayout from "@/components/ui/FormLayout";

<FormLayout title="Profile" description="Your public profile information.">
  <Input label="Name" placeholder="Jane Doe" />
  <Textarea label="Bio" placeholder="Write a short bio..." />
</FormLayout>

// With top divider (use for second+ sections)
<FormLayout title="Notifications" description="How you receive alerts." divider>
  <Toggle label="Email notifications" />
  <Toggle label="Push notifications" />
</FormLayout>
```

### InputGroup

```tsx
import InputGroup from "@/components/ui/InputGroup";
import { Search, Mail } from "lucide-react";

// Leading icon
<InputGroup label="Search" leadingIcon={<Search size={16} />} placeholder="Search..." />

// Leading + trailing addons
<InputGroup label="Website" leadingAddon="https://" trailingAddon=".com" placeholder="example" />

// With error
<InputGroup label="Email" leadingIcon={<Mail size={16} />} error="Invalid email" />

// Trailing button (use rounded-none h-full to sit flush inside container)
<InputGroup label="URL" placeholder="Enter URL" trailingButton={<Button size="sm" className="rounded-none h-full">Go</Button>} />
```

### Calendar

```tsx
import Calendar from "@/components/ui/Calendar";

// Basic
<Calendar selected={date} onSelect={setDate} />

// With events
<Calendar
  month={3}
  year={2026}
  selected={date}
  onSelect={setDate}
  events={[
    { date: new Date(2026, 2, 10), color: "accent" },
    { date: new Date(2026, 2, 15), color: "success" },
    { date: new Date(2026, 2, 20), color: "warning" },
  ]}
/>
```

### GridList

```tsx
import GridList from "@/components/ui/GridList";

<GridList
  columns={3}
  items={[
    { id: "1", title: "Project Alpha", description: "Design system", image: <div className="h-24 bg-accent/10" />, badge: <Badge size="sm">Live</Badge>, onClick: () => {} },
    { id: "2", title: "Project Beta", description: "Marketing site", onClick: () => {} },
  ]}
/>
```

### Navbar

```tsx
import Navbar from "@/components/ui/Navbar";

<Navbar
  brand={<span className="font-bold">Acme Inc</span>}
  items={[
    { id: "dashboard", label: "Dashboard" },
    { id: "projects", label: "Projects" },
    { id: "team", label: "Team" },
  ]}
  activeId="dashboard"
  actions={<Button size="sm" variant="secondary">Sign In</Button>}
  sticky
/>
```

### ListContainer

```tsx
import ListContainer from "@/components/ui/ListContainer";

<ListContainer
  title="Team Members"
  actions={<Button size="sm" variant="secondary">Add</Button>}
  footer="Showing 3 of 12 members"
>
  {/* List rows, Feed, or StackedList content */}
  <div className="divide-y divide-[var(--color-border)]">
    <div className="px-6 py-3">Row 1</div>
    <div className="px-6 py-3">Row 2</div>
  </div>
</ListContainer>
```

### Hero

```tsx
import Hero from "@/components/ui/Hero";

// Centered (default)
<Hero
  eyebrow="Introducing NyxWorks"
  title="Build beautiful products faster"
  subtitle="A modern design system for ambitious teams."
  actions={<><Button>Get Started</Button><Button variant="secondary">Learn More</Button></>}
/>

// Split with media
<Hero
  variant="split"
  title="Ship with confidence"
  subtitle="Everything you need to go from idea to production."
  actions={<Button>Try Free</Button>}
  media={<img src="/screenshot.png" alt="App" className="rounded-2xl" />}
/>

// Variants: "centered" | "split" | "splitReverse" | "withScreenshot"
// gradient?: boolean — adds gradient effect to title
```

### FeatureGrid

```tsx
import FeatureGrid from "@/components/ui/FeatureGrid";
import { Zap, Shield, BarChart3 } from "lucide-react";

// Grid layout (default)
<FeatureGrid
  title="Why teams choose us"
  subtitle="Built for scale."
  features={[
    { icon: <Zap size={20} />, title: "Fast", description: "Optimized for speed." },
    { icon: <Shield size={20} />, title: "Secure", description: "Enterprise-grade security." },
    { icon: <BarChart3 size={20} />, title: "Analytics", description: "Real-time insights." },
  ]}
/>

// Layouts: "grid" | "alternating" | "bento" | "centered"
// columns?: 2 | 3 | 4 (default: 3)
```

### CTASection

```tsx
import CTASection from "@/components/ui/CTASection";

// Centered (default)
<CTASection
  title="Ready to get started?"
  description="Join thousands of teams already using NyxWorks."
  actions={<><Button>Start Free Trial</Button><Button variant="secondary">Contact Sales</Button></>}
/>

// Banner variant — use raw <button> for white-on-gradient (Button's text-white can't be overridden via className in Tailwind v4)
<CTASection
  variant="banner"
  title="Ready to get started?"
  description="Start building for free today."
  actions={<button className="px-4 py-2 rounded-lg bg-white text-[var(--color-accent)] font-medium text-sm hover:bg-white/90 transition-colors">Sign Up Free</button>}
/>

// Variants: "centered" | "split" | "banner" | "card"
// media?: ReactNode — for split variant
```

### PricingTier

```tsx
import PricingTier from "@/components/ui/PricingTier";

// Compose 2–3 in a grid for pricing sections
<div className="grid md:grid-cols-3 gap-6">
  <PricingTier
    name="Starter"
    price="$9"
    priceSuffix="/month"
    description="For individuals."
    features={[
      { text: "5 projects", included: true },
      { text: "Basic analytics", included: true },
      { text: "Priority support", included: false },
    ]}
    cta={<Button variant="secondary" className="w-full">Choose Starter</Button>}
  />
  <PricingTier
    name="Pro"
    price="$29"
    priceSuffix="/month"
    featured
    badge={<Badge>Popular</Badge>}
    features={[
      { text: "Unlimited projects", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority support", included: true },
    ]}
    cta={<Button className="w-full">Choose Pro</Button>}
  />
</div>
```

### TestimonialCard

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";

<TestimonialCard
  quote="NyxWorks transformed how we build products."
  author="Jane Doe"
  role="CTO, Acme Inc"
  avatar={<Avatar name="Jane Doe" size="md" />}
/>

// Variants: "default" | "featured" | "minimal"
// logo?: ReactNode — company logo
```

### LogoCloud

```tsx
import LogoCloud from "@/components/ui/LogoCloud";

<LogoCloud
  title="Trusted by innovative teams"
  logos={[
    { content: <img src="/logo1.svg" alt="Acme" className="h-8" /> },
    { content: <img src="/logo2.svg" alt="Globex" className="h-8" /> },
  ]}
/>

// layout?: "row" (default) | "grid"
// columns?: number (for grid layout)
```

### Newsletter

```tsx
import Newsletter from "@/components/ui/Newsletter";

<Newsletter
  title="Stay in the loop"
  description="Get updates on new features and releases."
  placeholder="you@example.com"
  buttonLabel="Subscribe"
  onSubmit={(email) => console.log(email)}
/>

// Variants: "centered" (default) | "inline" | "card"
```

### FAQ

```tsx
import FAQ from "@/components/ui/FAQ";

<FAQ
  title="Frequently Asked Questions"
  items={[
    { question: "How does billing work?", answer: "We bill monthly based on usage." },
    { question: "Can I cancel anytime?", answer: "Yes, cancel anytime with no penalty." },
  ]}
/>

// multiple?: boolean — allow multiple items open (default: false)
// Accordion animation uses CSS grid-rows-[0fr]/[1fr]
```

### TeamMember

```tsx
import TeamMember from "@/components/ui/TeamMember";

<TeamMember
  name="Alice Chen"
  role="Lead Designer"
  avatar={<Avatar name="Alice Chen" size="lg" />}
  bio="Alice leads design across all products."
  socials={[
    { icon: <Twitter size={14} />, href: "#" },
    { icon: <Linkedin size={14} />, href: "#" },
  ]}
/>

// Variants: "card" (default) | "compact" | "horizontal"
```

### BlogCard

```tsx
import BlogCard from "@/components/ui/BlogCard";

<BlogCard
  title="Announcing NyxWorks 2.0"
  excerpt="The biggest update yet with 63 components."
  image={<img src="/blog.jpg" alt="Blog" className="w-full h-full object-cover" />}
  author="Alice Chen"
  date="Mar 13, 2026"
  category="Product"
  href="/blog/announcing-2"
/>

// Variants: "vertical" (default) | "horizontal" | "featured"
```

### FlyoutMenu

```tsx
import FlyoutMenu from "@/components/ui/FlyoutMenu";
import { Home, Settings } from "lucide-react";

<FlyoutMenu
  trigger={<Button variant="secondary">Menu</Button>}
  items={[
    { id: "home", label: "Home", description: "Go to homepage", icon: <Home size={16} />, href: "/" },
    { id: "settings", label: "Settings", description: "Manage preferences", icon: <Settings size={16} />, href: "/settings" },
  ]}
  footer={<a href="/help" className="text-sm text-accent">Need help?</a>}
/>

// align?: "left" (default) | "right"
// width?: "sm" | "md" (default) | "lg"
// Click-outside closes via useRef + mousedown handler
```

### ProductCard

```tsx
import ProductCard from "@/components/ui/ProductCard";

// Vertical (default) — for product grids
<ProductCard
  image={<img src="/product.jpg" alt="Product" className="w-full h-full object-cover" />}
  title="Wireless Headphones"
  description="Premium sound quality."
  price="$79.99"
  originalPrice="$99.99"
  rating={4.5}
  reviewCount={128}
  badge={<Badge color="error" size="sm">Sale</Badge>}
  action={<Button size="sm" className="w-full mt-3">Add to Cart</Button>}
  href="/products/headphones"
/>

// Variants: "vertical" (default) | "horizontal" | "compact"
// Includes inline StarRating helper (filled stars use --color-warning)
```

### Rating

```tsx
import Rating from "@/components/ui/Rating";

// Readonly
<Rating value={4.5} reviewCount={128} />

// Interactive
<Rating value={rating} onChange={setRating} />

// Sizes: "sm" (14px) | "md" (18px, default) | "lg" (24px)
// showValue?: boolean — show numeric value next to stars
```

### PriceTag

```tsx
import PriceTag from "@/components/ui/PriceTag";

// Sale price with original
<PriceTag price="$29.99" originalPrice="$49.99" saleBadge="40% off" />

// Sizes: "sm" | "md" (default) | "lg"
// currency?: string — prepended to price
```

### CartItem

```tsx
import CartItem from "@/components/ui/CartItem";

<CartItem
  image={<img src="/item.jpg" alt="Item" className="w-full h-full object-cover" />}
  title="Wireless Headphones"
  variant="Black / Large"
  price="$79.99"
  quantity={2}
  onQuantityChange={(qty) => setQty(qty)}
  onRemove={() => removeItem()}
/>

// Horizontal layout with Minus/Plus quantity controls
// Min quantity enforced at 1
```

### OrderSummary

```tsx
import OrderSummary from "@/components/ui/OrderSummary";

<OrderSummary
  title="Order Summary"
  lines={[
    { label: "Subtotal", value: "$159.98" },
    { label: "Shipping", value: "$9.99" },
    { label: "Tax", value: "$12.80" },
    { label: "Total", value: "$182.77", isTotal: true },
  ]}
  action={<Button className="w-full">Checkout</Button>}
/>

// promo?: ReactNode — promo code input area
// isTotal rows get border-t separator + bold text
```

### CategoryFilter

```tsx
import CategoryFilter from "@/components/ui/CategoryFilter";

<CategoryFilter
  groups={[
    { label: "Category", options: [
      { value: "electronics", label: "Electronics", count: 24 },
      { value: "clothing", label: "Clothing", count: 18 },
    ]},
    { label: "Color", options: [
      { value: "black", label: "Black", count: 12 },
      { value: "white", label: "White", count: 8 },
    ]},
  ]}
  selected={filters}
  onChange={setFilters}
/>

// Collapsible groups with ChevronDown toggle
// Checkbox-based multi-select per group
```

### PromoSection

```tsx
import PromoSection from "@/components/ui/PromoSection";
import { Truck, RotateCcw, Shield } from "lucide-react";

<PromoSection
  items={[
    { icon: <Truck size={20} />, title: "Free Shipping", description: "On orders over $50" },
    { icon: <RotateCcw size={20} />, title: "30-Day Returns", description: "Hassle-free returns" },
    { icon: <Shield size={20} />, title: "Secure Checkout", description: "256-bit encryption" },
  ]}
/>

// layout?: "row" (default) | "grid" | "banner"
// bg?: "transparent" (default) | "card" | "accent"
// "accent" bg uses gradient from accent to accent-dark
```

## Component Selection Guide

Use this decision tree to pick the right component:

| Need | Use | Not |
|------|-----|-----|
| Yes/no toggle | **Toggle** | Checkbox (for form agreement), RadioGroup |
| Agree to terms | **Checkbox** | Toggle |
| Pick one of 2–5 options | **RadioGroup** | Select, Toggle |
| Pick from a long list | **Combobox** | Select (no search), RadioGroup |
| Pick from a short list (<8) | **Select** | Combobox |
| Full-screen blocking dialog | **Modal** | Drawer |
| Supplementary panel / detail view | **Drawer** | Modal |
| Quick-search command overlay | **CommandPalette** | Modal + custom search |
| Page-level persistent message | **Alert** | Toast |
| Transient notification | **Toast** | Alert |
| Multi-step wizard progress | **Stepper** | Tabs, custom numbered circles |
| Tabbed content switcher | **Tabs** | Stepper |
| Key-value metadata display | **DescriptionList** | Table, custom grid |
| Section separator | **Divider** | `<hr>`, custom border-t |
| Upload/quota/usage meter | **ProgressBar** | custom width bars |
| Loading placeholder | **Skeleton** | Spinner, custom pulse |
| Empty data view | **EmptyState** | custom centered text |
| Top-of-page announcement | **Banner** | Alert (inline), Toast (transient) |
| View mode switcher (2–4 options) | **ButtonGroup** | Tabs (content sections), RadioGroup (form) |
| Dashboard metric card | **StatCard** | Card + custom layout |
| Contact/item list with avatar | **StackedList** | Table (sortable/filterable data) |
| Vertical section navigation | **SidebarNav** | Tabs (horizontal), Breadcrumb |
| Page title bar with actions | **PageHeading** | custom flex layout |
| Activity timeline | **Feed** | StackedList (no timeline connector) |
| Media + text horizontal layout | **MediaObject** | StackedList, custom flex |
| Card header with actions | **CardHeading** | PageHeading (page-level) |
| Section title with tabs/actions | **SectionHeading** | PageHeading, Tabs |
| Form action bar (save/cancel) | **ActionPanel** | custom flex footer |
| Two-column form section | **FormLayout** | custom grid, DescriptionList |
| Input with icons/addons | **InputGroup** | Input (plain) |
| Calendar date display/selection | **Calendar** | custom grid |
| Grid of selectable cards | **GridList** | StackedList (vertical), Table |
| Reusable top navigation | **Navbar** | Header (site-specific) |
| Card-wrapped list with header | **ListContainer** | Card + StackedList manual |
| Marketing hero / landing header | **Hero** | custom flex layout |
| Feature showcase / benefits grid | **FeatureGrid** | manual Card grid |
| Call-to-action banner | **CTASection** | custom section |
| Pricing comparison cards | **PricingTier** (compose in grid) | manual Card layout |
| Customer quotes / social proof | **TestimonialCard** | Card + custom quote |
| Partner / client logo strip | **LogoCloud** | manual flex + img |
| Email capture form | **Newsletter** | Input + Button custom |
| Expandable Q&A list | **FAQ** | custom accordion |
| Team / people cards | **TeamMember** | Card + Avatar custom |
| Article / blog preview | **BlogCard** | Card + custom layout |
| Rich dropdown navigation | **FlyoutMenu** | Dropdown (simple items only) |
| Ecommerce product display | **ProductCard** | Card + custom layout |
| Star rating display / input | **Rating** | custom star icons |
| Price with sale/original | **PriceTag** | custom text |
| Cart line item with qty controls | **CartItem** | custom flex layout |
| Checkout totals / order breakdown | **OrderSummary** | DescriptionList, Table |
| Faceted filter sidebar | **CategoryFilter** | Checkbox + custom groups |
| Incentive / benefit strip | **PromoSection** | custom flex icons |

## Template Reference

Full-page compositions on the `/examples` page. Use these as starting points:

| Template | Composes | When to use |
|----------|----------|-------------|
| **Dashboard** | Card, Badge, Table, Tabs | Analytics, admin panels, overview screens |
| **Settings** | Input, Select, Toggle, Card, Avatar | Simple preference pages |
| **Landing** | Card, Button, Badge | Marketing pages, product launches |
| **Auth Flow** | Input, Button, Checkbox, Divider, Card | Sign in, sign up, forgot password |
| **CRUD** | Table, Badge, Avatar, Dropdown, Pagination, Breadcrumb, DescriptionList, Tabs | Data lists, detail views, admin CRUD |
| **Account Settings** | Input, Textarea, Toggle, Avatar, DescriptionList, ProgressBar, Divider | Full settings with sidebar nav (profile, security, billing, notifications) |
| **Onboarding** | Stepper, Card, Input, RadioGroup, Avatar, Badge | Multi-step wizards, setup flows |
| **Pricing** | Card, Button, Badge, Toggle, Divider | Pricing pages with FAQ |
| **404 Error** | Button, EmptyState pattern | Error pages, not-found screens |
| **SaaS Landing** | Hero, LogoCloud, FeatureGrid, StatCard, TestimonialCard, CTASection, FAQ | Marketing pages, SaaS homepages |
| **Product Launch** | Hero (withScreenshot), FeatureGrid (alternating), PricingTier, CTASection, Newsletter | Product launches, feature announcements |
| **Blog List** | Hero (minimal), BlogCard grid, Pagination | Blog index pages, article listings |
| **Product Catalog** | CategoryFilter sidebar, ProductCard grid, Pagination | Ecommerce category pages, product listings |
| **Shopping Cart** | CartItem list, OrderSummary, PromoSection | Cart pages, checkout flows |
| **Product Detail** | ProductCard (large), Rating, FeatureGrid, TestimonialCard | Product detail pages, product overviews |

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

The style guide includes a full **Icons browser** at `/icons` with all 1,703 Lucide icons. It supports search, live customization (size, stroke width, color), and click-to-copy import/JSX snippets.

To render icons dynamically from the full set, use the `icons` map:

```tsx
import { icons } from "lucide-react";
import { createElement } from "react";

// icons is a Record<string, ForwardRefExoticComponent> with 1703 entries
const IconComponent = icons["ArrowRight"];
createElement(IconComponent, { size: 24, strokeWidth: 2, color: "currentColor" });
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
