import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { texts } from '@/data/texts'

interface SearchResult {
  id: string
  title: string
  author: string
  dynasty: string
}

export function SearchBar() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    const matched = Object.values(texts)
      .filter(
        (t) =>
          t.title.includes(q) ||
          t.author.includes(q) ||
          t.genre.includes(q) ||
          t.historicalContext.dynasty.includes(q),
      )
      .map((t) => ({
        id: t.id,
        title: t.title,
        author: t.author,
        dynasty: t.historicalContext.dynasty,
      }))
    setResults(matched)
  }, [query])

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  const handleSelect = () => {
    setOpen(false)
    setQuery('')
  }

  return (
    <div ref={containerRef} className="relative">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="p-2 text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200 transition-colors rounded-lg"
          aria-label="搜索"
        >
          <Search className="w-4 h-4" />
        </button>
      ) : (
        <div className="absolute right-0 top-0 w-72">
          <div className="flex items-center bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg shadow-lg overflow-hidden">
            <Search className="w-4 h-4 text-stone-400 ml-3 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索篇目、作者..."
              className="flex-1 px-2 py-2 text-sm bg-transparent text-stone-800 dark:text-stone-200 placeholder-stone-400 dark:placeholder-stone-500 outline-none"
            />
            <button
              onClick={() => {
                setOpen(false)
                setQuery('')
              }}
              className="p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results dropdown */}
          {query.trim() && (
            <div className="absolute top-full mt-1 w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg shadow-lg max-h-64 overflow-y-auto">
              {results.length === 0 ? (
                <p className="px-4 py-3 text-sm text-stone-400 dark:text-stone-500">
                  未找到匹配篇目
                </p>
              ) : (
                results.map((r) => (
                  <Link
                    key={r.id}
                    to={`/text/${r.id}`}
                    onClick={handleSelect}
                    className="block px-4 py-2.5 hover:bg-stone-50 dark:hover:bg-stone-700/50 transition-colors"
                  >
                    <span className="text-sm font-medium text-stone-800 dark:text-stone-200">
                      {r.title}
                    </span>
                    <span className="text-xs text-stone-400 dark:text-stone-500 ml-2">
                      {r.author} · {r.dynasty}
                    </span>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
