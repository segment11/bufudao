import type { Unit } from '../types'

export const g7su1: Unit = {
  id: 'g7su1',
  title: 'Hello!',
  grade: 7,
  semester: '上',
  unitNumber: 1,
  topic: 'Greetings and self-introduction',
  objectives: [
    'Learn common English greetings',
    'Introduce yourself using "I\'m..." and "My name is..."',
    'Use be verbs (am/is/are) correctly',
    'Recognize and write the 26 English letters',
  ],
  words: [
    { word: 'hello', phonetic: '/həˈləʊ/', pos: 'interj.', meaning: '你好', example: 'Hello! How are you?', exampleTranslation: '你好！你好吗？' },
    { word: 'hi', phonetic: '/haɪ/', pos: 'interj.', meaning: '嗨；喂', example: 'Hi, my name is Tom.', exampleTranslation: '嗨，我叫Tom。' },
    { word: 'good', phonetic: '/ɡʊd/', pos: 'adj.', meaning: '好的', example: 'Good morning, everyone!', exampleTranslation: '大家早上好！' },
    { word: 'morning', phonetic: '/ˈmɔːnɪŋ/', pos: 'n.', meaning: '早晨；上午', example: 'Good morning, Miss Li.', exampleTranslation: '早上好，李老师。' },
    { word: 'afternoon', phonetic: '/ˌɑːftəˈnuːn/', pos: 'n.', meaning: '下午', example: 'Good afternoon, class.', exampleTranslation: '同学们下午好。' },
    { word: 'evening', phonetic: '/ˈiːvnɪŋ/', pos: 'n.', meaning: '晚上；傍晚', example: 'Good evening, Mr Wang.', exampleTranslation: '王先生晚上好。' },
    { word: 'how', phonetic: '/haʊ/', pos: 'adv.', meaning: '如何；怎样', example: 'How are you?', exampleTranslation: '你好吗？' },
    { word: 'fine', phonetic: '/faɪn/', pos: 'adj.', meaning: '健康的；美好的', example: 'I\'m fine, thank you.', exampleTranslation: '我很好，谢谢。' },
    { word: 'OK', phonetic: '/ˌəʊˈkeɪ/', pos: 'adj.', meaning: '好；可以', example: '— Are you OK? — Yes, I\'m OK.', exampleTranslation: '— 你还好吗？ — 是的，我没事。' },
    { word: 'what', phonetic: '/wɒt/', pos: 'pron.', meaning: '什么', example: 'What is your name?', exampleTranslation: '你叫什么名字？' },
    { word: 'is', phonetic: '/ɪz/', pos: 'v.', meaning: '是', example: 'This is my friend.', exampleTranslation: '这是我的朋友。' },
    { word: 'this', phonetic: '/ðɪs/', pos: 'pron.', meaning: '这；这个', example: 'This is my teacher.', exampleTranslation: '这是我的老师。' },
    { word: 'spell', phonetic: '/spel/', pos: 'v.', meaning: '用字母拼；拼写', example: 'Can you spell your name?', exampleTranslation: '你能拼一下你的名字吗？' },
    { word: 'please', phonetic: '/pliːz/', pos: 'interj.', meaning: '请', example: 'Sit down, please.', exampleTranslation: '请坐下。' },
    { word: 'greet', phonetic: '/ɡriːt/', pos: 'v.', meaning: '招呼；问候', example: 'We greet our teacher every morning.', exampleTranslation: '我们每天早上向老师问好。' },
    { word: 'everyone', phonetic: '/ˈevriwʌn/', pos: 'pron.', meaning: '每人；所有人', example: 'Hello, everyone!', exampleTranslation: '大家好！' },
    { word: 'start', phonetic: '/stɑːt/', pos: 'v.', meaning: '开始；着手', example: 'Let\'s start our lesson.', exampleTranslation: '让我们开始上课吧。' },
    { word: 'conversation', phonetic: '/ˌkɒnvəˈseɪʃn/', pos: 'n.', meaning: '谈话；交谈', example: 'We have a short conversation.', exampleTranslation: '我们进行了一段简短的交谈。' },
    { word: 'unit', phonetic: '/ˈjuːnɪt/', pos: 'n.', meaning: '单元', example: 'We are learning Unit 1.', exampleTranslation: '我们在学第一单元。' },
    { word: 'section', phonetic: '/ˈsekʃn/', pos: 'n.', meaning: '部分；地区', example: 'Read Section A first.', exampleTranslation: '先读A部分。' },
  ],
  grammar: [
    {
      title: 'Be动词(am/is/are)的基本用法',
      explanation: 'Be动词包括am、is、are三个形式。I搭配am，he/she/it搭配is，you/we/they搭配are。在口语中，它们常以缩写形式出现：I\'m、he\'s、she\'s、it\'s、you\'re、we\'re、they\'re。',
      examples: [
        'I am (I\'m) a student. → 我是一个学生。',
        'She is (She\'s) my friend. → 她是我的朋友。',
        'They are (They\'re) classmates. → 他们是同班同学。',
        '— How are you? — I am fine. → — 你好吗？— 我很好。',
      ],
      comparisons: [
        '中文中"是"只有一个字，不随主语变化；英语中be动词必须根据主语选择am、is或are。',
        '中文"你好吗"不需要be动词，英语则必须用"are"：How are you?',
      ],
    },
    {
      title: '26个英文字母的发音与书写',
      explanation: '英语共有26个字母，分为元音字母（A, E, I, O, U）和辅音字母。大写字母用于句首、人名、地名等。字母在四线三格中有不同的书写位置。',
      examples: [
        'A /eɪ/ B /biː/ C /siː/ D /diː/ E /iː/',
        'My name is Alice. （人名首字母大写）',
        'I\'m in Class 1, Grade 7. （班级、年级首字母大写）',
        'China is a big country. （国家名首字母大写）',
      ],
      comparisons: [
        '中文没有大小写之分，英语中句首字母必须大写，人名和地名也要大写。',
      ],
    },
  ],
  dialogues: [
    {
      title: 'First Day at School',
      scene: 'It is the first day of Grade 7. Two students meet at the school gate in the morning.',
      lines: [
        { speaker: 'Li Ming', text: 'Good morning!', translation: '早上好！' },
        { speaker: 'Wang Fang', text: 'Good morning! How are you?', translation: '早上好！你好吗？' },
        { speaker: 'Li Ming', text: 'I\'m fine, thank you. And you?', translation: '我很好，谢谢。你呢？' },
        { speaker: 'Wang Fang', text: 'I\'m fine too. What\'s your name?', translation: '我也很好。你叫什么名字？' },
        { speaker: 'Li Ming', text: 'My name is Li Ming. I\'m in Class 1.', translation: '我叫李明。我在一班。' },
        { speaker: 'Wang Fang', text: 'Nice to meet you! I\'m Wang Fang. I\'m in Class 1 too!', translation: '很高兴认识你！我叫王芳。我也在一班！' },
        { speaker: 'Li Ming', text: 'Great! Let\'s go to the classroom together.', translation: '太好了！我们一起去教室吧。' },
        { speaker: 'Wang Fang', text: 'OK! Let\'s go!', translation: '好的！走吧！' },
      ],
    },
  ],
  readings: [
    {
      title: 'My First English Lesson',
      text: 'Hello! My name is Li Ming. I am a student in Grade 7. This is my first English lesson. My teacher is Miss Wang. She is very nice. I have a new friend. His name is Tom. He is from Beijing. We are in the same class. English is fun! I like it very much.',
      annotations: [
        { word: 'first', meaning: '第一的' },
        { word: 'lesson', meaning: '课程' },
        { word: 'nice', meaning: '友好的；好的' },
        { word: 'same', meaning: '相同的' },
      ],
      questions: [
        { q: 'What grade is Li Ming in?', a: 'He is in Grade 7.' },
        { q: 'Who is Li Ming\'s English teacher?', a: 'His English teacher is Miss Wang.' },
        { q: 'Where is Tom from?', a: 'He is from Beijing.' },
        { q: 'Does Li Ming like English?', a: 'Yes, he likes English very much.' },
      ],
    },
  ],
  exercises: [
    {
      type: 'fill',
      instruction: '用am、is或are填空。',
      data: ['I ___ a student.', 'She ___ my friend.', 'They ___ in Class 1.', 'How ___ you?', 'This ___ my teacher.'],
      answer: ['am', 'is', 'are', 'are', 'is'],
    },
    {
      type: 'match',
      instruction: '将问候语与合适的回应配对。',
      data: { left: ['Good morning!', 'How are you?', 'What\'s your name?', 'Hello!'], right: ['I\'m Li Ming.', 'Good morning!', 'Hello!', 'I\'m fine, thanks.'] },
      answer: { 'Good morning!': 'Good morning!', 'How are you?': 'I\'m fine, thanks.', 'What\'s your name?': 'I\'m Li Ming.', 'Hello!': 'Hello!' },
    },
    {
      type: 'correct',
      instruction: '找出并改正句子中的错误。',
      data: ['I is a student.', 'She are my friend.', 'How am you?', 'This are my book.'],
      answer: ['I am a student.', 'She is my friend.', 'How are you?', 'This is my book.'],
    },
    {
      type: 'reorder',
      instruction: '将单词重新排列成正确的句子。',
      data: ['name / my / is / Li Ming', 'you / how / are', 'morning / good / teacher', 'fine / I / am / thank you'],
      answer: ['My name is Li Ming.', 'How are you?', 'Good morning, teacher.', 'I am fine, thank you.'],
    },
    {
      type: 'fill',
      instruction: '根据汉语提示完成句子。',
      data: ['___(你好)! My name is Tom.', 'Good ___(下午), class.', 'I\'m ___(好), thank you.', 'What is ___(你的) name?'],
      answer: ['Hello', 'afternoon', 'fine', 'your'],
    },
  ],
  essays: [
    {
      title: 'Introduce Yourself',
      body: 'Hello! My name is Li Ming. I am a student. I am in Grade 7. I am 12 years old. I am from Shanghai. My teacher is Miss Wang. She is very nice. I have many friends at school. We are all happy. I like English. It is fun!',
      level: 'B',
      keyPhrases: ['My name is...', 'I am a student.', 'I am from...', 'I like...'],
      wordCount: 52,
      topic: 'Self-introduction',
    },
  ],
}
