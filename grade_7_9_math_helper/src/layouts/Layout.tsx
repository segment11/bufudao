import { useLocation, useParams, Link } from 'react-router-dom'
import { BookOpen, Sun, Moon, ChevronRight, Home } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { GRADE_INFO } from '@/data'
import { getChapter } from '@/data/chapters'
import type { ReactNode } from 'react'

interface Breadcrumb {
  label: string
  to?: string
}

function buildBreadcrumbs(
  pathname: string,
  params: Record<string, string | undefined>,
): Breadcrumb[] {
  const crumbs: Breadcrumb[] = [{ label: '首页', to: '/' }]

  if (pathname.startsWith('/grade/')) {
    const gradeId = Number(params.gradeId)
    const info = GRADE_INFO.find((g) => g.grade === gradeId)
    if (info) {
      crumbs.push({ label: info.label, to: `/grade/${gradeId}` })
    }
  }

  if (pathname.startsWith('/chapter/')) {
    const gradeId = params.gradeId
    if (gradeId) {
      const info = GRADE_INFO.find((g) => g.grade === Number(gradeId))
      if (info) crumbs.push({ label: info.label, to: `/grade/${gradeId}` })
    }
    const chapterId = params.chapterId
    if (chapterId) {
      const ch = getChapter(chapterId)
      if (ch) {
        if (!gradeId) {
          const info = GRADE_INFO.find((g) => g.grade === ch.grade)
          if (info) crumbs.push({ label: info.label, to: `/grade/${ch.grade}` })
        }
        crumbs.push({ label: ch.title })
      }
    }
  }

  if (pathname.startsWith('/section/')) {
    const sectionId = params.sectionId
    if (sectionId) {
      const chapterId = params.chapterId
      if (chapterId) {
        const ch = getChapter(chapterId)
        if (ch) {
          const info = GRADE_INFO.find((g) => g.grade === ch.grade)
          if (info) crumbs.push({ label: info.label, to: `/grade/${ch.grade}` })
          crumbs.push({ label: ch.title, to: `/chapter/${chapterId}` })
        }
      }
      crumbs.push({ label: sectionId })
    }
  }

  return crumbs
}

export function Layout({ children }: { children: ReactNode }) {
  const { dark, toggle } = useTheme()
  const location = useLocation()
  const params = useParams()

  const breadcrumbs = buildBreadcrumbs(location.pathname, params)

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <header className="sticky top-0 z-50 bg-[var(--color-surface)] border-b border-[var(--color-grid)] shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[var(--color-blueprint)]" />
            <span className="text-lg font-bold">数学助手</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-1 text-sm text-[var(--color-text)]/70">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="w-3 h-3" />}
                  {crumb.to ? (
                    <Link
                      to={crumb.to}
                      className="hover:text-[var(--color-blueprint)] transition-colors"
                    >
                      {i === 0 ? (
                        <Home className="w-4 h-4" />
                      ) : (
                        crumb.label
                      )}
                    </Link>
                  ) : (
                    <span className="text-[var(--color-text)]/50">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
            <button
              onClick={toggle}
              className="p-2 rounded-lg hover:bg-[var(--color-grid)]/50 transition-colors"
              aria-label={dark ? '切换浅色模式' : '切换深色模式'}
            >
              {dark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 flex-1 w-full">
        {children}
      </main>

      <footer className="border-t border-[var(--color-grid)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-4 py-4 text-center text-sm text-[var(--color-text)]/50">
          初中数学学习助手 — 七年级到九年级
        </div>
      </footer>
    </div>
  )
}
