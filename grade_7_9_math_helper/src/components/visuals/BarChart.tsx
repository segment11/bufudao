interface BarChartProps {
  data: { label: string; value: number; color?: string }[]
  title?: string
  showValues?: boolean
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

export function BarChart({ data, title, showValues = true }: BarChartProps) {
  if (data.length === 0) return null

  const padding = { top: 40, right: 30, bottom: 50, left: 50 }
  const svgWidth = 500
  const svgHeight = 300
  const chartW = svgWidth - padding.left - padding.right
  const chartH = svgHeight - padding.top - padding.bottom

  const maxVal = Math.max(...data.map((d) => d.value), 1)
  const niceMax = Math.ceil(maxVal / 5) * 5
  const gridLines = 5

  const barWidth = Math.min(chartW / data.length * 0.6, 50)
  const barGap = (chartW - barWidth * data.length) / (data.length + 1)

  return (
    <div className="w-full">
      {title && (
        <h4 className="text-center text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
          {title}
        </h4>
      )}
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full max-w-2xl"
        style={{ color: 'var(--color-text)' }}
      >
        {Array.from({ length: gridLines + 1 }, (_, i) => {
          const y = padding.top + (chartH / gridLines) * i
          const val = niceMax - (niceMax / gridLines) * i
          return (
            <g key={`grid-${i}`}>
              <line
                x1={padding.left}
                y1={y}
                x2={svgWidth - padding.right}
                y2={y}
                stroke="var(--color-grid)"
                strokeWidth={0.5}
              />
              <text
                x={padding.left - 8}
                y={y + 4}
                textAnchor="end"
                fill="currentColor"
                opacity={0.5}
                style={{ fontSize: '10px' }}
              >
                {val}
              </text>
            </g>
          )
        })}

        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={svgHeight - padding.bottom}
          stroke="currentColor"
          strokeWidth={1}
          opacity={0.3}
        />
        <line
          x1={padding.left}
          y1={svgHeight - padding.bottom}
          x2={svgWidth - padding.right}
          y2={svgHeight - padding.bottom}
          stroke="currentColor"
          strokeWidth={1}
          opacity={0.3}
        />

        {data.map((d, i) => {
          const color = d.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]
          const barH = (d.value / niceMax) * chartH
          const x = padding.left + barGap + i * (barWidth + barGap)
          const y = svgHeight - padding.bottom - barH

          return (
            <g key={`bar-${i}`}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barH}
                fill={color}
                rx={3}
                className="transition-opacity duration-200 hover:opacity-80"
              />
              {showValues && (
                <text
                  x={x + barWidth / 2}
                  y={y - 6}
                  textAnchor="middle"
                  fill={color}
                  style={{ fontSize: '11px', fontWeight: 'bold' }}
                >
                  {d.value}
                </text>
              )}
              <text
                x={x + barWidth / 2}
                y={svgHeight - padding.bottom + 16}
                textAnchor="middle"
                fill="currentColor"
                opacity={0.7}
                style={{ fontSize: '11px' }}
              >
                {d.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
