# Grade 7-9 Math Helper

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Type-check and build (`tsc -b && vite build`)

## Tech Stack
- React 18 + TypeScript (strict mode)
- Vite 5 + Tailwind CSS v4
- react-router-dom v6
- lucide-react for icons
- SVG + Canvas for math visualizations

## Conventions
- Named exports only (no default exports)
- `@/` path alias maps to `src/`
- Tailwind utility classes only, no separate CSS files per component
- Dark mode via `dark:` variants and `useTheme` hook
- Data files: one TS file per chapter in `src/data/chapters/`
- All content in Chinese
