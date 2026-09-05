# Lumina CSS

Lumina CSS is a hybrid styling CDN for frontend builders who want utility speed, component clarity, and a more authored visual language. The project contains the responsive documentation site plus two small distribution files in `client/public/`: `lumina.css` and `lumina.js`.

## Local development

Run `pnpm install` and then `pnpm dev`. The documentation is a client-only React application. Its main navigation is responsive: wide screens use an indexed documentation rail, while small screens use a keyboard-friendly drawer. The sections cover installation, foundations, layout utilities, components, the Lumina SVG icon language, theming, motion, and accessibility.

## CDN assets

The current distribution version is `0.5.0`.

```html
<link rel="stylesheet" href="/lumina.css" />
<script defer src="/lumina.js"></script>
```

Lumina’s icon layer is not a font. It renders inline SVG symbols from `data-lu-icon` attributes, so icons stay crisp, inherit CSS color, and remain independently accessible.

```html
<span class="lu-neu-icon">
  <span data-lu-icon="spark" aria-label="Featured"></span>
</span>
```

The available names are `spark`, `grid`, `layers`, `code`, `palette`, `motion`, `accessibility`, `arrow`, `check`, `menu`, `close`, `sun`, and `moon`.

## Vercel deployment

Import the repository into Vercel with the framework preset set to **Vite**. Use `pnpm build` as the build command and `dist/public` as the output directory if you are deploying the generated static directory directly, or use the project’s existing Vite preset so the standard build pipeline runs. `vercel.json` includes the SPA rewrite and immutable cache headers for the versioned CDN files.

## Publishing a public CDN URL

A stable public CDN URL cannot be created from a local sandbox alone. The assets must first be published to a public package or repository host. The recommended release path is:

1. Create a public GitHub repository for the distribution files, or publish the package to npm.
2. Place `lumina.css` and `lumina.js` in the repository root or a versioned `dist/` directory.
3. Tag a release such as `v0.5.0`.
4. Use jsDelivr with the tagged release:

```text
https://cdn.jsdelivr.net/gh/<public-owner>/<public-repo>@v0.5.0/lumina.css
https://cdn.jsdelivr.net/gh/<public-owner>/<public-repo>@v0.5.0/lumina.js
```

The repository must be public for jsDelivr to fetch it. The current public release is `v0.5.0` in `Godszeal/lumina-css`.


## v0.5.0 improvements

Lumina now uses a neutral system-font stack by default. Custom display and monospace fonts are optional overrides through `--lu-font-display` and `--lu-font-mono`; the CDN no longer requires a web-font request.

The framework includes opt-in animation utilities such as `lu-animate-fade`, `lu-animate-rise`, `lu-animate-pop`, `lu-animate-shimmer`, `lu-hover-lift`, and `lu-press`. Motion uses transform and opacity, includes short timing tokens, and is disabled or reduced under `prefers-reduced-motion: reduce`.

Dark mode can persist through the optional script. Add a toggle with `data-lu-theme-toggle`, or set `data-lu-theme="dark"` on the root element. The runtime stores the preference in `localStorage` under `lu-theme` and falls back to the operating system preference when no saved choice exists.

The grid background is no longer required. Use `.lu-grid-bg` or `.lu-grid-paper` only when the texture is wanted, add `.lu-no-grid` to remove it, or use `data-lu-grid="off"` on the root element. A toggle can use `data-lu-grid-toggle` and the runtime will persist the choice under `lu-grid`.

The icon catalog now includes dashboard and form families such as `dashboard`, `chart`, `wallet`, `cart`, `filter`, `sort`, `edit`, `trash`, `eye`, `eyeOff`, `mail`, `message`, `help`, `info`, `warning`, `success`, `clock`, `logout`, and `refresh`. These are original Lumina SVG symbols, not copied Font Awesome assets.

## Font Awesome comparison and icon strategy

Font Awesome 7.3.1 lists 2,163 Free icons and 65,928 Pro icons across 36 styles, 17 packs, and 68 categories. Lumina uses that broad category coverage as a planning reference, but it does not copy Font Awesome Pro paths or redistribute Font Awesome files. Font Awesome Free’s official license applies CC BY 4.0 to SVG/JS icons, SIL OFL 1.1 to font files, and MIT to code; attribution requirements and brand-trademark restrictions still apply. See `research/font-awesome-findings.md` for the source links and the recommended original Lumina categories.


## Dashboard showcase

The documentation includes a responsive dashboard recipe using non-customer demo data. It demonstrates metric cards, search, status filtering, sortable workspace headers, pagination, status chips, fixed table geometry, mobile overflow handling, and a resettable empty state.

The CDN table primitives are:

```html
<div class="lu-table-shell">
  <div class="lu-filter-bar">Filters</div>
  <table class="lu-table lu-table-fixed">...</table>
  <nav class="lu-pagination">Pagination</nav>
</div>
```

## Planned Lumina expansion

The Tailwind review identified several high-value capabilities that can be added as original `lu-` prefixed primitives: density and row-selection patterns, `aria-sort` helpers, skeleton/loading surfaces, form validation states, filter chips, breadcrumbs, tabs, command palettes, toasts, tooltips, drawers, accordions, container-query utilities, and data-visualization primitives. Lumina will keep these as small CDN-friendly behaviors instead of reproducing Tailwind’s build-time compiler or generated runtime.


## v0.7.0 Admin Kit and modular CDN bundles

The Admin Kit includes tabs, form controls, drawers, toasts, skeleton loaders, a command palette, responsive tables, filters, pagination, empty states, and a searchable API index. The documentation site now uses the real versioned jsDelivr URLs.

The all-in-one compatibility bundle remains available:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Godszeal/lumina-css@v0.7.0/client/public/lumina.css">
<script defer src="https://cdn.jsdelivr.net/gh/Godszeal/lumina-css@v0.7.0/client/public/lumina.js"></script>
```

For smaller production pages, load only the modules you need:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Godszeal/lumina-css@v0.7.0/client/public/lumina-core.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Godszeal/lumina-css@v0.7.0/client/public/lumina-components.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Godszeal/lumina-css@v0.7.0/client/public/lumina-interactions.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Godszeal/lumina-css@v0.7.0/client/public/lumina-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Godszeal/lumina-css@v0.7.0/client/public/lumina-dashboard.css">
<script defer src="https://cdn.jsdelivr.net/gh/Godszeal/lumina-css@v0.7.0/client/public/lumina-icons.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/Godszeal/lumina-css@v0.7.0/client/public/lumina-interactions.js"></script>
```

The machine-readable API index is available at:

```text
https://cdn.jsdelivr.net/gh/Godszeal/lumina-css@v0.7.0/client/public/lumina-api.json
```

Run `pnpm validate:lumina` to check required assets, bundle sizes, responsive CSS markers, and common accessibility markers before publishing.
