# Lumina CSS

Lumina CSS is a hybrid styling CDN for frontend builders who want utility speed, component clarity, and a more authored visual language. The project contains the responsive documentation site plus two small distribution files in `client/public/`: `lumina.css` and `lumina.js`.

## Local development

Run `pnpm install` and then `pnpm dev`. The documentation is a client-only React application. Its main navigation is responsive: wide screens use an indexed documentation rail, while small screens use a keyboard-friendly drawer. The sections cover installation, foundations, layout utilities, components, the Lumina SVG icon language, theming, motion, and accessibility.

## CDN assets

The current distribution version is `0.2.0`.

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
3. Tag a release such as `v0.2.0`.
4. Use jsDelivr with the tagged release:

```text
https://cdn.jsdelivr.net/gh/<public-owner>/<public-repo>@v0.2.0/lumina.css
https://cdn.jsdelivr.net/gh/<public-owner>/<public-repo>@v0.2.0/lumina.js
```

The repository must be public for jsDelivr to fetch it. Confirm the public repository name and owner before exposing the assets.
