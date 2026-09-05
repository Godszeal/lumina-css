# Lumina icon roadmap

Lumina should not attempt to reproduce Font Awesome’s full catalog. Font Awesome 7.3.1 reports 2,163 Free icons and 65,928 Pro icons across 68 categories, so a smaller, opinionated catalog is easier to keep coherent, accessible, and visually distinctive.

## Priority families for Lumina

| Family | Recommended original symbols | Primary use |
|---|---|---|
| Dashboard | dashboard, chart, chart-up, chart-down, activity, pulse, gauge, target | Analytics pages, KPI cards, monitoring views |
| Navigation | home, menu, close, arrow-left, arrow-right, chevron-down, external, command | App shells, sidebars, breadcrumbs, links |
| Account | user, users, profile, settings, logout, lock, shield, key | Account pages, permissions, authentication |
| Forms | edit, check, success, warning, info, help, eye, eye-off, search, filter, sort | Inputs, validation, filtering, table controls |
| Data | database, folder, file, file-plus, upload, download, cloud, archive | Admin panels, file workflows, data products |
| Commerce | wallet, cart, receipt, card, tag, percent, coin, invoice | Billing, orders, subscriptions, checkout |
| Communication | mail, message, bell, send, phone, calendar, clock, mention | Notifications, support, scheduling, collaboration |
| Content | image, video, link, paperclip, bookmark, star, heart, share | CMS, editorial tools, saved items, publishing |
| Devices | monitor, tablet, phone, laptop, server, wifi, plug | Responsive previews, infrastructure, device management |
| Editor | plus, minus, add, remove, drag, expand, collapse, refresh, copy | Builders, settings panels, data tables, editors |
| Status | success, warning, error, info, loading, offline, live, paused | System health, validation, deployment status |
| Brand | github, gitlab, npm, globe, building, people | Integrations and organizational contexts |

## Design rules

Lumina symbols should be authored as original inline SVG paths with a shared 24×24 viewBox, rounded stroke joins, a consistent 1.65–1.8 stroke width, and restrained geometric detail. Product icons should remain neutral and reusable; brand marks should only identify the referenced brand and should never be presented as Lumina-owned symbols.

The default icon delivery should be inline SVG through `data-lu-icon`, with a React `LuminaIcon` equivalent for component projects. A font icon layer should not be the primary API because inline SVG preserves color inheritance, accessible labeling, crisp scaling, and tree-shakeable usage. If a font-compatible layer is added later, it should be a separately generated Lumina asset rather than an imported Font Awesome font.

## Recommended next additions

The highest-value next batch is `activity`, `gauge`, `users`, `shield`, `key`, `file`, `filePlus`, `cloud`, `receipt`, `card`, `tag`, `send`, `share`, `copy`, `expand`, `collapse`, `error`, `loading`, `offline`, `live`, and `paused`. These fill the most common dashboard and form states without making the catalog feel generic.
