import { useParams } from 'react-router-dom'
import { units } from '@/data'
import { DialogueCard } from './DialogueCard'

export function SceneTab() {
  const { unitId } = useParams<{ unitId: string }>()
  const unit = unitId ? units[unitId] : undefined
  const dialogues = unit?.dialogues ?? []

  if (!unit) {
    return <div className="text-slate-500">未找到单元数据</div>
  }

  if (dialogues.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p>该单元暂无对话内容</p>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-500">
        点击角色图标可隐藏该角色台词，用于角色扮演练习。
      </p>
      {dialogues.map((dialogue, i) => (
        <DialogueCard key={i} dialogue={dialogue} />
      ))}
    </div>
  )
}
