import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { units } from '@/data'
import { WordCard } from './WordCard'
import { Search } from 'lucide-react'

const POS_FILTERS = ['全部', 'n.', 'v.', 'adj.', 'adv.', 'pron.', 'prep.', 'conj.', 'interj.', 'num.', 'det.']

export function WordsTab() {
  const { unitId } = useParams<{ unitId: string }>()
  const unit = unitId ? units[unitId] : undefined
  const [search, setSearch] = useState('')
  const [posFilter, setPosFilter] = useState('全部')

  const words = unit?.words ?? []

  const filtered = useMemo(() => {
    return words.filter((w) => {
      const matchesSearch =
        !search ||
        w.word.toLowerCase().includes(search.toLowerCase()) ||
        w.meaning.includes(search)
      const matchesPos = posFilter === '全部' || w.pos === posFilter
      return matchesSearch && matchesPos
    })
  }, [words, search, posFilter])

  const posCounts = useMemo(() => {
    const counts: Record<string, number> = { 全部: words.length }
    words.forEach((w) => {
      counts[w.pos] = (counts[w.pos] || 0) + 1
    })
    return counts
  }, [words])

  if (!unit) {
    return <div className="text-slate-500">未找到单元数据</div>
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索单词或中文释义..."
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex gap-1 flex-wrap">
          {POS_FILTERS.filter((p) => posCounts[p] || p === '全部').map((pos) => (
            <button
              key={pos}
              onClick={() => setPosFilter(pos)}
              className={`px-3 py-1.5 text-xs rounded-full font-medium transition-colors ${
                posFilter === pos
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-slate-100 text-slate-600 border border-transparent hover:bg-slate-200'
              }`}
            >
              {pos} {pos !== '全部' && `(${posCounts[pos] || 0})`}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-slate-500 mb-3">
        共 {filtered.length} 个单词
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          <p>没有找到匹配的单词</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((word, i) => (
            <WordCard key={i} word={word} />
          ))}
        </div>
      )}
    </div>
  )
}
