import { useParams } from 'react-router-dom'

export function GradePage() {
  const { gradeId } = useParams()
  return <div className="max-w-6xl mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold">年级 {gradeId}</h1>
    <p className="mt-2 text-slate-500">内容即将上线</p>
  </div>
}
