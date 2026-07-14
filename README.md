# Shrivar Singh — personal website

An evidence-led personal site for Shrivar Singh: statistics, AI, research, and better decisions. The experience uses a living digital tree as both identity and information architecture, with interactive project evidence rather than generic portfolio cards.

## Stack

- Next.js App Router and TypeScript
- Framer Motion for restrained, reduced-motion-aware interaction
- Original inline SVG and CSS visuals; no stock project imagery
- Vercel-ready static output

## Local development

On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run typecheck
npm.cmd run build
```

The site runs at `http://localhost:3000` by default.

## Content and media

Public-facing facts and copy live in `src/data/content.ts`; verified external links live in `src/data/links.ts`. The page composition lives in `src/app/page.tsx`.

Three optional photographs have exact drop-in paths. When these files are absent, the site deliberately renders an editorial branch-field fallback rather than a broken image:

- `public/images/shrivar-environmental-portrait.jpg`
- `public/images/shrivar-working-session.jpg`
- `public/images/shrivar-life-energy.jpg`

See `docs/PHOTO_SHOT_LIST.md` for crop and lighting direction. Concept development and the selection rationale are documented in `docs/concepts/` and `docs/REDESIGN_RATIONALE.md`.

## Quality contract

- Keep public claims sourced from `src/data/content.ts` and do not invent outcomes or metrics.
- Treat the digital tree as navigation, not decoration.
- Keep project interactions keyboard accessible and preserve visible focus states.
- Preserve `prefers-reduced-motion` handling in both CSS and Framer Motion components.
- Run type checking and a production build before publishing.
