# Public design-system research findings

## Sources reviewed

| Source | Findings to reimplement independently | Boundary |
|---|---|---|
| [USWDS](https://designsystem.digital.gov/) | Organizes guidance into components, patterns, design tokens, utilities, templates, and mobile/accessibility goals. This supports a clearer Lumina documentation taxonomy and token-first API. | Use the concepts and public guidance; do not copy USWDS code, visual assets, or government branding. |
| [Carbon Design System](https://carbondesignsystem.com/) | Presents an open-source system across design, development, migration, components, patterns, data visualization, and themes. Its emphasis on reusable component libraries and token-driven themes suggests Lumina should add theme contracts, migration notes, and data-visualization primitives. | Reimplement patterns with Lumina’s own `lu-` names, geometry, tokens, and visual language; do not copy Carbon source or IBM marks. |

## Initial synthesis

The strongest reusable pattern is not copying CSS files. It is exposing a predictable product surface: foundations, tokens, utilities, components, patterns, templates, accessibility, migration, and data visualization. Lumina should preserve its CDN-first and editorial identity while making the API reference and release process follow this clearer taxonomy.

| Source | Findings to reimplement independently | Boundary |
|---|---|---|
| [PatternFly](https://www.patternfly.org/) | Enterprise systems benefit from explicit foundations/styles, components, patterns, extensions, content design, accessibility, developer guides, release highlights, and upgrade guidance. Lumina should add release notes, migration guidance, enterprise navigation, and dense-data recipes. | Use the public organizational ideas; do not copy Red Hat/PatternFly assets, code, or branded visual treatment. |
| [Open UI](https://open-ui.org/) | Component contracts should describe parts, states, behaviors, accessibility requirements, and test suites. It also highlights native controls such as select, dialog, menu, combobox, tabs, tables, skeletons, and toast. Lumina should model state contracts and test hooks before styling. | Use standards-oriented concepts and public specifications; do not copy proposal text or implementation code as a package. |

## Revised synthesis

Add a Lumina maturity layer: foundations and tokens; primitives and utilities; components and interaction contracts; dashboard and commerce patterns; accessibility and test recipes; release and migration notes; and an API manifest. Prioritize native HTML semantics where possible, then enhance with `data-lu-*` behavior and CSS custom properties.
