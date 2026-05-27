import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { units } from '@/data'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<Array<{
    type: 'unit' | 'word'
    title: string
    subtitle: string
    path: string
  }>>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (query.length < 1) {
      setResults([])
      return
    }

    const q = query.toLowerCase()
    const found: typeof results = []

    Object.values(units).forEach((unit) => {
      const titleMatch = unit.title.toLowerCase().includes(q)
      const topicMatch = unit.topic.toLowerCase().includes(q)
      const wordMatch = unit.words.some(
        (w) =>
          w.word.toLowerCase().includes(q) ||
          w.meaning.includes(q)
      )

      if (titleMatch || topicMatch || wordMatch) {
          found.push({
          type: 'unit',
          title: `Unit ${unit.unitNumber}: ${unit.title}`,
          subtitle: `${unit.grade}年级 · ${unit.topic}`,
          path: `/unit/${unit.id}`,
        })
      }
    })

    setResults(found.slice(0, 8))
  }, [query])

  const handleSelect = (path: string) => {
    navigate(path)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
          placeholder="搜索单元、单词..."
          className="w-40 sm:w-56 pl-8 pr-7 py-1.5 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:border-blue-400 focus:outline-none transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              inputRef.current?.focus()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute right-0 mt-1 w-72 bg-white border border-slate-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {results.map((result, i) => (
            <button
              key={i}
              onClick={() => handleSelect(result.path)}
              className="w-full flex items-start gap-2 px-4 py-2.5 text-left hover:bg-slate-50 transition-colors"
            >
              <span className={`mt-0.5 text-xs px-1.5 py-0.5 rounded font-medium flex-shrink-0 ${
                result.type === 'unit'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-emerald-100 text-emerald-700'
              }`}>
                {result.type === 'unit' ? '单元' : '单词'}
              </span>
              <div className="min-w-0">
                <p className="text-sm text-slate-800 truncate">{result.title}</p>
                <p className="text-xs text-slate-400 truncate">{result.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.length >= 1 && results.length === 0 && (
        <div className="absolute right-0 mt-1 w-72 bg-white border border-slate-200 rounded-lg shadow-lg z-50 px-4 py-3 text-sm text-slate-400">
          未找到 "{query}"
        </div>
      )}
    </div>
  )
}
