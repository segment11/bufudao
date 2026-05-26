import type { GradeInfo } from './types'
export type { ClassicalText, GradeInfo, Paragraph, WordAnnotation, HistoricalContext, GeoContext, MemorizationAid, TextSummary } from './types'

export const GRADE_INFO: GradeInfo[] = [
  { grade: 7, label: '七年级', description: '文言文启蒙，从短篇故事和语录体入手，建立基础语感', textCount: 10 },
  { grade: 8, label: '八年级', description: '篇幅增长，接触山水游记、论说文，理解古人情怀与思辨', textCount: 12 },
  { grade: 9, label: '九年级', description: '经典名篇荟萃，政论、表文、史传，为中考打下扎实根基', textCount: 9 },
]
