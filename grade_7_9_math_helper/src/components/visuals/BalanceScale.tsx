interface BalanceScaleProps {
  leftItems: { label: string; weight: number }[]
  rightItems: { label: string; weight: number }[]
  balanced?: boolean
}

export function BalanceScale({ leftItems, rightItems, balanced }: BalanceScaleProps) {
  const leftWeight = leftItems.reduce((s, it) => s + it.weight, 0)
  const rightWeight = rightItems.reduce((s, it) => s + it.weight, 0)
  const isBalanced = balanced ?? leftWeight === rightWeight

  const svgW = 500
  const svgH = 320
  const fulcrumX = svgW / 2
  const fulcrumY = 180
  const beamLen = 360
  const panDrop = 40

  const maxDiff = Math.max(Math.abs(leftWeight - rightWeight), 1)
  const tiltAngle = isBalanced ? 0 : Math.min((maxDiff / 10) * 8, 15)
  const tiltDir = leftWeight > rightWeight ? 1 : -1
  const tiltRad = (tiltAngle * tiltDir * Math.PI) / 180

  const leftEndX = fulcrumX - beamLen / 2
  const rightEndX = fulcrumX + beamLen / 2

  const leftBeamY = fulcrumY - Math.sin(tiltRad) * (beamLen / 2)
  const rightBeamY = fulcrumY + Math.sin(tiltRad) * (beamLen / 2)

  const leftPanY = leftBeamY + panDrop
  const rightPanY = rightBeamY + panDrop

  const renderItemBlocks = (
    items: { label: string; weight: number }[],
    centerX: number,
    panY: number,
    side: 'left' | 'right',
  ) => {
    const blockW = 36
    const blockH = 24
    const totalW = items.length * (blockW + 4)
    const startX = centerX - totalW / 2

    return items.map((item, i) => {
      const x = startX + i * (blockW + 4)
      const y = panY - blockH - 4
      return (
        <g key={`${side}-${i}`}>
          <rect
            x={x}
            y={y}
            width={blockW}
            height={blockH}
            fill="var(--color-blueprint)"
            opacity={0.15}
            stroke="var(--color-blueprint)"
            strokeWidth={1}
            rx={3}
          />
          <text
            x={x + blockW / 2}
            y={y + blockH / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fill="var(--color-blueprint)"
            style={{ fontSize: '10px', fontWeight: 'bold' }}
          >
            {item.label}
          </text>
        </g>
      )
    })
  }

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-full max-w-lg"
      style={{ color: 'var(--color-text)' }}
    >
      <polygon
        points={`${fulcrumX - 20},${svgH - 20} ${fulcrumX + 20},${svgH - 20} ${fulcrumX},${fulcrumY}`}
        fill="var(--color-grid)"
        stroke="currentColor"
        strokeWidth={1}
      />

      <line
        x1={leftEndX}
        y1={leftBeamY}
        x2={rightEndX}
        y2={rightBeamY}
        stroke="currentColor"
        strokeWidth={3}
      />

      <line
        x1={leftEndX}
        y1={leftBeamY}
        x2={leftEndX}
        y2={leftPanY}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <line
        x1={rightEndX}
        y1={rightBeamY}
        x2={rightEndX}
        y2={rightPanY}
        stroke="currentColor"
        strokeWidth={1.5}
      />

      <line
        x1={leftEndX - 50}
        y1={leftPanY}
        x2={leftEndX + 50}
        y2={leftPanY}
        stroke="currentColor"
        strokeWidth={2}
      />
      <line
        x1={rightEndX - 50}
        y1={rightPanY}
        x2={rightEndX + 50}
        y2={rightPanY}
        stroke="currentColor"
        strokeWidth={2}
      />

      <circle cx={fulcrumX} cy={fulcrumY} r={5} fill="currentColor" />

      {renderItemBlocks(leftItems, leftEndX, leftPanY, 'left')}
      {renderItemBlocks(rightItems, rightEndX, rightPanY, 'right')}

      <text
        x={leftEndX}
        y={leftPanY + 18}
        textAnchor="middle"
        fill="currentColor"
        opacity={0.5}
        style={{ fontSize: '11px' }}
      >
        {leftWeight}
      </text>
      <text
        x={rightEndX}
        y={rightPanY + 18}
        textAnchor="middle"
        fill="currentColor"
        opacity={0.5}
        style={{ fontSize: '11px' }}
      >
        {rightWeight}
      </text>

      <text
        x={fulcrumX}
        y={svgH - 4}
        textAnchor="middle"
        fill={isBalanced ? 'var(--color-calc-green)' : 'var(--color-geo-orange)'}
        style={{ fontSize: '12px', fontWeight: 'bold' }}
      >
        {isBalanced ? '平衡' : '不平衡'}
      </text>
    </svg>
  )
}
