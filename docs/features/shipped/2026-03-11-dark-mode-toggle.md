Title: Add dark mode toggle
Status: shipped
Owner: kushan
Updated: 2026-03-11

# Feature: Add dark mode toggle

## Context
The style guide supports light and dark themes through CSS variables and the `.dark` class, and now includes a user-facing toggle in the header.

## Desired Behavior
- Show a theme toggle button in the header.
- Clicking the button switches between dark and light themes.
- Save user preference in `localStorage` under `theme`.
- Restore the saved theme on page load.
- Default to dark mode when no saved preference exists.

## UI Requirements
- Sun/moon icon state in header toggle.
- Works across mobile and desktop layouts.
- Uses existing NyxWorks visual language and tokens.
- Uses existing transition classes for header control interactions.

## Implementation Constraints
- Uses Tailwind + CSS variables (`--color-*`) with `.dark` overrides.
- No additional dependencies added for theme management.
- Toggle logic implemented in `src/components/Header.tsx`.
- Initial theme hydration handled in `src/app/layout.tsx`.

## Relevant Files
- `src/components/Header.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`

## Acceptance Criteria
- Theme changes immediately when toggle is pressed.
- Theme preference persists across reloads via `localStorage`.
- Saved theme is applied on initial load (including pre-hydration default handling).
- No console errors during toggle or initial load.

