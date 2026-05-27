import { useState } from 'react'
import { examPoints } from '@/data/exam'
import { ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react'

export function ExamTips() {
  const [selectedGrade, setSelectedGrade] = useState<7 | 8 | 9>(9)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const currentGrade = examPoints.find((g) => g.grade === selectedGrade)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">中考高频考点</h1>

      <div className="flex gap-2 mb-6">
        {([7, 8, 9] as const).map((grade) => (
          <button
            key={grade}
            onClick={() => {
              setSelectedGrade(grade)
              setExpandedIndex(null)
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedGrade === grade
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {grade}年级
          </button>
        ))}
      </div>

      {currentGrade?.points.map((point, i) => {
        const isExpanded = expandedIndex === i
        return (
          <div
            key={i}
            className="mb-4 bg-white border border-slate-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                  {currentGrade.category}
                </span>
                <h3 className="font-semibold text-slate-800">{point.title}</h3>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {isExpanded && (
              <div className="px-5 pb-5 border-t border-slate-100 pt-4 space-y-4">
                <p className="text-slate-600 text-sm">{point.description}</p>

                <div>
                  <h4 className="text-sm font-medium text-emerald-700 mb-2">例句</h4>
                  <div className="space-y-1.5">
                    {point.examples.map((ex, j) => (
                      <p key={j} className="text-sm text-slate-700 bg-emerald-50 border border-emerald-100 rounded px-3 py-2">
                        {ex}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-red-700 mb-2 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    常见错误
                  </h4>
                  <div className="space-y-1.5">
                    {point.commonMistakes.map((mistake, k) => (
                      <p key={k} className="text-sm text-slate-700 bg-red-50 border border-red-100 rounded px-3 py-2">
                        {mistake}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
