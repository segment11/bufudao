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
import { heiZhouJi } from './texts/hei-zhou-ji'
import { daDaoZhiHang } from './texts/da-dao-zhi-hang'
import { sanXia } from './texts/san-xia'
import { daXieZhongShuShu } from './texts/da-xie-zhong-shu-shu'
import { jiChengTianSiYeYou } from './texts/ji-cheng-tian-si-ye-you'
import { guanChao } from './texts/guan-chao'
import { huXinTingKanXue } from './texts/hu-xin-ting-kan-xue'
import { yuZhuYuanSiShu } from './texts/yu-zhu-yuan-si-shu'
import { wuLiuXianShengZhuan } from './texts/wu-liu-xian-sheng-zhuan'
import { maShuo } from './texts/ma-shuo'
import { songDongYangMaShengXu } from './texts/song-dong-yang-ma-sheng-xu'
import { zuiWengTingJi } from './texts/zui-weng-ting-ji'
import { yuWoSuoYu } from './texts/yu-wo-suo-yu'
import { shengYuYouHuanSiYuAnLe } from './texts/sheng-yu-you-huan-si-yu-an-le'
import { caoGuiLunZhan } from './texts/cao-gui-lun-zhan'
import { zouJiFengQiWangNaJian } from './texts/zou-ji-feng-qi-wang-na-jian'
import { boYaShanGuQin } from './texts/bo-ya-shan-gu-qin'

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
  // 八上
  'hei-zhou-ji': heiZhouJi,
  'da-dao-zhi-hang': daDaoZhiHang,
  'san-xia': sanXia,
  'da-xie-zhong-shu-shu': daXieZhongShuShu,
  'ji-cheng-tian-si-ye-you': jiChengTianSiYeYou,
  'guan-chao': guanChao,
  'hu-xin-ting-kan-xue': huXinTingKanXue,
  // 八下
  'tao-hua-yuan-ji': taoHuaYuanJi,
  'yu-zhu-yuan-si-shu': yuZhuYuanSiShu,
  'wu-liu-xian-sheng-zhuan': wuLiuXianShengZhuan,
  'ma-shuo': maShuo,
  'song-dong-yang-ma-sheng-xu': songDongYangMaShengXu,
  'zui-weng-ting-ji': zuiWengTingJi,
  // 九上
  'yue-yang-lou-ji': yueYangLouJi,
  // 九下
  'yu-wo-suo-yu': yuWoSuoYu,
  'sheng-yu-you-huan-si-yu-an-le': shengYuYouHuanSiYuAnLe,
  'cao-gui-lun-zhan': caoGuiLunZhan,
  'zou-ji-feng-qi-wang-na-jian': zouJiFengQiWangNaJian,
  'bo-ya-shan-gu-qin': boYaShanGuQin,
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
