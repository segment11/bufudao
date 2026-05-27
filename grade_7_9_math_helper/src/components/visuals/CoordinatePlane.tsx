interface CoordinatePlaneProps {
  xRange?: [number, number]
  yRange?: [number, number]
  points?: { x: number; y: number; label?: string }[]
  lines?: { from: [number, number]; to: [number, number]; label?: string }[]
}

export function CoordinatePlane({
  xRange = [-5, 5],
  yRange = [-5, 5],
  points = [],
  lines = [],
}: CoordinatePlaneProps) {
  const padding = 30
  const size = 500
  const usable = size - padding * 2

  const toSvgX = (x: number) => padding + ((x - xRange[0]) / (xRange[1] - xRange[0])) * usable
  const toSvgY = (y: number) => padding + ((yRange[1] - y) / (yRange[1] - yRange[0])) * usable

  const xTicks = Array.from({ length: xRange[1] - xRange[0] + 1 }, (_, i) => xRange[0] + i)
  const yTicks = Array.from({ length: yRange[1] - yRange[0] + 1 }, (_, i) => yRange[0] + i)

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-lg"
      style={{ color: 'var(--color-text)' }}
    >
      <defs>
        <marker id="cp-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
        </marker>
      </defs>

      {xTicks.map((x) => (
        <line
          key={`gx-${x}`}
          x1={toSvgX(x)}
          y1={padding}
          x2={toSvgX(x)}
          y2={size - padding}
          stroke="var(--color-grid)"
          strokeWidth={0.5}
        />
      ))}
      {yTicks.map((y) => (
        <line
          key={`gy-${y}`}
          x1={padding}
          y1={toSvgY(y)}
          x2={size - padding}
          y2={toSvgY(y)}
          stroke="var(--color-grid)"
          strokeWidth={0.5}
        />
      ))}

      <line
        x1={padding - 10}
        y1={toSvgY(0)}
        x2={size - padding + 10}
        y2={toSvgY(0)}
        stroke="currentColor"
        strokeWidth={1.5}
        markerEnd="url(#cp-arrow)"
      />
      <line
        x1={toSvgX(0)}
        y1={size - padding + 10}
        x2={toSvgX(0)}
        y2={padding - 10}
        stroke="currentColor"
        strokeWidth={1.5}
        markerEnd="url(#cp-arrow)"
      />

      {xTicks.filter((x) => x !== 0).map((x) => (
        <g key={`tx-${x}`}>
          <line x1={toSvgX(x)} y1={toSvgY(0) - 4} x2={toSvgX(x)} y2={toSvgY(0) + 4} stroke="currentColor" strokeWidth={1} />
          <text x={toSvgX(x)} y={toSvgY(0) + 18} textAnchor="middle" fill="currentColor" style={{ fontSize: '11px' }}>
            {x}
          </text>
        </g>
      ))}
      {yTicks.filter((y) => y !== 0).map((y) => (
        <g key={`ty-${y}`}>
          <line x1={toSvgX(0) - 4} y1={toSvgY(y)} x2={toSvgX(0) + 4} y2={toSvgY(y)} stroke="currentColor" strokeWidth={1} />
          <text x={toSvgX(0) - 10} y={toSvgY(y) + 4} textAnchor="end" fill="currentColor" style={{ fontSize: '11px' }}>
            {y}
          </text>
        </g>
      ))}

      <text x={toSvgX(0) + 12} y={toSvgY(0) + 16} fill="currentColor" style={{ fontSize: '12px' }}>O</text>

      {lines.map((line, i) => {
        const x1 = toSvgX(line.from[0])
        const y1 = toSvgY(line.from[1])
        const x2 = toSvgX(line.to[0])
        const y2 = toSvgY(line.to[1])
        return (
          <g key={`line-${i}`}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-blueprint)" strokeWidth={2} />
            {line.label && (
              <text
                x={(x1 + x2) / 2}
                y={(y1 + y2) / 2 - 8}
                textAnchor="middle"
                fill="var(--color-blueprint)"
                style={{ fontSize: '12px', fontWeight: 'bold' }}
              >
                {line.label}
              </text>
            )}
          </g>
        )
      })}

      {points.map((pt, i) => {
        const cx = toSvgX(pt.x)
        const cy = toSvgY(pt.y)
        return (
          <g key={`pt-${i}`}>
            <circle cx={cx} cy={cy} r={4} fill="var(--color-blueprint)" />
            {pt.label && (
              <text x={cx + 8} y={cy - 8} fill="var(--color-blueprint)" style={{ fontSize: '13px', fontWeight: 'bold' }}>
                {pt.label}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
