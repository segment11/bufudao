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
