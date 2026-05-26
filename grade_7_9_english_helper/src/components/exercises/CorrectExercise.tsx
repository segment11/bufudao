import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface CorrectExerciseProps {
  instruction: string
  sentences: { wrong: string; correct: string }[]
}

export function CorrectExercise({ instruction, sentences }: CorrectExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userCorrection, setUserCorrection] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<boolean | null>(null)

  const current = sentences[currentIndex]

  const handleCheck = () => {
    const correct = userCorrection.trim().toLowerCase() === current.correct.toLowerCase()
    setResult(correct)
    setSubmitted(true)
  }

  const nextSentence = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, sentences.length - 1))
    setUserCorrection('')
    setSubmitted(false)
    setResult(null)
  }

  const prevSentence = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
    setUserCorrection('')
    setSubmitted(false)
    setResult(null)
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <p className="text-sm font-medium text-slate-700 mb-4">{instruction}</p>

      <div className="mb-4">
        <p className="text-slate-600 text-sm mb-2">
          请找出并改正错误：
        </p>
        <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-3 text-slate-700">
          {current.wrong}
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm text-slate-600 mb-1 block">你的答案：</label>
        <input
          type="text"
          value={userCorrection}
          onChange={(e) => setUserCorrection(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-400"
          placeholder="输入正确的句子..."
        />
      </div>

      {submitted && (
        <div className={`mb-4 px-4 py-3 rounded-lg text-sm flex items-center gap-2 ${
          result ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {result ? (
            <><CheckCircle className="w-4 h-4" /> 正确！</>
          ) : (
            <><XCircle className="w-4 h-4" /> 错误。正确答案：{current.correct}</>
          )}
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={prevSentence}
          disabled={currentIndex === 0}
          className="px-3 py-2 text-sm bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          上一题
        </button>
        <button
          onClick={nextSentence}
          disabled={currentIndex === sentences.length - 1}
          className="px-3 py-2 text-sm bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          下一题
        </button>
        <button
          onClick={handleCheck}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          检查
        </button>
      </div>

      <p className="text-xs text-slate-400 mt-3">
        题目 {currentIndex + 1} / {sentences.length}
      </p>
    </div>
  )
}
