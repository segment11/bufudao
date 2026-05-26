import type { Unit, UnitSummary } from './types'

export const units: Record<string, Unit> = {}

export function getUnitsByGrade(grade: number): UnitSummary[] {
  return Object.values(units)
    .filter((u) => u.grade === grade)
    .sort((a, b) => {
      if (a.semester !== b.semester) return a.semester === '上' ? -1 : 1
      return a.unitNumber - b.unitNumber
    })
    .map((u) => ({
      id: u.id,
      title: u.title,
      topic: u.topic,
      unitNumber: u.unitNumber,
    }))
}
