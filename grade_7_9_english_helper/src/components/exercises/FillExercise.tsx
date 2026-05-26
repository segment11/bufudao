import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface FillExerciseProps {
  instruction: string
  sentences: string[]
  answers: string[]
}

export function FillExercise({ instruction, sentences, answers }: FillExerciseProps) {
  const [inputs, setInputs] = useState<(string)[]>(new Array(sentences.length).fill(''))
  const [submitted, setSubmitted] = useState(false)

  const handleCheck = () => setSubmitted(true)

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <p className="text-sm font-medium text-slate-700 mb-4">{instruction}</p>
      <div className="space-y-3">
        {sentences.map((sentence, i) => {
          const userAnswer = inputs[i]?.trim()
          const correctAnswer = answers[i]?.trim()
          const isCorrect = submitted && userAnswer?.toLowerCase() === correctAnswer?.toLowerCase()
          const isWrong = submitted && userAnswer && userAnswer.toLowerCase() !== correctAnswer?.toLowerCase()

          return (
            <div key={i} className="flex items-center gap-2">
              <span className="text-sm text-slate-500 w-6">{i + 1}.</span>
              <div className="flex-1 flex items-center gap-2 flex-wrap">
                {sentence.split('___').map((part, j) => (
                  <span key={j}>
                    {part}
                    {j < sentence.split('___').length - 1 && (
                      <span className="inline-flex items-center">
                        {submitted ? (
                          <span
                            className={`inline-block min-w-[80px] px-2 py-1 rounded text-sm font-medium ${
                              isCorrect
                                ? 'bg-green-100 text-green-700 border border-green-300'
                                : isWrong
                                ? 'bg-red-100 text-red-700 border border-red-300'
                                : 'bg-slate-100 text-slate-400 border border-slate-300'
                            }`}
                          >
                            {userAnswer || '(未填写)'}
                            {isCorrect && <CheckCircle className="inline w-3.5 h-3.5 ml-1" />}
                            {isWrong && <XCircle className="inline w-3.5 h-3.5 ml-1" />}
                          </span>
                        ) : (
                          <input
                            type="text"
                            value={inputs[i]}
                            onChange={(e) => {
                              const newInputs = [...inputs]
                              newInputs[i] = e.target.value
                              setInputs(newInputs)
                            }}
                            className="w-32 px-2 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-400"
                            placeholder="___"
                          />
                        )}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <button
        onClick={handleCheck}
        className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
      >
        检查答案
      </button>
    </div>
  )
}
