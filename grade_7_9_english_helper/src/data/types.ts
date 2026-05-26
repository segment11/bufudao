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
