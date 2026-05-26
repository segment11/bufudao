import type { Unit, UnitSummary } from './types'

import { g7su1 } from './units/g7su1'
import { g7su2 } from './units/g7su2'
import { g7su3 } from './units/g7su3'
import { g7u1 } from './units/g7u1'
import { g7u2 } from './units/g7u2'
import { g7u3 } from './units/g7u3'
import { g7u4 } from './units/g7u4'
import { g7u5 } from './units/g7u5'
import { g7u6 } from './units/g7u6'
import { g7u7 } from './units/g7u7'
import { g8u1 } from './units/g8u1'
import { g8u2 } from './units/g8u2'
import { g8u3 } from './units/g8u3'
import { g8u4 } from './units/g8u4'
import { g8u5 } from './units/g8u5'
import { g8u6 } from './units/g8u6'
import { g8u7 } from './units/g8u7'
import { g8u8 } from './units/g8u8'
import { g8u9 } from './units/g8u9'
import { g8u10 } from './units/g8u10'
import { g8lu1 } from './units/g8lu1'
import { g8lu2 } from './units/g8lu2'
import { g8lu3 } from './units/g8lu3'
import { g8lu4 } from './units/g8lu4'
import { g8lu5 } from './units/g8lu5'
import { g8lu6 } from './units/g8lu6'
import { g8lu7 } from './units/g8lu7'
import { g8lu8 } from './units/g8lu8'
import { g8lu9 } from './units/g8lu9'
import { g8lu10 } from './units/g8lu10'

export const units: Record<string, Unit> = {
  g7su1,
  g7su2,
  g7su3,
  g7u1,
  g7u2,
  g7u3,
  g7u4,
  g7u5,
  g7u6,
  g7u7,
  g8u1,
  g8u2,
  g8u3,
  g8u4,
  g8u5,
  g8u6,
  g8u7,
  g8u8,
  g8u9,
  g8u10,
  g8lu1,
  g8lu2,
  g8lu3,
  g8lu4,
  g8lu5,
  g8lu6,
  g8lu7,
  g8lu8,
  g8lu9,
  g8lu10,
}

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
