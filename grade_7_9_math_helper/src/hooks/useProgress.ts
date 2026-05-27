import { useCallback, useState } from 'react'

const STORAGE_KEY = 'math-helper-progress'

interface ProgressData {
  visitedSections: string[]
  practiceScores: Record<string, { total: number; correct: number; timestamp: number }>
}

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch { /* ignore */ }
  return { visitedSections: [], practiceScores: {} }
}

function saveProgress(data: ProgressData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch { /* ignore */ }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(loadProgress)

  const markVisited = useCallback((sectionId: string) => {
    setProgress((prev) => {
      if (prev.visitedSections.includes(sectionId)) return prev
      const next = { ...prev, visitedSections: [...prev.visitedSections, sectionId] }
      saveProgress(next)
      return next
    })
  }, [])

  const isVisited = useCallback(
    (sectionId: string) => progress.visitedSections.includes(sectionId),
    [progress.visitedSections],
  )

  const getVisitedCount = useCallback(
    (sectionIds: string[]) => sectionIds.filter((id) => progress.visitedSections.includes(id)).length,
    [progress.visitedSections],
  )

  const savePracticeScore = useCallback((sectionId: string, total: number, correct: number) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        practiceScores: {
          ...prev.practiceScores,
          [sectionId]: { total, correct, timestamp: Date.now() },
        },
      }
      saveProgress(next)
      return next
    })
  }, [])

  const getPracticeScore = useCallback(
    (sectionId: string) => progress.practiceScores[sectionId] ?? null,
    [progress.practiceScores],
  )

  return { markVisited, isVisited, getVisitedCount, savePracticeScore, getPracticeScore }
}
