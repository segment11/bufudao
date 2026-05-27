import { useParams } from 'react-router-dom'
import { units } from '@/data'
import { FillExercise } from './exercises/FillExercise'
import { MatchExercise } from './exercises/MatchExercise'
import { ReorderExercise } from './exercises/ReorderExercise'
import { CorrectExercise } from './exercises/CorrectExercise'

export function PracticeTab() {
  const { unitId } = useParams<{ unitId: string }>()
  const unit = unitId ? units[unitId] : undefined
  const exercises = unit?.exercises ?? []

  if (!unit) {
    return <div className="text-slate-500">未找到单元数据</div>
  }

  if (exercises.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p>该单元暂无练习内容</p>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-500">共 {exercises.length} 道练习题</p>

      {exercises.map((exercise, i) => {
        switch (exercise.type) {
          case 'fill':
            return (
              <div key={i}>
                <div className="text-xs text-slate-400 mb-1">填空题</div>
                <FillExercise
                  instruction={exercise.instruction}
                  sentences={exercise.data as string[]}
                  answers={exercise.answer as string[]}
                />
              </div>
            )

          case 'match':
            const matchData = exercise.data as { items?: string[]; targets?: string[]; subjects?: string[]; possessives?: string[]; words?: string[]; meanings?: string[] }
            const matchItems = matchData.items ?? matchData.subjects ?? matchData.words ?? []
            const matchTargets = matchData.targets ?? matchData.possessives ?? matchData.meanings ?? []
            return (
              <div key={i}>
                <div className="text-xs text-slate-400 mb-1">匹配题</div>
                <MatchExercise
                  instruction={exercise.instruction}
                  items={matchItems}
                  targets={matchTargets}
                  answers={exercise.answer as Record<string, string>}
                />
              </div>
            )

          case 'reorder':
            const reorderData = exercise.data
            const reorderSentences = Array.isArray(reorderData) ? reorderData : []
            return (
              <div key={i}>
                <div className="text-xs text-slate-400 mb-1">排序题</div>
                {reorderSentences.map((sentence, si) => {
                  const words = typeof sentence === 'string' ? sentence.split(' / ').filter(w => w.trim()) : []
                  const sentenceAnswer = (exercise.answer as string[])?.[si] ?? ''
                  const answerNorm = sentenceAnswer.replace(/[^a-zA-Z\s]/g, '').toLowerCase().trim()
                  const answerParts = answerNorm.split(/\s+/)
                  const used = new Set<number>()
                  const wordIndices: { word: string; idx: number }[] = []
                  for (const word of words) {
                    const wLower = word.toLowerCase()
                    let matched = false
                    if (wLower.includes(' ')) {
                      const parts = wLower.split(/\s+/)
                      const startIdx = answerParts.findIndex((_, i) => !used.has(i) && parts.every((part, j) => answerParts[i + j] === part))
                      if (startIdx >= 0) {
                        for (let k = 0; k < parts.length; k++) used.add(startIdx + k)
                        wordIndices.push({ word: parts.join(' '), idx: startIdx })
                        matched = true
                      }
                    }
                    if (!matched) {
                      const idx = answerParts.findIndex((p, i) => !used.has(i) && (p === wLower || wLower.includes(p) || p.includes(wLower)))
                      if (idx >= 0) {
                        used.add(idx)
                        wordIndices.push({ word: answerParts[idx], idx })
                      }
                    }
                  }
                  const correctOrder = wordIndices.sort((a, b) => a.idx - b.idx).map(w => w.word)
                  if (correctOrder.length === 0) correctOrder.push(...words.map(w => w.toLowerCase()))
                  return (
                    <div key={si} className="mb-4">
                      <ReorderExercise
                        instruction={si === 0 ? exercise.instruction : ''}
                        scrambled={words}
                        answer={correctOrder}
                      />
                    </div>
                  )
                })}
              </div>
            )

          case 'correct':
            const wrongSentences = (exercise.data as string[]) ?? []
            const correctSentences = (exercise.answer as string[]) ?? []
            const correctData = wrongSentences.map((wrong, idx) => ({
              wrong,
              correct: correctSentences[idx] ?? '',
            }))
            return (
              <div key={i}>
                <div className="text-xs text-slate-400 mb-1">改错题</div>
                <CorrectExercise
                  instruction={exercise.instruction}
                  sentences={correctData}
                />
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
