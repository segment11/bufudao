import { Link, useSearchParams } from 'react-router-dom'
import type { ReactNode } from 'react'

interface Tab {
  id: string
  label: string
}

interface TabBarProps {
  tabs: Tab[]
  basePath: string
  children?: ReactNode
}

export function TabBar({ tabs, basePath, children }: TabBarProps) {
  const [searchParams] = useSearchParams()
  const activeTab = searchParams.get('tab') || tabs[0]?.id || 'words'

  return (
    <div>
      <div className="border-b border-slate-200 mb-6">
        <nav className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            const search = new URLSearchParams(searchParams)
            search.set('tab', tab.id)
            return (
              <Link
                key={tab.id}
                to={`${basePath}?${search.toString()}`}
                className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  isActive
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </Link>
            )
          })}
        </nav>
      </div>

      <div>{children}</div>
    </div>
  )
}
