import type { Unit } from '../types'

export const g7su2: Unit = {
  id: 'g7su2',
  title: 'Keep Tidy!',
  grade: 7,
  semester: '上',
  unitNumber: 2,
  topic: 'School supplies, colors, and keeping things tidy',
  objectives: [
    'Learn vocabulary for school supplies and colors',
    'Use "What do you have...?" to ask about belongings',
    'Describe colors using adjectives',
    'Talk about keeping things tidy',
  ],
  words: [
    { word: 'bottle', phonetic: '/ˈbɒtl/', pos: 'n.', meaning: '瓶子', example: 'I have a water bottle.', exampleTranslation: '我有一个水瓶。' },
    { word: 'eraser', phonetic: '/ɪˈreɪzə/', pos: 'n.', meaning: '橡皮', example: 'This is my eraser.', exampleTranslation: '这是我的橡皮。' },
    { word: 'key', phonetic: '/kiː/', pos: 'n.', meaning: '钥匙；关键', example: 'I can\'t find my key.', exampleTranslation: '我找不到我的钥匙了。' },
    { word: 'thing', phonetic: '/θɪŋ/', pos: 'n.', meaning: '东西；事情', example: 'What is this thing?', exampleTranslation: '这个东西是什么？' },
    { word: 'need', phonetic: '/niːd/', pos: 'v.', meaning: '需要', example: 'I need a pencil.', exampleTranslation: '我需要一支铅笔。' },
    { word: 'tidy', phonetic: '/ˈtaɪdi/', pos: 'adj.', meaning: '整洁的；井井有条的', example: 'Keep your desk tidy.', exampleTranslation: '保持你的课桌整洁。' },
    { word: 'schoolbag', phonetic: '/ˈskuːlbæɡ/', pos: 'n.', meaning: '书包', example: 'My schoolbag is blue.', exampleTranslation: '我的书包是蓝色的。' },
    { word: 'cap', phonetic: '/kæp/', pos: 'n.', meaning: '帽子；棒球帽', example: 'He has a red cap.', exampleTranslation: '他有一顶红色的帽子。' },
    { word: 'ruler', phonetic: '/ˈruːlə/', pos: 'n.', meaning: '尺；直尺', example: 'Please give me a ruler.', exampleTranslation: '请给我一把尺子。' },
    { word: 'pencil', phonetic: '/ˈpensl/', pos: 'n.', meaning: '铅笔', example: 'I have two pencils.', exampleTranslation: '我有两支铅笔。' },
    { word: 'red', phonetic: '/red/', pos: 'adj.', meaning: '红色（的）', example: 'The apple is red.', exampleTranslation: '苹果是红色的。' },
    { word: 'green', phonetic: '/ɡriːn/', pos: 'adj.', meaning: '绿色（的）', example: 'The tree is green.', exampleTranslation: '树是绿色的。' },
    { word: 'blue', phonetic: '/bluː/', pos: 'adj.', meaning: '蓝色（的）', example: 'The sky is blue.', exampleTranslation: '天空是蓝色的。' },
    { word: 'yellow', phonetic: '/ˈjeləʊ/', pos: 'adj.', meaning: '黄色（的）', example: 'The banana is yellow.', exampleTranslation: '香蕉是黄色的。' },
    { word: 'black', phonetic: '/blæk/', pos: 'adj.', meaning: '黑色（的）', example: 'I have a black pen.', exampleTranslation: '我有一支黑色的钢笔。' },
    { word: 'white', phonetic: '/waɪt/', pos: 'adj.', meaning: '白色（的）', example: 'The paper is white.', exampleTranslation: '纸是白色的。' },
    { word: 'orange', phonetic: '/ˈɒrɪndʒ/', pos: 'adj.', meaning: '橙色（的）', example: 'I like the orange bag.', exampleTranslation: '我喜欢那个橙色的包。' },
    { word: 'keep', phonetic: '/kiːp/', pos: 'v.', meaning: '保持；保留', example: 'Keep your room clean.', exampleTranslation: '保持你的房间干净。' },
    { word: 'wake up', phonetic: '/weɪk ʌp/', pos: 'phr.v.', meaning: '醒来', example: 'I wake up at six o\'clock.', exampleTranslation: '我六点钟醒来。' },
    { word: 'get up', phonetic: '/ɡet ʌp/', pos: 'phr.v.', meaning: '起床', example: 'I get up early every day.', exampleTranslation: '我每天早起。' },
  ],
  grammar: [
    {
      title: 'What do you have...? 句型',
      explanation: '用"What do you have...?"来询问对方拥有什么物品。回答用"I have a/an + 名词单数"或"I have + 名词复数"。注意a用在辅音音素前，an用在元音音素前。',
      examples: [
        '— What do you have in your schoolbag? — I have a ruler and two pencils.',
        '— What do you have? — I have an eraser.',
        'She has a red pen and a blue pencil.',
        'We have new books in our bags.',
      ],
      comparisons: [
        '中文说"你有什么"，英语需要借助助动词do构成疑问句："What do you have?"',
        '中文"一个"不区分a和an，英语需要根据后面单词的发音来选择。',
      ],
    },
    {
      title: '表示颜色的形容词用法',
      explanation: '颜色词是形容词，放在名词前面或be动词后面。询问颜色用"What colour is it?"（单数）或"What colour are they?"（复数）。',
      examples: [
        '— What colour is your schoolbag? — It\'s blue.',
        '— What colour are the pencils? — They\'re red.',
        'I have a green ruler.',
        'The cap is black and white.',
      ],
      comparisons: [
        '中文中颜色词放在名词后面（"书包蓝色的"），英语中颜色词放在名词前面（"a blue bag"）。',
      ],
    },
  ],
  dialogues: [
    {
      title: 'In the Classroom',
      scene: 'Two students are talking about their school supplies before class.',
      lines: [
        { speaker: 'Tom', text: 'Hi, Lucy! What do you have in your schoolbag?', translation: '嗨，Lucy！你书包里有什么？' },
        { speaker: 'Lucy', text: 'I have a ruler, two pencils, and an eraser.', translation: '我有一把尺子、两支铅笔和一块橡皮。' },
        { speaker: 'Tom', text: 'What colour is your ruler?', translation: '你的尺子是什么颜色的？' },
        { speaker: 'Lucy', text: 'It\'s green. What about you?', translation: '是绿色的。你呢？' },
        { speaker: 'Tom', text: 'I have a blue pen and a red schoolbag.', translation: '我有一支蓝色的钢笔和一个红色的书包。' },
        { speaker: 'Lucy', text: 'Your desk is very tidy!', translation: '你的课桌很整洁！' },
        { speaker: 'Tom', text: 'Thank you! I always keep my things tidy.', translation: '谢谢！我总是保持我的东西整洁。' },
        { speaker: 'Lucy', text: 'That\'s a good habit. Let me tidy my desk too.', translation: '那是个好习惯。让我也整理一下我的课桌。' },
      ],
    },
  ],
  readings: [
    {
      title: 'My Schoolbag',
      text: 'Look at my schoolbag! It is blue and black. It is very tidy. I have many things in it. I have a ruler, three pencils, and an eraser. The ruler is green. The pencils are yellow. The eraser is white. I have a red cap too. I keep my schoolbag tidy every day. I wake up early and get my things ready. A tidy schoolbag helps me study well!',
      annotations: [
        { word: 'look at', meaning: '看' },
        { word: 'many', meaning: '许多' },
        { word: 'habit', meaning: '习惯' },
        { word: 'ready', meaning: '准备好的' },
      ],
      questions: [
        { q: 'What colour is the schoolbag?', a: 'It is blue and black.' },
        { q: 'How many pencils are in the schoolbag?', a: 'There are three pencils.' },
        { q: 'What colour is the eraser?', a: 'It is white.' },
        { q: 'Why does the writer keep the schoolbag tidy?', a: 'Because a tidy schoolbag helps him/her study well.' },
      ],
    },
  ],
  exercises: [
    {
      type: 'fill',
      instruction: '用a或an填空。',
      data: ['I have ___ ruler.', 'She has ___ eraser.', 'This is ___ orange bag.', 'He has ___ blue pen.'],
      answer: ['a', 'an', 'an', 'a'],
    },
    {
      type: 'match',
      instruction: '将物品与颜色配对。',
      data: { words: ['schoolbag', 'pencil', 'ruler', 'eraser'], colours: ['white', 'blue', 'green', 'yellow'] },
      answer: { schoolbag: 'blue', pencil: 'yellow', ruler: 'green', eraser: 'white' },
    },
    {
      type: 'correct',
      instruction: '找出并改正句子中的错误。',
      data: ['I have a orange pen.', 'What colour is they?', 'She have a red cap.', 'What do you has in your bag?'],
      answer: ['I have an orange pen.', 'What colour are they?', 'She has a red cap.', 'What do you have in your bag?'],
    },
    {
      type: 'reorder',
      instruction: '将单词重新排列成正确的句子。',
      data: ['you / do / what / have / in / schoolbag / your', 'colour / what / is / ruler / your', 'have / I / a / blue / pen', 'desk / keep / tidy / your'],
      answer: ['What do you have in your schoolbag?', 'What colour is your ruler?', 'I have a blue pen.', 'Keep your desk tidy.'],
    },
    {
      type: 'fill',
      instruction: '根据汉语提示填入正确的颜色词。',
      data: ['The tree is ___(绿色的).', 'The banana is ___(黄色的).', 'My pen is ___(黑色的).', 'The paper is ___(白色的).'],
      answer: ['green', 'yellow', 'black', 'white'],
    },
  ],
  essays: [
    {
      title: 'My School Things',
      body: 'I have many things for school. My schoolbag is blue. It is big and tidy. I have a green ruler, two yellow pencils, and a white eraser. I have a red cap too. I keep all my things in my schoolbag. Every morning, I wake up early and get my things ready. I like to keep my desk tidy. It helps me study well. My favourite thing is my blue pen. I use it every day!',
      level: 'B',
      keyPhrases: ['I have...', 'My schoolbag is...', 'I keep...', 'It helps me...'],
      wordCount: 82,
      topic: 'Describing school supplies',
    },
  ],
}
