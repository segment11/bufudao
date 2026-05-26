import { useParams, Link } from 'react-router-dom'
import { getTextsByGrade, GRADE_INFO } from '@/data/texts'
import { ChevronRight } from 'lucide-react'

export function GradePage() {
  const { gradeId } = useParams<{ gradeId: string }>()
  const grade = Number(gradeId)
  const gradeInfo = GRADE_INFO.find((g) => g.grade === grade)
  const texts = getTextsByGrade(grade)

  if (!gradeInfo) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-stone-500">未找到该年级信息</p>
        <Link to="/" className="text-amber-700 hover:underline mt-2 inline-block">
          返回首页
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Grade header */}
      <div className="mb-10">
        <Link
          to="/"
          className="text-sm text-stone-400 hover:text-stone-600 transition-colors mb-3 inline-block"
        >
          ← 返回首页
        </Link>
        <h1 className="text-2xl font-bold text-stone-800 mb-2">
          {gradeInfo.label} · 文言文篇目
        </h1>
        <p className="text-stone-500 text-sm">{gradeInfo.description}</p>
      </div>

      {/* Text list */}
      {texts.length === 0 ? (
        <div className="text-center py-16 text-stone-400">
          <p>该年级课文内容正在整理中，敬请期待。</p>
        </div>
      ) : (
        <div className="space-y-3">
          {texts.map((text) => (
            <Link
              key={text.id}
              to={`/text/${text.id}`}
              className="flex items-center justify-between bg-white border border-stone-200 rounded-lg px-5 py-4 hover:border-stone-300 hover:shadow-sm transition-all group"
            >
              <div className="min-w-0">
                <h3 className="font-medium text-stone-800 group-hover:text-stone-900 transition-colors truncate">
                  {text.title}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  {text.author} · {text.dynasty} · {text.genre}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-500 transition-colors flex-shrink-0 ml-3" />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
