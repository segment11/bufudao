import type { ClassicalText } from '../types'

export const daXieZhongShuShu: ClassicalText = {
  id: 'da-xie-zhong-shu-shu',
  title: '答谢中书书',
  author: '吴均',
  grade: 8,
  semester: '上',
  unit: 2,
  genre: '书信',
  paragraphs: [
    {
      id: 'p1',
      original: '山川之美，古来共谈。高峰入云，清流见底。两岸石壁，五色交辉。青林翠竹，四时俱备。晓雾将歇，猿鸟乱鸣；夕日欲颓，沉鳞竞跃。',
      translation: '山水的美丽，从古以来人们都在谈论。高大的山峰插入云霄，清澈的流水清澈见底。两岸的石壁，各种颜色交相辉映。青色的树林翠绿的竹子，四季都具备。早晨的雾气将要消散，猿猴和鸟乱纷纷地鸣叫；傍晚的太阳将要落山，水中的鱼竞相跳跃。',
      annotations: [
        { word: '交辉', pinyin: 'jiāo huī', meaning: '交相辉映', type: '实词' },
        { word: '四时俱备', pinyin: 'sì shí jù bèi', meaning: '四季都具备', type: '实词' },
        { word: '歇', pinyin: 'xiē', meaning: '消散', type: '实词' },
        { word: '乱鸣', pinyin: 'luàn míng', meaning: '纷纷鸣叫', type: '实词' },
        { word: '颓', pinyin: 'tuí', meaning: '落下', type: '实词' },
        { word: '沉鳞', pinyin: 'chén lín', meaning: '水中潜游的鱼', type: '实词' },
        { word: '竞跃', pinyin: 'jìng yuè', meaning: '争相跳跃', type: '实词' },
      ],
      imagePrompt: 'Magnificent mountain scenery towering peaks piercing clouds, crystal clear stream visible to bottom, colorful cliffs on both banks, green forest翠竹 bamboo grove, spectacular landscape, traditional Chinese ink painting style',
      imagePath: '/images/texts/da-xie-zhong-shu-shu-p1.jpg',
    },
    {
      id: 'p2',
      original: '实是欲界之仙都。自康乐以来，未复有能与其奇者。',
      translation: '实在是人间仙境。自从谢灵运以来，不再有能够欣赏这奇妙山水的人了。',
      annotations: [
        { word: '欲界', pinyin: 'yù jiè', meaning: '人间世俗社会', type: '实词' },
        { word: '仙都', pinyin: 'xiān dū', meaning: '仙人居住的地方', type: '实词' },
        { word: '康乐', pinyin: 'kāng lè', meaning: '谢灵运的封号', type: '实词' },
        { word: '复', pinyin: 'fù', meaning: '再', type: '虚词' },
        { word: '与其奇', pinyin: 'yǔ qí qí', meaning: '欣赏这奇妙的山水', type: '词类活用' },
      ],
      imagePrompt: 'Heavenly earthly paradise mountain landscape, scholar meditating in natural paradise, ancient Chinese landscape like immortal realm, serene idyllic scenery, traditional Chinese ink painting style',
      imagePath: '/images/texts/da-xie-zhong-shu-shu-p2.jpg',
    },
  ],
  historicalContext: {
    dynasty: '魏晋南北朝',
    era: '南朝梁（公元6世纪）',
    authorBio: '吴均（469—520），字叔庠，南朝梁代文学家、史学家。他出身寒门，以写山水游记著称，文风清丽，时人称为"吴均体"。',
    writingBackground: '吴均写信给谢中书（谢脁），描述自己所见山水之美，表达对自然景物的热爱和自谢灵运以来无人能赏此奇景的感慨。',
    eraKeywords: ['南朝梁', '山水文学', '吴均体', '谢灵运'],
    highlightWords: ['高峰入云', '清流见底', '五色交辉', '欲界仙都'],
  },
  geoContexts: [
    { ancientName: '永嘉', modernName: '浙江省温州市', relevance: '谢灵运曾任永嘉太守，其山水诗多写此处' },
  ],
  memorizationAid: {
    segments: [
      { keyword: '高峰入云', hint: '山高' },
      { keyword: '清流见底', hint: '水清' },
      { keyword: '石壁交辉', hint: '壁彩' },
      { keyword: '青林翠竹', hint: '林竹' },
      { keyword: '晓雾夕日', hint: '晨昏' },
      { keyword: '猿鸟沉鳞', hint: '动物' },
      { keyword: '欲界仙都', hint: '总结' },
    ],
    commonMistakes: [
      { wrong: '沉鳞竞跃', correct: '沉鳞（lín）竞跃' },
      { wrong: '未复有能与其奇者', correct: '与（yù）其奇' },
    ],
  },
}
