Title: Marketing Page Components
Status: planned
Owner: TBD
Updated: 2026-03-13

# Feature: Marketing Page Components

## Context
The NyxWorks design system covers application UI well (auth, CRUD, dashboards, settings) but lacks dedicated marketing page primitives. AI agents building landing pages, product sites, and marketing campaigns currently must invent patterns from scratch. Adding marketing-specific components and templates closes this gap.

## Desired Behavior
- Provide reusable marketing-oriented components that compose with existing primitives
- Cover the most common marketing page surfaces identified in Tailwind Plus UI blocks
- All components follow existing design token system (CSS variables, no raw hex)
- Dark/light theme support out of the box

## UI Requirements

### New Primitives
- **Hero** — Centered, split (text + image), and with-screenshot variants. Props: `title`, `subtitle`, `cta`, `image?`, `variant`
- **FeatureSection** — Icon grid, alternating image+text rows. Props: `features[]`, `layout: "grid" | "alternating"`
- **CTASection** — Call-to-action banner (simple, split with image). Props: `title`, `description`, `actions`, `image?`
- **Testimonial** — Single quote, grid layout, carousel. Props: `items[]`, `layout: "single" | "grid"`
- **LogoCloud** — Row of partner/client logos. Props: `logos: {src, alt}[]`, `title?`
- **Newsletter** — Email capture form with headline. Props: `title`, `description`, `placeholder?`, `buttonLabel?`
- **StatsSection** — Standalone marketing stats row. Props: `stats: {label, value}[]`

### New Templates
- **SaaS Landing Page** — Hero + features + stats + testimonials + CTA + footer
- **Product Launch** — Hero with screenshot + feature grid + pricing + CTA
- **Blog List** — Header + grid of article cards with pagination
- **Blog Post** — Article layout with sidebar, author bio, related posts

## Implementation Constraints
- All components go in `src/components/ui/`
- All templates added to `src/app/examples/page.tsx`
- Specimen demos added to `src/app/components/page.tsx`
- No external dependencies beyond lucide-react and framer-motion
- Static export compatible (no dynamic APIs)
- Update `.claude/STYLEGUIDE.md` with recipes for each new component
- Update `docs/gap-matrix.md` to mark marketing gaps as shipped

## Relevant Files
- `src/components/ui/` — new component files
- `src/app/components/page.tsx` — Specimen demos
- `src/app/examples/page.tsx` — template examples
- `.claude/STYLEGUIDE.md` — component recipes
- `docs/gap-matrix.md` — coverage tracking
- `src/app/page.tsx` — update component/example counts

## Acceptance Criteria
- All 7 marketing primitives render correctly on `/components` page
- All 4 marketing templates render correctly on `/examples` page
- Dark and light themes work for all new components
- `npm run build` succeeds with no errors
- STYLEGUIDE.md includes recipes for all new marketing components
- Gap matrix updated to reflect marketing coverage as shipped
