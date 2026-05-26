import { Link } from 'react-router-dom'
import { GRADE_INFO } from '@/data/texts'
import { BookOpen, ChevronRight } from 'lucide-react'

const gradeColors: Record<number, string> = {
  7: 'from-amber-50 to-orange-50 border-amber-200 hover:border-amber-300',
  8: 'from-emerald-50 to-teal-50 border-emerald-200 hover:border-emerald-300',
  9: 'from-indigo-50 to-blue-50 border-indigo-200 hover:border-indigo-300',
}

const gradeAccent: Record<number, string> = {
  7: 'bg-amber-100 text-amber-800',
  8: 'bg-emerald-100 text-emerald-800',
  9: 'bg-indigo-100 text-indigo-800',
}

export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 mb-4">
          <BookOpen className="w-8 h-8 text-stone-600" />
        </div>
        <h1 className="text-3xl font-bold text-stone-800 mb-3 tracking-wide">
          文言文助学
        </h1>
        <p className="text-stone-500 max-w-lg mx-auto leading-relaxed">
          以图、文、历史、地理，四位一体辅助学习。
          <br />
          覆盖人教版 7-9 年级全部文言文篇目，让理解更深，背诵更易。
        </p>
      </div>

      {/* Grade Cards */}
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
              <span className="text-xs text-stone-400">
                {info.textCount} 篇
              </span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              {info.description}
            </p>
            <div className="flex items-center gap-1 text-sm font-medium text-stone-500 group-hover:text-stone-700 transition-colors">
              进入学习 <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
