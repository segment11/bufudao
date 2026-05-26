import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { units } from '@/data'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { ReadingPassage } from '@/data'

function ReadingPassageCard({ passage }: { passage: ReadingPassage }) {
  const [selectedWord, setSelectedWord] = useState<string | null>(null)
  const [showAnswers, setShowAnswers] = useState(false)

  const toggleWord = (word: string) => {
    setSelectedWord(selectedWord === word ? null : word)
  }

  const highlightedText = passage.text.split(/(\s+)/).map((part, i) => {
    const isAnnotated = passage.annotations.some((a) => a.word === part)
    if (isAnnotated) {
            return (
              <button
                key={i}
                onClick={() => toggleWord(part)}
                className={`border-b-2 transition-colors ${
                  selectedWord === part
                    ? 'border-blue-500 text-blue-700 bg-blue-50'
                    : 'border-blue-400 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {part}
              </button>
            )
    }
    return part
  })

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 bg-slate-50">
        <h3 className="font-semibold text-slate-800">{passage.title}</h3>
      </div>

      <div className="px-5 py-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-wrap">
              {highlightedText}
            </p>
          </div>

          {selectedWord && (
            <div className="w-48 flex-shrink-0 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 sticky top-4">
              <p className="text-sm font-semibold text-blue-800">
                {selectedWord}
              </p>
              {passage.annotations.find((a) => a.word === selectedWord)?.note && (
                <p className="text-xs text-blue-600 mt-1">
                  {passage.annotations.find((a) => a.word === selectedWord)?.note}
                </p>
              )}
              <p className="text-xs text-slate-600 mt-1">
                {passage.annotations.find((a) => a.word === selectedWord)?.meaning}
              </p>
            </div>
          )}
        </div>

        {passage.annotations.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-xs text-slate-500 mb-2">点击文中蓝色标注的单词查看释义</p>
            <div className="flex flex-wrap gap-1.5">
              {passage.annotations.map((ann, i) => (
                <span
                  key={i}
                  className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                >
                  {ann.word}: {ann.meaning}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="px-5 pb-4">
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-800 transition-colors"
        >
          {showAnswers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {showAnswers ? '收起' : '查看'}理解题答案
        </button>

        {showAnswers && (
          <div className="mt-3 space-y-3">
            {passage.questions.map((q, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-lg px-4 py-3">
                <p className="text-sm font-medium text-slate-700">
                  Q{i + 1}: {q.q}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  <span className="text-blue-600 font-medium">A: </span>
                  {q.a}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function ReadingTab() {
  const { unitId } = useParams<{ unitId: string }>()
  const unit = unitId ? units[unitId] : undefined
  const readings = unit?.readings ?? []

  if (!unit) {
    return <div className="text-slate-500">未找到单元数据</div>
  }

  if (readings.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p>该单元暂无阅读内容</p>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {readings.map((passage, i) => (
        <ReadingPassageCard key={i} passage={passage} />
      ))}
    </div>
  )
}
