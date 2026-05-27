import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Lightbulb, ChevronDown, ChevronUp, RotateCcw } from 'lucide-react'
import type { PracticeProblem } from '@/data/types'

interface PracticePanelProps {
  problems: PracticeProblem[]
  sectionId?: string
  onSaveScore?: (total: number, correct: number) => void
  lastScore?: { total: number; correct: number } | null
}

export function PracticePanel({ problems, sectionId, onSaveScore, lastScore }: PracticePanelProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [shownHints, setShownHints] = useState<Record<string, boolean>>({})
  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>({})

  const totalChecked = Object.keys(checked).length
  const totalCorrect = Object.values(results).filter(Boolean).length
  const allChecked = totalChecked === problems.length && problems.length > 0

  useEffect(() => {
    if (allChecked && onSaveScore && sectionId) {
      onSaveScore(problems.length, totalCorrect)
    }
  }, [allChecked, onSaveScore, sectionId, problems.length, totalCorrect])

  if (problems.length === 0) {
    return (
      <div className="text-center py-8 text-[var(--color-text)]/50">
        暂无练习题
      </div>
    )
  }

  function handleCheck(problem: PracticeProblem) {
    const userAnswer = (answers[problem.id] ?? '').trim()
    let correct = false

    if (problem.type === 'choice') {
      correct = userAnswer === problem.answer
    } else if (problem.type === 'prove') {
      correct = userAnswer.length > 0
    } else {
      correct = userAnswer === problem.answer.trim()
    }

    setChecked((prev) => ({ ...prev, [problem.id]: true }))
    setResults((prev) => ({ ...prev, [problem.id]: correct }))
  }

  function handleRetry() {
    setAnswers({})
    setChecked({})
    setResults({})
    setShownHints({})
    setExpandedSteps({})
  }

  function toggleSteps(id: string) {
    setExpandedSteps((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function toggleHint(id: string) {
    setShownHints((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-[var(--color-surface)] rounded-lg border border-[var(--color-grid)]">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="font-medium">
            共 {problems.length} 题
          </span>
          <span className="text-[var(--color-text)]/50">|</span>
          <span>
            已答 <span className="font-medium text-[var(--color-blueprint)]">{totalChecked}</span> 题
          </span>
          <span className="text-[var(--color-text)]/50">|</span>
          <span>
            正确 <span className="font-medium text-[var(--color-calc-green)]">{totalCorrect}</span> 题
          </span>
        </div>
        {lastScore && !allChecked && (
          <span className="text-xs text-[var(--color-text)]/40">
            上次成绩: {lastScore.correct}/{lastScore.total}
          </span>
        )}
        {(totalChecked > 0 || lastScore) && (
          <button
            onClick={handleRetry}
            className="ml-auto flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--color-grid)] hover:bg-[var(--color-grid)]/50 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            重新作答
          </button>
        )}
      </div>

      {allChecked && (
        <div className={`p-4 rounded-lg border text-center transition-all duration-500 ${
          totalCorrect === problems.length
            ? 'bg-[var(--color-calc-green)]/10 border-[var(--color-calc-green)]/30'
            : 'bg-[var(--color-blueprint)]/10 border-[var(--color-blueprint)]/30'
        }`}>
          <div className="text-lg font-bold">
            {totalCorrect === problems.length ? '全部正确！' : `答对 ${totalCorrect}/${problems.length} 题`}
          </div>
          <div className="text-sm text-[var(--color-text)]/60 mt-1">
            正确率: {Math.round((totalCorrect / problems.length) * 100)}%
          </div>
        </div>
      )}

      {problems.map((problem, i) => {
        const isAnswered = !!checked[problem.id]
        const isCorrect = !!results[problem.id]

        return (
          <div
            key={problem.id}
            className={`bg-[var(--color-surface)] rounded-lg p-5 border transition-colors duration-300 ${
              isAnswered
                ? isCorrect
                  ? 'border-[var(--color-calc-green)]/30'
                  : 'border-red-300 dark:border-red-800'
                : 'border-[var(--color-grid)]'
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-geo-orange)]/10 text-[var(--color-geo-orange)] flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-text)]/5 text-[var(--color-text)]/50">
                    {difficultyLabel[problem.difficulty]}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-text)]/5 text-[var(--color-text)]/50">
                    {typeLabel[problem.type]}
                  </span>
                </div>
                <p className="font-medium">{problem.question}</p>
              </div>
            </div>

            {problem.type === 'choice' && problem.options && (
              <div className="space-y-2 ml-10">
                {problem.options.map((opt, oi) => {
                  const optionLetter = String.fromCharCode(65 + oi)
                  const isSelected = answers[problem.id] === opt
                  const isThisCorrect = isAnswered && opt === problem.answer
                  const isThisWrong = isAnswered && isSelected && !isCorrect

                  let cls = 'border-[var(--color-grid)] hover:border-[var(--color-blueprint)]/50'
                  if (isThisCorrect) cls = 'border-[var(--color-calc-green)] bg-[var(--color-calc-green)]/10'
                  if (isThisWrong) cls = 'border-red-400 bg-red-50 dark:bg-red-900/10'

                  return (
                    <button
                      key={oi}
                      onClick={() => {
                        if (isAnswered) return
                        setAnswers((prev) => ({ ...prev, [problem.id]: opt }))
                      }}
                      disabled={isAnswered}
                      className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all duration-200 ${cls}`}
                    >
                      <span className="font-medium mr-2">{optionLetter}.</span>
                      {opt}
                    </button>
                  )
                })}
              </div>
            )}

            {(problem.type === 'fill' || problem.type === 'calculate') && (
              <div className="flex gap-2 ml-10">
                <input
                  type="text"
                  value={answers[problem.id] ?? ''}
                  onChange={(e) =>
                    setAnswers((prev) => ({ ...prev, [problem.id]: e.target.value }))
                  }
                  disabled={isAnswered}
                  placeholder={problem.type === 'calculate' ? '输入计算结果' : '输入答案'}
                  className="flex-1 px-3 py-2 rounded-lg border border-[var(--color-grid)] bg-transparent text-sm focus:outline-none focus:border-[var(--color-blueprint)] disabled:opacity-60"
                />
                {!isAnswered && (
                  <button
                    onClick={() => handleCheck(problem)}
                    disabled={!answers[problem.id]?.trim()}
                    className="px-4 py-2 rounded-lg bg-[var(--color-blueprint)] text-white text-sm font-medium disabled:opacity-40 hover:opacity-90 transition-opacity"
                  >
                    验证
                  </button>
                )}
              </div>
            )}

            {problem.type === 'prove' && (
              <div className="ml-10 space-y-2">
                <textarea
                  value={answers[problem.id] ?? ''}
                  onChange={(e) =>
                    setAnswers((prev) => ({ ...prev, [problem.id]: e.target.value }))
                  }
                  disabled={isAnswered}
                  placeholder="写出你的证明过程..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-[var(--color-grid)] bg-transparent text-sm focus:outline-none focus:border-[var(--color-blueprint)] disabled:opacity-60 resize-none"
                />
                {!isAnswered && (
                  <button
                    onClick={() => handleCheck(problem)}
                    disabled={!answers[problem.id]?.trim()}
                    className="px-4 py-2 rounded-lg bg-[var(--color-blueprint)] text-white text-sm font-medium disabled:opacity-40 hover:opacity-90 transition-opacity"
                  >
                    查看参考
                  </button>
                )}
              </div>
            )}

            {problem.type === 'choice' && !isAnswered && answers[problem.id] && (
              <div className="ml-10 mt-2">
                <button
                  onClick={() => handleCheck(problem)}
                  className="px-4 py-2 rounded-lg bg-[var(--color-blueprint)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  验证
                </button>
              </div>
            )}

            {isAnswered && (
              <div
                className={`ml-10 mt-3 flex items-center gap-2 text-sm font-medium transition-opacity duration-300 ${
                  isCorrect ? 'text-[var(--color-calc-green)]' : 'text-red-500'
                }`}
              >
                {isCorrect ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <XCircle className="w-4 h-4" />
                )}
                {isCorrect ? '回答正确！' : `正确答案: ${problem.answer}`}
              </div>
            )}

            {problem.steps && isAnswered && (
              <div className="ml-10 mt-2">
                <button
                  onClick={() => toggleSteps(problem.id)}
                  className="flex items-center gap-1 text-xs text-[var(--color-blueprint)] hover:underline"
                >
                  {expandedSteps[problem.id] ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    <ChevronDown className="w-3 h-3" />
                  )}
                  解题步骤
                </button>
                {expandedSteps[problem.id] && (
                  <ol className="mt-2 space-y-1 text-sm text-[var(--color-text)]/70">
                    {problem.steps.map((step, si) => (
                      <li key={si} className="pl-3 border-l-2 border-[var(--color-blueprint)]/20">
                        {step}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            )}

            {problem.hint && (
              <div className="ml-10 mt-2">
                <button
                  onClick={() => toggleHint(problem.id)}
                  className="flex items-center gap-1 text-xs text-[var(--color-geo-orange)] hover:underline"
                >
                  <Lightbulb className="w-3 h-3" />
                  {shownHints[problem.id] ? '隐藏提示' : '显示提示'}
                </button>
                {shownHints[problem.id] && (
                  <p className="mt-1 text-sm text-[var(--color-geo-orange)] bg-[var(--color-geo-orange)]/5 p-2 rounded">
                    {problem.hint}
                  </p>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

const difficultyLabel: Record<string, string> = {
  basic: '基础',
  medium: '中等',
  hard: '较难',
}

const typeLabel: Record<string, string> = {
  choice: '选择题',
  fill: '填空题',
  calculate: '计算题',
  prove: '证明题',
}
