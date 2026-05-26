import { Link, useParams, useSearchParams } from 'react-router-dom'
import { units } from '@/data'
import { ChevronRight } from 'lucide-react'
import { TabBar } from '@/components/TabBar'
import { WordsTab } from '@/components/WordsTab'
import { GrammarTab } from '@/components/GrammarTab'
import { SceneTab } from '@/components/SceneTab'
import { ReadingTab } from '@/components/ReadingTab'
import { PracticeTab } from '@/components/PracticeTab'
import { WritingTab } from '@/components/WritingTab'

type TabId = 'words' | 'grammar' | 'scene' | 'reading' | 'practice' | 'writing'

const TABS: { id: TabId; label: string }[] = [
  { id: 'words', label: 'Words' },
  { id: 'grammar', label: 'Grammar' },
  { id: 'scene', label: 'Scene' },
  { id: 'reading', label: 'Reading' },
  { id: 'practice', label: 'Practice' },
  { id: 'writing', label: 'Writing' },
]

function TabContent({ tabId }: { tabId: TabId }) {
  switch (tabId) {
    case 'words': return <WordsTab />
    case 'grammar': return <GrammarTab />
    case 'scene': return <SceneTab />
    case 'reading': return <ReadingTab />
    case 'practice': return <PracticeTab />
    case 'writing': return <WritingTab />
  }
}

export function UnitPage() {
  const { unitId } = useParams<{ unitId: string }>()
  const [searchParams] = useSearchParams()
  const activeTab = (searchParams.get('tab') as TabId) || 'words'
  const unit = unitId ? units[unitId] : undefined

  if (!unit) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-500">未找到该单元</p>
        <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
          返回首页
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-1 text-sm text-slate-400 mb-3">
          <Link to="/" className="hover:text-slate-600 transition-colors">
            首页
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            to={`/grade/${unit.grade}`}
            className="hover:text-slate-600 transition-colors"
          >
            {unit.grade}年级
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-600">Unit {unit.unitNumber}</span>
        </nav>

        <div className="bg-white border border-slate-200 rounded-xl px-6 py-5 shadow-sm">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Unit {unit.unitNumber}: {unit.title}
              </h1>
              <p className="text-slate-500 text-sm mt-1">{unit.topic}</p>
            </div>
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium whitespace-nowrap">
              {unit.semester === '上' ? '上册' : '下册'}
            </span>
          </div>

          {unit.objectives.length > 0 && (
            <ul className="mt-4 space-y-1">
              {unit.objectives.map((obj, i) => (
                <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  {obj}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <TabBar tabs={TABS} basePath={`/unit/${unitId}`} />

      <div className="mt-4">
        <TabContent tabId={activeTab} />
      </div>
    </div>
  )
}
