import { useParams } from 'react-router-dom'

export function UnitPage() {
  const { unitId } = useParams()
  return <div className="max-w-6xl mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold">单元 {unitId}</h1>
    <p className="mt-2 text-slate-500">内容即将上线</p>
  </div>
}
