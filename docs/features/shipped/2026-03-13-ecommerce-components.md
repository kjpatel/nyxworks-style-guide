Title: Ecommerce Components
Status: planned
Owner: TBD
Updated: 2026-03-13

# Feature: Ecommerce Components

## Context
AI agents building ecommerce storefronts, marketplaces, or SaaS products with billing flows lack dedicated ecommerce primitives in the NyxWorks design system. These patterns (product cards, carts, checkout) are among the most common in Tailwind Plus UI blocks but are currently uncovered.

## Desired Behavior
- Provide reusable ecommerce-oriented components that compose with existing primitives
- Cover product browsing, cart management, checkout, and order tracking surfaces
- All components follow existing design token system (CSS variables, no raw hex)
- Dark/light theme support out of the box

## UI Requirements

### New Primitives
- **ProductCard** — Image, title, price, rating, add-to-cart. Props: `image`, `title`, `price`, `originalPrice?`, `rating?`, `badge?`, `onAddToCart?`. Variants: grid (vertical), list (horizontal)
- **CartItem** — Product row with quantity controls and remove. Props: `image`, `title`, `price`, `quantity`, `onQuantityChange`, `onRemove`
- **Rating** — Star rating display/input. Props: `value`, `max?`, `onChange?`, `size?`, `readonly?`
- **PriceTag** — Formatted price with optional sale styling. Props: `price`, `originalPrice?`, `currency?`, `size?`
- **CategoryFilter** — Faceted navigation sidebar with checkboxes. Props: `categories[]`, `selected[]`, `onChange`
- **OrderTimeline** — Order status tracker. Props: `steps[]`, `currentStep`. Similar to Stepper but ecommerce-specific labels/icons

### New Templates
- **Product Catalog** — Category filter sidebar + product grid + pagination + sort controls
- **Product Detail** — Image gallery + description + price + add to cart + reviews
- **Shopping Cart** — Cart item list + order summary sidebar + checkout button
- **Checkout Flow** — Multi-step: shipping → payment → review → confirmation (uses Stepper)
- **Order History** — Table of past orders with status badges and detail expand

## Implementation Constraints
- All components go in `src/components/ui/`
- All templates added to `src/app/examples/page.tsx`
- Specimen demos added to `src/app/components/page.tsx`
- No external dependencies beyond lucide-react and framer-motion
- Static export compatible (no dynamic APIs)
- Product images can use placeholder boxes or generic icons
- Update `.claude/STYLEGUIDE.md` with recipes for each new component
- Update `docs/gap-matrix.md` to mark ecommerce gaps as shipped

## Relevant Files
- `src/components/ui/` — new component files
- `src/app/components/page.tsx` — Specimen demos
- `src/app/examples/page.tsx` — template examples
- `.claude/STYLEGUIDE.md` — component recipes
- `docs/gap-matrix.md` — coverage tracking
- `src/app/page.tsx` — update component/example counts

## Acceptance Criteria
- All 6 ecommerce primitives render correctly on `/components` page
- All 5 ecommerce templates render correctly on `/examples` page
- Dark and light themes work for all new components
- `npm run build` succeeds with no errors
- STYLEGUIDE.md includes recipes for all new ecommerce components
- Gap matrix updated to reflect ecommerce coverage as shipped
