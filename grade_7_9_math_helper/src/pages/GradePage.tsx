import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getChaptersByGrade } from '@/data/chapters'
import { GRADE_INFO } from '@/data'
import { ArrowRight, Clock } from 'lucide-react'
import type { Semester } from '@/data/types'

export function GradePage() {
  const { gradeId } = useParams()
  const grade = Number(gradeId)
  const info = GRADE_INFO.find((g) => g.grade === grade)
  const chapters = getChaptersByGrade(grade)

  const [semester, setSemester] = useState<Semester>('上')

  if (!info) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-[var(--color-text)]/60">无效的年级</p>
        <Link to="/" className="text-[var(--color-blueprint)] mt-2 inline-block">
          返回首页
        </Link>
      </div>
    )
  }

  const filtered = chapters.filter((ch) => ch.semester === semester)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{info.label}</h1>
        <p className="text-[var(--color-text)]/60 mt-1">{info.description}</p>
      </div>

      <div className="flex gap-2">
        {(['上', '下'] as Semester[]).map((s) => (
          <button
            key={s}
            onClick={() => setSemester(s)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              semester === s
                ? 'bg-[var(--color-blueprint)] text-white'
                : 'bg-[var(--color-grid)]/50 hover:bg-[var(--color-grid)]'
            }`}
          >
            {s}学期
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-[var(--color-text)]/50">
          <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p className="text-lg">内容正在准备中</p>
          <p className="text-sm mt-1">敬请期待</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((ch) => (
            <Link
              key={ch.id}
              to={`/chapter/${ch.id}`}
              className="block rounded-xl border border-[var(--color-grid)] bg-[var(--color-surface)] p-5 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-blueprint)]/10 flex items-center justify-center text-lg">
                  {ch.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{ch.title}</h3>
                  <p className="text-sm text-[var(--color-text)]/60 mt-1 line-clamp-2">
                    {ch.description}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-[var(--color-text)]/50">
                      {ch.sectionCount} 个小节
                    </span>
                    <ArrowRight className="w-4 h-4 text-[var(--color-blueprint)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
