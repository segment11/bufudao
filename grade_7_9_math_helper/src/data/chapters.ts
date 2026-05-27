import type { Chapter, ChapterSummary } from './types'
import { youLiShu } from './chapters/you-li-shu'
import { zhengShiDeJiaJian } from './chapters/zheng-shi-de-jia-jian'
import { yiYuanYiCiFangCheng } from './chapters/yi-yuan-yi-ci-fang-cheng'
import { jiHeTuXingChuBu } from './chapters/ji-he-tu-xing-chu-bu'
import { xiangJiaoXianYuPingXingXian } from './chapters/xiang-jiao-xian-yu-ping-xing-xian'
import { shiShu } from './chapters/shi-shu'
import { pingMianZhiJiaoZuoBiaoXi } from './chapters/ping-mian-zhi-jiao-zuo-biao-xi'
import { erYuanYiCiFangChengZu } from './chapters/er-yuan-yi-ci-fang-cheng-zu'
import { buDengShiYuBuDengShiZu } from './chapters/bu-deng-shi-yu-bu-deng-shi-zu'
import { shuJuDeShouJiZhengLi } from './chapters/shu-ju-de-shou-ji-zheng-li'
import { sanJiaoXing } from './chapters/san-jiao-xing'
import { quanDengSanJiaoXing } from './chapters/quan-deng-san-jiao-xing'
import { zhouDuiCheng } from './chapters/zhou-dui-cheng'
import { zhengShiChengFaYinShi } from './chapters/zheng-shi-cheng-fa-yin-shi'
import { fenShi } from './chapters/fen-shi'
import { erCiGenShi } from './chapters/er-ci-gen-shi'
import { gouGuDingLi } from './chapters/gou-gu-ding-li'
import { pingXingSiBianXing } from './chapters/ping-xing-si-bian-xing'
import { yiCiHanShu } from './chapters/yi-ci-han-shu'
import { shuJuDeFenXi } from './chapters/shu-ju-de-fen-xi'
import { yiYuanErCiFangCheng } from './chapters/yi-yuan-er-ci-fang-cheng'
import { erCiHanShu } from './chapters/er-ci-han-shu'
import { xuanZhuan } from './chapters/xuan-zhuan'
import { yuan } from './chapters/yuan'
import { gaiLv } from './chapters/gai-lu'
import { fanBiLiHanShu } from './chapters/fan-bi-li-han-shu'
import { xiangSi } from './chapters/xiang-si'
import { ruiJiaoSanJiaoHanShu } from './chapters/rui-jiao-san-jiao-han-shu'

export const chapters: Record<string, Chapter> = {
  'you-li-shu': youLiShu,
  'zheng-shi-de-jia-jian': zhengShiDeJiaJian,
  'yi-yuan-yi-ci-fang-cheng': yiYuanYiCiFangCheng,
  'ji-he-tu-xing-chu-bu': jiHeTuXingChuBu,
  'xiang-jiao-xian-yu-ping-xing-xian': xiangJiaoXianYuPingXingXian,
  'shi-shu': shiShu,
  'ping-mian-zhi-jiao-zuo-biao-xi': pingMianZhiJiaoZuoBiaoXi,
  'er-yuan-yi-ci-fang-cheng-zu': erYuanYiCiFangChengZu,
  'bu-deng-shi-yu-bu-deng-shi-zu': buDengShiYuBuDengShiZu,
  'shu-ju-de-shou-ji-zheng-li': shuJuDeShouJiZhengLi,
  'san-jiao-xing': sanJiaoXing,
  'quan-deng-san-jiao-xing': quanDengSanJiaoXing,
  'zhou-dui-cheng': zhouDuiCheng,
  'zheng-shi-cheng-fa-yin-shi': zhengShiChengFaYinShi,
  'fen-shi': fenShi,
  'er-ci-gen-shi': erCiGenShi,
  'gou-gu-ding-li': gouGuDingLi,
  'ping-xing-si-bian-xing': pingXingSiBianXing,
  'yi-ci-han-shu': yiCiHanShu,
  'shu-ju-de-fen-xi': shuJuDeFenXi,
  'yi-yuan-er-ci-fang-cheng': yiYuanErCiFangCheng,
  'er-ci-han-shu': erCiHanShu,
  'xuan-zhuan': xuanZhuan,
  'yuan': yuan,
  'gai-lv': gaiLv,
  'fan-bi-li-han-shu': fanBiLiHanShu,
  'xiang-si': xiangSi,
  'rui-jiao-san-jiao-han-shu': ruiJiaoSanJiaoHanShu,
}

export function getChaptersByGrade(grade: number): ChapterSummary[] {
  return Object.values(chapters)
    .filter((ch) => ch.grade === grade)
    .sort((a, b) => {
      if (a.semester !== b.semester) return a.semester === '上' ? -1 : 1
      return a.unit - b.unit
    })
    .map((ch) => ({
      id: ch.id,
      title: ch.title,
      grade: ch.grade,
      semester: ch.semester,
      unit: ch.unit,
      icon: ch.icon,
      description: ch.description,
      sectionCount: ch.sections.length,
    }))
}

export function getChapter(id: string): Chapter | undefined {
  return chapters[id]
}
