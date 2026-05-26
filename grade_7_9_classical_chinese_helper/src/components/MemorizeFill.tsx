import { useState, useMemo } from 'react'
import type { Paragraph } from '@/data/types'
import { Check, X } from 'lucide-react'

interface Props {
  paragraphs: Paragraph[]
}

interface Question {
  original: string
  blanked: string
  answer: string
  options: string[]
  paraId: string
}

/** 从段落中提取可作为填空的关键词 */
function extractQuestions(paragraphs: Paragraph[]): Question[] {
  // 收集所有可填空的词
  const candidates: { word: string; original: string; blanked: string; paraId: string }[] = []

  for (const para of paragraphs) {
    for (const ann of para.annotations) {
      if (ann.type === '实词' || ann.type === '词类活用' || ann.type === '通假字') {
        const escaped = ann.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const blanked = para.original.replace(new RegExp(escaped, 'g'), '___')
        candidates.push({
          word: ann.word,
          original: para.original,
          blanked,
          paraId: para.id,
        })
      }
    }
  }

  if (candidates.length === 0) return []

  // 所有可能的词作为干扰项池
  const allWords = candidates.map((c) => c.word)

  return candidates.map((c) => {
    const answerLen = c.word.length
    // 从同长度的词中选干扰项，排除自身
    const distractorPool = allWords.filter(
      (w) => w !== c.word && w.length === answerLen,
    )
    // 如果同长度的不够，放宽到 ±1
    if (distractorPool.length < 3) {
      const extended = allWords.filter(
        (w) =>
          w !== c.word &&
          Math.abs(w.length - answerLen) <= 1 &&
          !distractorPool.includes(w),
      )
      distractorPool.push(...extended)
    }
    // 如果还不够，用占位符
    while (distractorPool.length < 3) {
      distractorPool.push('——')
    }

    // 随机选 3 个
    const shuffled = [...distractorPool].sort(() => Math.random() - 0.5)
    const distractors = shuffled.slice(0, 3)

    // 随机排列选项
    const options = [c.word, ...distractors].sort(() => Math.random() - 0.5)

    return {
      original: c.original,
      blanked: c.blanked,
      answer: c.word,
      options,
      paraId: c.paraId,
    }
  })
}

export function MemorizeFill({ paragraphs }: Props) {
  const questions = useMemo(() => extractQuestions(paragraphs), [paragraphs])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState({ correct: 0, total: 0 })

  if (questions.length === 0) {
    return (
      <div className="text-center py-8 text-stone-400 dark:text-stone-500">
        <p>该篇目暂无可填空的关键词</p>
      </div>
    )
  }

  const current = questions[currentIdx]
  const answered = selected !== null
  const isCorrect = selected === current.answer

  const handleSelect = (option: string) => {
    if (selected !== null) return
    setSelected(option)
    setScore((s) => ({
      correct: s.correct + (option === current.answer ? 1 : 0),
      total: s.total + 1,
    }))
  }

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((i) => i + 1)
      setSelected(null)
    }
  }

  const getOptionStyle = (opt: string) => {
    if (!answered) {
      return 'border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 cursor-pointer'
    }
    if (opt === current.answer) {
      return 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
    }
    if (opt === selected && opt !== current.answer) {
      return 'border-rose-400 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400'
    }
    return 'border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-400 dark:text-stone-500 opacity-50'
  }

  return (
    <div className="space-y-6">
      {/* Score */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-stone-500 dark:text-stone-400">
          第 {currentIdx + 1} / {questions.length} 题
        </span>
        <span className="text-sm font-medium text-stone-600 dark:text-stone-300">
          正确：{score.correct}/{score.total}
          {score.total > 0 && (
            <span className="text-stone-400 dark:text-stone-500 ml-1">
              ({Math.round((score.correct / score.total) * 100)}%)
            </span>
          )}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-400 rounded-full transition-all duration-300"
          style={{ width: `${((currentIdx + (answered ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-6 md:p-8">
        <p className="classical-text text-xl text-stone-800 dark:text-stone-200 leading-loose text-center">
          {answered
            ? current.original.replace(
                new RegExp(current.answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
                () => `【${current.answer}】`,
              )
            : current.blanked}
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
        {current.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            disabled={answered}
            className={`text-lg font-serif py-3 px-4 rounded-xl border-2 transition-all text-center ${getOptionStyle(opt)}`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Result & Next */}
      {answered && (
        <div className="text-center space-y-3">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              isCorrect
                ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
                : 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400'
            }`}
          >
            {isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            {isCorrect ? '回答正确！' : '再想想，下次一定对'}
          </div>

          {currentIdx < questions.length - 1 && (
            <div>
              <button
                onClick={handleNext}
                className="bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-200 text-sm font-medium px-5 py-2 rounded-full transition-colors"
              >
                下一题
              </button>
            </div>
          )}

          {currentIdx === questions.length - 1 && (
            <p className="text-sm text-stone-400 dark:text-stone-500">
              🎉 全部完成！正确率 {Math.round((score.correct / score.total) * 100)}%
            </p>
          )}
        </div>
      )}
    </div>
  )
}
