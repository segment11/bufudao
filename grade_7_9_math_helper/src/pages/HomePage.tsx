import { Link } from 'react-router-dom'
import { GRADE_INFO } from '@/data'
import { BookOpen, ArrowRight } from 'lucide-react'

const gradeColors: Record<number, { bg: string; border: string; text: string; hover: string }> = {
  7: {
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-800',
    text: 'text-amber-700 dark:text-amber-300',
    hover: 'hover:border-amber-400 dark:hover:border-amber-600',
  },
  8: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-800',
    text: 'text-emerald-700 dark:text-emerald-300',
    hover: 'hover:border-emerald-400 dark:hover:border-emerald-600',
  },
  9: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    border: 'border-indigo-200 dark:border-indigo-800',
    text: 'text-indigo-700 dark:text-indigo-300',
    hover: 'hover:border-indigo-400 dark:hover:border-indigo-600',
  },
}

export function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">初中数学学习助手</h1>
        <p className="text-[var(--color-text)]/60">
          选择年级，开始你的数学之旅
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GRADE_INFO.map((info) => {
          const colors = gradeColors[info.grade]
          return (
            <Link
              key={info.grade}
              to={`/grade/${info.grade}`}
              className={`block rounded-xl border-2 p-6 transition-all ${colors.bg} ${colors.border} ${colors.hover} hover:shadow-lg group`}
            >
              <div className="space-y-4">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${colors.text} bg-white/50 dark:bg-black/20`}
                >
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{info.label}</h2>
                  <p className="mt-1 text-sm text-[var(--color-text)]/60">
                    {info.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${colors.text}`}>
                    {info.chapterCount} 个章节
                  </span>
                  <ArrowRight
                    className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
