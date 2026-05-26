import { useState } from 'react'
import type { Essay } from '@/data'
import { Eye, EyeOff } from 'lucide-react'

interface EssayCardProps {
  essay: Essay
}

const LEVEL_COLORS: Record<string, string> = {
  A: 'bg-emerald-100 text-emerald-700',
  B: 'bg-blue-100 text-blue-700',
  C: 'bg-slate-100 text-slate-600',
}

export function EssayCard({ essay }: EssayCardProps) {
  const [showBody, setShowBody] = useState(false)

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-100">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h3 className="font-semibold text-slate-800">{essay.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {essay.wordCount} words · {essay.topic}
            </p>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${LEVEL_COLORS[essay.level]}`}>
            Level {essay.level}
          </span>
        </div>

        {essay.keyPhrases.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {essay.keyPhrases.map((phrase, i) => (
              <span
                key={i}
                className="text-xs bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded"
              >
                {phrase}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="px-5 py-4">
        <button
          onClick={() => setShowBody(!showBody)}
          className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-800 transition-colors"
        >
          {showBody ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showBody ? '隐藏范文' : '显示范文'}
        </button>

        {showBody && (
          <div className="mt-3">
            <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                {essay.body}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
