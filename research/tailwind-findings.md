# Tailwind research findings

## Sources

- https://tailwindcss.com/docs/responsive-design
- https://tailwindcss.com/docs/dark-mode
- https://tailwindcss.com/docs/animation
- https://tailwindcss.com/docs/transition-property
- https://tailwindcss.com/docs/styling-with-utility-classes

## Findings

Tailwind’s official responsive design documentation describes a mobile-first breakpoint system where utilities can be prefixed with breakpoint variants. The default v4 breakpoints are `sm` at 40rem/640px, `md` at 48rem/768px, `lg` at 64rem/1024px, `xl` at 80rem/1280px, and `2xl` at 96rem/1536px. It also documents container-query variants such as `@container`, `@sm`, and `@md`.

Tailwind’s dark-mode documentation supports system preference by default and manual activation through a class or a data attribute. Its data-attribute pattern uses an attribute selector such as `[data-theme=dark]` to activate dark variants. Lumina already uses `data-lu-theme` with localStorage persistence, so it should extend that pattern rather than imitate Tailwind’s generated variants.

Tailwind’s utility model covers layout, spacing, sizing, typography, colors, backgrounds, borders, effects, filters, tables, transitions, transforms, animations, and responsive/state variants. Lumina should add a focused CDN layer for frequently used dashboard patterns: display, positioning, overflow, aspect ratio, object fit, width/height, min/max sizing, spacing, flex/grid alignment, z-index, opacity, shadow, ring, transition timing, transform, and common state helpers.

## Implementation boundary

Do not fetch or copy Tailwind’s generated runtime or source code into Lumina. Use the official feature categories as a compatibility and planning reference, then implement original `lu-` prefixed CSS primitives and a small runtime for interactive components. Keep Lumina’s CDN-first identity, original token names, custom icon geometry, and no-build usage model.


## Dashboard-specific findings

Tailwind’s state documentation treats hover, focus, active, focus-visible, disabled, invalid, checked, aria, data, and structural variants as composable conditions. It also documents odd/even and descendant-driven variants for table rows and grouped controls. Lumina should implement original state helpers for focus-visible, disabled, invalid, selected, busy, and status states rather than a full variant compiler.

Tailwind’s table-layout documentation highlights `table-auto` for content-sized columns and `table-fixed` for predictable column widths. Responsive table behavior can switch layout utilities at breakpoints. Lumina’s dashboard should use a scrollable table shell on small screens, `table-layout: fixed` for stable desktop columns, compact row density, and an explicit empty state when filtering returns no rows.

## Future Lumina additions

High-value next features include sortable table headers, density controls, `aria-sort` support, row selection, keyboard focus styling, responsive overflow shells, form validation states, skeleton/loading surfaces, pagination primitives, filter chips, breadcrumbs, tabs, command palettes, toasts, tooltips, disclosure/accordion patterns, drawer/sheet components, and data visualization primitives. These should remain small, prefixed, CDN-friendly, and independent of a build-time compiler.


## Lumina dashboard verification

The live preview rendered the Dashboard showcase with four metric cards, a workspace search input, a status select, a sortable workspace header, a fixed-width scrollable table shell, status chips, pagination controls, and a documented empty state. The demo data is explicitly labeled as non-customer data. The desktop preview exposes the full table while the existing mobile-first shell keeps the table scrollable instead of forcing unreadable column compression.
