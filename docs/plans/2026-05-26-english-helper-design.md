# grade_7_9_english_helper Design

## Overview

帮助七至九年级学生学习人教版英语的互动 Web 应用。覆盖 6 本书（七上、七下、八上、八下、九全），约 54 个单元，每个单元包含词汇、语法、情景对话、阅读、练习、写作 6 个学习模块。

## Tech Stack

- Vite 5 + React 18 + TypeScript + Tailwind CSS v4
- `@/` alias maps to `src/`
- react-router-dom 6, lucide-react
- 静态 TS 数据文件，无后端，localStorage 存储状态
- MiniMax MCP 生成教学插图

## Routes

```
/                              → HomePage（3 个年级卡片）
/grade/:gradeId                → GradePage（列出学期和单元）
/unit/:unitId                  → UnitPage（6 个 Tab）
```

## Book Structure (2024 人教版)

| 书 | 单元数 |
|----|--------|
| 七年级上册 | Starter 1-3 + Unit 1-7（约 10 个单元） |
| 七年级下册 | Unit 1-8 |
| 八年级上册 | Unit 1-8（2024 新版） |
| 八年级下册 | Unit 1-8 |
| 九年级全一册 | Unit 1-14 |

总计约 48-54 个单元。

## UnitPage Tabs

| Tab | 内容 |
|-----|------|
| **Words** | 词汇表：音标、词性、释义、例句。点击展开详情。关键词生成插图。 |
| **Grammar** | 语法规则：表格、例句、与中文对比、关键结构高亮。 |
| **Scene** | 情景对话：角色对话脚本、场景插图。 |
| **Reading** | 课文阅读：逐词注释、理解问答。 |
| **Practice** | 互动练习：填空、匹配、排序、改错。 |
| **Writing** | 写作模块：写作提示 + 100+ 篇范文，按主题分类。 |

## Data Model

```typescript
type Grade = 7 | 8 | 9
type Semester = '上' | '下'

interface VocabWord {
  word: string; phonetic: string; pos: string; meaning: string
  example: string; exampleTranslation: string; image?: string
}

interface GrammarPoint {
  title: string; explanation: string; examples: string[]
  comparisons: string[]; image?: string
}

interface DialogueLine { speaker: string; text: string; translation: string }
interface Dialogue {
  title: string; scene: string; lines: DialogueLine[]; image?: string
}

interface WordAnnotation { word: string; meaning: string; note?: string }
interface ReadingPassage {
  title: string; text: string; annotations: WordAnnotation[]
  questions: { q: string; a: string }[]
}

type ExerciseType = 'fill' | 'match' | 'reorder' | 'correct'
interface Exercise { type: ExerciseType; instruction: string; data: unknown; answer: unknown }

interface Essay {
  title: string; body: string; level: 'A' | 'B' | 'C'
  keyPhrases: string[]; wordCount: number; topic: string
}

interface Unit {
  id: string; title: string; grade: Grade; semester: Semester; unitNumber: number
  topic: string; objectives: string[]
  words: VocabWord[]; grammar: GrammarPoint[]; dialogues: Dialogue[]
  readings: ReadingPassage[]; exercises: Exercise[]; essays: Essay[]
}

interface GradeInfo { grade: Grade; label: string; description: string; unitCount: number }
```

## MiniMax Image Generation

### 词汇插图（约 300-500 张）
- Prompt: `"Educational illustration of {word/concept}, clean flat design, simple background, labeled in English and Chinese, suitable for middle school textbook, bright colors, no text overlay"`
- 针对名词和具体动词，每单元 5-10 张

### 场景插图（约 100-150 张）
- Prompt: `"Illustrated scene of {situation}, two or three middle school students in a modern Chinese school setting, warm and friendly atmosphere, educational comic style, clean background"`
- 每单元 2-3 张

### 语法图解（约 50 张）
- Prompt: `"Educational infographic explaining {grammar point}, clean modern design, color-coded sentence structure, arrows showing word order, English grammar chart, minimalist style"`
- 每单元 1 张

### 写作主题图（约 30 张）
- Prompt: `"Illustrated writing prompt scene for {topic}, inspirational mood, relevant objects and symbols, soft watercolor style, educational context"`
- 按写作主题分类

## Additional Content

- 100+ 篇范文覆盖：校园生活、家庭、环境、节日、健康、未来计划、文化对比、书信邮件
- 不规则动词表（全局共享）
- 发音指南（中国人常见发音错误）
- 中考高频考点汇总（按年级）

## Task Phases

1. **Phase 1: Scaffold** — 项目搭建、类型定义、路由、布局、主题
2. **Phase 2: Data collection** — 网页抓取 6 本教材内容
3. **Phase 3: Data generation** — 按单元组织内容，生成结构化数据
4. **Phase 4: Image generation** — 通过 MiniMax 生成插图
5. **Phase 5: Essay generation** — 生成 100+ 篇范文
6. **Phase 6: UI implementation** — 6 个 Tab 的完整 UI
7. **Phase 7: Polish** — 搜索、暗色模式、响应式、AGENTS.md、README.md
