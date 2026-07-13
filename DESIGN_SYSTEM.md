# Yihao Bian V2 Design System

## Direction

V2 presents Yihao Bian as an international young scholar and environmental technology entrepreneur. The visual language is editorial, scientific, human and restrained. It uses asymmetry, large typography, fine rules and generous whitespace rather than a 3D universe or technology effects.

## Palette

- Warm paper `#F2F1EC`: primary background
- Light paper `#F7F6F2`: subtle alternating surface
- Charcoal `#172226`: primary text and solid actions
- Deep navy `#16323B`: editorial headings
- Water green `#167D75`: links, indices and research emphasis
- Warm gold `#AA8248`: honors only
- Fine line `#D0D2CD`: structure and rhythm

Purple gradients, neon, glassmorphism, large shadows and glowing controls are prohibited.

## Typography

The system uses only local operating-system fonts. Editorial English headlines use Iowan Old Style / Palatino / Times fallbacks. Interface and body text use the system sans-serif stack. Chinese, Japanese, Korean, Arabic and Cyrillic scripts keep the existing local system stacks.

Headline size communicates identity; thin rules and small uppercase labels create hierarchy. Chinese avoids excessive tracking and awkward isolated characters.

## Grid and spacing

- Maximum content width: 1320px
- Responsive gutter: `clamp(1.25rem, 4.2vw, 4.75rem)`
- Desktop: asymmetric two- and three-column editorial grids
- Tablet: compressed two-column layouts
- Mobile: purpose-built single-column flow, not a scaled desktop canvas
- Sections use 6–11rem vertical whitespace and 1px rules instead of cards

## Components

- Header: Yihao Bian / YB wordmark, six primary links, EN / 中文
- Footer: positioning statement, complete navigation and affiliation
- Buttons: square corners, solid charcoal or fine outline
- Research: numbered visual fields and staggered editorial list
- Ventures: structured editorial rows that show only confirmed role information
- Honors: dense year/name index, no timeline or floating medals
- Portrait: real WebP when available; otherwise a clearly labelled abstract placeholder without a face

## Motion

Only 180–350ms opacity, 16px entrance and underline transitions are allowed. There is no looping decoration, cursor follower, parallax or loading sequence. `prefers-reduced-motion` disables all movement.

## Languages and accessibility

English and Simplified Chinese are publicly shown in the switcher. Other locale files and routes remain available for future review. All content is semantic HTML, keyboard accessible and readable without JavaScript. Arabic retains `dir="rtl"` and logical CSS properties.
