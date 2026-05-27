import { pronunciationGuide } from '@/data/extras'

export function PronunciationGuide() {
  return (
    <div className="space-y-6">
      {pronunciationGuide.map((point) => (
        <div
          key={point.topic}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl p-5 shadow-sm"
        >
          <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-2">
            {point.topic}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
            {point.description}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {point.pairs.map((pair) => (
              <div
                key={`${pair.word1}-${pair.word2}`}
                className="bg-slate-50 dark:bg-slate-700/50 rounded-lg px-3 py-2.5 text-center"
              >
                <p className="font-medium text-sm text-slate-800 dark:text-slate-100">
                  {pair.word1} / {pair.word2}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {pair.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
