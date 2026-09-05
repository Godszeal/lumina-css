# Lumina CSS — Design Direction

## Three stylistic approaches

### Theme Name: Editorial Utility
Very high-contrast typography, warm paper tones, and sharp cobalt accents make the documentation feel like a printed design manual translated into a modern developer tool.
**Probability:** 0.07

### Theme Name: Signal Garden
A botanical-inspired interface with mineral neutrals, moss green, and citrus highlights, pairing organic softness with precise code examples.
**Probability:** 0.03

### Theme Name: Midnight Instrument
A dark technical canvas with restrained amber and electric blue accents, designed like a precision instrument panel for frontend builders.
**Probability:** 0.08

## Selected approach: Editorial Utility

### Design Movement
Swiss International Typographic Style reinterpreted for contemporary developer tooling: disciplined hierarchy, purposeful asymmetry, visible structure, and confident use of negative space.

### Core Principles
1. **Structure is visible.** Grid lines, rulers, section markers, and code framing should make the system feel inspectable rather than decorative.
2. **Typography carries hierarchy.** Oversized editorial headlines and compact mono labels distinguish human guidance from machine-readable API detail.
3. **Utility meets tactility.** Components should feel practical and crisp, with subtle pressed states, thin rules, and layered paper-like panels.
4. **One system, many expressions.** The same tokens power the landing page, playground, code samples, and CDN usage snippets.

### Color Philosophy
The foundation is an ink-black blue-charcoal and a warm cloud-white rather than pure black and white, giving the interface a print-studio character. Cobalt is the signature action color: energetic, legible, and technical without becoming neon. A restrained acid-lime is reserved for live status, successful copy actions, and “ready” states so it feels scarce and meaningful.

### Layout Paradigm
Use an asymmetric editorial frame: a fixed left rail for system navigation, a narrow utility strip for metadata, and a wide working canvas that alternates between full-bleed hero blocks and offset content columns. Avoid default centered landing-page stacks; documentation should feel like a browsable specimen sheet.

### Signature Elements
- A diagonal cobalt “slash” motif used in the wordmark, active navigation, and section markers.
- Small uppercase mono labels with index numbers such as `01 / FOUNDATIONS`.
- Fine blueprint rules and oversized ghosted utility names behind selected sections.

### Interaction Philosophy
Interactions should expose capability rather than add spectacle. Hover states reveal affordances through color shifts and underlines; copy buttons confirm instantly with a compact status swap; theme controls change the whole specimen surface while keeping the content readable.

### Animation
Use short 140–220ms transitions with an assertive ease-out. On entry, section markers slide a few pixels into place while opacity rises; never use floating or looping motion for primary content. Buttons compress slightly on press, cards lift by 2px on hover, and the live playground updates with a quick “ink spread” highlight that respects `prefers-reduced-motion`.

### Typography System
Use **Space Grotesk** for display and interface headings, **DM Sans** for readable body copy, and **IBM Plex Mono** for code, labels, tokens, and metadata. Headings use tight tracking and decisive weight; body copy stays at a relaxed 1.6 line-height; code samples use compact leading with clear line numbers.

### Brand Essence
Lumina CSS is a sharper, more expressive styling CDN for frontend builders who want speed without sacrificing visual character. Personality: **precise, generous, forward-looking**.

### Brand Voice
Headlines are direct and slightly editorial. CTAs sound like actions a builder can take immediately; microcopy explains behavior without hype.

> “Ship the shape, not the scaffolding.”
>
> “One import. A whole visual language.”

### Wordmark & Logo
The mark is a compact geometric “L” built from two offset cobalt rectangles that create a deliberate diagonal slash at the join. The wordmark uses a custom-styled all-caps `LUMINA` with the slash replacing the inner diagonal of the `A`, paired with a small mono `CSS` suffix.

### Signature Brand Color
**Cobalt Signal — `#315CFF`**. It is the recognizable action and link color across the system, balanced by warm paper neutrals and ink-charcoal text.

## Implementation reminders

- Every authored CSS/component/page file should begin with a short comment naming the Editorial Utility direction and the file-specific styling intent.
- The public demo should show the CDN script, a responsive grid/flex specimen, buttons, inputs, cards, badges, iconography, theme switching, and a live class playground.
- The library should expose readable class names such as `lu-grid`, `lu-flex`, `lu-btn`, `lu-card`, and `lu-icon-*`, while also supporting CSS custom properties for extension.
