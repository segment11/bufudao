import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { texts } from '@/data/texts'
import type { WordAnnotation } from '@/data/types'
import { MapPin, Clock, BookOpen, Lightbulb, Eye, EyeOff, Layers, Edit3 } from 'lucide-react'
import { MemorizeReveal } from '@/components/MemorizeReveal'
import { MemorizeFill } from '@/components/MemorizeFill'

const annotationColors: Record<string, string> = {
  '实词': 'bg-blue-50 text-blue-700 border-blue-200', '虚词': 'bg-purple-50 text-purple-700 border-purple-200',
  '通假字': 'bg-rose-50 text-rose-700 border-rose-200', '词类活用': 'bg-amber-50 text-amber-700 border-amber-200',
  '古今异义': 'bg-teal-50 text-teal-700 border-teal-200', '特殊句式': 'bg-indigo-50 text-indigo-700 border-indigo-200',
}
type MemorizeMode = 'reveal' | 'fill'

export function TextPage() {
  const { textId } = useParams<{ textId: string }>()
  const text = textId ? texts[textId] : undefined
  const [activeAnnotation, setActiveAnnotation] = useState<WordAnnotation | null>(null)
  const [showTranslation, setShowTranslation] = useState(true)
  const [activeTab, setActiveTab] = useState<'read' | 'background' | 'geo' | 'memorize'>('read')
  const [memorizeMode, setMemorizeMode] = useState<MemorizeMode>('reveal')

  if (!text) return <div className="max-w-2xl mx-auto px-4 py-20 text-center"><p className="text-stone-500">未找到该篇目</p><Link to="/" className="text-amber-700 hover:underline mt-2 inline-block">返回首页</Link></div>

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <Link to={`/grade/${text.grade}`} className="text-sm text-stone-400 hover:text-stone-600 transition-colors mb-2 inline-block">← {text.grade}年级{text.semester}学期</Link>
        <h1 className="text-3xl font-bold text-stone-800 mb-2">{text.title}</h1>
        <div className="flex items-center gap-3 text-sm text-stone-500"><span>{text.author}</span><span>·</span><span>{text.historicalContext.dynasty}</span><span>·</span><span>{text.genre}</span></div>
      </div>
      <div className="flex gap-1 border-b border-stone-200 mb-8">
        {[{ id: 'read' as const, label: '阅读', icon: BookOpen }, { id: 'background' as const, label: '历史背景', icon: Clock }, { id: 'geo' as const, label: '地理', icon: MapPin }, { id: 'memorize' as const, label: '背诵', icon: Lightbulb }].map((tab) => (
          <button key={tab.id} onClick={() => { setActiveTab(tab.id); setActiveAnnotation(null) }} className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${activeTab === tab.id ? 'border-amber-600 text-amber-700' : 'border-transparent text-stone-400 hover:text-stone-600'}`}><tab.icon className="w-4 h-4" />{tab.label}</button>
        ))}
      </div>

      {activeTab === 'read' && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6"><h2 className="text-lg font-semibold text-stone-700">原文</h2>
              <button onClick={() => setShowTranslation(!showTranslation)} className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors">{showTranslation ? <><EyeOff className="w-3.5 h-3.5" /> 隐藏译文</> : <><Eye className="w-3.5 h-3.5" /> 显示译文</>}</button>
            </div>
            <div className="space-y-8">{text.paragraphs.map((para) => (
              <div key={para.id} className="group"><p className="classical-text text-lg text-stone-800 leading-loose">{renderAnnotatedText(para.original, para.annotations, setActiveAnnotation)}</p>
                {showTranslation && (
                  <div>
                    <p className="mt-2 text-sm text-stone-500 leading-relaxed pl-4 border-l-2 border-stone-200">{para.translation}</p>
                    {para.imagePath && (
                      <div className="mt-3 pl-4">
                        <img src={`${import.meta.env.BASE_URL}${para.imagePath.replace(/^\//, '')}`} alt="" className="max-w-xs max-h-40 rounded border border-stone-200 object-cover" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}</div>
          </div>
          <div className="w-full md:w-72 md:flex-shrink-0">{activeAnnotation ? (
            <div className="md:sticky md:top-20 bg-white border border-stone-200 rounded-lg p-4 mt-6 md:mt-0">
              <div className="flex items-center justify-between mb-3"><span className="text-lg font-serif text-stone-800">{activeAnnotation.word}</span><span className="text-xs text-stone-400">{activeAnnotation.pinyin}</span></div>
              <span className={`inline-block text-xs px-2 py-0.5 rounded border mb-3 ${annotationColors[activeAnnotation.type] || 'bg-stone-50 text-stone-600 border-stone-200'}`}>{activeAnnotation.type}</span>
              <p className="text-sm text-stone-600 leading-relaxed">{activeAnnotation.meaning}</p>
            </div>
          ) : (
            <div className="md:sticky md:top-20 bg-stone-50 border border-stone-100 rounded-lg p-4 mt-6 md:mt-0 hidden md:block"><p className="text-xs text-stone-400 leading-relaxed">点击原文中<span className="annotated-word text-stone-500 px-0.5">下划线</span>标记的词语，查看详细注释。</p></div>
          )}</div>
        </div>
      )}

      {activeTab === 'background' && (
        <div className="space-y-8">
          <section><h2 className="text-lg font-semibold text-stone-700 mb-3">时代背景</h2><div className="flex items-center gap-2 mb-4"><span className="text-sm font-medium text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{text.historicalContext.dynasty}</span><span className="text-sm text-stone-500">{text.historicalContext.era}</span></div></section>
          <section><h2 className="text-lg font-semibold text-stone-700 mb-3">作者简介</h2><p className="text-stone-600 leading-relaxed">{highlightKeywords(text.historicalContext.authorBio, text.historicalContext.highlightWords)}</p></section>
          <section><h2 className="text-lg font-semibold text-stone-700 mb-3">创作背景</h2><p className="text-stone-600 leading-relaxed">{highlightKeywords(text.historicalContext.writingBackground, text.historicalContext.highlightWords)}</p></section>
          <section><h2 className="text-lg font-semibold text-stone-700 mb-3">时代关键词</h2><div className="flex flex-wrap gap-2">{text.historicalContext.eraKeywords.map((kw) => (<span key={kw} className="text-sm bg-stone-100 text-stone-600 px-3 py-1 rounded-full">{kw}</span>))}</div></section>
        </div>
      )}

      {activeTab === 'geo' && (
        <div className="space-y-6"><h2 className="text-lg font-semibold text-stone-700 mb-4">文中涉及的地理信息</h2>
          <div className="grid gap-4">{text.geoContexts.map((geo) => (
            <div key={geo.ancientName} className="bg-white border border-stone-200 rounded-lg p-5 hover:border-stone-300 transition-colors">
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><div><h3 className="font-medium text-stone-800">{geo.ancientName}<span className="text-stone-400 font-normal ml-2 text-sm">→ {geo.modernName}</span></h3><p className="text-sm text-stone-500 mt-1 leading-relaxed">{geo.relevance}</p></div></div>
            </div>
          ))}</div>
        </div>
      )}

      {activeTab === 'memorize' && (
        <div className="space-y-8">
          <div className="flex gap-2">
            <button onClick={() => setMemorizeMode('reveal')} className={`flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border transition-colors ${memorizeMode === 'reveal' ? 'border-amber-400 bg-amber-50 text-amber-700' : 'border-stone-200 text-stone-500 hover:text-stone-700'}`}><Layers className="w-4 h-4" />逐层遮挡</button>
            <button onClick={() => setMemorizeMode('fill')} className={`flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border transition-colors ${memorizeMode === 'fill' ? 'border-amber-400 bg-amber-50 text-amber-700' : 'border-stone-200 text-stone-500 hover:text-stone-700'}`}><Edit3 className="w-4 h-4" />关键词填空</button>
          </div>
          {memorizeMode === 'reveal' ? <MemorizeReveal paragraphs={text.paragraphs} storageKey={`memorize-reveal-${text.id}`} /> : <MemorizeFill paragraphs={text.paragraphs} />}
          <section className="pt-6 border-t border-stone-200"><h2 className="text-lg font-semibold text-stone-700 mb-4">背诵分段提示</h2><div className="space-y-3">{text.memorizationAid.segments.map((seg, i) => (<div key={i} className="flex items-start gap-4 bg-white border border-stone-200 rounded-lg p-4"><span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-sm font-medium flex items-center justify-center">{i + 1}</span><div><span className="font-medium text-stone-700">{seg.keyword}</span><p className="text-sm text-stone-500 mt-1">{seg.hint}</p></div></div>))}</div></section>
          <section><h2 className="text-lg font-semibold text-stone-700 mb-4">易错字提醒</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-3">{text.memorizationAid.commonMistakes.map((m) => (<div key={m.wrong} className="bg-white border border-stone-200 rounded-lg p-3 text-center"><span className="text-sm text-rose-500 line-through">{m.wrong}</span><span className="text-stone-400 mx-2">→</span><span className="text-sm font-medium text-stone-800">{m.correct}</span></div>))}</div></section>
        </div>
      )}
    </div>
  )
}

function highlightKeywords(text: string, keywords: string[]): React.ReactNode[] {
  if (!keywords.length) return [text]
  const sorted = [...keywords].sort((a, b) => b.length - a.length)
  const escaped = sorted.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g')
  const parts: React.ReactNode[] = []
  let lastIndex = 0, match: RegExpExecArray | null
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    parts.push(<span key={match.index} className="font-semibold text-amber-700 bg-amber-50 dark:bg-amber-900/30 dark:text-amber-400 px-0.5 rounded">{match[0]}</span>)
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts.length ? parts : [text]
}

function renderAnnotatedText(original: string, annotations: WordAnnotation[], onSelect: (a: WordAnnotation) => void): React.ReactNode[] {
  if (annotations.length === 0) return [original]
  const sorted = [...annotations].sort((a, b) => b.word.length - a.word.length)
  interface Match { start: number; end: number; annotation: WordAnnotation }
  const matches: Match[] = []
  for (const ann of sorted) { let idx = 0; while (idx < original.length) { const found = original.indexOf(ann.word, idx); if (found === -1) break; if (!matches.some((m) => found < m.end && found + ann.word.length > m.start)) matches.push({ start: found, end: found + ann.word.length, annotation: ann }); idx = found + 1 } }
  matches.sort((a, b) => a.start - b.start)
  const result: React.ReactNode[] = []
  let cursor = 0
  for (const m of matches) { if (m.start > cursor) result.push(original.slice(cursor, m.start)); result.push(<span key={`${m.start}-${m.end}`} className="annotated-word" onClick={() => onSelect(m.annotation)}>{original.slice(m.start, m.end)}</span>); cursor = m.end }
  if (cursor < original.length) result.push(original.slice(cursor))
  return result
}
