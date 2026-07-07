# Shrivar Digital Tree Website

A premium personal website for Shrivar Singh, built as a dark, futuristic digital-tree identity system. The site presents Shrivar as a strategic problem-solver across statistics, AI, finance, research, startups, analytics, and useful systems.

The current version is a single-page Next.js site with editable data files, animated SVG/canvas visuals, responsive layouts, and placeholder-safe contact/project links.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- SVG and canvas animation for the digital tree and particle field

## Run Locally

On this Windows setup, use `npm.cmd` because PowerShell may block `npm.ps1`.

```powershell
npm.cmd install
npm.cmd run dev
```

Then open:

```text
http://localhost:3000
```

Build check:

```powershell
npm.cmd run build
```

TypeScript check:

```powershell
npm.cmd run typecheck
```

## Editing Content

Most public content is stored in `src/data`:

- `src/data/profile.ts` - hero copy, bio, labels, principles, capability groups
- `src/data/projects.ts` - project cards, tags, summaries, technical details, future links
- `src/data/nav.ts` - digital tree branches and section navigation
- `src/data/writing.ts` - writing and notes placeholders
- `src/data/links.ts` - LinkedIn, GitHub, email, and CV placeholders
- `src/data/skills.ts` - skill clusters

Do not add private contact details unless they are intended to be public.

## Visual And Animation Notes

- The digital tree is original SVG/canvas work, not a stock image.
- The particle field reacts subtly to cursor movement.
- Branch navigation is keyboard accessible and has visible focus states.
- The site respects `prefers-reduced-motion`; motion-heavy effects are reduced for users who prefer less animation.
- WebGL is not required, which keeps the site easier to deploy and more reliable on mobile.

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the GitHub repository in Vercel.
3. Use the default Next.js settings:
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Output directory: leave as default
4. Deploy.

The site is suitable for Vercel hosting and will remain online without depending on the local laptop.

## Deploy To Netlify

Netlify can also host the site:

1. Connect the GitHub repository to Netlify.
2. Use build command:

```text
npm run build
```

3. Use Netlify's Next.js support. If Netlify prompts for a publish directory, follow the current Next.js adapter recommendation in Netlify's UI.

## Future Upgrades

- Add real project screenshots and demo links.
- Add GitHub, public email, and CV download once ready.
- Expand major projects into detail pages.
- Add writing posts using MDX or a CMS if the notes section becomes active.
