import { Link, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { BookOpen, Sun, Moon, ChevronLeft } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { SearchBar } from '@/components/SearchBar'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-200 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur border-b border-stone-200 dark:border-stone-700">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-stone-800 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold tracking-wide hidden sm:inline">文言文助学</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Back to root */}
            <a
              href="/"
              className="flex items-center gap-1 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors px-2 py-1 rounded"
              aria-label="返回不辅导首页"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">不辅导</span>
            </a>

            {/* Breadcrumb */}
            {!isHome && (
              <nav className="flex items-center gap-1 text-sm text-stone-500 dark:text-stone-400 mr-1">
                <Link to="/" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors px-2 py-1 rounded">
                  首页
                </Link>
                <span className="text-stone-300 dark:text-stone-600">/</span>
                <span className="text-stone-700 dark:text-stone-300 px-2 py-1 rounded">
                  {location.pathname.includes('/grade/')
                    ? '年级选篇'
                    : '篇目详情'}
                </span>
              </nav>
            )}

            {/* Search */}
            <SearchBar />

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="p-2 text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors rounded-lg"
              aria-label={theme === 'light' ? '切换暗色模式' : '切换亮色模式'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-stone-700 py-6 text-center text-xs text-stone-400 dark:text-stone-500">
        <p>人教版 7-9 年级 · 文言文学习助手</p>
      </footer>
    </div>
  )
}
