import { useState, useMemo } from 'react'
import { irregularVerbs } from '@/data/extras'
import { Search } from 'lucide-react'

export function IrregularVerbs() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return irregularVerbs
    return irregularVerbs.filter(
      (v) =>
        v.base.toLowerCase().includes(q) ||
        v.past.toLowerCase().includes(q) ||
        v.participle.toLowerCase().includes(q) ||
        v.meaning.includes(q)
    )
  }, [search])

  return (
    <div>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索动词原形、过去式或中文意思..."
          className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
        />
      </div>

      <div className="text-sm text-slate-500 dark:text-slate-400 mb-3">
        共 {filtered.length} 个不规则动词
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          <p>没有找到匹配的动词</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="text-left py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-100 rounded-tl-lg">原形</th>
                <th className="text-left py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-100">过去式</th>
                <th className="text-left py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-100">过去分词</th>
                <th className="text-left py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-100 rounded-tr-lg">中文意思</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((v, i) => (
                <tr
                  key={v.base}
                  className={`border-b border-slate-100 dark:border-slate-700 ${
                    i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'
                  }`}
                >
                  <td className="py-2.5 px-3 font-medium text-slate-800 dark:text-slate-100">{v.base}</td>
                  <td className="py-2.5 px-3 text-slate-600 dark:text-slate-300">{v.past}</td>
                  <td className="py-2.5 px-3 text-slate-600 dark:text-slate-300">{v.participle}</td>
                  <td className="py-2.5 px-3 text-slate-500 dark:text-slate-400">{v.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
