# Font Awesome research findings

## Sources

- https://fontawesome.com/versions
- https://fontawesome.com/license/free
- https://fontawesome.com/docs/web/setup/get-started
- https://docs.fontawesome.com/web/setup/packages

## Findings

Font Awesome’s official versions page reports Font Awesome 7.3.1 as the latest version, released July 7, 2026. It lists 65,928 Pro icons, 2,163 Free icons, 17 icon packs, 36 icon styles, and 68 categories for version 7. Font Awesome 6 is listed as an LTS version with 2,060 Free icons, 5 icon packs, 16 icon styles, and 68 categories.

Font Awesome Free’s official license page states that SVG and JS icon files are under CC BY 4.0, web and desktop font files are under SIL OFL 1.1, and non-font/non-icon code is under MIT. The page says attribution is required by the applicable licenses, although downloaded files already include embedded comments that normally provide sufficient attribution. Brand icons are trademarks of their respective owners and should only represent the referenced company, product, or service. Do not copy Font Awesome Pro assets into Lumina; use the catalog as a reference for category coverage and create original Lumina symbols.

Font Awesome’s official setup docs show Kit-based script loading and icon classes such as `fa-solid fa-user`. Package-based usage replaces `<i>` instances with SVG icons and loads the required CSS. Lumina should remain its own original SVG icon system, with dashboard/form coverage inspired by common categories rather than copied paths or names from restricted assets.

## Implementation direction

Add original Lumina icon categories for dashboard navigation, account/profile, settings, notifications, analytics, commerce, files/data, calendar/time, devices, security, communication, status, and editor controls. Keep the current soft-neumorphic presentation and use `data-lu-icon` names with inline SVG paths authored for Lumina.

Add animation utilities with transform/opacity-only motion, short durations, reduced-motion fallbacks, and opt-in classes such as `lu-animate-fade`, `lu-animate-rise`, `lu-animate-pop`, `lu-animate-shimmer`, `lu-hover-lift`, and `lu-press`.

Add persistent dark mode through the Lumina script, using a `data-lu-theme` attribute and localStorage. Add a `data-lu-grid="off"` or `.lu-no-grid` mode so the grid background is optional rather than mandatory. Replace required web-font loading in the CDN core with a neutral system stack while allowing optional custom font variables for users who want them.
