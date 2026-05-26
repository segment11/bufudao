import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface ReorderExerciseProps {
  instruction: string
  scrambled: string[]
  answer: string[]
}

export function ReorderExercise({ instruction, scrambled, answer }: ReorderExerciseProps) {
  const [order, setOrder] = useState<string[]>([])
  const [remaining, setRemaining] = useState<string[]>(scrambled)
  const [submitted, setSubmitted] = useState(false)

  const moveToOrder = (word: string) => {
    setOrder([...order, word])
    setRemaining(remaining.filter((w) => w !== word))
  }

  const moveToRemaining = (word: string) => {
    setRemaining([...remaining, word])
    setOrder(order.filter((w) => w !== word))
  }

  const reset = () => {
    setOrder([])
    setRemaining(scrambled)
    setSubmitted(false)
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <p className="text-sm font-medium text-slate-700 mb-4">{instruction}</p>

      <div className="mb-4 p-4 bg-slate-50 border border-slate-200 rounded-lg min-h-[60px] flex flex-wrap gap-2">
        {order.length === 0 ? (
          <span className="text-sm text-slate-400">点击下方单词组成正确顺序</span>
        ) : (
          order.map((word, i) => (
            <button
              key={i}
              onClick={() => moveToRemaining(word)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                submitted
                  ? word === answer[i]
                    ? 'bg-green-100 text-green-700 border border-green-300'
                    : 'bg-red-100 text-red-700 border border-red-300'
                  : 'bg-blue-100 text-blue-700 border border-blue-300 hover:bg-blue-200'
              }`}
            >
              {word}
              {submitted && (word === answer[i] ? <CheckCircle className="inline w-3 h-3 ml-1" /> : <XCircle className="inline w-3 h-3 ml-1" />)}
            </button>
          ))
        )}
      </div>

      <div className="p-4 bg-white border border-slate-200 rounded-lg min-h-[50px] flex flex-wrap gap-2 mb-4">
        {remaining.map((word, i) => (
          <button
            key={i}
            onClick={() => moveToOrder(word)}
            className="px-3 py-1.5 rounded text-sm bg-slate-100 text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            {word}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={reset}
          className="px-4 py-2 text-sm bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
        >
          重置
        </button>
        <button
          onClick={() => setSubmitted(true)}
          disabled={order.length !== answer.length}
          className={`px-4 py-2 text-sm rounded-lg transition-colors ${
            order.length === answer.length
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          检查答案
        </button>
      </div>
    </div>
  )
}
