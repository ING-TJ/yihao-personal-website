# YIHAO NEXUS Design System

## Concept

The site treats Yihao Bian as a center of gravity. Research, publication, ventures, honors, global exchange, life and contact form a connected personal universe. Water ripples, molecular bonds and distribution networks inform the motion and line language; the interface avoids literal planets, maps and cyberpunk imagery.

## Color

- Deep blue-black `#061014`: primary background
- Carbon blue `#08171D`: elevated depth
- Cold white `#EDF5F2`: primary text
- Muted mineral `#A9BBB8`: secondary text
- Water green `#67D7C4`: primary action and scientific signal
- Deep aqua `#2F877D`: quiet labels and lines
- Warm gold `#C9A967`: honors only, used sparingly

No purple-blue gradient, rainbow neon or uncontrolled glow is permitted.

## Typography

No online font service is used. Latin text uses the operating system’s modern sans-serif stack with a restrained editorial serif for large headlines. CJK, Arabic and Cyrillic use appropriate system fallbacks. Headlines rely on scale, line length and spacing rather than decorative effects.

## Nodes

- About: translucent water-green
- Research: internal scientific particles
- Publications: pale layered/mineral material
- Ventures: quiet metallic core
- Honors: warm-gold orbital ring
- Global: deep blue with a restrained latitude ring
- Life: soft mineral green
- Contact: brightest aqua and largest hit clarity

Labels remain HTML for readability, accessibility and multilingual rendering.

## Motion

The time tunnel lasts about 2.5 seconds and uses forward motion without aggressive rotation. Nodes move slowly; connection signals remain subtle. Motion must pause when the page is hidden. `prefers-reduced-motion` and the user toggle skip the tunnel and stop decorative orbiting.

## Chinese and English composition

English headings use compact editorial line lengths and moderate tracking. Chinese avoids excessive letter spacing and uses balanced short phrases. Both prioritize a clear hierarchy over card-heavy layouts.

## Arabic RTL

Arabic pages set `html dir="rtl"`. Inline alignment, navigation popovers, page summary margins, language controls, directional padding and track lines use logical CSS properties. Mixed Latin names remain readable and require native-speaker review.

## Mobile

Mobile is a separate composition: lower DPR, fewer particles, larger touch targets, safe-area-aware fixed controls and a two-column 2D node grid. The content pages restore normal vertical scrolling.

## Accessibility

All nodes have focusable HTML buttons or links. Focus rings use water green. Canvas has an alternative description and the full static navigation remains in the source. Text meets high-contrast targets; no information depends only on color or motion.
