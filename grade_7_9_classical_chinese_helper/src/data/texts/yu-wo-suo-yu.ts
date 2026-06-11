import type { ClassicalText } from '../types'

export const yuWoSuoYu: ClassicalText = {
  id: 'yu-wo-suo-yu',
  title: '鱼我所欲也',
  author: '孟子',
  grade: 9,
  semester: '下',
  unit: 6,
  genre: '论说文',
  paragraphs: [
    {
      id: 'p1',
      original: '鱼，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍鱼而取熊掌者也。',
      translation: '鱼，是我想要的东西；熊掌，也是我想要的东西。如果两样东西不能同时得到，我就舍弃鱼而选取熊掌。',
      annotations: [
        { word: '所欲', pinyin: 'suǒ yù', meaning: '想要的东西', type: '实词' },
        { word: '熊掌', pinyin: 'xióng zhǎng', meaning: '熊的脚掌，珍贵的食物', type: '实词' },
        { word: '得兼', pinyin: 'dé jiān', meaning: '同时得到', type: '实词' },
        { word: '舍', pinyin: 'shě', meaning: '舍弃', type: '实词' },
        { word: '取', pinyin: 'qǔ', meaning: '选取', type: '实词' }
      ],
      imagePrompt: 'Delicate fish and precious bear paw on weighing scale, dilemma choice scene, traditional Chinese ink painting style',
      imagePath: 'images/texts/yu-wo-suo-yu-p1.jpg'
    },
    {
      id: 'p2',
      original: '生，亦我所欲也；义，亦我所欲也。二者不可得兼，舍生而取义者也。',
      translation: '生命，是我想要的东西；正义，也是我想要的东西。如果两样东西不能同时得到，我就舍弃生命而选取正义。',
      annotations: [
        { word: '生', pinyin: 'shēng', meaning: '生命', type: '实词' },
        { word: '义', pinyin: 'yì', meaning: '正义，道义', type: '实词' }
      ],
      imagePrompt: 'Scholar facing choice between life and righteousness, moral dilemma ancient China, philosophical scene, traditional Chinese ink painting style',
      imagePath: 'images/texts/yu-wo-suo-yu-p2.jpg'
    },
    {
      id: 'p3',
      original: '生亦我所欲，所欲有甚于生者，故不为苟得也；死亦我所恶，所恶有甚于死者，故患有所不避也。',
      translation: '生命是我想要的，但我想要的东西还有比生命更重要的，所以我不做苟且偷生的事；死亡是我厌恶的，但我厌恶的东西还有比死亡更严重的，所以有的祸患我不躲避。',
      annotations: [
        { word: '甚于生', pinyin: 'shèn yú shēng', meaning: '比生命更重要的', type: '词类活用' },
        { word: '苟得', pinyin: 'gǒu dé', meaning: '苟且偷生', type: '实词' },
        { word: '恶', pinyin: 'wù', meaning: '厌恶', type: '实词' },
        { word: '患', pinyin: 'huàn', meaning: '祸患，灾难', type: '实词' },
        { word: '避', pinyin: 'bì', meaning: '躲避', type: '实词' }
      ],
      imagePrompt: 'Ancient sage contemplating life death righteousness, philosophical meditation scene, deep moral reasoning, traditional Chinese ink painting style',
      imagePath: 'images/texts/yu-wo-suo-yu-p3.jpg'
    },
    {
      id: 'p4',
      original: '如使人之所欲莫甚于生，则凡可以得生者何不用也？使人之所恶莫甚于死者，则凡可以避患者何不为也？',
      translation: '如果人们想要的东西没有比生命更重要的，那么凡是可以用来求生的手段有什么不能采用呢？如果人们厌恶的东西没有比死亡更可怕的，那么凡是可以用来避免祸患的事情有什么不能做呢？',
      annotations: [
        { word: '如使', pinyin: 'rú shǐ', meaning: '假如，如果', type: '虚词' },
        { word: '何不用', pinyin: 'hé bù yòng', meaning: '什么手段不能采用', type: '特殊句式' },
        { word: '何不为', pinyin: 'hé bù wéi', meaning: '什么事情不能做', type: '特殊句式' }
      ],
      imagePrompt: 'Rhetorical question scene with scholar analyzing human nature and morality, logical philosophical argument, traditional Chinese ink painting style',
      imagePath: 'images/texts/yu-wo-suo-yu-p4.jpg'
    },
    {
      id: 'p5',
      original: '由是则生而有不用也，由是则可以避患而有不为也。是故所欲有甚于生者，所恶有甚于死者。',
      translation: '通过某种方法就可以生存，可是有的人却不采用；通过某种方法就可以避免祸患，可是有的人却不做。因此人们想要的东西有比生命更重要的，人们厌恶的东西有比死亡更严重的。',
      annotations: [
        { word: '由是', pinyin: 'yóu shì', meaning: '通过这种方法', type: '实词' },
        { word: '是故', pinyin: 'shì gù', meaning: '因为这个原因', type: '虚词' }
      ],
      imagePrompt: '论证逻辑推理场景，学者分析人性与道德抉择，传统中国水墨画风格',
      imagePath: 'images/texts/yu-wo-suo-yu-p5.jpg'
    },
    {
      id: 'p6',
      original: '非独贤者有是心也，人皆有之，贤者能勿丧耳。',
      translation: '不只是贤能的人有这颗心，人人都有，只是贤能的人能够不丧失罢了。',
      annotations: [
        { word: '非独', pinyin: 'fēi dú', meaning: '不只是，不仅', type: '虚词' },
        { word: '是心', pinyin: 'shì xīn', meaning: '这种心，这种本性', type: '实词' },
        { word: '丧', pinyin: 'sàng', meaning: '丧失', type: '实词' },
        { word: '勿丧', pinyin: 'wù sàng', meaning: '不丧失', type: '词类活用' }
      ],
      imagePrompt: 'Wise sage and ordinary people both possessing righteous heart, moral nature in humanity, philosophical scene, traditional Chinese ink painting style',
      imagePath: 'images/texts/yu-wo-suo-yu-p6.jpg'
    },
    {
      id: 'p7',
      original: '一箪食，一豆羹，得之则生，弗得则死。呼尔而与之，行道之人弗受；蹴尔而与之，乞人不屑也。',
      translation: '一筐饭，一碗汤，得到它就能活命，得不到就会死去。轻蔑地呼喝着给人吃，路上行走的饿人不会接受；用脚踢着给人吃，乞丐也不屑要。',
      annotations: [
        { word: '箪', pinyin: 'dān', meaning: '古代盛饭的竹器', type: '实词' },
        { word: '豆', pinyin: 'dòu', meaning: '古代盛羹的器具', type: '实词' },
        { word: '羹', pinyin: 'gēng', meaning: '汤', type: '实词' },
        { word: '弗得', pinyin: 'fú dé', meaning: '得不到', type: '实词' },
        { word: '呼尔', pinyin: 'hū ěr', meaning: '轻蔑地呼喝', type: '词类活用' },
        { word: '蹴尔', pinyin: 'cù ěr', meaning: '用脚踢着', type: '词类活用' },
        { word: '不屑', pinyin: 'bù xiè', meaning: '认为不值得', type: '实词' }
      ],
      imagePrompt: 'Poor starving beggar refusing dignified food offered with contempt versus accepting with respect, dignity versus survival scene, traditional Chinese ink painting style',
      imagePath: 'images/texts/yu-wo-suo-yu-p7.jpg'
    },
    {
      id: 'p8',
      original: '万钟则不辩礼义而受之，万钟于我何加焉！为宫室之美，妻妾之奉，所识穷乏者得我与？',
      translation: '万钟的俸禄如果不分辨是否符合礼义就接受它，万钟的俸禄对我有什么好处呢？是为了华丽的住宅，妻妾的侍奉，所认识的穷困的人感激我吗？',
      annotations: [
        { word: '万钟', pinyin: 'wàn zhōng', meaning: '古代量器，指丰厚的俸禄', type: '实词' },
        { word: '辩', pinyin: 'biàn', meaning: '通"辨"，分辨', type: '通假字' },
        { word: '何加', pinyin: 'hé jiā', meaning: '有什么好处', type: '实词' },
        { word: '奉', pinyin: 'fèng', meaning: '侍奉', type: '实词' },
        { word: '得我', pinyin: 'dé wǒ', meaning: '通"德我"，感激我的恩德', type: '通假字' }
      ],
      imagePrompt: 'Wealthy official in grand mansion considering corrupt acceptance of bribes, moral compromise scene, traditional Chinese ink painting style',
      imagePath: 'images/texts/yu-wo-suo-yu-p8.jpg'
    },
    {
      id: 'p9',
      original: '乡为身死而不受，今为宫室之美为之；乡为身死而不受，今为妻妾之奉为之；乡为身死而不受，今为所识穷乏者得我而为之。是亦不可以已乎？',
      translation: '从前宁死也不肯接受，现在为了华丽的住宅就做了；从前宁死也不肯接受，现在为了妻妾的侍奉就做了；从前宁死也不肯接受，现在为了所认识的穷困的人感激我就做了。这种做法不是可以停止了吗？',
      annotations: [
        { word: '乡', pinyin: 'xiàng', meaning: '通"向"，从前', type: '通假字' },
        { word: '身为身死', pinyin: 'shēn wèi shēn sǐ', meaning: '为了自身死去', type: '词类活用' },
        { word: '已', pinyin: 'yǐ', meaning: '停止', type: '实词' }
      ],
      imagePrompt: 'Before and after comparison showing moral decline, from dying with dignity to compromising for wealth, dramatic contrast scene, traditional Chinese ink painting style',
      imagePath: 'images/texts/yu-wo-suo-yu-p9.jpg'
    },
    {
      id: 'p10',
      original: '此之谓失其本心。',
      translation: '这就叫做失去了他本来的羞恶之心。',
      annotations: [
        { word: '本心', pinyin: 'běn xīn', meaning: '本来的羞恶之心，即义', type: '实词' },
        { word: '此之谓', pinyin: 'cǐ zhī wèi', meaning: '这就叫做', type: '特殊句式' }
      ],
      imagePrompt: 'Lost original righteous heart versus restored conscience, moral enlightenment scene, philosophical conclusion, traditional Chinese ink painting style',
      imagePath: 'images/texts/yu-wo-suo-yu-p10.jpg'
    }
  ],
  historicalContext: {
    dynasty: '先秦',
    era: '战国（约公元前300年前后）',
    authorBio: '孟子（约公元前372年—约公元前289年），名轲，字子舆，战国时期思想家、教育家，儒家学派代表人物。',
    writingBackground: '本文出自《孟子·告子上》，论述了"义"比"生"更重要，人应该舍生取义的道理。',
    eraKeywords: ['战国', '百家争鸣', '儒家', '仁义'],
    highlightWords: ['舍生取义', '本心', '所欲有甚于生']
  },
  geoContexts: [
    { ancientName: '邹', modernName: '山东省邹城市', relevance: '孟子的故乡' }
  ],
  memorizationAid: {
    segments: [
      { keyword: '鱼与熊掌', hint: '比喻取舍' },
      { keyword: '舍生取义', hint: '核心论点' },
      { keyword: '所欲甚于生', hint: '论点一' },
      { keyword: '所恶甚于死', hint: '论点二' },
      { keyword: '贤者勿丧', hint: '过渡' },
      { keyword: '箪食豆羹', hint: '例证' },
      { keyword: '万钟不辩', hint: '反面论证' },
      { keyword: '失其本心', hint: '结论' }
    ],
    commonMistakes: [
      { wrong: '蹴尔而与之', correct: '蹴尔而与之' },
      { wrong: '得之则生', correct: '得之则生' }
    ]
  }
}
