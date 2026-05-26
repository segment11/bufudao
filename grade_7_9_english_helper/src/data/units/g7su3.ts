import type { Unit } from '../types'

export const g7su3: Unit = {
  id: 'g7su3',
  title: 'Welcome!',
  grade: 7,
  semester: '上',
  unitNumber: 3,
  topic: 'Plants, animals, and farm life',
  objectives: [
    'Learn vocabulary for common plants and animals',
    'Use "this/that" and "these/those" correctly',
    'Ask about quantities using "How many...?"',
    'Describe plants and animals on a farm',
  ],
  words: [
    { word: 'welcome', phonetic: '/ˈwelkəm/', pos: 'interj.', meaning: '欢迎', example: 'Welcome to our school!', exampleTranslation: '欢迎来到我们学校！' },
    { word: 'fun', phonetic: '/fʌn/', pos: 'n./adj.', meaning: '乐趣；有趣的', example: 'We have fun on the farm.', exampleTranslation: '我们在农场玩得很开心。' },
    { word: 'yard', phonetic: '/jɑːd/', pos: 'n.', meaning: '院子；园圃', example: 'There are flowers in the yard.', exampleTranslation: '院子里有花。' },
    { word: 'carrot', phonetic: '/ˈkærət/', pos: 'n.', meaning: '胡萝卜', example: 'Rabbits like carrots.', exampleTranslation: '兔子喜欢胡萝卜。' },
    { word: 'goose', phonetic: '/ɡuːs/', pos: 'n.', meaning: '鹅（复数geese）', example: 'The geese are in the water.', exampleTranslation: '鹅在水里。' },
    { word: 'count', phonetic: '/kaʊnt/', pos: 'v.', meaning: '数数', example: 'Can you count from 1 to 10?', exampleTranslation: '你能从1数到10吗？' },
    { word: 'another', phonetic: '/əˈnʌðə/', pos: 'det.', meaning: '另一；又一', example: 'I want another apple.', exampleTranslation: '我想要另一个苹果。' },
    { word: 'else', phonetic: '/els/', pos: 'adv.', meaning: '其他的；别的', example: 'What else can you see?', exampleTranslation: '你还能看到什么？' },
    { word: 'plant', phonetic: '/plɑːnt/', pos: 'n./v.', meaning: '植物；种植', example: 'We plant trees in spring.', exampleTranslation: '我们在春天种树。' },
    { word: 'tree', phonetic: '/triː/', pos: 'n.', meaning: '树', example: 'There is a big tree in the yard.', exampleTranslation: '院子里有一棵大树。' },
    { word: 'flower', phonetic: '/ˈflaʊə/', pos: 'n.', meaning: '花', example: 'The flowers are beautiful.', exampleTranslation: '花很漂亮。' },
    { word: 'apple', phonetic: '/ˈæpl/', pos: 'n.', meaning: '苹果', example: 'I\'d like an apple, please.', exampleTranslation: '请给我一个苹果。' },
    { word: 'tomato', phonetic: '/təˈmɑːtəʊ/', pos: 'n.', meaning: '西红柿（复数tomatoes）', example: 'Tomatoes are red and round.', exampleTranslation: '西红柿又红又圆。' },
    { word: 'chicken', phonetic: '/ˈtʃɪkɪn/', pos: 'n.', meaning: '鸡；鸡肉', example: 'There are five chickens on the farm.', exampleTranslation: '农场里有五只鸡。' },
    { word: 'duck', phonetic: '/dʌk/', pos: 'n.', meaning: '鸭子', example: 'The duck can swim.', exampleTranslation: '鸭子会游泳。' },
    { word: 'sheep', phonetic: '/ʃiːp/', pos: 'n.', meaning: '羊；绵羊（单复数同形）', example: 'There are three sheep on the hill.', exampleTranslation: '山上有三只羊。' },
    { word: 'rabbit', phonetic: '/ˈræbɪt/', pos: 'n.', meaning: '兔子', example: 'The rabbit is white and cute.', exampleTranslation: '那只兔子又白又可爱。' },
    { word: 'dog', phonetic: '/dɒɡ/', pos: 'n.', meaning: '狗', example: 'I have a pet dog.', exampleTranslation: '我有一只宠物狗。' },
    { word: 'cat', phonetic: '/kæt/', pos: 'n.', meaning: '猫', example: 'The cat is sleeping.', exampleTranslation: '猫在睡觉。' },
    { word: 'animal', phonetic: '/ˈænɪml/', pos: 'n.', meaning: '动物', example: 'I like animals very much.', exampleTranslation: '我非常喜欢动物。' },
  ],
  grammar: [
    {
      title: '指示代词this/that与these/those',
      explanation: 'this（这个）和these（这些）指近处的人或物，that（那个）和those（那些）指远处的人或物。this/that后接is，these/those后接are。',
      examples: [
        'This is a cat. → 这是一只猫。（近处）',
        'That is a dog. → 那是一只狗。（远处）',
        'These are flowers. → 这些是花。（近处）',
        'Those are trees. → 那些是树。（远处）',
      ],
      comparisons: [
        '中文用"这""那""这些""那些"，位置较灵活；英语中this/that/these/those必须放在句首或名词前。',
        '中文"这是猫"和"这些是猫"动词不变，英语单数用is、复数用are。',
      ],
    },
    {
      title: 'How many...? 提问数量',
      explanation: '用"How many + 可数名词复数 + ...?"来询问数量。回答时可以直接说数字，或用"There is/are..."句型。',
      examples: [
        '— How many ducks are there? — There are six ducks.',
        '— How many apples do you have? — I have three.',
        'How many chickens can you see?',
        'How many trees are in the yard?',
      ],
      comparisons: [
        '中文"多少只鸭子"量词"只"不能省略，英语"How many ducks"直接用复数名词，不需要量词。',
      ],
    },
  ],
  dialogues: [
    {
      title: 'A Visit to the Farm',
      scene: 'Two students are visiting a farm with their teacher. They are looking at the animals and plants.',
      lines: [
        { speaker: 'Miss Li', text: 'Welcome to the farm, everyone!', translation: '欢迎大家来到农场！' },
        { speaker: 'Tom', text: 'Wow! What are these?', translation: '哇！这些是什么？' },
        { speaker: 'Miss Li', text: 'These are carrots. They are orange.', translation: '这些是胡萝卜。它们是橙色的。' },
        { speaker: 'Lucy', text: 'What are those over there?', translation: '那边那些是什么？' },
        { speaker: 'Miss Li', text: 'Those are sheep. How many sheep can you see?', translation: '那些是羊。你能看到几只羊？' },
        { speaker: 'Tom', text: 'Let me count... One, two, three... I can see five sheep!', translation: '让我数数……一、二、三……我能看到五只羊！' },
        { speaker: 'Lucy', text: 'Look! This is a rabbit. It\'s so cute!', translation: '看！这是一只兔子。好可爱！' },
        { speaker: 'Miss Li', text: 'Yes, and those are geese near the water.', translation: '是的，水边那些是鹅。' },
      ],
    },
  ],
  readings: [
    {
      title: 'Grandpa\'s Farm',
      text: 'My grandpa has a big farm. There are many animals and plants on the farm. In the yard, there are flowers and apple trees. The apples are red and sweet. My grandpa has chickens, ducks, and geese. The chickens are yellow. The ducks can swim in the pond. There are five white sheep on the hill. I also see a cute rabbit near the trees. I like the farm. It is fun to visit Grandpa\'s farm!',
      annotations: [
        { word: 'sweet', meaning: '甜的' },
        { word: 'pond', meaning: '池塘' },
        { word: 'hill', meaning: '小山' },
        { word: 'near', meaning: '在……附近' },
      ],
      questions: [
        { q: 'What is in the yard?', a: 'There are flowers and apple trees in the yard.' },
        { q: 'How many sheep are on the hill?', a: 'There are five sheep on the hill.' },
        { q: 'What colour are the chickens?', a: 'They are yellow.' },
        { q: 'Why does the writer like the farm?', a: 'Because it is fun to visit.' },
      ],
    },
  ],
  exercises: [
    {
      type: 'fill',
      instruction: '用this、that、these或those填空。',
      data: ['___ is a cat.（近处）', '___ are flowers.（近处）', '___ is a dog.（远处）', '___ are trees.（远处）'],
      answer: ['This', 'These', 'That', 'Those'],
    },
    {
      type: 'match',
      instruction: '将动物名称与对应的描述配对。',
      data: { animals: ['duck', 'rabbit', 'sheep', 'chicken'], descriptions: ['绵羊，单复数同形', '会游泳的动物', '又白又可爱的动物', '农场常见的家禽'] },
      answer: { duck: '会游泳的动物', rabbit: '又白又可爱的动物', sheep: '绵羊，单复数同形', chicken: '农场常见的家禽' },
    },
    {
      type: 'correct',
      instruction: '找出并改正句子中的错误。',
      data: ['This are flowers.', 'How many duck can you see?', 'Those is a tree.', 'There are five sheeps on the hill.'],
      answer: ['These are flowers.', 'How many ducks can you see?', 'That is a tree.', 'There are five sheep on the hill.'],
    },
    {
      type: 'reorder',
      instruction: '将单词重新排列成正确的句子。',
      data: ['are / what / these', 'many / how / there / ducks / are', 'a / this / is / cat', 'sheep / can / see / I / five'],
      answer: ['What are these?', 'How many ducks are there?', 'This is a cat.', 'I can see five sheep.'],
    },
    {
      type: 'fill',
      instruction: '填入正确的复数形式。',
      data: ['one goose — three ___', 'one tomato — two ___', 'one sheep — four ___', 'one chicken — six ___'],
      answer: ['geese', 'tomatoes', 'sheep', 'chickens'],
    },
  ],
  essays: [
    {
      title: 'My Visit to a Farm',
      body: 'Last weekend, I visited a farm with my family. The farm is very big. There are many animals. I see five white sheep on the hill. The chickens are yellow and cute. The ducks can swim in the pond. There are geese near the water. In the yard, there are red apples and orange carrots. The flowers are beautiful. My favourite animal is the rabbit. It is white and soft. I have fun on the farm. I want to go again!',
      level: 'B',
      keyPhrases: ['There are...', 'I see...', 'My favourite animal is...', 'I have fun...'],
      wordCount: 89,
      topic: 'Describing a farm visit',
    },
  ],
}
