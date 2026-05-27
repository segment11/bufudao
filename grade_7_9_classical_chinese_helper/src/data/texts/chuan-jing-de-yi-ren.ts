import type { ClassicalText } from '../types'

export const chuanJingDeYiRen: ClassicalText = {
  id: 'chuan-jing-de-yi-ren', title: '穿井得一人', author: '吕不韦门客', grade: 7, semester: '上', unit: 6, genre: '寓言',
  paragraphs: [
    { id: 'p1', original: '宋之丁氏，家无井而出溉汲，常一人居外。及其家穿井，告人曰："吾穿井得一人。"', translation: '宋国有一户姓丁的人家，家里没有井，需要到外面打水浇地，因此经常派一个人在外面。等到他家挖了一口井，告诉别人说："我家挖井，多得到了一个人。"', annotations: [{ word: '溉汲', pinyin: 'gài jí', meaning: '打水浇田', type: '实词' }, { word: '穿', pinyin: 'chuān', meaning: '挖掘，开凿', type: '实词' }], imagePrompt: 'Ding family digging well in ancient China villager drawing water from well misunderstanding traditional Chinese ink painting style', imagePath: '/images/texts/chuan-jing-de-yi-ren-p1.jpg' },
    { id: 'p2', original: '有闻而传之者曰："丁氏穿井得一人。"国人道之，闻之于宋君。', translation: '有人听到这话便传扬说："丁家挖井挖到了一个人。"都城的许多人都在谈论这件事，一直传到了宋国国君的耳朵里。', annotations: [{ word: '国人', pinyin: 'guó rén', meaning: '指都城里的人', type: '古今异义' }, { word: '道', pinyin: 'dào', meaning: '讲述', type: '实词' }], imagePrompt: 'Rumor spreading through town about well finding person people gossiping marketplace news reaching king ancient Chinese city scene traditional ink painting style', imagePath: '/images/texts/chuan-jing-de-yi-ren-p2.jpg' },
    { id: 'p3', original: '宋君令人问之于丁氏，丁氏对曰："得一人之使，非得一人于井中也。"', translation: '宋国国君派人向丁家询问这件事，丁氏回答说："（家里有了井）就多得到了一个人的劳力，并不是从井中挖出一个活人。"', annotations: [{ word: '使', pinyin: 'shǐ', meaning: '劳力', type: '实词' }, { word: '对', pinyin: 'duì', meaning: '回答', type: '实词' }], imagePrompt: 'King messenger asking Ding family clarification well gained labor not person from well court scene traditional Chinese ink painting style', imagePath: '/images/texts/chuan-jing-de-yi-ren-p3.jpg' },
    { id: 'p4', original: '求闻之若此，不若无闻也。', translation: '像这样道听途说，还不如什么都没听到。', annotations: [{ word: '求', pinyin: 'qiú', meaning: '寻访', type: '实词' }], imagePrompt: 'Wisdom of not spreading rumors versus hearsay misunderstanding truth versus gossip scholarly reflection scene traditional Chinese ink painting style', imagePath: '/images/texts/chuan-jing-de-yi-ren-p4.jpg' },
  ],
  historicalContext: { dynasty: '先秦', era: '战国末期', authorBio: '《吕氏春秋》是战国末期秦相吕不韦集合门客共同编写的一部杂家著作。', writingBackground: '出自《吕氏春秋·慎行论·察传》。告诫人们对于传闻要审察思考，不可轻信盲从、以讹传讹。', eraKeywords: ['吕氏春秋', '寓言', '以讹传讹', '战国'], highlightWords: ['审察', '以讹传讹'] },
  geoContexts: [],
  memorizationAid: { segments: [{ keyword: '无井·穿井', hint: '丁家挖井' }, { keyword: '得一人·传之', hint: '传言走样' }, { keyword: '国人·宋君', hint: '传到国君耳中' }, { keyword: '一人之使·非得一人', hint: '真相大白' }, { keyword: '不若无闻', hint: '议论点题' }], commonMistakes: [{ wrong: '家无井而出溉汲', correct: '家无井而出溉汲' }, { wrong: '求闻知若此', correct: '求闻之若此' }] },
}
