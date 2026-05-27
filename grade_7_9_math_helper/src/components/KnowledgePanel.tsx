import type { KnowledgePoint } from '@/data/types'

interface KnowledgePanelProps {
  knowledgePoints: KnowledgePoint[]
  summary: string
}

export function KnowledgePanel({ knowledgePoints, summary }: KnowledgePanelProps) {
  return (
    <div className="space-y-4">
      <div className="bg-[var(--color-surface)] rounded-lg p-5 border border-[var(--color-grid)]">
        <h3 className="font-semibold mb-2">本节概述</h3>
        <p className="text-[var(--color-text)]/70 leading-relaxed">{summary}</p>
      </div>

      {knowledgePoints.length === 0 ? (
        <div className="text-center py-8 text-[var(--color-text)]/50">
          暂无知识点内容
        </div>
      ) : (
        <div className="space-y-4">
          {knowledgePoints.map((kp, i) => (
            <div
              key={kp.id}
              className="bg-[var(--color-surface)] rounded-lg p-5 border border-[var(--color-grid)]"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-blueprint)]/10 text-[var(--color-blueprint)] flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold mb-1">{kp.title}</h4>
                  <p className="text-[var(--color-text)]/70 leading-relaxed text-sm">
                    {kp.content}
                  </p>

                  {kp.formula && (
                    <div className="mt-3 p-3 bg-[var(--color-blueprint)]/5 rounded border border-[var(--color-blueprint)]/10">
                      <div className="text-xs text-[var(--color-blueprint)] mb-1 font-medium">公式</div>
                      <div className="math-formula text-lg">{kp.formula}</div>
                    </div>
                  )}

                  {kp.examples && kp.examples.length > 0 && (
                    <div className="mt-3">
                      <div className="text-xs font-medium text-[var(--color-text)]/50 mb-1.5">示例</div>
                      <ul className="space-y-1">
                        {kp.examples.map((ex, j) => (
                          <li
                            key={j}
                            className="text-sm text-[var(--color-text)]/70 pl-3 border-l-2 border-[var(--color-calc-green)]/30"
                          >
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
