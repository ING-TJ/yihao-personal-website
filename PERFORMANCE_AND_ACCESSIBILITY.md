# Performance and Accessibility

## Runtime quality

- The site is statically rendered by Astro and does not ship React, Three.js or WebGL.
- The first viewport is readable HTML before any JavaScript runs.
- No external fonts, translation APIs, tracking scripts, audio or large 3D assets are loaded.
- Future photography should use WebP or AVIF with explicit dimensions and appropriate lazy loading.
- GitHub Pages project paths and the future custom-domain root are both supported.

## Motion

Motion is limited to 180–350ms opacity, 16px entrance and underline transitions. There is no loading sequence, looping decoration, camera motion, cursor follower or parallax. `prefers-reduced-motion` disables transitions and shows all content immediately.

## Keyboard and screen readers

- Header, mobile menu, language switcher, content lists and footer use semantic HTML.
- All actions are links or native controls with visible focus outlines.
- Headings follow a meaningful hierarchy.
- Empty publications use one restrained empty state; empty research and venture sections are hidden rather than filled with invented content.
- JavaScript failure does not remove navigation or content.

## Responsive behavior

- 1440px uses asymmetric editorial columns and large type.
- 1024px switches to a compact menu and compressed two-column hero.
- 390px and 375px use a purpose-built single-column flow with 48px+ primary actions.
- Logical CSS properties preserve RTL behavior for retained Arabic routes.
- Horizontal overflow is treated as a release blocker.

## Release checks

Run the automated suite, then manually inspect current Safari, Chrome and Firefox; 1440px, 1024px, 390px and 375px layouts; keyboard navigation; English/Chinese switching; retained Arabic RTL; and real-device image loading before launch.
