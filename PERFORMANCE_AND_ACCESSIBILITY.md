# Performance and Accessibility

## Runtime quality

- Procedural geometry replaces large GLB models.
- Desktop and mobile use capped device pixel ratios.
- Low-core devices receive a smaller particle field.
- Particles use one buffer geometry and one material.
- No real-time shadows or heavy post-processing are used.
- Animation pauses when the document is hidden.
- Non-home images should use lazy loading and WebP/AVIF.

## Motion

The entry sequence is approximately 2.5 seconds, with fast-to-slow forward motion and no aggressive camera roll. A Skip control is immediately available. System reduced-motion preferences and the site control skip the sequence; the user choice persists locally.

## WebGL fallback

The HTML nexus is rendered before React. It remains usable if JavaScript fails, WebGL2 is unavailable, `?mode=2d` is selected, or the WebGL context is lost. The fallback is a designed interface, not an error page.

## Keyboard and screen readers

- Every node has a real button or link.
- Enter and Space activate node buttons natively.
- Visible focus rings use the primary aqua token.
- Every section contains semantic headings, articles and navigation links.
- Canvas has an alternative description; text is never baked into a texture.

## Mobile

Touch targets are at least 44 CSS pixels where practical. Fixed controls include safe-area insets. Canvas disables accidental page gestures only on the immersive homepage; content routes restore standard vertical scrolling. No gyroscope permission, fullscreen or landscape orientation is requested.

## Release checks

Run the automated suite, then manually test current iOS Safari, Android Chrome, desktop Safari/Chrome/Firefox, keyboard-only navigation, VoiceOver/TalkBack spot checks, Arabic RTL and a low-power device. Confirm no severe console error and no broken internal route before launch.
