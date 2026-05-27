/** 年级 */
export type Grade = 7 | 8 | 9
/** 学期 */
export type Semester = '上' | '下'
/** 朝代 */
export type Dynasty = '先秦' | '秦汉' | '魏晋南北朝' | '唐' | '宋' | '元' | '明' | '清'
/** 注释类型 */
export type AnnotationType = '实词' | '虚词' | '通假字' | '词类活用' | '古今异义' | '特殊句式'

export interface WordAnnotation { word: string; pinyin: string; meaning: string; type: AnnotationType }
export interface Paragraph { id: string; original: string; translation: string; annotations: WordAnnotation[]; imagePrompt?: string; imagePath?: string }
export interface HistoricalContext { dynasty: Dynasty; era: string; authorBio: string; writingBackground: string; eraKeywords: string[]; highlightWords: string[] }
export interface GeoContext { ancientName: string; modernName: string; relevance: string }
export interface MemorizationAid { segments: { keyword: string; hint: string }[]; commonMistakes: { wrong: string; correct: string }[] }
export interface ClassicalText { id: string; title: string; author: string; grade: Grade; semester: Semester; unit: number; genre: string; paragraphs: Paragraph[]; historicalContext: HistoricalContext; geoContexts: GeoContext[]; memorizationAid: MemorizationAid }
export interface GradeInfo { grade: Grade; label: string; description: string; textCount: number }
export interface TextSummary { id: string; title: string; author: string; dynasty: Dynasty; genre: string; unit: number }
