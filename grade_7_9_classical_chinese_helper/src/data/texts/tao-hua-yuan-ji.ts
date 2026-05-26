import type { ClassicalText } from '../types'

export const taoHuaYuanJi: ClassicalText = {
  id: 'tao-hua-yuan-ji', title: '桃花源记', author: '陶渊明', grade: 8, semester: '下', unit: 3, genre: '记',
  paragraphs: [
    { id: 'p1', original: '晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷。渔人甚异之，复前行，欲穷其林。', translation: '东晋太元年间，武陵有个人以捕鱼为生。一天他沿着溪水划船前行，忘记了路程的远近。忽然遇到一片桃花林，花草鲜嫩美丽，落花纷纷。渔人对此感到非常诧异，继续往前走，想走到林子的尽头。', annotations: [{ word: '缘', pinyin: 'yuán', meaning: '沿着', type: '实词' }, { word: '异', pinyin: 'yì', meaning: '对……感到诧异', type: '词类活用' }, { word: '穷', pinyin: 'qióng', meaning: '走到……尽头', type: '词类活用' }, { word: '落英', pinyin: 'luò yīng', meaning: '落花', type: '实词' }] },
    { id: 'p2', original: '林尽水源，便得一山，山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人。复行数十步，豁然开朗。', translation: '桃林的尽头就是溪水的发源地，便看到一座山，山上有个小洞口。渔人就下了船，从洞口进去。起初洞口很窄，仅容一人通过。又走了几十步，突然变得开阔明亮了。', annotations: [{ word: '舍', pinyin: 'shě', meaning: '舍弃，离开', type: '实词' }, { word: '才', pinyin: 'cái', meaning: '仅仅', type: '古今异义' }] },
    { id: 'p3', original: '土地平旷，屋舍俨然，有良田、美池、桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。', translation: '土地平坦宽广，房屋整整齐齐。田间小路交错相通，鸡鸣狗叫声此起彼伏。老人和小孩，都安闲快乐。', annotations: [{ word: '俨然', pinyin: 'yǎn rán', meaning: '整齐的样子', type: '实词' }, { word: '交通', pinyin: 'jiāo tōng', meaning: '交错相通', type: '古今异义' }, { word: '黄发', pinyin: 'huáng fà', meaning: '指老人', type: '实词' }, { word: '垂髫', pinyin: 'chuí tiáo', meaning: '指小孩', type: '实词' }] },
    { id: 'p4', original: '见渔人，乃大惊，问所从来。具答之。便要还家，设酒杀鸡作食。村中闻有此人，咸来问讯。', translation: '看到渔人，就非常惊讶，问他是从哪里来的。他们便邀请渔人到家里去，摆酒杀鸡做饭来款待他。', annotations: [{ word: '要', pinyin: 'yāo', meaning: '同"邀"，邀请', type: '通假字' }, { word: '咸', pinyin: 'xián', meaning: '全，都', type: '虚词' }] },
    { id: 'p5', original: '自云先世避秦时乱，率妻子邑人来此绝境，不复出焉，遂与外人间隔。问今是何世，乃不知有汉，无论魏晋。', translation: '他们自己说祖先为了躲避秦时的战乱，带领妻子儿女和同乡人来到这个与世隔绝的地方。问现在是什么朝代，竟然不知道有汉朝，更不必说魏晋了。', annotations: [{ word: '妻子', pinyin: 'qī zǐ', meaning: '妻子和儿女', type: '古今异义' }, { word: '绝境', pinyin: 'jué jìng', meaning: '与世隔绝的地方', type: '古今异义' }, { word: '无论', pinyin: 'wú lùn', meaning: '更不必说', type: '古今异义' }] },
  ],
  historicalContext: { dynasty: '魏晋南北朝', era: '东晋太元年间', authorBio: '陶渊明（约365—427），名潜，字元亮，号五柳先生，东晋诗人。开创田园诗派。', writingBackground: '《桃花源记》是《桃花源诗》的序言。写作于战乱频繁的东晋末年，借虚构的桃花源表达对和平安宁理想社会的向往。', eraKeywords: ['东晋', '陶渊明', '田园诗', '理想社会', '归隐'], highlightWords: ['理想社会', '归隐', '田园诗'] },
  geoContexts: [{ ancientName: '武陵', modernName: '湖南省常德市', relevance: '渔人故乡，桃花源所在地' }],
  memorizationAid: { segments: [{ keyword: '缘溪·逢林', hint: '发现桃花林' }, { keyword: '小口·豁然', hint: '进入桃花源' }, { keyword: '平旷·怡然', hint: '桃源内景象' }, { keyword: '大惊·设酒', hint: '村人款待' }, { keyword: '避秦·不知汉', hint: '与世隔绝' }], commonMistakes: [{ wrong: '落英宾纷', correct: '落英缤纷' }, { wrong: '豁然开郎', correct: '豁然开朗' }] },
}
