import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BookOpen, Eye, PenTool, AlertCircle, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import { chapters } from '@/data/chapters'
import type { Section, Chapter } from '@/data/types'
import { VisualRenderer } from '@/components/visuals/VisualRenderer'
import { KnowledgePanel } from '@/components/KnowledgePanel'
import { PracticePanel } from '@/components/PracticePanel'
import { useProgress } from '@/hooks/useProgress'

const TABS = [
  { id: 'knowledge', label: '知识要点', icon: BookOpen },
  { id: 'visual', label: '图解演示', icon: Eye },
  { id: 'practice', label: '练习巩固', icon: PenTool },
] as const

export function SectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>()
  const [activeTab, setActiveTab] = useState<string>('knowledge')
  const { markVisited, savePracticeScore, getPracticeScore } = useProgress()

  let section: Section | undefined
  let chapter: Chapter | undefined
  let chapterId: string | undefined
  for (const [id, ch] of Object.entries(chapters)) {
    const found = ch.sections.find((s) => s.id === sectionId)
    if (found) {
      section = found
      chapter = ch
      chapterId = id
      break
    }
  }

  useEffect(() => {
    if (sectionId) markVisited(sectionId)
  }, [sectionId, markVisited])

  if (!section || !chapter || !chapterId) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-12 h-12 mx-auto mb-3 text-[var(--color-text)]/30" />
        <p className="text-lg text-[var(--color-text)]/60">未找到该小节</p>
        <Link to="/" className="text-[var(--color-blueprint)] mt-2 inline-block">
          返回首页
        </Link>
      </div>
    )
  }

  const sectionIndex = chapter.sections.findIndex((s) => s.id === sectionId)
  const prevSection = sectionIndex > 0 ? chapter.sections[sectionIndex - 1] : null
  const nextSection = sectionIndex < chapter.sections.length - 1 ? chapter.sections[sectionIndex + 1] : null

  const lastScore = sectionId ? getPracticeScore(sectionId) : null

  return (
    <div className="space-y-6">
      <div>
        <Link
          to={`/chapter/${chapterId}`}
          className="inline-flex items-center gap-1 text-sm text-[var(--color-blueprint)] hover:underline mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          回到章节: {chapter.title}
        </Link>
        <h1 className="text-2xl font-bold">{section.title}</h1>
        <p className="text-[var(--color-text)]/60 mt-2">{section.summary}</p>
      </div>

      <div className="flex overflow-x-auto border-b border-[var(--color-grid)] -mx-1 px-1 scrollbar-hide">
        {TABS.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                  ? 'border-[var(--color-blueprint)] text-[var(--color-blueprint)]'
                  : 'border-transparent text-[var(--color-text)]/50 hover:text-[var(--color-text)]/70'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {activeTab === 'knowledge' && (
        <KnowledgePanel
          knowledgePoints={section.knowledgePoints}
          summary={section.summary}
        />
      )}

      {activeTab === 'visual' && (
        <div className="space-y-4">
          {section.visuals.length === 0 ? (
            <div className="text-center py-8 text-[var(--color-text)]/50">
              暂无图解演示
            </div>
          ) : (
            section.visuals.map((visual) => (
              <VisualRenderer key={visual.id} block={visual} />
            ))
          )}
        </div>
      )}

      {activeTab === 'practice' && (
        <PracticePanel
          problems={section.practices}
          sectionId={sectionId}
          onSaveScore={(total: number, correct: number) => {
            if (sectionId) savePracticeScore(sectionId, total, correct)
          }}
          lastScore={lastScore}
        />
      )}

      {(prevSection || nextSection) && (
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-grid)]">
          {prevSection ? (
            <Link
              to={`/section/${prevSection.id}`}
              className="inline-flex items-center gap-1 text-sm text-[var(--color-blueprint)] hover:underline"
            >
              <ChevronLeft className="w-4 h-4" />
              上一节: {prevSection.title}
            </Link>
          ) : (
            <span />
          )}
          {nextSection ? (
            <Link
              to={`/section/${nextSection.id}`}
              className="inline-flex items-center gap-1 text-sm text-[var(--color-blueprint)] hover:underline"
            >
              下一节: {nextSection.title}
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      )}
    </div>
  )
}
