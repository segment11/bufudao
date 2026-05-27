interface CirclePartsProps {
  radius?: number
  showRadius?: boolean
  showDiameter?: boolean
  showChord?: boolean
  showArc?: boolean
  showTangent?: boolean
  showCenter?: boolean
}

export function CircleParts({
  radius = 80,
  showRadius = true,
  showDiameter = false,
  showChord = false,
  showArc = false,
  showTangent = false,
  showCenter = true,
}: CirclePartsProps) {
  const svgSize = 340
  const cx = svgSize / 2
  const cy = svgSize / 2
  const r = Math.min(radius, 120)

  return (
    <svg
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      className="w-full max-w-sm"
      style={{ color: 'var(--color-text)' }}
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      />

      {showArc && (
        <g>
          <path
            d={`M ${cx + r * Math.cos(-Math.PI / 6)} ${cy + r * Math.sin(-Math.PI / 6)} A ${r} ${r} 0 0 1 ${cx + r * Math.cos(-Math.PI * 5 / 6)} ${cy + r * Math.sin(-Math.PI * 5 / 6)}`}
            fill="none"
            stroke="var(--color-geo-orange)"
            strokeWidth={4}
            opacity={0.7}
          />
          <text
            x={cx - r * 0.2}
            y={cy - r - 8}
            textAnchor="middle"
            fill="var(--color-geo-orange)"
            style={{ fontSize: '12px', fontWeight: 'bold' }}
          >
            弧
          </text>
        </g>
      )}

      {showDiameter && (
        <g>
          <line
            x1={cx - r}
            y1={cy}
            x2={cx + r}
            y2={cy}
            stroke="var(--color-blueprint)"
            strokeWidth={2}
            strokeDasharray="6 3"
          />
          <text
            x={cx}
            y={cy + 16}
            textAnchor="middle"
            fill="var(--color-blueprint)"
            style={{ fontSize: '11px', fontWeight: 'bold' }}
          >
            直径 d
          </text>
        </g>
      )}

      {showRadius && (
        <g>
          <line
            x1={cx}
            y1={cy}
            x2={cx + r * Math.cos(-Math.PI / 4)}
            y2={cy + r * Math.sin(-Math.PI / 4)}
            stroke="var(--color-calc-green)"
            strokeWidth={2}
          />
          <text
            x={cx + r * 0.4 * Math.cos(-Math.PI / 4) - 12}
            y={cy + r * 0.4 * Math.sin(-Math.PI / 4) - 6}
            textAnchor="middle"
            fill="var(--color-calc-green)"
            style={{ fontSize: '11px', fontWeight: 'bold' }}
          >
            半径 r
          </text>
        </g>
      )}

      {showChord && (
        <g>
          <line
            x1={cx + r * 0.6 * Math.cos(Math.PI / 4)}
            y1={cy - r * 0.6 * Math.sin(Math.PI / 4)}
            x2={cx + r * 0.6 * Math.cos(Math.PI / 4) + r * 1.0}
            y2={cy + r * 0.4}
            stroke="var(--color-algebra-purple)"
            strokeWidth={2}
          />
          <text
            x={cx + r * 0.6 * Math.cos(Math.PI / 4) + r * 0.5 + 8}
            y={cy + 4}
            textAnchor="middle"
            fill="var(--color-algebra-purple)"
            style={{ fontSize: '11px', fontWeight: 'bold' }}
          >
            弦
          </text>
        </g>
      )}

      {showTangent && (
        <g>
          <line
            x1={cx + r - 40}
            y1={cy - r + 5}
            x2={cx + r + 40}
            y2={cy - r - 15}
            stroke="var(--color-geo-orange)"
            strokeWidth={2}
            strokeDasharray="6 3"
          />
          <circle
            cx={cx + r}
            cy={cy - r * Math.sin(0)}
            r={0}
            fill="none"
          />
          <line
            x1={cx + r}
            y1={cy}
            x2={cx + r}
            y2={cy - r}
            stroke="var(--color-geo-orange)"
            strokeWidth={1}
            strokeDasharray="4 2"
            opacity={0.5}
          />
          <text
            x={cx + r + 10}
            y={cy - r / 2}
            fill="var(--color-geo-orange)"
            style={{ fontSize: '11px', fontWeight: 'bold' }}
          >
            切线
          </text>
        </g>
      )}

      {showCenter && (
        <g>
          <circle cx={cx} cy={cy} r={4} fill="var(--color-blueprint)" />
          <text
            x={cx - 10}
            y={cy - 10}
            textAnchor="middle"
            fill="var(--color-blueprint)"
            style={{ fontSize: '12px', fontWeight: 'bold' }}
          >
            O
          </text>
        </g>
      )}
    </svg>
  )
}
