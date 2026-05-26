import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface MatchExerciseProps {
  instruction: string
  items: string[]
  targets: string[]
  answers: Record<string, string>
}

export function MatchExercise({ instruction, items, targets, answers }: MatchExerciseProps) {
  const [selections, setSelections] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (item: string, target: string) => {
    setSelections((prev) => ({ ...prev, [item]: prev[item] === target ? '' : target }))
  }

  const allMatched = items.every((item) => selections[item])
  const allCorrect = submitted && items.every((item) => selections[item] === answers[item])

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <p className="text-sm font-medium text-slate-700 mb-4">{instruction}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item}
              className={`px-4 py-3 rounded-lg border text-sm transition-colors ${
                selections[item]
                  ? 'bg-blue-50 border-blue-300 text-blue-800'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {targets.map((target) => {
            const matchedItem = Object.entries(selections).find(([, t]) => t === target)?.[0]
            return (
              <div
                key={target}
                className="px-4 py-3 rounded-lg border text-sm bg-slate-50 border-slate-200 text-slate-700"
              >
                {target}
                {matchedItem && (
                  <span className="ml-2 text-xs text-blue-600">← {matchedItem}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-xs text-slate-500">点击词语进行匹配</p>
        <div className="flex gap-2 flex-wrap">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => {
                const available = targets.find((t) => !Object.values(selections).includes(t) || selections[item] === t)
                if (available) handleSelect(item, available)
              }}
              className="px-3 py-1.5 text-xs rounded-full border border-slate-300 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {submitted && (
        <div className={`mt-4 px-4 py-3 rounded-lg text-sm ${allCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {allCorrect ? (
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 全部正确！</span>
          ) : (
            <span className="flex items-center gap-1"><XCircle className="w-4 h-4" /> 还有错误，请检查。</span>
          )}
        </div>
      )}

      <button
        onClick={() => setSubmitted(true)}
        disabled={!allMatched}
        className={`mt-4 px-4 py-2 text-sm rounded-lg transition-colors ${
          allMatched ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
        }`}
      >
        检查答案
      </button>
    </div>
  )
}
