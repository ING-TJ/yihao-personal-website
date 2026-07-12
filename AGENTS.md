# Project instructions

- This repository is only for the Yihao Bian personal website. Never edit or reference a company website repository.
- Keep the site statically deployable with Astro and GitHub Pages.
- Never invent publications, DOI values, contact details, experimental results, project impact, personal interests, or exchange details.
- Store personal facts in `src/data/` and language content in `src/content/locales/`; do not scatter facts through components.
- Keep every section accessible as semantic HTML in every supported language.
- Preserve Arabic RTL, reduced-motion behavior, keyboard access, and the 2D fallback in all changes.
- Do not add external fonts, runtime translation, analytics, autoplay audio, paid APIs, or a database.
- Do not add large 3D models when procedural geometry can communicate the idea.
- Before committing, run `npm run lint`, `npm run typecheck`, `npm run build`, and `npm test`.
- The production QR code must not be printed until DNS and HTTPS have been verified on real mobile devices.
