import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { units } from '@/data'
import { ChevronDown, ChevronUp, Lightbulb } from 'lucide-react'

export function GrammarTab() {
  const { unitId } = useParams<{ unitId: string }>()
  const unit = unitId ? units[unitId] : undefined
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  if (!unit) {
    return <div className="text-slate-500">未找到单元数据</div>
  }

  const grammar = unit.grammar ?? []

  if (grammar.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p>该单元暂无语法内容</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {grammar.map((point, i) => {
        const isExpanded = expandedIndex === i
        return (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
            >
              <h3 className="font-semibold text-slate-800">{point.title}</h3>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {isExpanded && (
              <div className="px-5 pb-5 border-t border-slate-100 pt-4 space-y-4">
                <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    {point.explanation}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-2">例句</h4>
                  <div className="space-y-2">
                    {point.examples.map((ex, j) => (
                      <div key={j} className="flex gap-3 text-sm">
                        <span className="text-blue-500 font-medium whitespace-nowrap">{j + 1}.</span>
                        <div>
                          <p className="text-slate-700">{ex.split('→')[0]?.trim()}</p>
                          {ex.includes('→') && (
                            <p className="text-slate-500 text-xs mt-0.5">
                              {ex.split('→')[1]?.trim()}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {point.comparisons.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      难点对比
                    </h4>
                    <div className="space-y-1.5">
                      {point.comparisons.map((comp, k) => (
                        <p key={k} className="text-sm text-slate-600 bg-amber-50 border border-amber-100 rounded px-3 py-2">
                          {comp}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {point.image && (
                  <div className="mt-3">
                    <img
                      src={point.image}
                      alt={point.title}
                      className="max-w-md rounded border border-slate-200"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
