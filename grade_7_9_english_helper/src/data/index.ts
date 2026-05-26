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
