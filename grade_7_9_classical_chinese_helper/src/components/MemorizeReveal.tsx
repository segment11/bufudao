import { useState, useCallback, useEffect } from 'react'
import type { Paragraph } from '@/data/types'
import { RotateCcw, ChevronRight } from 'lucide-react'

interface Props {
  paragraphs: Paragraph[]
  /** localStorage key for progress */
  storageKey: string
}

type RevealLevel = 'all' | 'partial' | 'minimal' | 'hidden'

const REVEAL_LEVELS: { level: RevealLevel; label: string; desc: string }[] = [
  { level: 'all', label: '全文显示', desc: '阅读熟悉' },
  { level: 'partial', label: '部分遮挡', desc: '每句遮挡 ~30%' },
  { level: 'minimal', label: '大幅遮挡', desc: '每句保留 2-3 字' },
  { level: 'hidden', label: '全部隐藏', desc: '仅留标点' },
]

function loadProgress(key: string): { level: RevealLevel; para: number } {
  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      const data = JSON.parse(raw)
      return { level: data.level || 'all', para: data.para || 0 }
    }
  } catch { /* ignore */ }
  return { level: 'all', para: 0 }
}

function saveProgress(key: string, level: RevealLevel, para: number) {
  try {
    localStorage.setItem(key, JSON.stringify({ level, para }))
  } catch { /* ignore */ }
}

export function MemorizeReveal({ paragraphs, storageKey }: Props) {
  const [level, setLevel] = useState<RevealLevel>('all')
  const [currentPara, setCurrentPara] = useState(0)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const saved = loadProgress(storageKey)
    setLevel(saved.level)
    setCurrentPara(saved.para)
    setInitialized(true)
  }, [storageKey])

  useEffect(() => {
    if (initialized) {
      saveProgress(storageKey, level, currentPara)
    }
  }, [level, currentPara, storageKey, initialized])

  const revealLevelIndex = REVEAL_LEVELS.findIndex((l) => l.level === level)

  const progress = useCallback(() => {
    setLevel((prev) => {
      const idx = REVEAL_LEVELS.findIndex((l) => l.level === prev)
      if (idx < REVEAL_LEVELS.length - 1) return REVEAL_LEVELS[idx + 1].level
      if (currentPara < paragraphs.length - 1) {
        setCurrentPara((p) => p + 1)
        return 'all'
      }
      return prev
    })
  }, [currentPara, paragraphs.length])

  const reset = () => {
    setLevel('all')
    setCurrentPara(0)
  }

  const para = paragraphs[currentPara]
  if (!para) return null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-stone-600">
            第 {currentPara + 1} / {paragraphs.length} 段
          </span>
          <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
            {REVEAL_LEVELS[revealLevelIndex].desc}
          </span>
        </div>
        <button
          onClick={reset}
          className="flex items-center gap-1 text-xs text-stone-400 hover:text-stone-600 transition-colors"
        >
          <RotateCcw className="w-3 h-3" /> 重置
        </button>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1">
        {paragraphs.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i < currentPara
                ? 'bg-emerald-400'
                : i === currentPara
                  ? 'bg-amber-400'
                  : 'bg-stone-200'
            }`}
          />
        ))}
      </div>

      {/* Level selector */}
      <div className="flex gap-2">
        {REVEAL_LEVELS.map((l) => (
          <button
            key={l.level}
            onClick={() => setLevel(l.level)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              level === l.level
                ? 'border-amber-400 bg-amber-50 text-amber-700'
                : 'border-stone-200 text-stone-400 hover:text-stone-600'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Text display */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8">
        <p className="classical-text text-xl text-stone-800 leading-loose text-center">
          {renderRevealText(para.original, level).map((seg, i) => (
            <span key={i}>{seg}</span>
          ))}
        </p>
      </div>

      {/* Action */}
      <div className="flex justify-center">
        <button
          onClick={progress}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
        >
          {revealLevelIndex < REVEAL_LEVELS.length - 1
            ? '加大难度'
            : currentPara < paragraphs.length - 1
              ? '下一段'
              : '已完成'}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

/** 根据遮挡等级渲染原文 */
function renderRevealText(original: string, level: RevealLevel): (string | JSX.Element)[] {
  if (level === 'all') {
    return [original]
  }

  // 提取所有非标点非空格的字符
  const chars = [...original]
  const contentIndices: number[] = []
  chars.forEach((ch, i) => {
    if (!/[，。、；：！？\s,.!?;:'"「」『』【】《》（）()…—]/.test(ch)) {
      contentIndices.push(i)
    }
  })

  if (contentIndices.length === 0) return chars

  let visibleSet: Set<number>
  if (level === 'partial') {
    // 每3个字保留2个
    visibleSet = new Set(contentIndices.filter((_, i) => i % 3 !== 2))
  } else if (level === 'minimal') {
    // 每句（按标点分段）保留首尾各1字
    visibleSet = new Set<number>()
    let segStart = 0
    for (let i = 0; i < contentIndices.length; i++) {
      const isEnd =
        i === contentIndices.length - 1 ||
        /[，。、；：！？]/.test(chars[contentIndices[i]])
      if (isEnd) {
        if (i > segStart) {
          visibleSet.add(contentIndices[segStart])
          if (i - 1 > segStart) {
            visibleSet.add(contentIndices[i - 1])
          }
        }
        segStart = i + 1
      }
    }
  } else {
    // hidden: 全部隐藏
    visibleSet = new Set()
  }

  return chars.map((ch, i) => {
    if (contentIndices.includes(i) && !visibleSet.has(i)) {
      return (
        <span
          key={i}
          className="inline-block mx-0.5 text-transparent bg-stone-200 rounded select-none min-w-[1em]"
        >
          {ch}
        </span>
      )
    }
    return ch
  })
}
