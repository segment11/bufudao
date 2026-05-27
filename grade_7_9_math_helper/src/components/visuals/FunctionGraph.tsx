import { useEffect, useRef } from 'react'

interface FunctionGraphProps {
  expressions?: string[]
  xRange?: [number, number]
  yRange?: [number, number]
  colors?: string[]
  labels?: string[]
}

const DEFAULT_COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6']

function evaluateExpression(expr: string, x: number): number {
  const prepared = expr
    .replace(/\^/g, '**')
    .replace(/sqrt/g, 'Math.sqrt')
  try {
    return new Function('x', `return ${prepared}`)(x) as number
  } catch {
    return NaN
  }
}

export function FunctionGraph({
  expressions = [],
  xRange = [-5, 5],
  yRange = [-5, 5],
  colors = DEFAULT_COLORS,
  labels = [],
}: FunctionGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const dpr = window.devicePixelRatio || 1
    const width = container.clientWidth
    const height = Math.min(width, 400)

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.scale(dpr, dpr)

    const padding = 40
    const plotW = width - padding * 2
    const plotH = height - padding * 2

    const toCanvasX = (x: number) => padding + ((x - xRange[0]) / (xRange[1] - xRange[0])) * plotW
    const toCanvasY = (y: number) => padding + ((yRange[1] - y) / (yRange[1] - yRange[0])) * plotH

    const isDark = document.documentElement.classList.contains('dark')
    const textColor = isDark ? '#d6d3d1' : '#1c1917'
    const gridColor = isDark ? '#44403c' : '#e5e7eb'
    const axisColor = isDark ? '#a8a29e' : '#57534e'

    ctx.clearRect(0, 0, width, height)

    const xStep = Math.ceil((xRange[1] - xRange[0]) / 10) || 1
    const yStep = Math.ceil((yRange[1] - yRange[0]) / 10) || 1

    for (let x = Math.ceil(xRange[0]); x <= xRange[1]; x += xStep) {
      const cx = toCanvasX(x)
      ctx.beginPath()
      ctx.moveTo(cx, padding)
      ctx.lineTo(cx, height - padding)
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 0.5
      ctx.stroke()

      ctx.fillStyle = textColor
      ctx.font = '10px sans-serif'
      ctx.textAlign = 'center'
      if (x !== 0) {
        ctx.fillText(String(x), cx, toCanvasY(0) + 14)
      }
    }

    for (let y = Math.ceil(yRange[0]); y <= yRange[1]; y += yStep) {
      const cy = toCanvasY(y)
      ctx.beginPath()
      ctx.moveTo(padding, cy)
      ctx.lineTo(width - padding, cy)
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 0.5
      ctx.stroke()

      ctx.fillStyle = textColor
      ctx.font = '10px sans-serif'
      ctx.textAlign = 'right'
      if (y !== 0) {
        ctx.fillText(String(y), toCanvasX(0) - 6, cy + 3)
      }
    }

    ctx.beginPath()
    ctx.moveTo(padding, toCanvasY(0))
    ctx.lineTo(width - padding, toCanvasY(0))
    ctx.strokeStyle = axisColor
    ctx.lineWidth = 1.5
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(toCanvasX(0), padding)
    ctx.lineTo(toCanvasX(0), height - padding)
    ctx.strokeStyle = axisColor
    ctx.lineWidth = 1.5
    ctx.stroke()

    ctx.fillStyle = textColor
    ctx.font = '11px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('O', toCanvasX(0) + 4, toCanvasY(0) + 14)

    expressions.forEach((expr, idx) => {
      const color = colors[idx % colors.length]
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = 2.5

      const steps = plotW * 2
      let started = false
      for (let i = 0; i <= steps; i++) {
        const x = xRange[0] + (i / steps) * (xRange[1] - xRange[0])
        const y = evaluateExpression(expr, x)
        if (isNaN(y) || !isFinite(y)) {
          started = false
          continue
        }
        const cx = toCanvasX(x)
        const cy = toCanvasY(y)
        if (cy < padding - 50 || cy > height - padding + 50) {
          started = false
          continue
        }
        if (!started) {
          ctx.moveTo(cx, cy)
          started = true
        } else {
          ctx.lineTo(cx, cy)
        }
      }
      ctx.stroke()
    })
  }, [expressions, xRange, yRange, colors])

  const displayLabels = labels.length > 0
    ? labels
    : expressions.map((e) => `y = ${e}`)

  return (
    <div>
      <div ref={containerRef} className="w-full">
        <canvas ref={canvasRef} className="w-full" />
      </div>
      <div className="flex flex-wrap gap-4 mt-3 justify-center">
        {displayLabels.map((label, i) => (
          <span key={i} className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-text)' }}>
            <span
              className="inline-block w-4 h-0.5 rounded"
              style={{ backgroundColor: colors[i % colors.length] }}
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
