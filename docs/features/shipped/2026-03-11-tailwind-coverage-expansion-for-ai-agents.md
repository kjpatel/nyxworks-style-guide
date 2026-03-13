Title: Expand styleguide coverage to mirror Tailwind component/template breadth for AI agents
Status: shipped
Owner: kushan
Updated: 2026-03-13

# Feature: Expand styleguide coverage to mirror Tailwind component/template breadth for AI agents

## Context
The current styleguide has a strong foundation of UI primitives and example pages, but coverage is still narrower than the breadth of component and template patterns developers commonly expect from Tailwind ecosystems.  
This styleguide is also intended to be consumed by AI coding agents, so examples must be machine-usable, consistent, and explicit enough to reduce hallucinated or off-brand UI output.

## Desired Behavior
- Expand component and template coverage so agents can compose most common product UI without inventing patterns.
- Keep all implementations aligned with NyxWorks tokens, spacing, and interaction conventions.
- Add pattern examples that map to high-frequency app surfaces: auth, dashboards, CRUD, settings, marketing, and ecommerce-style blocks.
- Provide implementation-ready snippets and usage guidance that agents can copy safely.
- Ensure examples are presented with clear constraints so agents prefer existing primitives over ad-hoc custom UI.

## UI Requirements
- New components and templates follow existing NyxWorks visual system (tokens, type, radius, icon style, motion rules).
- Every new pattern is responsive by default and demonstrated at mobile + desktop breakpoints.
- States are visible and documented: default, hover, focus, active, disabled, loading, empty, and error where relevant.
- Dark and light theme parity is maintained in all new examples.

## Implementation Constraints
- Use existing stack only: Next.js, Tailwind CSS v4, CSS variables, TypeScript, Lucide, Framer Motion.
- No additional UI libraries or component generators.
- Build from shared primitives in `src/components/ui` first; add primitives only when reuse justifies them.
- Keep pages static-export friendly and consistent with current architecture.
- AI-facing docs must use stable naming, concise props tables, and copy-paste-safe examples.

## Scope (Phase Plan)
- Phase 1: Coverage audit and taxonomy
- Phase 2: Missing primitives and compound components
- Phase 3: Template library expansion
- Phase 4: AI-agent reference hardening

### Phase 1: Coverage audit and taxonomy
- Define a component taxonomy (navigation, forms, feedback, data display, overlays, commerce, marketing sections).
- Create a gap matrix against desired Tailwind-style breadth.
- Prioritize by frequency of use in generated app code.

### Phase 2: Missing primitives and compound components
- Add high-value missing patterns, including command palette/searchable menu.
- Add combobox/autocomplete patterns.
- Add data table enhancements (sorting, filters, row actions).
- Add stepper/progress tracker patterns.
- Add domain-specific empty/search/no-results states.
- Preserve strict token usage and type-safe APIs.

### Phase 3: Template library expansion
- Add full templates and blocks for SaaS dashboards.
- Add auth flow templates (sign in/sign up/forgot password).
- Add settings/account/billing page templates.
- Add CRUD workflow templates (list/detail/form).
- Add marketing landing and pricing layout variants.
- Keep each template composable from shared components.

### Phase 4: AI-agent reference hardening
- For each component/template, add purpose and usage guidance.
- Add do/don't guidance.
- Add props API and state matrix.
- Add copy-paste examples using only approved tokens/utilities.
- Update `.claude/STYLEGUIDE.md` and root guidance to bias agent outputs toward these patterns.

## Relevant Files
- `src/components/ui/*`
- `src/app/components/page.tsx`
- `src/app/patterns/page.tsx`
- `src/app/examples/page.tsx`
- `.claude/STYLEGUIDE.md`
- `CLAUDE.md`
- `template/` (starter scaffold parity updates as needed)

## Acceptance Criteria
- A documented gap matrix exists and is linked from styleguide docs.
- Component/template coverage is materially expanded across the prioritized categories.
- Each new component includes examples for major interactive and validation states.
- Each new template is responsive, theme-safe, and built from shared primitives.
- AI-oriented guidance is present for all new additions (usage, constraints, do/don't, example).
- Running AI code generation against common tasks shows reduced off-spec UI and increased reuse of styleguide primitives.
