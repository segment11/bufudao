# grade_7_9_english_helper Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a full-coverage English learning web app for grades 7-9 (人教版), with vocabulary, grammar, dialogues, reading, exercises, and writing tabs per unit.

**Architecture:** Static SPA identical to the classical Chinese helper project. Vite + React 18 + TypeScript + Tailwind v4. All content in static TS data files under `src/data/`. MiniMax MCP generates teaching images. No backend.

**Tech Stack:** Vite 5, React 18, TypeScript, Tailwind CSS v4, react-router-dom 6, lucide-react, MiniMax MCP (image generation)

**Design Doc:** `docs/plans/2026-05-26-english-helper-design.md`

---

## Phase 1: Project Scaffold

### Task 1: Initialize project

**Files:**
- Create: `grade_7_9_english_helper/package.json`
- Create: `grade_7_9_english_helper/vite.config.ts`
- Create: `grade_7_9_english_helper/tsconfig.json`
- Create: `grade_7_9_english_helper/tsconfig.app.json`
- Create: `grade_7_9_english_helper/tsconfig.node.json`
- Create: `grade_7_9_english_helper/index.html`
- Create: `grade_7_9_english_helper/.gitignore`
- Create: `grade_7_9_english_helper/AGENTS.md`

**Step 1: Create directory and init package.json**

Copy `package.json` from `grade_7_9_classical_chinese_helper/package.json`, change name to `grade-7-9-english-helper`. Remove `lucide-react` is not needed (we keep it, same stack). Dependencies are identical.

**Step 2: Copy config files**

Copy from classical Chinese project:
- `vite.config.ts` (identical)
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` (identical)
- `index.html` — change title to "英语助学", lang stays "zh-CN"
- `.gitignore` — add `node_modules`, `dist`, `*.log`, `coscli_output`

**Step 3: Run npm install**

```bash
cd grade_7_9_english_helper && npm install
```

**Step 4: Commit**

```bash
git add -A && git commit -m "chore(english): scaffold project from classical chinese helper"
```

---

### Task 2: Types and data model

**Files:**
- Create: `grade_7_9_english_helper/src/data/types.ts`
- Create: `grade_7_9_english_helper/src/data/index.ts`

**Step 1: Create `src/data/types.ts`**

```typescript
export type Grade = 7 | 8 | 9
export type Semester = '上' | '下'
export type ExerciseType = 'fill' | 'match' | 'reorder' | 'correct'
export type EssayLevel = 'A' | 'B' | 'C'

export interface VocabWord {
  word: string
  phonetic: string
  pos: string
  meaning: string
  example: string
  exampleTranslation: string
  image?: string
}

export interface GrammarPoint {
  title: string
  explanation: string
  examples: string[]
  comparisons: string[]
  image?: string
}

export interface DialogueLine {
  speaker: string
  text: string
  translation: string
}

export interface Dialogue {
  title: string
  scene: string
  lines: DialogueLine[]
  image?: string
}

export interface WordAnnotation {
  word: string
  meaning: string
  note?: string
}

export interface ComprehensionQuestion {
  q: string
  a: string
}

export interface ReadingPassage {
  title: string
  text: string
  annotations: WordAnnotation[]
  questions: ComprehensionQuestion[]
}

export interface Exercise {
  type: ExerciseType
  instruction: string
  data: unknown
  answer: unknown
}

export interface Essay {
  title: string
  body: string
  level: EssayLevel
  keyPhrases: string[]
  wordCount: number
  topic: string
}

export interface Unit {
  id: string
  title: string
  grade: Grade
  semester: Semester
  unitNumber: number
  topic: string
  objectives: string[]
  words: VocabWord[]
  grammar: GrammarPoint[]
  dialogues: Dialogue[]
  readings: ReadingPassage[]
  exercises: Exercise[]
  essays: Essay[]
}

export interface GradeInfo {
  grade: Grade
  label: string
  description: string
  unitCount: number
}

export interface UnitSummary {
  id: string
  title: string
  topic: string
  unitNumber: number
}
```

**Step 2: Create `src/data/index.ts`**

```typescript
import type { GradeInfo } from './types'

export type {
  Grade, Semester, VocabWord, GrammarPoint, Dialogue, DialogueLine,
  WordAnnotation, ReadingPassage, Exercise, Essay, Unit, GradeInfo, UnitSummary,
} from './types'

export const GRADE_INFO: GradeInfo[] = [
  { grade: 7, label: '七年级', description: '英语入门，日常交际用语，基础语法', unitCount: 18 },
  { grade: 8, label: '八年级', description: '语法深化，时态变化，阅读理解能力提升', unitCount: 16 },
  { grade: 9, label: '九年级', description: '综合运用，中考备考，复杂句式与写作', unitCount: 14 },
]
```

Note: unitCount will be adjusted as we collect actual textbook data.

**Step 3: Commit**

```bash
git add -A && git commit -m "feat(english): add data types and grade info"
```

---

### Task 3: App shell — routes, layout, theme

**Files:**
- Create: `grade_7_9_english_helper/src/main.tsx`
- Create: `grade_7_9_english_helper/src/App.tsx`
- Create: `grade_7_9_english_helper/src/index.css`
- Create: `grade_7_9_english_helper/src/vite-env.d.ts`
- Create: `grade_7_9_english_helper/src/hooks/useTheme.ts`
- Create: `grade_7_9_english_helper/src/layouts/Layout.tsx`

**Step 1: Create `src/main.tsx`**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

**Step 2: Create `src/App.tsx`**

```tsx
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/layouts/Layout'
import { HomePage } from '@/pages/HomePage'
import { GradePage } from '@/pages/GradePage'
import { UnitPage } from '@/pages/UnitPage'

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grade/:gradeId" element={<GradePage />} />
        <Route path="/unit/:unitId" element={<UnitPage />} />
      </Routes>
    </Layout>
  )
}
```

**Step 3: Create `src/index.css`**

Adapt from classical Chinese project but with an English-education color palette (blue/indigo primary instead of amber/stone). Use Tailwind v4 `@import "tailwindcss"`. Define CSS custom properties for light/dark theming.

**Step 4: Create `src/hooks/useTheme.ts`**

Identical to classical Chinese project but localStorage key = `english-helper-theme`.

**Step 5: Create `src/layouts/Layout.tsx`**

Similar structure: sticky header with logo ("英语助学"), breadcrumb, search, theme toggle. Footer: "人教版 7-9 年级 · 英语学习助手".

**Step 6: Create `src/vite-env.d.ts`**

```typescript
/// <reference types="vite/client" />
```

**Step 7: Verify dev server starts**

```bash
npm run dev
```

**Step 8: Commit**

```bash
git add -A && git commit -m "feat(english): add app shell with routes, layout, theme"
```

---

### Task 4: HomePage and GradePage

**Files:**
- Create: `grade_7_9_english_helper/src/pages/HomePage.tsx`
- Create: `grade_7_9_english_helper/src/pages/GradePage.tsx`
- Create: `grade_7_9_english_helper/src/data/units.ts` (placeholder)

**Step 1: Create `src/data/units.ts`**

```typescript
import type { Unit, UnitSummary } from './types'

export const units: Record<string, Unit> = {}

export function getUnitsByGrade(grade: number): UnitSummary[] {
  return Object.values(units)
    .filter((u) => u.grade === grade)
    .sort((a, b) => {
      if (a.semester !== b.semester) return a.semester === '上' ? -1 : 1
      return a.unitNumber - b.unitNumber
    })
    .map((u) => ({
      id: u.id,
      title: u.title,
      topic: u.topic,
      unitNumber: u.unitNumber,
    }))
}
```

This starts empty. Data will be added in Phase 2-3.

**Step 2: Create `HomePage.tsx`**

3 grade cards (7/8/9), each with label, description, unit count. Link to `/grade/:gradeId`. Color scheme: blue for Grade 7, indigo for Grade 8, violet for Grade 9.

**Step 3: Create `GradePage.tsx`**

Shows all units for the selected grade, grouped by semester (上/下). Each unit card shows: unit number, title, topic. Link to `/unit/:unitId`. Show "内容即将上线" message if no units loaded.

**Step 4: Commit**

```bash
git add -A && git commit -m "feat(english): add HomePage and GradePage"
```

---

## Phase 2: Data Collection

### Task 5: Collect textbook structure — all 6 books

**Goal:** Build a complete catalog of all units across all 6 books with titles, topics, and key vocabulary.

**Approach:** Use web search and fetch to collect unit titles and vocabulary lists from online resources for each book:

1. **七年级上册 (2024新版)**: Starter Units 1-3 + Units 1-7
2. **七年级下册**: Units 1-8
3. **八年级上册 (2024新版)**: Units 1-8
4. **八年级下册**: Units 1-8
5. **九年级全一册**: Units 1-14

For each unit, collect:
- Unit title (e.g. "Where did you go on vacation?")
- Topic (e.g. "Holidays and travel")
- Key vocabulary list with phonetics, POS, meanings
- Grammar focus points
- Main dialogue/reading themes

**Step 1: Create data collection script**

Create `scripts/collect_data.md` — a structured checklist of URLs to fetch and data to extract for each book.

**Step 2: Fetch and extract data for each book**

Use `webfetch` tool to pull content from textbook reference sites. Extract structured unit data.

**Step 3: Write raw data files**

Save collected data as JSON in `scripts/raw_data/` for processing:
- `grade7_upper.json`, `grade7_lower.json`
- `grade8_upper.json`, `grade8_lower.json`
- `grade9_full.json`

**Step 4: Commit**

```bash
git add -A && git commit -m "data(english): collect raw textbook structure for all 6 books"
```

---

### Task 6: Generate unit data files

**Files:**
- Create: `grade_7_9_english_helper/src/data/units/` directory
- Create: one TS file per unit (e.g. `g7u1.ts`, `g7su1.ts`, etc.)

**Step 1: Process raw data into structured Unit objects**

For each unit, create a TS file exporting a `Unit` object. Naming convention:
- Grade 7 upper: `g7u1.ts` through `g7u7.ts`, starters: `g7su1.ts` through `g7su3.ts`
- Grade 7 lower: `g7lu1.ts` through `g7lu8.ts`
- Grade 8 upper: `g8u1.ts` through `g8u8.ts`
- Grade 8 lower: `g8lu1.ts` through `g8lu8.ts`
- Grade 9: `g9u1.ts` through `g9u14.ts`

**Step 2: Generate content for each unit**

For each unit file, AI generates:
- `words[]` — 20-40 vocabulary entries with phonetic, POS, meaning, example sentence
- `grammar[]` — 1-3 grammar points with explanation, examples, Chinese comparison
- `dialogues[]` — 1-2 dialogues with 6-10 lines each
- `readings[]` — 1 reading passage with annotations and comprehension questions
- `exercises[]` — 4-6 exercises (mix of fill, match, reorder, correct)
- `essays[]` — 2-3 essay prompts (essays will be expanded in Phase 5)

**Step 3: Register all units in `src/data/units.ts`**

Import all unit files and populate the `units` record.

**Step 4: Verify build compiles**

```bash
npm run build
```

**Step 5: Commit**

```bash
git add -A && git commit -m "feat(english): add unit data for all 6 books"
```

---

## Phase 3: UI — UnitPage with 6 Tabs

### Task 7: UnitPage shell with tab navigation

**Files:**
- Create: `grade_7_9_english_helper/src/pages/UnitPage.tsx`
- Create: `grade_7_9_english_helper/src/components/TabBar.tsx`

**Step 1: Create UnitPage**

Tab state management, breadcrumb navigation, unit header (title, topic, objectives). 6 tabs: Words, Grammar, Scene, Reading, Practice, Writing.

**Step 2: Verify navigation works**

Navigate from HomePage → GradePage → UnitPage. Tabs switch correctly.

**Step 3: Commit**

```bash
git add -A && git commit -m "feat(english): add UnitPage with tab navigation"
```

---

### Task 8: Words tab

**Files:**
- Create: `grade_7_9_english_helper/src/components/WordsTab.tsx`
- Create: `grade_7_9_english_helper/src/components/WordCard.tsx`

**Step 1: Implement WordCard**

Displays: word, phonetic, POS badge, meaning. Expandable to show example sentence + image (if available). Click to expand/collapse.

**Step 2: Implement WordsTab**

Grid of WordCards. Filter by POS (noun/verb/adj/etc). Search within unit words. Show count per POS category.

**Step 3: Commit**

```bash
git add -A && git commit -m "feat(english): add Words tab with vocabulary cards"
```

---

### Task 9: Grammar tab

**Files:**
- Create: `grade_7_9_english_helper/src/components/GrammarTab.tsx`

**Step 1: Implement GrammarTab**

For each GrammarPoint:
- Title as heading
- Explanation in styled box
- Example sentences table (English | Chinese)
- Comparison with Chinese section
- Grammar diagram image (if available)

Color-coded grammar categories (tense, clause, voice, etc.).

**Step 2: Commit**

```bash
git add -A && git commit -m "feat(english): add Grammar tab"
```

---

### Task 10: Scene tab (Dialogues)

**Files:**
- Create: `grade_7_9_english_helper/src/components/SceneTab.tsx`
- Create: `grade_7_9_english_helper/src/components/DialogueCard.tsx`

**Step 1: Implement DialogueCard**

Shows dialogue lines in speech-bubble style. Toggle translation on/off. Scene illustration image.

**Step 2: Implement SceneTab**

List of DialogueCards. Role-play mode: hide one speaker's lines for practice.

**Step 3: Commit**

```bash
git add -A && git commit -m "feat(english): add Scene tab with dialogues"
```

---

### Task 11: Reading tab

**Files:**
- Create: `grade_7_9_english_helper/src/components/ReadingTab.tsx`

**Step 1: Implement ReadingTab**

For each ReadingPassage:
- Display full text with clickable annotated words (same pattern as classical Chinese project)
- Sidebar with word detail (meaning, note)
- Comprehension questions section with collapsible answers

**Step 2: Commit**

```bash
git add -A && git commit -m "feat(english): add Reading tab with annotations"
```

---

### Task 12: Practice tab

**Files:**
- Create: `grade_7_9_english_helper/src/components/PracticeTab.tsx`
- Create: `grade_7_9_english_helper/src/components/exercises/FillExercise.tsx`
- Create: `grade_7_9_english_helper/src/components/exercises/MatchExercise.tsx`
- Create: `grade_7_9_english_helper/src/components/exercises/ReorderExercise.tsx`
- Create: `grade_7_9_english_helper/src/components/exercises/CorrectExercise.tsx`

**Step 1: Implement exercise components**

Each exercise type renders differently:
- **fill**: Text with blank(s), input field(s), check button
- **match**: Two columns, drag/click to pair
- **reorder**: Scrambled words/sentences, click to arrange
- **correct**: Sentence with error, click error location and type correction

All show immediate feedback (green/red).

**Step 2: Implement PracticeTab**

List of exercises with score tracking. "Check All" and "Reset" buttons.

**Step 3: Commit**

```bash
git add -A && git commit -m "feat(english): add Practice tab with 4 exercise types"
```

---

### Task 13: Writing tab

**Files:**
- Create: `grade_7_9_english_helper/src/components/WritingTab.tsx`
- Create: `grade_7_9_english_helper/src/components/EssayCard.tsx`

**Step 1: Implement EssayCard**

Displays essay with highlighted key phrases. Show level badge (A/B/C). Word count. Toggle to show/hide essay body.

**Step 2: Implement WritingTab**

Writing prompts list. Essays grouped by topic. Filter by level. Key phrases summary.

**Step 3: Commit**

```bash
git add -A && git commit -m "feat(english): add Writing tab with essays"
```

---

## Phase 4: Image Generation (MiniMax MCP)

### Task 14: Generate vocabulary images

**Goal:** Generate ~5-10 images per unit for concrete nouns and verbs.

**Step 1: Identify image-worthy words**

From each unit's `words[]`, select nouns and concrete verbs that benefit from visual illustration. Skip abstract words.

**Step 2: Generate images using MiniMax**

For each selected word, call MiniMax with prompt:

```
Educational illustration of {word/concept}, clean flat design, simple white background, 
labeled in English and Chinese, suitable for Chinese middle school English textbook, 
bright colors, clear and simple, no text overlay except labels
```

Save to `src/assets/images/words/{unitId}-{word}.png`

**Step 3: Update unit data files**

Set `image` field on each VocabWord to the path.

**Step 4: Commit in batches**

```bash
git add -A && git commit -m "data(english): add vocabulary images for {book}"
```

Repeat per book.

---

### Task 15: Generate scene/dialogue images

**Goal:** Generate ~2-3 scene illustrations per unit.

**Step 1: For each dialogue, generate scene image**

Prompt:

```
Illustrated scene of {situation description}, two or three Chinese middle school students, 
modern Chinese school setting, warm and friendly atmosphere, educational comic style, 
clean background, soft colors, no text
```

Save to `src/assets/images/scenes/{unitId}-scene-{n}.png`

**Step 2: Update dialogue data**

Set `image` field on each Dialogue.

**Step 3: Commit in batches**

```bash
git add -A && git commit -m "data(english): add scene images for {book}"
```

---

### Task 16: Generate grammar diagram images

**Goal:** Generate ~1 grammar infographic per unit.

**Step 1: For each grammar point, generate diagram**

Prompt:

```
Educational infographic explaining {grammar point in English}, clean modern design, 
color-coded sentence structure with Chinese translation, arrows showing word order, 
English grammar chart, minimalist flat style, blue and white color scheme, no photographs
```

Save to `src/assets/images/grammar/{unitId}-grammar.png`

**Step 2: Update grammar data**

Set `image` field on each GrammarPoint.

**Step 3: Commit in batches**

---

## Phase 5: Essay Generation

### Task 17: Generate 100+ model essays

**Goal:** Generate essays covering all major writing topics for middle school English.

**Essay topics (100+ essays across categories):**

1. **校园生活 (15 essays)**: My School, My Favorite Subject, School Rules, A School Trip, My English Teacher, School Library, Sports Day, My Classmates, After-school Activities, Exam Preparation, My School Day, School Canteen, A Memorable Lesson, School Festival, My Desk-mate
2. **家庭与朋友 (12 essays)**: My Family, My Best Friend, A Family Dinner, My Mother/Father, A Letter to a Friend, Family Weekend, Birthday Celebration, My Grandparents, Helping at Home, Friendship, My Pet, A Family Tradition
3. **兴趣爱好 (10 essays)**: My Hobby, Reading, Music, Sports, Painting, Cooking, Travel, Photography, Collecting, Gardening
4. **节日与文化 (12 essays)**: Spring Festival, Mid-Autumn Festival, Dragon Boat Festival, Christmas, Halloween, Comparing Chinese and Western Festivals, Thanksgiving, Lantern Festival, Double Ninth Festival, Qingming Festival, National Day, New Year Resolutions
5. **健康与生活 (10 essays)**: Healthy Eating, Exercise, Sleep Habits, Keeping Safe Online, How to Stay Healthy, My Daily Routine, Fast Food, Mental Health, Weather and Health, First Aid
6. **环境与自然 (8 essays)**: Protecting the Environment, Pollution, Recycling, Endangered Animals, Climate Change, My Hometown, A Beautiful Park, Water Conservation
7. **未来与梦想 (8 essays)**: My Dream Job, Life in the Future, If I Were a Teacher, My Plan for High School, Technology in 2050, A Letter to My Future Self, Career Choices, Goals
8. **社会与文化 (8 essays)**: Volunteering, Chinese Culture, Table Manners, Cultural Differences, Being a Good Citizen, Internet Safety, Public Transportation, Mobile Phones
9. **书信与应用文 (12 essays)**: Letter of Advice, Thank-you Letter, Email to Pen Pal, Invitation Letter, Complaint Letter, Diary Entry, Notice/Announcement, Speech, Report, Review, Message, Postcard
10. **记叙与描写 (10 essays)**: An Unforgettable Day, A Rainy Day, My Favorite Place, A Surprise, Getting Lost, A Gift, A Mistake I Made, An Adventure, My First Time..., The Most Beautiful Thing I've Seen

**Step 1: Generate essays in batches**

For each category, generate 8-15 essays. Each essay has:
- `title`: English title
- `body`: 80-150 words (appropriate for grade level)
- `level`: A (excellent, complex structures), B (good, standard), C (simple, basic)
- `keyPhrases`: 3-5 useful phrases highlighted
- `wordCount`: actual word count
- `topic`: category tag

**Step 2: Distribute essays across units**

Map essays to relevant units. Each unit gets 2-3 topic-related essays. Remaining essays go into a "综合写作" section.

**Step 3: Update unit data files**

Add essays to each unit's `essays[]` array.

**Step 4: Commit in batches**

```bash
git add -A && git commit -m "data(english): add model essays ({category})"
```

---

## Phase 6: Additional Content

### Task 18: Irregular verb table and pronunciation guide

**Files:**
- Create: `grade_7_9_english_helper/src/data/extras.ts`
- Create: `grade_7_9_english_helper/src/components/IrregularVerbs.tsx`
- Create: `grade_7_9_english_helper/src/components/PronunciationGuide.tsx`

**Step 1: Create irregular verb data**

~100 most common irregular verbs with all 3 forms + Chinese meaning.

**Step 2: Create pronunciation guide**

Common mistakes Chinese speakers make (th, v/w, l/r, etc.). Minimal pairs with examples.

**Step 3: Add accessible route or modal**

Accessible from Layout header or a dedicated `/extras` route.

**Step 4: Commit**

```bash
git add -A && git commit -m "feat(english): add irregular verbs and pronunciation guide"
```

---

### Task 19: 中考高频考点

**Files:**
- Create: `grade_7_9_english_helper/src/data/exam.ts`
- Create: `grade_7_9_english_helper/src/components/ExamTips.tsx`

**Step 1: Create exam tips data**

Per grade, list high-frequency exam points: grammar patterns, vocabulary traps, common errors, writing templates.

**Step 2: Create ExamTips component**

Organized by grade, expandable sections, color-coded importance.

**Step 3: Commit**

```bash
git add -A && git commit -m "feat(english): add exam tips per grade"
```

---

## Phase 7: Polish

### Task 20: SearchBar component

**Files:**
- Create: `grade_7_9_english_helper/src/components/SearchBar.tsx`

**Step 1: Implement global search**

Search across units by title, topic, vocabulary. Dropdown results with direct links.

**Step 2: Commit**

```bash
git add -A && git commit -m "feat(english): add global search"
```

---

### Task 21: Dark mode and responsive polish

**Step 1: Verify dark mode works across all components**

Ensure all tabs, cards, exercises work in both themes.

**Step 2: Verify mobile responsive**

Test on narrow viewport. Ensure tabs scroll, cards stack, exercises are usable.

**Step 3: Commit**

```bash
git add -A && git commit -m "style(english): polish dark mode and responsive layout"
```

---

### Task 22: README.md and final docs

**Files:**
- Create: `grade_7_9_english_helper/README.md`
- Update: `README.md` (root — add link to english helper)

**Step 1: Write README.md for english helper**

Chinese README describing the project, features, tech stack, dev commands.

**Step 2: Update root README.md**

Add english helper to the project table.

**Step 3: Update AGENTS.md**

Ensure AGENTS.md accurately describes the project.

**Step 4: Final commit**

```bash
git add -A && git commit -m "docs(english): add README and update root docs"
```

---

## Summary

| Phase | Tasks | Estimated Effort |
|-------|-------|------------------|
| Phase 1: Scaffold | Tasks 1-4 | Foundation, runs quickly |
| Phase 2: Data Collection | Tasks 5-6 | Heavy web fetch + AI generation |
| Phase 3: UI Tabs | Tasks 7-13 | 6 tab components |
| Phase 4: Images | Tasks 14-16 | MiniMax MCP calls, 500+ images |
| Phase 5: Essays | Task 17 | 100+ essay generation |
| Phase 6: Extras | Tasks 18-19 | Verb table, exam tips |
| Phase 7: Polish | Tasks 20-22 | Search, dark mode, docs |
