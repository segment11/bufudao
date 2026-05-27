import type { ComponentType } from 'react'
import type { VisualBlock } from '@/data/types'
import { NumberLine } from './NumberLine'
import { CoordinatePlane } from './CoordinatePlane'
import { GeometryFigure } from './GeometryFigure'
import { FunctionGraph } from './FunctionGraph'
import { AngleDemo } from './AngleDemo'
import { BarChart } from './BarChart'
import { PieChart } from './PieChart'
import { AlgebraTiles } from './AlgebraTiles'
import { BalanceScale } from './BalanceScale'
import { CircleParts } from './CircleParts'
import { TreeDiagram } from './TreeDiagram'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const COMPONENT_MAP: Record<string, ComponentType<any>> = {
  NumberLine,
  CoordinatePlane,
  GeometryFigure,
  FunctionGraph,
  AngleDemo,
  BarChart,
  PieChart,
  AlgebraTiles,
  BalanceScale,
  CircleParts,
  TreeDiagram,
}

interface VisualRendererProps {
  block: VisualBlock
}

export function VisualRenderer({ block }: VisualRendererProps) {
  const Component = COMPONENT_MAP[block.component]
  if (!Component) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded">
        未知组件: {block.component}
      </div>
    )
  }

  return (
    <div className="bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-grid)]">
      <h4 className="font-semibold mb-1">{block.title}</h4>
      <p className="text-sm text-[var(--color-text)]/60 mb-4">{block.description}</p>
      <Component {...(block.props ?? {})} />
    </div>
  )
}
