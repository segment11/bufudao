# AGENTS.md

## Dev Commands

- `npm run dev` — start dev server (Vite)
- `npm run build` — typecheck + build (`tsc -b && vite build`)
- `npm run preview` — preview production build

## Project Structure

- Vite + React 18 + TypeScript + Tailwind CSS v4
- `@/` alias maps to `src/`
- Routes: `/` (Home) → `/grade/:gradeId` → `/unit/:unitId`
- Entry: `src/main.tsx`

## Key Files

- `src/data/types.ts` — shared TypeScript types (`Unit`, `VocabWord`, `GrammarPoint`, `Dialogue`, etc.)
- `src/data/index.ts` — exports types and `GRADE_INFO`
- `src/data/units.ts` — all unit data (exports `units` record and `getUnitsByGrade`)
- `src/index.css` — global styles, CSS custom properties for theming, Tailwind v4 imports
- `vite.config.ts` — uses `@tailwindcss/vite` plugin (Tailwind v4, no separate PostCSS config)

## Tailwind v4 Note

This project uses Tailwind CSS v4 with `@tailwindcss/vite`. There is no `tailwind.config.js` or `postcss.config.js` — configuration is done via `@import "tailwindcss"` in CSS and the Vite plugin.

## TypeScript

- `tsc -b` uses project references (`tsconfig.app.json` + `tsconfig.node.json`)
- Strict mode enabled; `noUnusedLocals` and `noUnusedParameters` are on
- No lint or test scripts in package.json

## Data Model

`Unit` entries are keyed by `unitId` in the `units` export from `src/data/units.ts`. Each unit contains `words[]`, `grammar[]`, `dialogues[]`, `readings[]`, `exercises[]`, and `essays[]`.

## Theming

Dark mode uses CSS custom properties (defined in `:root` / `.dark` in `index.css`). The `useTheme` hook manages the toggle. localStorage key: `english-helper-theme`.
