interface AngleDemoProps {
  degree?: number
  label?: string
  type?: 'acute' | 'right' | 'obtuse' | 'straight'
}

const TYPE_COLORS: Record<string, string> = {
  acute: 'var(--color-calc-green)',
  right: 'var(--color-blueprint)',
  obtuse: 'var(--color-geo-orange)',
  straight: 'var(--color-algebra-purple)',
}

export function AngleDemo({ degree = 45, label, type = 'acute' }: AngleDemoProps) {
  const size = 300
  const originX = 80
  const originY = size - 80
  const rayLen = 180
  const arcRadius = 40
  const color = TYPE_COLORS[type] ?? TYPE_COLORS.acute

  const angleRad = (degree * Math.PI) / 180
  const endX = originX + rayLen * Math.cos(angleRad)
  const endY = originY - rayLen * Math.sin(angleRad)

  const arcStartX = originX + arcRadius
  const arcStartY = originY
  const arcEndX = originX + arcRadius * Math.cos(angleRad)
  const arcEndY = originY - arcRadius * Math.sin(angleRad)

  const largeArc = degree > 180 ? 1 : 0
  const midAngleRad = angleRad / 2
  const labelR = arcRadius + 18
  const degreeLabelX = originX + labelR * Math.cos(midAngleRad)
  const degreeLabelY = originY - labelR * Math.sin(midAngleRad)

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-xs"
        style={{ color: 'var(--color-text)' }}
      >
        <line
          x1={originX}
          y1={originY}
          x2={originX + rayLen}
          y2={originY}
          stroke="currentColor"
          strokeWidth={2}
        />
        <line
          x1={originX}
          y1={originY}
          x2={endX}
          y2={endY}
          stroke="currentColor"
          strokeWidth={2}
        />

        <path
          d={`M ${arcStartX} ${arcStartY} A ${arcRadius} ${arcRadius} 0 ${largeArc} 0 ${arcEndX} ${arcEndY}`}
          fill="none"
          stroke={color}
          strokeWidth={2}
        />

        {type === 'right' && (
          <rect
            x={originX + 8}
            y={originY - 8}
            width={10}
            height={10}
            fill="none"
            stroke={color}
            strokeWidth={1.5}
          />
        )}

        <circle cx={originX} cy={originY} r={3} fill="currentColor" />

        <text
          x={degreeLabelX}
          y={degreeLabelY}
          textAnchor="middle"
          dominantBaseline="central"
          fill={color}
          style={{ fontSize: '14px', fontWeight: 'bold' }}
        >
          {degree}°
        </text>
      </svg>

      {(label || type) && (
        <div className="mt-2 text-sm font-medium" style={{ color }}>
          {label ?? typeLabels[type]}
        </div>
      )}
    </div>
  )
}

const typeLabels: Record<string, string> = {
  acute: '锐角',
  right: '直角',
  obtuse: '钝角',
  straight: '平角',
}
