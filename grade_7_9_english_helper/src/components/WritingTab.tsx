import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { units } from '@/data'
import { EssayCard } from './EssayCard'

const TOPIC_FILTERS = ['全部', 'Self-introduction', 'Family', 'Hobbies', 'School', 'Travel', 'Festival', 'Health', 'Environment', 'Future', 'Social', 'Letter']

export function WritingTab() {
  const { unitId } = useParams<{ unitId: string }>()
  const unit = unitId ? units[unitId] : undefined
  const essays = unit?.essays ?? []
  const [topicFilter, setTopicFilter] = useState('全部')
  const [levelFilter, setLevelFilter] = useState<string>('全部')

  const filtered = useMemo(() => {
    return essays.filter((e) => {
      const matchesTopic = topicFilter === '全部' || e.topic.toLowerCase().includes(topicFilter.toLowerCase())
      const matchesLevel = levelFilter === '全部' || e.level === levelFilter
      return matchesTopic && matchesLevel
    })
  }, [essays, topicFilter, levelFilter])

  if (!unit) {
    return <div className="text-slate-500">未找到单元数据</div>
  }

  if (essays.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p>该单元暂无写作内容</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs text-slate-500 self-center">主题:</span>
          {TOPIC_FILTERS.map((topic) => (
            <button
              key={topic}
              onClick={() => setTopicFilter(topic)}
              className={`px-2.5 py-1 text-xs rounded-full font-medium transition-colors ${
                topicFilter === topic
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-slate-100 text-slate-600 border border-transparent hover:bg-slate-200'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          {['', 'A', 'B', 'C'].map((level) => (
            <button
              key={level || 'all'}
              onClick={() => setLevelFilter(level)}
              className={`px-2.5 py-1 text-xs rounded-full font-medium transition-colors ${
                levelFilter === level
                  ? 'bg-indigo-100 text-indigo-700 border border-indigo-300'
                  : 'bg-slate-100 text-slate-600 border border-transparent hover:bg-slate-200'
              }`}
            >
              {level || '全部'}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-slate-500 mb-3">共 {filtered.length} 篇范文</p>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          <p>没有找到匹配的范文</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((essay, i) => (
            <EssayCard key={i} essay={essay} />
          ))}
        </div>
      )}
    </div>
  )
}
