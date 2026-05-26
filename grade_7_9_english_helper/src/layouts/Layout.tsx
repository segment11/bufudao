import { Link, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { BookOpen, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-surface)] text-[var(--color-text)] transition-colors">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold tracking-wide hidden sm:inline">英语助学</span>
          </Link>

          <div className="flex items-center gap-2">
            {!isHome && (
              <nav className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mr-1">
                <Link to="/" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors px-2 py-1 rounded">
                  首页
                </Link>
                <span className="text-slate-300 dark:text-slate-600">/</span>
                <span className="text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
                  {location.pathname.includes('/unit/')
                    ? '单元详情'
                    : '年级选择'}
                </span>
              </nav>
            )}

            <button
              onClick={toggle}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors rounded-lg"
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

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 dark:border-slate-700 py-6 text-center text-xs text-slate-400 dark:text-slate-500">
        <p>人教版 7-9 年级 · 英语学习助手</p>
      </footer>
    </div>
  )
}
