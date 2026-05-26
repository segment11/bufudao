import { useState } from 'react'
import type { VocabWord } from '@/data'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface WordCardProps {
  word: VocabWord
}

const POS_COLORS: Record<string, string> = {
  'n.': 'bg-emerald-100 text-emerald-700',
  'v.': 'bg-blue-100 text-blue-700',
  'adj.': 'bg-amber-100 text-amber-700',
  'adv.': 'bg-purple-100 text-purple-700',
  'pron.': 'bg-pink-100 text-pink-700',
  'prep.': 'bg-orange-100 text-orange-700',
  'conj.': 'bg-cyan-100 text-cyan-700',
  'interj.': 'bg-red-100 text-red-700',
  'num.': 'bg-indigo-100 text-indigo-700',
  'det.': 'bg-teal-100 text-teal-700',
}

export function WordCard({ word }: WordCardProps) {
  const [expanded, setExpanded] = useState(false)
  const posColor = POS_COLORS[word.pos] || 'bg-slate-100 text-slate-600'

  return (
    <div className="bg-white border border-slate-200 rounded-lg px-4 py-3 hover:border-blue-300 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-800 text-base">{word.word}</span>
            <span className="text-slate-400 text-sm font-mono">{word.phonetic}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${posColor}`}>
              {word.pos}
            </span>
          </div>
          <p className="text-slate-600 text-sm mt-1">{word.meaning}</p>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-1 text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
          aria-label={expanded ? '收起' : '展开'}
        >
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-slate-100">
          {word.image && (
            <div className="mb-3">
              <img
                src={word.image}
                alt={word.word}
                className="w-32 h-32 object-contain rounded border border-slate-100"
              />
            </div>
          )}
          <div className="bg-slate-50 rounded px-3 py-2">
            <p className="text-slate-700 text-sm italic">"{word.example}"</p>
            <p className="text-slate-500 text-xs mt-1">{word.exampleTranslation}</p>
          </div>
        </div>
      )}
    </div>
  )
}
