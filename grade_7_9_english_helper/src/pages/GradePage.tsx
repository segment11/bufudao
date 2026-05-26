import { useParams, Link } from 'react-router-dom'
import { getUnitsByGrade, GRADE_INFO } from '@/data'
import { ChevronRight } from 'lucide-react'
import type { UnitSummary } from '@/data'

export function GradePage() {
  const { gradeId } = useParams<{ gradeId: string }>()
  const grade = Number(gradeId)
  const gradeInfo = GRADE_INFO.find((g) => g.grade === grade)
  const unitList = getUnitsByGrade(grade)

  if (!gradeInfo) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-500">未找到该年级信息</p>
        <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
          返回首页
        </Link>
      </div>
    )
  }

  const groupBySemester = (list: UnitSummary[]): { label: string; units: UnitSummary[] }[] => {
    if (list.length === 0) return []
    const mid = Math.ceil(list.length / 2)
    return [
      { label: '上册', units: list.slice(0, mid) },
      { label: '下册', units: list.slice(mid) },
    ]
  }

  const semesterGroups = groupBySemester(unitList)

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <Link
          to="/"
          className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-3 inline-block"
        >
          ← 返回首页
        </Link>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          {gradeInfo.label} · 英语单元
        </h1>
        <p className="text-slate-500 text-sm">{gradeInfo.description}</p>
      </div>

      {unitList.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p>该年级单元内容正在整理中，敬请期待。</p>
        </div>
      ) : (
        <div className="space-y-8">
          {semesterGroups.map((group) => (
            group.units.length > 0 && (
              <div key={group.label}>
                <h2 className="text-lg font-semibold text-slate-700 mb-3">
                  {group.label}
                </h2>
                <div className="space-y-3">
                  {group.units.map((unit) => (
                    <Link
                      key={unit.id}
                      to={`/unit/${unit.id}`}
                      className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-5 py-4 hover:border-blue-300 hover:shadow-sm transition-all group"
                    >
                      <div className="min-w-0">
                        <h3 className="font-medium text-slate-800 group-hover:text-slate-900 transition-colors truncate">
                          Unit {unit.unitNumber}: {unit.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          {unit.topic}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-3" />
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  )
}
