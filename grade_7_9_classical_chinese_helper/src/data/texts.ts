import type { ClassicalText } from './types'
import { louShiMing } from './texts/lou-shi-ming'
import { taoHuaYuanJi } from './texts/tao-hua-yuan-ji'
import { yueYangLouJi } from './texts/yue-yang-lou-ji'
import { yongXue } from './texts/yong-xue'
import { muLanShi } from './texts/mu-lan-shi'
import { maiYouWeng } from './texts/mai-you-weng'
import { aiLianShuo } from './texts/ai-lian-shuo'
import { heZhongShiShou } from './texts/he-zhong-shi-shou'
import { chenTaiQiu } from './texts/chen-tai-qiu'
import { lunYu } from './texts/lun-yu'
import { jieZiShu } from './texts/jie-zi-shu'
import { lang } from './texts/lang'
import { chuanJingDeYiRen } from './texts/chuan-jing-de-yi-ren'
import { qiRenYouTian } from './texts/qi-ren-you-tian'
import { sunQuanQuanXue } from './texts/sun-quan-quan-xue'

export { GRADE_INFO } from './index'

export const texts: Record<string, ClassicalText> = {
  // 七上
  'yong-xue': yongXue,
  'chen-tai-qiu': chenTaiQiu,
  'lun-yu': lunYu,
  'jie-zi-shu': jieZiShu,
  'lang': lang,
  'chuan-jing-de-yi-ren': chuanJingDeYiRen,
  'qi-ren-you-tian': qiRenYouTian,
  // 七下
  'sun-quan-quan-xue': sunQuanQuanXue,
  'mu-lan-shi': muLanShi,
  'mai-you-weng': maiYouWeng,
  'lou-shi-ming': louShiMing,
  'ai-lian-shuo': aiLianShuo,
  'he-zhong-shi-shou': heZhongShiShou,
  // 八下
  'tao-hua-yuan-ji': taoHuaYuanJi,
  // 九上
  'yue-yang-lou-ji': yueYangLouJi,
}

export function getTextsByGrade(grade: number) {
  return Object.values(texts)
    .filter((t) => t.grade === grade)
    .map((t) => ({
      id: t.id,
      title: t.title,
      author: t.author,
      dynasty: t.historicalContext.dynasty,
      genre: t.genre,
      unit: t.unit,
    }))
}
