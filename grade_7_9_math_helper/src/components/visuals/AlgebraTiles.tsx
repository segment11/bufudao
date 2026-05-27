interface AlgebraTilesProps {
  positiveA?: number
  negativeA?: number
  positiveX?: number
  negativeX?: number
  positiveX2?: number
  negativeX2?: number
}

const TILE_UNIT = 40
const X_TILE_W = TILE_UNIT * 2
const X_TILE_H = TILE_UNIT
const X2_TILE = TILE_UNIT * 2
const GAP = 4

const POSITIVE_COLOR = '#3b82f6'
const POSITIVE_BG = '#dbeafe'
const NEGATIVE_COLOR = '#ef4444'
const NEGATIVE_BG = '#fee2e2'

export function AlgebraTiles({
  positiveA = 0,
  negativeA = 0,
  positiveX = 0,
  negativeX = 0,
  positiveX2 = 0,
  negativeX2 = 0,
}: AlgebraTilesProps) {
  const rows: { type: string; count: number; positive: boolean; w: number; h: number; label: string }[] = []

  if (positiveX2 > 0) rows.push({ type: 'x2+', count: positiveX2, positive: true, w: X2_TILE, h: X2_TILE, label: 'x²' })
  if (negativeX2 > 0) rows.push({ type: 'x2-', count: negativeX2, positive: false, w: X2_TILE, h: X2_TILE, label: '-x²' })
  if (positiveX > 0) rows.push({ type: 'x+', count: positiveX, positive: true, w: X_TILE_W, h: X_TILE_H, label: 'x' })
  if (negativeX > 0) rows.push({ type: 'x-', count: negativeX, positive: false, w: X_TILE_W, h: X_TILE_H, label: '-x' })
  if (positiveA > 0) rows.push({ type: 'a+', count: positiveA, positive: true, w: TILE_UNIT, h: TILE_UNIT, label: '1' })
  if (negativeA > 0) rows.push({ type: 'a-', count: negativeA, positive: false, w: TILE_UNIT, h: TILE_UNIT, label: '-1' })

  if (rows.length === 0) return null

  const maxPerRow = 5

  const rowHeight = (r: typeof rows[0]) => r.h + GAP
  const svgHeight = rows.reduce((acc, r) => acc + Math.ceil(r.count / maxPerRow) * rowHeight(r), 0) + 10
  const svgWidth = 400

  let currentY = 10
  const tileElements: React.ReactNode[] = []

  for (const row of rows) {
    const lines = Math.ceil(row.count / maxPerRow)
    const bgColor = row.positive ? POSITIVE_BG : NEGATIVE_BG
    const borderColor = row.positive ? POSITIVE_COLOR : NEGATIVE_COLOR
    const textColor = row.positive ? POSITIVE_COLOR : NEGATIVE_COLOR

    for (let line = 0; line < lines; line++) {
      const countInLine = Math.min(row.count - line * maxPerRow, maxPerRow)
      const lineW = countInLine * (row.w + GAP)
      const startX = (svgWidth - lineW) / 2

      for (let j = 0; j < countInLine; j++) {
        const x = startX + j * (row.w + GAP)
        const y = currentY

        tileElements.push(
          <g key={`${row.type}-${line}-${j}`}>
            <rect
              x={x}
              y={y}
              width={row.w}
              height={row.h}
              fill={bgColor}
              stroke={borderColor}
              strokeWidth={1.5}
              rx={3}
            />
            <text
              x={x + row.w / 2}
              y={y + row.h / 2}
              textAnchor="middle"
              dominantBaseline="central"
              fill={textColor}
              style={{ fontSize: row.type.startsWith('x2') ? '14px' : '12px', fontWeight: 'bold' }}
            >
              {row.label}
            </text>
          </g>
        )
      }
      currentY += rowHeight(row)
    }
  }

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${Math.max(svgHeight, 50)}`}
      className="w-full max-w-lg"
      style={{ color: 'var(--color-text)' }}
    >
      {tileElements}
    </svg>
  )
}
