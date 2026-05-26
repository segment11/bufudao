import { Link } from 'react-router-dom'
import { GRADE_INFO } from '@/data'
import { BookOpen, ChevronRight } from 'lucide-react'

const gradeColors: Record<number, string> = {
  7: 'from-blue-50 to-sky-50 border-blue-200 hover:border-blue-300',
  8: 'from-indigo-50 to-violet-50 border-indigo-200 hover:border-indigo-300',
  9: 'from-violet-50 to-purple-50 border-violet-200 hover:border-violet-300',
}

const gradeAccent: Record<number, string> = {
  7: 'bg-blue-100 text-blue-800',
  8: 'bg-indigo-100 text-indigo-800',
  9: 'bg-violet-100 text-violet-800',
}

export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 mb-4">
          <BookOpen className="w-8 h-8 text-slate-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-3 tracking-wide">
          英语助学
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
          词汇、语法、对话、阅读、练习、写作，六位一体辅助学习。
          <br />
          覆盖人教版 7-9 年级全部单元，让英语学习更高效、更有趣。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GRADE_INFO.map((info) => (
          <Link
            key={info.grade}
            to={`/grade/${info.grade}`}
            className={`bg-gradient-to-br border rounded-xl p-6 transition-all duration-200 hover:shadow-md group ${gradeColors[info.grade]}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${gradeAccent[info.grade]}`}
              >
                {info.label}
              </span>
              <span className="text-xs text-slate-400">
                {info.unitCount} 单元
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {info.description}
            </p>
            <div className="flex items-center gap-1 text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
              进入学习 <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
