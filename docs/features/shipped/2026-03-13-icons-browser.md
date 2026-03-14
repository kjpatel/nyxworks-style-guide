Title: Lucide Icons Browser
Status: shipped
Owner: Claude
Updated: 2026-03-13

# Feature: Lucide Icons Browser

## Context
The styleguide only showed 26 hand-picked icons on the Foundations page. Users need a dedicated page to browse, search, and customize all 1,703 Lucide icons — similar to lucide.dev/icons but integrated into the NyxWorks design system.

## Desired Behavior
- Top-level "Icons" nav item between Foundations and Components
- Full-text search across all icon names
- Live customization of size, stroke width, and color
- Click-to-copy import and JSX snippets
- Responsive grid that adapts to viewport

## UI Requirements
- Search bar with clear button at top
- Customization panel with preset buttons for size (16/20/24/32/48), stroke (1/1.5/2/2.5/3), and color (Default/Accent/Muted/Custom hex)
- Auto-fill grid of icon buttons with name labels
- Fixed bottom detail panel on icon selection with large preview, import snippet, and JSX snippet with copy buttons
- Result count updates dynamically during search

## Implementation Constraints
- "use client" page (search, customization, clipboard all require client state)
- Import `{ icons }` from lucide-react (the map of all 1,703 components)
- No virtualization needed — 1,703 small SVGs render fine in modern browsers
- Uses `content-visibility: auto` for paint optimization
- All styling via CSS variables for automatic dark/light theme support

## Relevant Files
- `src/app/icons/page.tsx` — Icons browser page (created)
- `src/components/Header.tsx` — Added "Icons" nav item
- `src/app/page.tsx` — Added Icons card to homepage sections

## Acceptance Criteria
- All 1,703 Lucide icons render in the grid
- Search filters icons by name in real time
- Size/stroke/color controls update all visible icons
- Clicking an icon shows detail panel with correct import and JSX code
- Copy buttons write to clipboard
- Page works in both dark and light themes
- "Icons" nav link shows active state on /icons
- Homepage shows Icons card linking to /icons
