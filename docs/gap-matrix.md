# Component Gap Matrix

Coverage audit for the NyxWorks design system, comparing existing primitives against Tailwind Plus Application UI (49 categories, 354+ variants).

## Taxonomy

| Category | Existing | Added (Wave 1) | Added (Wave 2) | Added (Wave 3) | Status |
|---|---|---|---|---|---|
| **Navigation** | Breadcrumb, Tabs, Pagination | Stepper | SidebarNav | Navbar | Shipped |
| **Forms** | Button, Input, Textarea, Select, Checkbox, Toggle | RadioGroup, Combobox | ButtonGroup | InputGroup, ActionPanel, FormLayout | Shipped |
| **Feedback** | Alert, Toast, EmptyState, Skeleton | ProgressBar | Banner | — | Shipped |
| **Data Display** | Table, Badge, Avatar, Card, Tooltip | DescriptionList | StatCard, StackedList, Feed | Calendar, GridList | Shipped |
| **Overlays** | Modal, Dropdown | Drawer, CommandPalette | — | — | Shipped |
| **Layout** | Page Shell, Sidebar, Grids (patterns) | Divider | PageHeading | MediaObject, CardHeading, SectionHeading, ListContainer | Shipped |
| **Marketing** | — | — | — | Hero, FeatureGrid, CTASection, PricingTier, Newsletter, TestimonialCard, BlogCard, TeamMember, LogoCloud, FAQ, FlyoutMenu | Shipped |
| **Ecommerce** | — | — | — | ProductCard, CartItem, OrderSummary, CategoryFilter, PromoSection, Rating | Shipped |

**Total: 63 components — 100% Tailwind UI Application UI, Marketing, and Ecommerce category coverage.**

## Template Coverage

| Surface | Existing | Added (Wave 1) | Added (Wave 2) | Status |
|---|---|---|---|---|
| **Dashboard** | Basic dashboard example | — | — | Shipped |
| **Settings** | Basic settings example | Full account settings | — | Shipped |
| **Landing** | Basic landing example | Enhanced pricing page | — | Shipped |
| **Auth Flows** | — | Sign In, Sign Up, Forgot Password | — | Shipped |
| **CRUD** | — | List view + detail panel | — | Shipped |
| **Onboarding** | — | Multi-step wizard | — | Shipped |
| **Error Pages** | — | — | 404 error page | Shipped |
| **Marketing** | — | — | Blog, Team, Contact, FAQ, Newsletter, Testimonials | Shipped |
| **Ecommerce** | — | — | Product listing, Product detail, Cart, Checkout, Order history, Promo | Shipped |

## Tailwind UI Application UI Coverage Map

| # | Tailwind UI Category | NyxWorks Component | Wave |
|---|---|---|---|
| 1 | Stacked Layouts | Navbar + layout patterns | W3 |
| 2 | Sidebar Layouts | SidebarNav | W2 |
| 3 | Multi-Column Layouts | FormLayout + patterns | W3 |
| 4 | Page Headings | PageHeading | W2 |
| 5 | Card Headings | CardHeading | W3 |
| 6 | Section Headings | SectionHeading | W3 |
| 7 | Description Lists | DescriptionList | W1 |
| 8 | Stats | StatCard | W2 |
| 9 | Calendars | Calendar | W3 |
| 10 | Stacked Lists | StackedList | W2 |
| 11 | Tables | Table | Existing |
| 12 | Grid Lists | GridList | W3 |
| 13 | Feeds | Feed | W2 |
| 14 | Form Layouts | FormLayout | W3 |
| 15 | Input Groups | InputGroup | W3 |
| 16 | Select Menus | Select + Combobox | Existing + W1 |
| 17 | Sign-in/Registration | AuthFlow template | W1 |
| 18 | Textareas | Textarea | Existing |
| 19 | Radio Groups | RadioGroup | W1 |
| 20 | Checkboxes | Checkbox | Existing |
| 21 | Toggles | Toggle | Existing |
| 22 | Action Panels | ActionPanel | W3 |
| 23 | Comboboxes | Combobox | W1 |
| 24 | Alerts | Alert | Existing |
| 25 | Empty States | EmptyState | Existing |
| 26 | Navbars | Navbar | W3 |
| 27 | Pagination | Pagination | Existing |
| 28 | Tabs | Tabs | Existing |
| 29 | Vertical Navigation | SidebarNav | W2 |
| 30 | Sidebar Navigation | SidebarNav | W2 |
| 31 | Breadcrumbs | Breadcrumb | Existing |
| 32 | Progress Bars | ProgressBar | W1 |
| 33 | Command Palettes | CommandPalette | W1 |
| 34 | Modal Dialogs | Modal | Existing |
| 35 | Drawers | Drawer | W1 |
| 36 | Notifications | Toast | Existing |
| 37 | Avatars | Avatar | Existing |
| 38 | Badges | Badge | Existing |
| 39 | Dropdowns | Dropdown | Existing |
| 40 | Buttons | Button | Existing |
| 41 | Button Groups | ButtonGroup | W2 |
| 42 | Containers | CSS patterns | Existing |
| 43 | Cards | Card | Existing |
| 44 | List Containers | ListContainer | W3 |
| 45 | Media Objects | MediaObject | W3 |
| 46 | Dividers | Divider | W1 |
| 47 | Home Screens | Dashboard template | Existing |
| 48 | Detail Screens | CRUD template | W1 |
| 49 | Settings Screens | AccountSettings template | W1 |

## Marketing Coverage Map

| # | Tailwind UI Category | NyxWorks Component | Status |
|---|---|---|---|
| 1 | Hero Sections (12) | Hero | Shipped |
| 2 | Feature Sections (15) | FeatureGrid | Shipped |
| 3 | CTA Sections (11) | CTASection | Shipped |
| 4 | Bento Grids (3) | FeatureGrid layout="bento" | Shipped |
| 5 | Pricing Sections (12) | PricingTier | Shipped |
| 6 | Header Sections (8) | Hero + Navbar | Shipped |
| 7 | Newsletter Sections (6) | Newsletter | Shipped |
| 8 | Stats (8) | StatCard | Existing |
| 9 | Testimonials (8) | TestimonialCard | Shipped |
| 10 | Blog Sections (7) | BlogCard | Shipped |
| 11 | Contact Sections (7) | TeamMember + FormLayout | Shipped |
| 12 | Team Sections (9) | TeamMember | Shipped |
| 13 | Content Sections (7) | FeatureGrid layout="alternating" | Shipped |
| 14 | Logo Clouds (6) | LogoCloud | Shipped |
| 15 | FAQs (7) | FAQ | Shipped |
| 16 | Footers (7) | Layout pattern | Pattern |
| 17 | Headers (11) | Navbar | Existing |
| 18 | Flyout Menus (7) | FlyoutMenu | Shipped |
| 19 | Banners (13) | Banner | Existing |
| 20 | 404 Pages (5) | Error template | Existing |

## Ecommerce Coverage Map

| # | Tailwind UI Category | NyxWorks Component | Status |
|---|---|---|---|
| 1 | Product Overviews (5) | ProductCard + template | Shipped |
| 2 | Product Lists (11) | ProductCard grid | Shipped |
| 3 | Category Previews (6) | ProductCard compact | Shipped |
| 4 | Shopping Carts (6) | CartItem + OrderSummary | Shipped |
| 5 | Category Filters (5) | CategoryFilter | Shipped |
| 6 | Product Quickviews (4) | ProductCard + Modal | Shipped |
| 7 | Product Features (9) | FeatureGrid | Shipped |
| 8 | Store Navigation (5) | CategoryFilter + Navbar | Shipped |
| 9 | Promo Sections (8) | PromoSection | Shipped |
| 10 | Checkout Forms (5) | OrderSummary + FormLayout | Shipped |
| 11 | Reviews (4) | Rating + TestimonialCard | Shipped |
| 12 | Order Summaries (4) | OrderSummary | Shipped |
| 13 | Order History (4) | Table + Badge + template | Existing |
| 14 | Incentives (8) | PromoSection | Shipped |
