interface NumberLineProps {
  min?: number
  max?: number
  marks?: number[]
  highlights?: { value: number; label: string; color: string }[]
}

export function NumberLine({
  min = -10,
  max = 10,
  marks,
  highlights = [],
}: NumberLineProps) {
  const padding = 30
  const svgWidth = 600
  const svgHeight = 80
  const lineY = svgHeight / 2
  const usableWidth = svgWidth - padding * 2

  const toX = (val: number) => padding + ((val - min) / (max - min)) * usableWidth

  const tickPositions = marks ?? Array.from({ length: max - min + 1 }, (_, i) => min + i)

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="w-full max-w-2xl"
      style={{ color: 'var(--color-text)' }}
    >
      <defs>
        <marker id="nl-arrow-right" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
        </marker>
        <marker id="nl-arrow-left" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
          <polygon points="8 0, 0 3, 8 6" fill="currentColor" />
        </marker>
      </defs>

      <line
        x1={padding - 10}
        y1={lineY}
        x2={svgWidth - padding + 10}
        y2={lineY}
        stroke="currentColor"
        strokeWidth={1.5}
        markerEnd="url(#nl-arrow-right)"
        markerStart="url(#nl-arrow-left)"
      />

      {tickPositions.map((val) => {
        const x = toX(val)
        if (x < padding - 5 || x > svgWidth - padding + 5) return null
        return (
          <g key={val}>
            <line x1={x} y1={lineY - 6} x2={x} y2={lineY + 6} stroke="currentColor" strokeWidth={1} />
            <text
              x={x}
              y={lineY + 22}
              textAnchor="middle"
              className="text-xs"
              fill="currentColor"
              style={{ fontSize: '11px' }}
            >
              {val}
            </text>
          </g>
        )
      })}

      {highlights.map((h, i) => {
        const x = toX(h.value)
        return (
          <g key={i}>
            <circle cx={x} cy={lineY} r={6} fill={h.color} stroke="white" strokeWidth={1.5} />
            <text
              x={x}
              y={lineY - 14}
              textAnchor="middle"
              fill={h.color}
              style={{ fontSize: '12px', fontWeight: 'bold' }}
            >
              {h.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
