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
            const matchData = exercise.data as { items: string[]; targets: string[] }
            return (
              <div key={i}>
                <div className="text-xs text-slate-400 mb-1">匹配题</div>
                <MatchExercise
                  instruction={exercise.instruction}
                  items={matchData.items}
                  targets={matchData.targets}
                  answers={exercise.answer as Record<string, string>}
                />
              </div>
            )

          case 'reorder':
            const reorderData = exercise.data as { scrambled: string[] }
            return (
              <div key={i}>
                <div className="text-xs text-slate-400 mb-1">排序题</div>
                <ReorderExercise
                  instruction={exercise.instruction}
                  scrambled={reorderData.scrambled}
                  answer={exercise.answer as string[]}
                />
              </div>
            )

          case 'correct':
            return (
              <div key={i}>
                <div className="text-xs text-slate-400 mb-1">改错题</div>
                <CorrectExercise
                  instruction={exercise.instruction}
                  sentences={exercise.data as { wrong: string; correct: string }[]}
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
