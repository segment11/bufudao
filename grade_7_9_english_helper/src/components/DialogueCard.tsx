import { useState } from 'react'
import type { Dialogue } from '@/data'
import { MessageCircle, Eye, EyeOff } from 'lucide-react'

interface DialogueCardProps {
  dialogue: Dialogue
}

export function DialogueCard({ dialogue }: DialogueCardProps) {
  const [showTranslation, setShowTranslation] = useState(true)
  const [hideSpeaker, setHideSpeaker] = useState<string | null>(null)

  const toggleSpeaker = (speaker: string) => {
    setHideSpeaker(hideSpeaker === speaker ? null : speaker)
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="font-semibold text-slate-800">{dialogue.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{dialogue.scene}</p>
          </div>
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors px-2 py-1 rounded border border-slate-200 hover:border-slate-300"
          >
            {showTranslation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {showTranslation ? '隐藏翻译' : '显示翻译'}
          </button>
        </div>
      </div>

      <div className="px-5 py-4 space-y-3">
        {dialogue.lines.map((line, i) => {
          const isHidden = hideSpeaker === line.speaker
          return (
            <div key={i} className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-blue-700">
                  {line.speaker.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-slate-700">{line.speaker}</span>
                  <button
                    onClick={() => toggleSpeaker(line.speaker)}
                    className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                    title="练习此角色"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div
                  className={`rounded-lg px-4 py-2.5 text-sm ${
                    isHidden
                      ? 'bg-slate-100 text-slate-400 italic'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {isHidden ? '（点击角色按钮显示原文）' : line.text}
                </div>
                {showTranslation && !isHidden && (
                  <p className="text-xs text-slate-400 mt-1 ml-1">{line.translation}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {dialogue.image && (
        <div className="px-5 pb-4">
          <img
            src={dialogue.image}
            alt={dialogue.title}
            className="w-full max-w-sm rounded border border-slate-200"
          />
        </div>
      )}
    </div>
  )
}
