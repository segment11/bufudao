import { useParams, Link } from 'react-router-dom'
import { getChapter } from '@/data/chapters'
import { GRADE_INFO } from '@/data'
import { ArrowRight, BookOpen, HelpCircle, Eye, AlertCircle, Check } from 'lucide-react'
import { useProgress } from '@/hooks/useProgress'

export function ChapterPage() {
  const { chapterId } = useParams()
  const chapter = chapterId ? getChapter(chapterId) : undefined
  const { isVisited } = useProgress()

  if (!chapter) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-12 h-12 mx-auto mb-3 text-[var(--color-text)]/30" />
        <p className="text-lg text-[var(--color-text)]/60">未找到该章节</p>
        <Link to="/" className="text-[var(--color-blueprint)] mt-2 inline-block">
          返回首页
        </Link>
      </div>
    )
  }

  const gradeInfo = GRADE_INFO.find((g) => g.grade === chapter.grade)
  const visitedCount = chapter.sections.filter((s) => isVisited(s.id)).length

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-sm text-[var(--color-text)]/50 mb-2">
          {gradeInfo && (
            <Link
              to={`/grade/${chapter.grade}`}
              className="hover:text-[var(--color-blueprint)] transition-colors"
            >
              {gradeInfo.label}
            </Link>
          )}
          <span>·</span>
          <span>{chapter.semester}学期</span>
        </div>
        <h1 className="text-2xl font-bold">{chapter.title}</h1>
        <p className="text-[var(--color-text)]/60 mt-1">{chapter.description}</p>
        {chapter.sections.length > 0 && (
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full bg-[var(--color-grid)] max-w-xs">
              <div
                className="h-1.5 rounded-full bg-[var(--color-calc-green)] transition-all duration-300"
                style={{ width: `${(visitedCount / chapter.sections.length) * 100}%` }}
              />
            </div>
            <span className="text-xs text-[var(--color-text)]/50">
              {visitedCount}/{chapter.sections.length}
            </span>
          </div>
        )}
      </div>

      {chapter.sections.length === 0 ? (
        <div className="text-center py-12 text-[var(--color-text)]/50">
          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p className="text-lg">内容正在准备中</p>
          <p className="text-sm mt-1">敬请期待</p>
        </div>
      ) : (
        <div className="space-y-3">
          {chapter.sections.map((section) => {
            const visited = isVisited(section.id)
            return (
              <Link
                key={section.id}
                to={`/section/${section.id}`}
                className="block rounded-xl border border-[var(--color-grid)] bg-[var(--color-surface)] p-5 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{section.title}</h3>
                      {visited && (
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[var(--color-calc-green)] text-white">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--color-text)]/60 mt-1">
                      {section.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[var(--color-blueprint)]/10 text-[var(--color-blueprint)]">
                        <BookOpen className="w-3 h-3" />
                        {section.knowledgePoints.length} 个知识点
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[var(--color-calc-green)]/10 text-[var(--color-calc-green)]">
                        <HelpCircle className="w-3 h-3" />
                        {section.practices.length} 道练习
                      </span>
                      {section.visuals.length > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[var(--color-geo-orange)]/10 text-[var(--color-geo-orange)]">
                          <Eye className="w-3 h-3" />
                          可视化演示
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--color-blueprint)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
