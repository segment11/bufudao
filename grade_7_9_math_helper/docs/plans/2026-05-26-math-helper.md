# Grade 7-9 Math Helper Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a web-based math learning helper for Chinese middle school (grades 7-9) with visual teaching (SVG + Canvas), knowledge summaries, and interactive practice Q&A.

**Architecture:** React SPA following the same patterns as `grade_7_9_classical_chinese_helper` — Vite + React + TypeScript + Tailwind v4. Content is organized by grade → semester → chapter → section. Each section has knowledge summaries, SVG/Canvas visual explanations, and auto-graded practice problems. Data lives in TypeScript files under `src/data/`.

**Tech Stack:** React 18, TypeScript, Vite 5, Tailwind CSS v4, react-router-dom v6, lucide-react, SVG/Canvas for math visualizations.

---

## Reference Project Patterns to Follow

The reference project `grade_7_9_classical_chinese_helper` establishes these conventions:

- **Data layer:** Typed TS objects in `src/data/`, one file per content unit, central registry in `src/data/texts.ts`
- **Routing:** 3-level hierarchy `/` → `/grade/:gradeId` → `/text/:textId`
- **Layout:** Sticky header + breadcrumbs, `max-w-*xl mx-auto px-4`, dark mode via `useTheme` hook
- **Styling:** Tailwind v4 (`@import "tailwindcss"`), no separate CSS files per component, `dark:` variants
- **Exports:** Named exports only, `@/` path alias
- **Build:** `npm run build` = `tsc -b && vite build`

## Math Helper Route Structure

| Route | Page | Purpose |
|-------|------|---------|
| `/` | `HomePage` | Grade selection (7, 8, 9) |
| `/grade/:gradeId` | `GradePage` | List chapters for a grade/semester |
| `/chapter/:chapterId` | `ChapterPage` | List sections in a chapter |
| `/section/:sectionId` | `SectionPage` | Knowledge summary + visual teaching + practice Q&A |

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Create: `index.html`
- Create: `src/main.tsx`, `src/App.tsx`, `src/vite-env.d.ts`
- Create: `src/index.css`
- Create: `AGENTS.md`

**Step 1: Initialize project with Vite**

```bash
cd /home/kerry/ws7/grade_7_9_math_helper
npm create vite@latest . -- --template react-ts
```

If prompted about non-empty directory, confirm overwrite.

**Step 2: Install dependencies**

```bash
npm install react-router-dom lucide-react
npm install -D @tailwindcss/vite tailwindcss
```

**Step 3: Configure Tailwind v4 in `vite.config.ts`**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**Step 4: Configure `tsconfig.app.json` with `@/` alias**

Add to `compilerOptions`:
```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  }
}
```

Also set: `"strict": true`, `"noUnusedLocals": true`, `"noUnusedParameters": true`

**Step 5: Write `src/index.css`**

```css
@import "tailwindcss";

:root {
  --color-blueprint: #1a56db;
  --color-grid: #e5e7eb;
  --color-calc-green: #10b981;
  --color-geo-orange: #f59e0b;
  --color-algebra-purple: #8b5cf6;
  --color-bg: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
}

.dark {
  --color-blueprint: #60a5fa;
  --color-grid: #374151;
  --color-calc-green: #34d399;
  --color-geo-orange: #fbbf24;
  --color-algebra-purple: #a78bfa;
  --color-bg: #1c1917;
  --color-surface: #292524;
  --color-text: #fafaf9;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
}

.math-canvas {
  font-family: "Cambria Math", "Latin Modern Math", "STIX Two Math", serif;
}

.math-formula {
  font-family: "Cambria Math", "Latin Modern Math", "STIX Two Math", serif;
  letter-spacing: 0.02em;
}
```

**Step 6: Write `AGENTS.md`**

```markdown
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
```

**Step 7: Verify setup**

```bash
npm run dev
```

Expected: Dev server starts without errors.

**Step 8: Commit**

```bash
git init
git add .
git commit -m "chore: scaffold project with Vite + React + TS + Tailwind v4"
```

---

## Task 2: Data Type Definitions

**Files:**
- Create: `src/data/types.ts`

**Step 1: Define all TypeScript interfaces**

```ts
export type Grade = 7 | 8 | 9
export type Semester = '上' | '下'

export interface GradeInfo {
  grade: Grade
  label: string
  description: string
  chapterCount: number
}

export interface KnowledgePoint {
  id: string
  title: string
  content: string
  formula?: string
  examples?: string[]
}

export interface VisualBlock {
  id: string
  type: 'svg' | 'canvas' | 'interactive'
  title: string
  description: string
  component: string
  props?: Record<string, unknown>
}

export interface PracticeProblem {
  id: string
  type: 'choice' | 'fill' | 'calculate' | 'prove'
  difficulty: 'basic' | 'medium' | 'hard'
  question: string
  hint?: string
  answer: string
  steps?: string[]
  options?: string[]
}

export interface Section {
  id: string
  title: string
  summary: string
  knowledgePoints: KnowledgePoint[]
  visuals: VisualBlock[]
  practices: PracticeProblem[]
}

export interface Chapter {
  id: string
  title: string
  grade: Grade
  semester: Semester
  unit: number
  icon: string
  description: string
  sections: Section[]
}

export interface ChapterSummary {
  id: string
  title: string
  grade: Grade
  semester: Semester
  unit: number
  icon: string
  description: string
  sectionCount: number
}
```

**Step 2: Commit**

```bash
git add src/data/types.ts
git commit -m "feat: define data type system for math content"
```

---

## Task 3: Grade Metadata & Central Registry

**Files:**
- Create: `src/data/index.ts`
- Create: `src/data/chapters.ts`
- Create: `src/data/chapters/` (directory)

**Step 1: Create `src/data/index.ts`**

```ts
import type { GradeInfo } from './types'

export const GRADE_INFO: GradeInfo[] = [
  {
    grade: 7,
    label: '七年级',
    description: '有理数、方程、几何图形初步',
    chapterCount: 10,
  },
  {
    grade: 8,
    label: '八年级',
    description: '三角形、函数、勾股定理',
    chapterCount: 10,
  },
  {
    grade: 9,
    label: '九年级',
    description: '二次函数、圆、相似三角形',
    chapterCount: 8,
  },
]
```

**Step 2: Create `src/data/chapters.ts` (central registry)**

```ts
import type { Chapter, ChapterSummary } from './types'

// Grade 7 上
import { youLiShu } from './chapters/you-li-shu'
// ... more imports as chapters are added

export const chapters: Record<string, Chapter> = {
  // 七上
  // 'you-li-shu': youLiShu,
  // ... add as created
}

export function getChaptersByGrade(grade: number): ChapterSummary[] {
  return Object.values(chapters)
    .filter((ch) => ch.grade === grade)
    .sort((a, b) => {
      if (a.semester !== b.semester) return a.semester === '上' ? -1 : 1
      return a.unit - b.unit
    })
    .map((ch) => ({
      id: ch.id,
      title: ch.title,
      grade: ch.grade,
      semester: ch.semester,
      unit: ch.unit,
      icon: ch.icon,
      description: ch.description,
      sectionCount: ch.sections.length,
    }))
}

export function getChapter(id: string): Chapter | undefined {
  return chapters[id]
}
```

**Step 3: Commit**

```bash
mkdir -p src/data/chapters
git add src/data/
git commit -m "feat: add grade metadata and chapter registry"
```

---

## Task 4: Theme Hook & Layout

**Files:**
- Create: `src/hooks/useTheme.ts`
- Create: `src/layouts/Layout.tsx`

**Step 1: Create `src/hooks/useTheme.ts`**

Same pattern as reference project — reads from `localStorage`, defaults to system preference, toggles `dark` class on `<html>`.

```ts
import { useState, useEffect } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('math-helper-theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('math-helper-theme', dark ? 'dark' : 'light')
  }, [dark])

  return { dark, toggle: () => setDark((d) => !d) }
}
```

**Step 2: Create `src/layouts/Layout.tsx`**

Follow reference project pattern — sticky header with breadcrumbs and theme toggle, footer. Use `BookOpen` icon from lucide-react as app icon. Breadcrumbs should show: Home > Grade > Chapter > Section based on current route.

**Step 3: Commit**

```bash
git add src/hooks/ src/layouts/
git commit -m "feat: add theme hook and app layout"
```

---

## Task 5: HomePage & Routing

**Files:**
- Create: `src/pages/HomePage.tsx`
- Modify: `src/App.tsx`

**Step 1: Create `src/pages/HomePage.tsx`**

Three grade cards (7, 8, 9) using same card pattern as reference project. Each card shows:
- Grade label (七年级/八年级/九年级)
- Brief description of key topics
- Chapter count
- Color theme: Grade 7 = amber, Grade 8 = emerald, Grade 9 = indigo

**Step 2: Wire up `src/App.tsx` with react-router**

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layouts/Layout'
import { HomePage } from '@/pages/HomePage'
// ... more page imports

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grade/:gradeId" element={<GradePage />} />
          <Route path="/chapter/:chapterId" element={<ChapterPage />} />
          <Route path="/section/:sectionId" element={<SectionPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
```

**Step 3: Commit**

```bash
git add src/pages/HomePage.tsx src/App.tsx
git commit -m "feat: add HomePage with grade selection and routing"
```

---

## Task 6: GradePage — Chapter List

**Files:**
- Create: `src/pages/GradePage.tsx`

**Step 1: Implement GradePage**

Shows chapters for a given grade, grouped by semester (上/下). Each chapter card shows:
- Icon (math-related: 📐📏🔢📊)
- Chapter title
- Description
- Section count
- Link to `/chapter/:chapterId`

Use `useParams` to get `gradeId`, call `getChaptersByGrade()`.

**Step 2: Commit**

```bash
git add src/pages/GradePage.tsx
git commit -m "feat: add GradePage with chapter listing"
```

---

## Task 7: ChapterPage — Section List

**Files:**
- Create: `src/pages/ChapterPage.tsx`

**Step 1: Implement ChapterPage**

Shows sections within a chapter. Each section card shows:
- Section title
- Knowledge point count
- Practice problem count
- Visual demonstration availability indicator
- Link to `/section/:sectionId`

**Step 2: Commit**

```bash
git add src/pages/ChapterPage.tsx
git commit -m "feat: add ChapterPage with section listing"
```

---

## Task 8: SectionPage — Core Teaching Page (Knowledge + Visuals + Practice)

This is the most complex page. It has three tabs:

**Files:**
- Create: `src/pages/SectionPage.tsx`
- Create: `src/components/KnowledgePanel.tsx`
- Create: `src/components/PracticePanel.tsx`

**Step 1: Create `src/pages/SectionPage.tsx`**

Three-tab layout:
1. **知识要点** (Knowledge) — Shows summary + knowledge points with formulas
2. **图解演示** (Visual Demo) — Shows SVG/Canvas visual explanations
3. **练习巩固** (Practice) — Interactive practice problems with auto-grading

```tsx
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getChapter } from '@/data/chapters'
import { KnowledgePanel } from '@/components/KnowledgePanel'
import { PracticePanel } from '@/components/PracticePanel'
import { BookOpen, Eye, PenTool } from 'lucide-react'

const tabs = [
  { id: 'knowledge', label: '知识要点', icon: BookOpen },
  { id: 'visual', label: '图解演示', icon: Eye },
  { id: 'practice', label: '练习巩固', icon: PenTool },
] as const

export function SectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>()
  const [activeTab, setActiveTab] = useState<string>('knowledge')

  // Find section from chapter data
  // ... lookup logic

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Section header */}
      {/* Tab navigation */}
      {/* Tab content */}
    </div>
  )
}
```

**Step 2: Create `KnowledgePanel`**

Displays knowledge points with:
- Title
- Content explanation
- Formulas rendered with `.math-formula` class
- Examples if available

**Step 3: Create `PracticePanel`**

Interactive practice with:
- Problem display
- Choice selection / fill-in input / calculation input
- "Check Answer" button
- Show steps/hint on request
- Score tracking (localStorage)

**Step 4: Commit**

```bash
git add src/pages/SectionPage.tsx src/components/KnowledgePanel.tsx src/components/PracticePanel.tsx
git commit -m "feat: add SectionPage with knowledge, visual, and practice tabs"
```

---

## Task 9: SVG/Canvas Visual Component System

**Files:**
- Create: `src/components/visuals/NumberLine.tsx` (SVG number line)
- Create: `src/components/visuals/CoordinatePlane.tsx` (SVG coordinate plane)
- Create: `src/components/visuals/GeometryFigure.tsx` (SVG geometric shapes)
- Create: `src/components/visuals/FunctionGraph.tsx` (Canvas function plotter)
- Create: `src/components/visuals/AngleDemo.tsx` (SVG angle visualization)
- Create: `src/components/visuals/VisualRenderer.tsx` (dispatcher component)

**Step 1: Create `VisualRenderer.tsx`**

A dispatcher that takes a `VisualBlock` and renders the appropriate visual component:

```tsx
import type { VisualBlock } from '@/data/types'
import { NumberLine } from './NumberLine'
import { CoordinatePlane } from './CoordinatePlane'
import { GeometryFigure } from './GeometryFigure'
import { FunctionGraph } from './FunctionGraph'
import { AngleDemo } from './AngleDemo'

const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  NumberLine,
  CoordinatePlane,
  GeometryFigure,
  FunctionGraph,
  AngleDemo,
}

interface VisualRendererProps {
  block: VisualBlock
}

export function VisualRenderer({ block }: VisualRendererProps) {
  const Component = COMPONENT_MAP[block.component]
  if (!Component) {
    return <div className="text-red-500">未知组件: {block.component}</div>
  }
  return (
    <div className="bg-white dark:bg-stone-800 rounded-lg p-4 border border-stone-200 dark:border-stone-700">
      <h4 className="font-semibold mb-2">{block.title}</h4>
      <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">{block.description}</p>
      <Component {...(block.props || {})} />
    </div>
  )
}
```

**Step 2: Create `NumberLine.tsx`**

SVG-based number line. Props: `min`, `max`, `marks` (number[]), `highlights` (number[] with labels). Renders:
- Horizontal line with arrow tips
- Tick marks at integers or specified positions
- Colored dots at highlight positions with labels
- Supports negative numbers

**Step 3: Create `CoordinatePlane.tsx`**

SVG-based coordinate system. Props: `xRange`, `yRange`, `points`, `lines`. Renders:
- X and Y axes with arrow tips
- Grid lines (light gray)
- Labeled tick marks
- Points with labels
- Line segments between points

**Step 4: Create `GeometryFigure.tsx`**

SVG geometric shapes. Props: `shape` ('triangle' | 'rectangle' | 'circle' | 'polygon'), `vertices`, `labels`, `measurements`, `angles`. Renders:
- Shapes with labeled vertices (A, B, C...)
- Side length annotations
- Angle arc markers with degree labels
- Dashed lines for auxiliary constructions
- Color-coded sides/angles

**Step 5: Create `FunctionGraph.tsx`**

Canvas-based function plotter. Props: `expressions` (string[] like ['x', '2x+1', 'x^2']), `xRange`, `yRange`. Renders:
- Axes with labels
- Grid
- Multiple function curves in different colors
- Legend
- Interactive: hover shows coordinates

**Step 6: Create `AngleDemo.tsx`**

SVG angle visualization. Props: `angle`, `label`, `type` ('acute' | 'right' | 'obtuse' | 'straight'). Renders:
- Two rays from a point
- Arc showing the angle
- Degree label
- Color based on angle type

**Step 7: Commit**

```bash
git add src/components/visuals/
git commit -m "feat: add SVG/Canvas visual component system for math demos"
```

---

## Task 10: First Chapter Data — 有理数 (Grade 7 上)

**Files:**
- Create: `src/data/chapters/you-li-shu.ts`

**Step 1: Write the full chapter data**

This is the first complete chapter. Sections:

1. **正数和负数** (Positive and Negative Numbers)
   - Knowledge: definition, real-world examples (temperature, elevation, profit/loss)
   - Visual: NumberLine showing positive/negative numbers
   - Practice: 5 problems (identify positive/negative, real-world meaning)

2. **有理数** (Rational Numbers)
   - Knowledge: definition, classification (integers, fractions), set notation
   - Visual: Classification tree diagram (SVG)
   - Practice: 5 problems (classify numbers, true/false)

3. **有理数的加减法** (Addition and Subtraction of Rational Numbers)
   - Knowledge: rules for same/different signs, commutative/associative laws
   - Visual: NumberLine showing addition steps (animated arrows)
   - Practice: 8 problems (calculate, word problems)

4. **有理数的乘除法** (Multiplication and Division of Rational Numbers)
   - Knowledge: rules, multiple negative numbers, reciprocal
   - Visual: NumberLine pattern showing multiplication
   - Practice: 8 problems

5. **有理数的乘方** (Exponentiation of Rational Numbers)
   - Knowledge: definition, properties, scientific notation
   - Visual: Visual showing powers of 2/10
   - Practice: 6 problems

Example section structure for "正数和负数":

```ts
import type { Chapter } from '../types'

export const youLiShu: Chapter = {
  id: 'you-li-shu',
  title: '有理数',
  grade: 7,
  semester: '上',
  unit: 1,
  icon: '🔢',
  description: '正数与负数、有理数的运算',
  sections: [
    {
      id: 'zheng-shu-he-fu-shu',
      title: '正数和负数',
      summary: '了解正数、负数的概念，会用正负数表示相反意义的量。',
      knowledgePoints: [
        {
          id: 'zp1',
          title: '正数和负数的概念',
          content: '大于0的数叫做正数，在正数前面加上"-"号的数叫做负数。0既不是正数也不是负数。',
          examples: ['+3 是正数', '-5 是负数', '0 既不是正数也不是负数'],
        },
        {
          id: 'zp2',
          title: '用正负数表示相反意义的量',
          content: '在日常生活中，常常用正数和负数表示具有相反意义的量。如：零上温度为正，零下温度为负。',
          examples: [
            '如果零上5°C记作+5°C，那么零下3°C记作-3°C',
            '如果向东走100米记作+100米，那么向西走80米记作-80米',
          ],
        },
      ],
      visuals: [
        {
          id: 'v1',
          type: 'svg',
          title: '数轴上的正数与负数',
          description: '观察正数和负数在数轴上的位置关系',
          component: 'NumberLine',
          props: {
            min: -8,
            max: 8,
            marks: [-5, -3, 0, 3, 5],
            highlights: [
              { value: 3, label: '+3 (正数)', color: '#10b981' },
              { value: -5, label: '-5 (负数)', color: '#ef4444' },
              { value: 0, label: '0', color: '#6b7280' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下面哪个数是负数？',
          options: ['+2', '0', '-7', '5'],
          answer: '-7',
        },
        {
          id: 'p2',
          type: 'choice',
          difficulty: 'basic',
          question: '如果零上8°C记作+8°C，那么零下5°C应记作？',
          options: ['+5°C', '-5°C', '5°C', '-8°C'],
          answer: '-5°C',
        },
        {
          id: 'p3',
          type: 'fill',
          difficulty: 'basic',
          question: '如果收入200元记作+200元，那么支出150元应记作____元。',
          answer: '-150',
        },
        {
          id: 'p4',
          type: 'choice',
          difficulty: 'medium',
          question: '下列说法正确的是：',
          options: [
            '0是正数',
            '0是负数',
            '0既不是正数也不是负数',
            '0既是正数也是负数',
          ],
          answer: '0既不是正数也不是负数',
        },
        {
          id: 'p5',
          type: 'fill',
          difficulty: 'medium',
          question: '在-3、+5、0、-1.2、+3.14中，正数有____个。',
          answer: '2',
          hint: '正数是大于0的数',
        },
      ],
    },
    // ... remaining 4 sections following same pattern
  ],
}
```

**Step 2: Register in `src/data/chapters.ts`**

```ts
import { youLiShu } from './chapters/you-li-shu'

export const chapters: Record<string, Chapter> = {
  'you-li-shu': youLiShu,
}
```

**Step 3: Commit**

```bash
git add src/data/chapters/you-li-shu.ts src/data/chapters.ts
git commit -m "feat: add first chapter data — 有理数 (Grade 7)"
```

---

## Task 11: Wire SectionPage Visual Tab to VisualRenderer

**Files:**
- Modify: `src/pages/SectionPage.tsx`

**Step 1: Update the visual tab to render VisualBlocks**

In the `visual` tab content, iterate over `section.visuals` and render each via `<VisualRenderer>`.

**Step 2: Commit**

```bash
git add src/pages/SectionPage.tsx
git commit -m "feat: wire visual tab to VisualRenderer component"
```

---

## Task 12: Complete Grade 7 上 Data — Chapters 2-4

**Files:**
- Create: `src/data/chapters/zheng-shi-de-jia-jian.ts`
- Create: `src/data/chapters/yi-yuan-yi-ci-fang-cheng.ts`
- Create: `src/data/chapters/ji-he-tu-xing-chu-bu.ts`

**Step 1: Write chapter: 整式的加减**

Sections: 整式, 整式的加减. Knowledge: monomial/polynomial concepts, combining like terms, distributive property. Visuals: algebra tile diagrams (SVG). Practices: 6+ problems each.

**Step 2: Write chapter: 一元一次方程**

Sections: 从算式到方程, 解一元一次方程(一), 解一元一次方程(二), 实际问题与一元一次方程. Knowledge: equation concept, solving steps, applications. Visuals: balance scale analogy (SVG), number line solution. Practices: 8+ problems each.

**Step 3: Write chapter: 几何图形初步**

Sections: 几何图形, 直线射线线段, 角. Knowledge: point/line/surface/body, angle measurement, complementary/supplementary angles. Visuals: GeometryFigure showing basic shapes, AngleDemo showing angle types. Practices: 6+ problems each.

**Step 4: Register all chapters in `src/data/chapters.ts`**

**Step 5: Commit**

```bash
git add src/data/chapters/
git commit -m "feat: add Grade 7 Semester 1 chapters 2-4"
```

---

## Task 13: Complete Grade 7 下 Data — Chapters 5-10

**Files:**
- Create: 6 more chapter data files in `src/data/chapters/`

Chapters:
- **相交线与平行线** — intersecting lines, parallel lines, transversal angles (SVG: line diagrams)
- **实数** — square root, cube root, irrational numbers (SVG: number line with √2)
- **平面直角坐标系** — coordinate system, ordered pairs (SVG: CoordinatePlane)
- **二元一次方程组** — system of equations, substitution, elimination (SVG: two intersecting lines on coordinate plane)
- **不等式与不等式组** — inequalities, number line solutions (SVG: number line with shaded regions)
- **数据的收集整理与描述** — statistics, charts, histograms (Canvas/SVG: bar charts, pie charts)

Each chapter: 2-4 sections, knowledge points, visuals, 5-8 practice problems per section.

**Commit after each chapter or all at once.**

---

## Task 14: Complete Grade 8 Data — Chapters 1-10

**Files:**
- Create: 10 chapter data files in `src/data/chapters/`

Grade 8 上:
- 三角形 — triangle properties, interior angle sum (SVG: GeometryFigure triangle with angle arcs)
- 全等三角形 — congruence criteria (SSS/SAS/ASA/AAS/HL) (SVG: overlapping triangles)
- 轴对称 — symmetry, perpendicular bisector (SVG: symmetric figures)
- 整式的乘法与因式分解 — multiplication formulas, factoring (SVG: area models)
- 分式 — rational expressions (SVG: algebra visualization)

Grade 8 下:
- 二次根式 — surds, simplification
- 勾股定理 — Pythagorean theorem, converse (SVG: right triangle with squares on sides, animated proof)
- 平行四边形 — parallelogram, rectangle, rhombus, square (SVG: GeometryFigure quadrilaterals)
- 一次函数 — linear function, graph, properties (Canvas: FunctionGraph with y=kx+b)
- 数据的分析 — mean, median, mode, variance (Canvas: statistical charts)

---

## Task 15: Complete Grade 9 Data — Chapters 1-8

**Files:**
- Create: 8 chapter data files in `src/data/chapters/`

Grade 9 上:
- 一元二次方程 — quadratic equations, formula, factoring, applications
- 二次函数 — y=ax²+bx+c, graph, vertex, axis of symmetry (Canvas: parabola plotter)
- 旋转 — rotation transformation, center of rotation (SVG: rotated figures)
- 圆 — circle properties, arcs, chords, tangent (SVG: circle with labeled parts)
- 概率初步 — probability, experiments, tree diagrams

Grade 9 下:
- 反比例函数 — y=k/x, graph, properties (Canvas: hyperbola plotter)
- 相似 — similar triangles, ratio (SVG: similar figures with ratios labeled)
- 锐角三角函数 — sin/cos/tan, special angles (SVG: right triangle with trig labels)
- 投影与视图 — projection, three-view drawings (SVG: 3D-to-2D views)

---

## Task 16: Additional Visual Components

**Files:**
- Create: `src/components/visuals/BarChart.tsx`
- Create: `src/components/visuals/PieChart.tsx`
- Create: `src/components/visuals/AlgebraTiles.tsx`
- Create: `src/components/visuals/BalanceScale.tsx`
- Create: `src/components/visuals/SymmetryDemo.tsx`
- Create: `src/components/visuals/CircleParts.tsx`
- Create: `src/components/visuals/TreeDiagram.tsx`

These are additional visual components needed by various chapters:
- **BarChart** — SVG bar chart for statistics chapter
- **PieChart** — SVG pie chart for statistics
- **AlgebraTiles** — SVG algebra tile representation for polynomial operations
- **BalanceScale** — SVG balance scale for equation solving analogy
- **SymmetryDemo** — SVG showing reflection symmetry with fold line
- **CircleParts** — SVG circle with labeled radius, diameter, chord, arc, tangent
- **TreeDiagram** — SVG tree diagram for probability chapter

Each component should:
- Accept minimal props for customization
- Render responsively (use viewBox for SVG)
- Support dark mode colors
- Include subtle animations where helpful (CSS transitions)

---

## Task 17: Polish & Responsive Design

**Files:**
- Modify: various component files for responsive polish

**Steps:**
1. Ensure all pages work on mobile (test at 375px width)
2. Add loading states for Canvas components
3. Add keyboard navigation for practice problems
4. Add progress tracking per section (localStorage)
5. Add a "mark as completed" feature for sections
6. Ensure all math formulas render well (consider adding KaTeX as dependency if needed)

**Commit:**
```bash
git commit -m "feat: responsive design polish and progress tracking"
```

---

## Task 18: Build & Deploy

**Step 1: Run production build**

```bash
npm run build
```

**Step 2: Verify output in `dist/`**

Ensure all assets are generated correctly.

**Step 3: Deploy**

Follow reference project's deployment pattern (Go server or static hosting).

---

## Execution Order Summary

Tasks 1-11 are sequential (foundation + first chapter end-to-end).
Tasks 12-15 are data-heavy and can be parallelized after Task 11.
Task 16 can be done in parallel with Tasks 12-15.
Tasks 17-18 are final polish.

```
Task 1 (scaffold) → Task 2 (types) → Task 3 (registry) → Task 4 (layout)
→ Task 5 (routing) → Task 6 (GradePage) → Task 7 (ChapterPage)
→ Task 8 (SectionPage) → Task 9 (visuals) → Task 10 (first chapter data)
→ Task 11 (wire visuals) → [Tasks 12-16 parallel] → Task 17 → Task 18
```
