interface PieChartProps {
  data: { label: string; value: number; color?: string }[]
  title?: string
}

const DEFAULT_COLORS = [
  '#3b82f6',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
  '#ec4899',
  '#14b8a6',
  '#f97316',
]

export function PieChart({ data, title }: PieChartProps) {
  if (data.length === 0) return null

  const total = data.reduce((sum, d) => sum + d.value, 0)
  if (total === 0) return null

  const cx = 150
  const cy = 150
  const r = 120

  let currentAngle = -Math.PI / 2

  const slices = data.map((d, i) => {
    const angle = (d.value / total) * Math.PI * 2
    const startAngle = currentAngle
    const endAngle = currentAngle + angle
    currentAngle = endAngle

    const x1 = cx + r * Math.cos(startAngle)
    const y1 = cy + r * Math.sin(startAngle)
    const x2 = cx + r * Math.cos(endAngle)
    const y2 = cy + r * Math.sin(endAngle)

    const largeArc = angle > Math.PI ? 1 : 0
    const midAngle = (startAngle + endAngle) / 2
    const labelR = r * 0.65
    const labelX = cx + labelR * Math.cos(midAngle)
    const labelY = cy + labelR * Math.sin(midAngle)

    const percentage = Math.round((d.value / total) * 100)

    const isFullCircle = data.length === 1

    const pathD = isFullCircle
      ? `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r} Z`
      : `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`

    return {
      ...d,
      color: d.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
      pathD,
      labelX,
      labelY,
      percentage,
    }
  })

  const svgHeight = 320 + Math.ceil(data.length / 3) * 24

  return (
    <div className="w-full">
      {title && (
        <h4 className="text-center text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
          {title}
        </h4>
      )}
      <svg
        viewBox={`0 0 300 ${svgHeight}`}
        className="w-full max-w-sm mx-auto"
      >
        {slices.map((s, i) => (
          <g key={`slice-${i}`}>
            <path
              d={s.pathD}
              fill={s.color}
              stroke="var(--color-surface)"
              strokeWidth={2}
              className="transition-opacity duration-200 hover:opacity-80"
              style={{ cursor: 'pointer' }}
            />
            {s.percentage > 5 && (
              <text
                x={s.labelX}
                y={s.labelY}
                textAnchor="middle"
                dominantBaseline="central"
                fill="white"
                style={{ fontSize: '12px', fontWeight: 'bold' }}
              >
                {s.percentage}%
              </text>
            )}
          </g>
        ))}
      </svg>

      <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center mt-3">
        {slices.map((s, i) => (
          <div key={`legend-${i}`} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text)' }}>
            <span
              className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: s.color }}
            />
            <span className="opacity-70">{s.label}</span>
            <span className="font-medium">({s.percentage}%)</span>
          </div>
        ))}
      </div>
    </div>
  )
}
