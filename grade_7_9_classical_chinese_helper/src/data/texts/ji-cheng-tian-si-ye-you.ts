import type { ClassicalText } from '../types'

export const jiChengTianSiYeYou: ClassicalText = {
  id: 'ji-cheng-tian-si-ye-you',
  title: '记承天寺夜游',
  author: '苏轼',
  grade: 8,
  semester: '上',
  unit: 4,
  genre: '记',
  paragraphs: [
    {
      id: 'p1',
      original: '元丰六年十月十二日夜，解衣欲睡，月色入户，欣然起行。念无与为乐者，遂至承天寺寻张怀民。怀民亦未寝，相与步于中庭。',
      translation: '元丰六年十月十二日晚上，我解开衣服想要睡觉，月光照进门来，就高兴地起身出门。想到没有和我一起游乐的人，于是到承天寺去找张怀民。怀民也没有睡，我们一同在庭院里散步。',
      annotations: [
        { word: '元丰', pinyin: 'yuán fēng', meaning: '宋神宗年号', type: '实词' },
        { word: '入户', pinyin: 'rù hù', meaning: '照进门来', type: '实词' },
        { word: '欣然', pinyin: 'xīn rán', meaning: '高兴地', type: '实词' },
        { word: '念', pinyin: 'niàn', meaning: '想到', type: '虚词' },
        { word: '无与为乐者', pinyin: 'wú yǔ wéi lè zhě', meaning: '没有和我一起游乐的人', type: '特殊句式' },
        { word: '相与', pinyin: 'xiāng yǔ', meaning: '共同，一起', type: '虚词' },
        { word: '中庭', pinyin: 'zhōng tíng', meaning: '庭院中', type: '实词' },
      ],
      imagePrompt: 'Scholar Su Shi rising from bed at moonlight night in Yuanfeng year, moonlight streaming through door, scholar walking out happily to enjoy night scenery, moonlit night scene, traditional Chinese ink painting style',
      imagePath: '/images/texts/ji-cheng-tian-si-ye-you-p1.jpg',
    },
    {
      id: 'p2',
      original: '庭下如积水空明，水中藻、荇交横，盖竹柏影也。',
      translation: '庭院中的月光像积满了水一样清澈透明，水中藻、荇交错纵横，原来是竹子和柏树的影子。',
      annotations: [
        { word: '积水空明', pinyin: 'jī shuǐ kōng míng', meaning: '像积水一样清澈透明', type: '实词' },
        { word: '藻', pinyin: 'zǎo', meaning: '水藻', type: '实词' },
        { word: '荇', pinyin: 'xìng', meaning: '荇菜', type: '实词' },
        { word: '交横', pinyin: 'jiāo héng', meaning: '交错纵横', type: '实词' },
        { word: '盖', pinyin: 'gài', meaning: '原来是', type: '虚词' },
      ],
      imagePrompt: 'Courtyard transformed by moonlight like clear water, shadows of bamboo and cypress交织like algae and water plants, magical moonlit night garden scene, ethereal moonlight, traditional Chinese ink painting style',
      imagePath: '/images/texts/ji-cheng-tian-si-ye-you-p2.jpg',
    },
    {
      id: 'p3',
      original: '何夜无月？何处无竹柏？但少闲人如吾两人者耳。',
      translation: '哪个夜晚没有月亮？什么地方没有竹子和柏树？只是缺少像我们两个这样的闲人罢了。',
      annotations: [
        { word: '何夜', pinyin: 'hé yè', meaning: '哪个夜晚', type: '虚词' },
        { word: '但', pinyin: 'dàn', meaning: '只是', type: '虚词' },
        { word: '闲人', pinyin: 'xián rén', meaning: '清闲的人，这里指不追求功名利禄的人', type: '古今异义' },
        { word: '如吾两人者耳', pinyin: 'rú wú liǎng rén zhě ěr', meaning: '像我们两个这样的人罢了', type: '特殊句式' },
      ],
      imagePrompt: 'Two scholars walking together in moonlit night courtyard bamboo and cypress shadows, carefree leisurely scholars appreciating moonlight, friendship and serenity, traditional Chinese ink painting style',
      imagePath: '/images/texts/ji-cheng-tian-si-ye-you-p3.jpg',
    },
  ],
  historicalContext: {
    dynasty: '宋',
    era: '北宋（公元1083年）',
    authorBio: '苏轼（1037—1101），字子瞻，号东坡居士，北宋著名文学家、书画家。唐宋八大家之一，与父亲苏洵、弟弟苏辙合称"三苏"。',
    writingBackground: '元丰二年，苏轼因"乌台诗案"被贬为黄州团练副使。本文写于元丰六年，当时仍在黄州贬谪期间，与好友张怀民一同夜游承天寺。',
    eraKeywords: ['乌台诗案', '黄州贬谪', '元丰', '苏轼'],
    highlightWords: ['积水空明', '藻荇交横', '闲人', '但少闲人'],
  },
  geoContexts: [
    { ancientName: '承天寺', modernName: '湖北省黄冈市黄州区', relevance: '本文写作地点' },
    { ancientName: '黄州', modernName: '湖北省黄冈市', relevance: '苏轼贬谪之地' },
  ],
  memorizationAid: {
    segments: [
      { keyword: '月色入户', hint: '起因' },
      { keyword: '欣然起行', hint: '心情' },
      { keyword: '寻张怀民', hint: '找人' },
      { keyword: '步于中庭', hint: '行动' },
      { keyword: '积水空明', hint: '月光' },
      { keyword: '藻荇交横', hint: '竹柏影' },
      { keyword: '闲人', hint: '主旨' },
    ],
    commonMistakes: [
      { wrong: '水中藻菜交横', correct: '水中藻、荇（xìng）交横' },
      { wrong: '但少闲人如无两人者耳', correct: '但少闲人如吾两人者耳' },
    ],
  },
}
