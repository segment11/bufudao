interface TreeChildNode {
  label: string
  probability?: string
  children?: { label: string; probability?: string }[]
}

interface TreeNode {
  label: string
  probability?: string
  children?: TreeChildNode[]
}

interface TreeDiagramProps {
  branches: TreeNode
}

export function TreeDiagram({ branches }: TreeDiagramProps) {
  const svgW = 500
  const topPad = 30
  const level1Y = 120
  const level2Y = 240
  const bottomPad = 40

  const children = branches.children ?? []
  const svgH = level2Y + bottomPad

  const rootX = svgW / 2

  const childSpacing = svgW / (children.length + 1)
  const childPositions = children.map((_: TreeChildNode, i: number) => childSpacing * (i + 1))

  const grandchildren = children.map((child: TreeChildNode, i: number) => {
    const gc = child.children ?? []
    const gcCount = gc.length || 1
    const gcSpacing = childSpacing / (gcCount + 1)
    const gcPositions = gc.map((_: { label: string; probability?: string }, j: number) => childPositions[i] - childSpacing / 2 + gcSpacing * (j + 1))
    return { items: gc, positions: gcPositions }
  })

  const maxGC = Math.max(...grandchildren.map((g) => g.items.length), 0)
  const totalH = maxGC > 0 ? svgH + bottomPad : svgH

  return (
    <svg
      viewBox={`0 0 ${svgW} ${totalH}`}
      className="w-full max-w-lg"
      style={{ color: 'var(--color-text)' }}
    >
      <circle cx={rootX} cy={topPad} r={4} fill="var(--color-blueprint)" />
      <text
        x={rootX}
        y={topPad - 10}
        textAnchor="middle"
        fill="var(--color-blueprint)"
        style={{ fontSize: '13px', fontWeight: 'bold' }}
      >
        {branches.label}
      </text>

      {children.map((child: TreeChildNode, i: number) => {
        const childX = childPositions[i]

        return (
          <g key={`child-${i}`}>
            <line
              x1={rootX}
              y1={topPad + 4}
              x2={childX}
              y2={level1Y - 6}
              stroke="currentColor"
              strokeWidth={1.5}
            />
            <circle cx={childX} cy={level1Y} r={6} fill="var(--color-blueprint)" opacity={0.15} stroke="var(--color-blueprint)" strokeWidth={1.5} />
            <text
              x={childX}
              y={level1Y + 18}
              textAnchor="middle"
              fill="currentColor"
              style={{ fontSize: '12px', fontWeight: 'bold' }}
            >
              {child.label}
            </text>
            {child.probability && (
              <text
                x={(rootX + childX) / 2 + (childX > rootX ? 8 : -8)}
                y={(topPad + level1Y) / 2}
                textAnchor={childX > rootX ? 'start' : 'end'}
                fill="var(--color-calc-green)"
                style={{ fontSize: '11px' }}
              >
                {child.probability}
              </text>
            )}

            {grandchildren[i].items.length > 0 &&
              grandchildren[i].items.map((gc: { label: string; probability?: string }, j: number) => {
                const gcx = grandchildren[i].positions[j]
                return (
                  <g key={`gc-${i}-${j}`}>
                    <line
                      x1={childX}
                      y1={level1Y + 6}
                      x2={gcx}
                      y2={level2Y - 6}
                      stroke="currentColor"
                      strokeWidth={1.5}
                    />
                    <circle cx={gcx} cy={level2Y} r={5} fill="var(--color-geo-orange)" opacity={0.15} stroke="var(--color-geo-orange)" strokeWidth={1.5} />
                    <text
                      x={gcx}
                      y={level2Y + 16}
                      textAnchor="middle"
                      fill="currentColor"
                      style={{ fontSize: '11px', fontWeight: 'bold' }}
                    >
                      {gc.label}
                    </text>
                    {gc.probability && (
                      <text
                        x={(childX + gcx) / 2 + (gcx > childX ? 6 : -6)}
                        y={(level1Y + level2Y) / 2}
                        textAnchor={gcx > childX ? 'start' : 'end'}
                        fill="var(--color-calc-green)"
                        style={{ fontSize: '10px' }}
                      >
                        {gc.probability}
                      </text>
                    )}
                  </g>
                )
              })}
          </g>
        )
      })}
    </svg>
  )
}
