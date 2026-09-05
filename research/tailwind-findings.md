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
