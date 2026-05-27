interface GeometryFigureProps {
  shape?: 'triangle' | 'rectangle' | 'circle' | 'polygon'
  vertices?: { x: number; y: number; label: string }[]
  sides?: { from: number; to: number; label?: string }[]
  angles?: { vertex: number; degree: number }[]
  dashedLines?: { from: number; to: number }[]
}

export function GeometryFigure({
  vertices = [],
  sides = [],
  angles = [],
  dashedLines = [],
}: GeometryFigureProps) {
  const padding = 40
  const size = 400

  const allX = vertices.map((v) => v.x)
  const allY = vertices.map((v) => v.y)
  const minX = Math.min(...allX, 0)
  const maxX = Math.max(...allX, 10)
  const minY = Math.min(...allY, 0)
  const maxY = Math.max(...allY, 10)

  const rangeX = maxX - minX || 1
  const rangeY = maxY - minY || 1
  const usable = size - padding * 2

  const toSvgX = (x: number) => padding + ((x - minX) / rangeX) * usable
  const toSvgY = (y: number) => size - padding - ((y - minY) / rangeY) * usable

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-md"
      style={{ color: 'var(--color-text)' }}
    >
      {sides.map((side, i) => {
        const v1 = vertices[side.from]
        const v2 = vertices[side.to]
        if (!v1 || !v2) return null
        const x1 = toSvgX(v1.x)
        const y1 = toSvgY(v1.y)
        const x2 = toSvgX(v2.x)
        const y2 = toSvgY(v2.y)
        return (
          <g key={`side-${i}`}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={2} />
            {side.label && (
              <text
                x={(x1 + x2) / 2}
                y={(y1 + y2) / 2 - 8}
                textAnchor="middle"
                fill="var(--color-geo-orange)"
                style={{ fontSize: '12px', fontWeight: 'bold' }}
              >
                {side.label}
              </text>
            )}
          </g>
        )
      })}

      {dashedLines.map((dl, i) => {
        const v1 = vertices[dl.from]
        const v2 = vertices[dl.to]
        if (!v1 || !v2) return null
        return (
          <line
            key={`dash-${i}`}
            x1={toSvgX(v1.x)}
            y1={toSvgY(v1.y)}
            x2={toSvgX(v2.x)}
            y2={toSvgY(v2.y)}
            stroke="currentColor"
            strokeWidth={1}
            strokeDasharray="6 3"
            opacity={0.5}
          />
        )
      })}

      {angles.map((angle, i) => {
        const v = vertices[angle.vertex]
        if (!v) return null

        const adjacentSides = sides.filter(
          (s) => s.from === angle.vertex || s.to === angle.vertex,
        )
        if (adjacentSides.length < 2) return null

        const s1 = adjacentSides[0]
        const s2 = adjacentSides[1]
        const a1 = vertices[s1.from === angle.vertex ? s1.to : s1.from]
        const a2 = vertices[s2.from === angle.vertex ? s2.to : s2.from]
        if (!a1 || !a2) return null

        const cx = toSvgX(v.x)
        const cy = toSvgY(v.y)
        const angle1 = Math.atan2(-(toSvgY(a1.y) - cy), toSvgX(a1.x) - cx)
        const angle2 = Math.atan2(-(toSvgY(a2.y) - cy), toSvgX(a2.x) - cx)

        const startAngle = Math.min(angle1, angle2)
        const endAngle = Math.max(angle1, angle2)
        const arcRadius = 20

        const startX = cx + arcRadius * Math.cos(startAngle)
        const startY = cy + arcRadius * Math.sin(startAngle)
        const endX = cx + arcRadius * Math.cos(endAngle)
        const endY = cy + arcRadius * Math.sin(endAngle)

        const largeArc = endAngle - startAngle > Math.PI ? 1 : 0
        const midAngle = (startAngle + endAngle) / 2
        const labelR = arcRadius + 14
        const labelX = cx + labelR * Math.cos(midAngle)
        const labelY = cy + labelR * Math.sin(midAngle)

        return (
          <g key={`angle-${i}`}>
            <path
              d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArc} 0 ${endX} ${endY}`}
              fill="none"
              stroke="var(--color-algebra-purple)"
              strokeWidth={1.5}
            />
            <text
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="central"
              fill="var(--color-algebra-purple)"
              style={{ fontSize: '11px' }}
            >
              {angle.degree}°
            </text>
          </g>
        )
      })}

      {vertices.map((v, i) => {
        const cx = toSvgX(v.x)
        const cy = toSvgY(v.y)

        const dx1 = i > 0 ? toSvgX(vertices[i - 1].x) - cx : cx + 1
        const dy1 = i > 0 ? toSvgY(vertices[i - 1].y) - cy : cy
        const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1) || 1
        const labelOffset = 16
        const offsetX = (dx1 / len1) * labelOffset
        const offsetY = (dy1 / len1) * labelOffset

        return (
          <g key={`v-${i}`}>
            <circle cx={cx} cy={cy} r={3} fill="currentColor" />
            <text
              x={cx + offsetX}
              y={cy + offsetY}
              textAnchor="middle"
              dominantBaseline="central"
              fill="currentColor"
              style={{ fontSize: '14px', fontWeight: 'bold' }}
            >
              {v.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
