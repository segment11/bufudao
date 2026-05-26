import type { Unit } from '../types'

export const g7u3: Unit = {
  id: 'g7u3',
  title: 'My School',
  grade: 7,
  semester: '上',
  unitNumber: 6,
  topic: 'School buildings and classroom descriptions',
  objectives: [
    'Learn vocabulary for school buildings and facilities',
    'Use "There is/are..." to describe places',
    'Use prepositions of place correctly',
    'Describe your school and classroom',
  ],
  words: [
    { word: 'hall', phonetic: '/hɔːl/', pos: 'n.', meaning: '礼堂；大厅', example: 'We have meetings in the hall.', exampleTranslation: '我们在礼堂开会。' },
    { word: 'building', phonetic: '/ˈbɪldɪŋ/', pos: 'n.', meaning: '建筑物；房子', example: 'Our school has three buildings.', exampleTranslation: '我们学校有三栋楼。' },
    { word: 'across', phonetic: '/əˈkrɒs/', pos: 'prep.', meaning: '过；穿过', example: 'The library is across from the gym.', exampleTranslation: '图书馆在体育馆对面。' },
    { word: 'field', phonetic: '/fiːld/', pos: 'n.', meaning: '场地；田地', example: 'We play football on the sports field.', exampleTranslation: '我们在操场上踢足球。' },
    { word: 'gym', phonetic: '/dʒɪm/', pos: 'n.', meaning: '体育馆；健身房', example: 'The gym is next to the library.', exampleTranslation: '体育馆在图书馆旁边。' },
    { word: 'office', phonetic: '/ˈɒfɪs/', pos: 'n.', meaning: '办公室', example: 'The teachers\' office is on the second floor.', exampleTranslation: '教师办公室在二楼。' },
    { word: 'large', phonetic: '/lɑːdʒ/', pos: 'adj.', meaning: '大的；大号的', example: 'We have a large playground.', exampleTranslation: '我们有一个大操场。' },
    { word: 'special', phonetic: '/ˈspeʃl/', pos: 'adj.', meaning: '特别的；特殊的', example: 'Our school has a special art room.', exampleTranslation: '我们学校有一间特别的美术教室。' },
    { word: 'smart', phonetic: '/smɑːt/', pos: 'adj.', meaning: '智能的', example: 'There is a smart whiteboard in our classroom.', exampleTranslation: '我们教室里有一块智能白板。' },
    { word: 'library', phonetic: '/ˈlaɪbrəri/', pos: 'n.', meaning: '图书馆', example: 'I often read books in the library.', exampleTranslation: '我经常在图书馆看书。' },
    { word: 'classroom', phonetic: '/ˈklɑːsruːm/', pos: 'n.', meaning: '教室', example: 'Our classroom is big and bright.', exampleTranslation: '我们的教室又大又明亮。' },
    { word: 'modern', phonetic: '/ˈmɒdn/', pos: 'adj.', meaning: '现代的；当代的', example: 'Our school is very modern.', exampleTranslation: '我们学校非常现代化。' },
    { word: 'screen', phonetic: '/skriːn/', pos: 'n.', meaning: '屏幕；银幕', example: 'Look at the screen, please.', exampleTranslation: '请看屏幕。' },
    { word: 'bookcase', phonetic: '/ˈbʊkkeɪs/', pos: 'n.', meaning: '书架；书柜', example: 'There are many books in the bookcase.', exampleTranslation: '书架里有很多书。' },
    { word: 'drawer', phonetic: '/drɔːə/', pos: 'n.', meaning: '抽屉', example: 'Open the drawer and take out a pen.', exampleTranslation: '打开抽屉拿一支笔。' },
    { word: 'corner', phonetic: '/ˈkɔːnə/', pos: 'n.', meaning: '角；墙角；街角', example: 'There is a reading corner in our classroom.', exampleTranslation: '我们教室里有一个阅读角。' },
    { word: 'flag', phonetic: '/flæɡ/', pos: 'n.', meaning: '旗；旗帜', example: 'We raise the flag every Monday.', exampleTranslation: '我们每周一升旗。' },
    { word: 'raise', phonetic: '/reɪz/', pos: 'v.', meaning: '使升高；提高', example: 'Please raise your hand.', exampleTranslation: '请举手。' },
    { word: 'amazing', phonetic: '/əˈmeɪzɪŋ/', pos: 'adj.', meaning: '令人惊奇的', example: 'Our new classroom is amazing!', exampleTranslation: '我们的新教室太棒了！' },
    { word: 'famous', phonetic: '/ˈfeɪməs/', pos: 'adj.', meaning: '著名的', example: 'Our school is famous for its library.', exampleTranslation: '我们学校以图书馆闻名。' },
  ],
  grammar: [
    {
      title: 'There be句型',
      explanation: 'There be句型表示"某地有某物/某人"。There is接单数名词/不可数名词，There are接复数名词。否定形式在be动词后加not（isn\'t/aren\'t），疑问句将be动词提到there前面。就近原则：be动词由最近的名词决定。',
      examples: [
        'There is a library in our school. → 我们学校有一个图书馆。',
        'There are 40 desks in the classroom. → 教室里有40张课桌。',
        '— Is there a gym? — Yes, there is. / No, there isn\'t.',
        'There is a book and two pens on the desk. （就近原则）',
      ],
      comparisons: [
        '中文"有"可以用于人和物，英语中"人有"用have/has，"某地有"用there be。',
        '中文"教室里有40张桌子"和"我有一本书"都用"有"，英语区分there be和have。',
      ],
    },
    {
      title: '方位介词',
      explanation: '常用方位介词：in front of（在……前面）、behind（在……后面）、across from（在……对面）、next to（在……旁边）、between...and...（在……和……之间）、in the middle of（在……中间）、on the left/right of（在……左/右边）。',
      examples: [
        'The library is next to the classroom. → 图书馆在教室旁边。',
        'The gym is behind the office. → 体育馆在办公室后面。',
        'There is a tree in front of the building. → 楼前有一棵树。',
        'The flag is in the middle of the playground. → 旗子在操场中间。',
      ],
      comparisons: [
        '中文方位词"在……前面""在……后面"等放在名词前，英语用介词短语放在be动词后。',
      ],
    },
  ],
  dialogues: [
    {
      title: 'A Tour of the School',
      scene: 'A new student, Lucy, is visiting the school. Li Ming is showing her around.',
      lines: [
        { speaker: 'Li Ming', text: 'Welcome to our school, Lucy! Let me show you around.', translation: '欢迎来到我们学校，Lucy！让我带你参观一下。' },
        { speaker: 'Lucy', text: 'Thank you! What\'s that building?', translation: '谢谢！那栋楼是什么？' },
        { speaker: 'Li Ming', text: 'That is our library. It\'s very large and famous.', translation: '那是我们的图书馆。它很大也很有名。' },
        { speaker: 'Lucy', text: 'Wow! Is there a gym in your school?', translation: '哇！你们学校有体育馆吗？' },
        { speaker: 'Li Ming', text: 'Yes, there is. It\'s across from the library.', translation: '有的。在图书馆对面。' },
        { speaker: 'Lucy', text: 'What\'s your classroom like?', translation: '你的教室是什么样的？' },
        { speaker: 'Li Ming', text: 'It\'s big and bright. There is a smart whiteboard and many bookcases.', translation: '又大又明亮。有一块智能白板和很多书架。' },
        { speaker: 'Lucy', text: 'That sounds amazing! I love this school!', translation: '听起来太棒了！我喜欢这个学校！' },
      ],
    },
  ],
  readings: [
    {
      title: 'Our Beautiful School',
      text: 'Our school is very beautiful. There are three buildings in our school. The classroom building is in the middle. There are 20 classrooms in it. The library is next to the classroom building. It is large and quiet. There are many books in the bookcases. The gym is across from the library. We have PE lessons there. In front of the classroom building, there is a big sports field. We raise the flag there every Monday. Our classroom is on the second floor. There is a smart whiteboard, 40 desks, and a reading corner. I love my school!',
      annotations: [
        { word: 'quiet', meaning: '安静的' },
        { word: 'lesson', meaning: '课程' },
        { word: 'floor', meaning: '楼层' },
        { word: 'bright', meaning: '明亮的' },
      ],
      questions: [
        { q: 'How many buildings are there in the school?', a: 'There are three buildings.' },
        { q: 'Where is the library?', a: 'It is next to the classroom building.' },
        { q: 'What is in front of the classroom building?', a: 'There is a big sports field.' },
        { q: 'What is in the classroom?', a: 'There is a smart whiteboard, 40 desks, and a reading corner.' },
      ],
    },
  ],
  exercises: [
    {
      type: 'fill',
      instruction: '用There is或There are填空。',
      data: ['___ a library in our school.', '___ 30 students in our class.', '___ a smart whiteboard in the classroom.', '___ many books in the bookcase.'],
      answer: ['There is', 'There are', 'There is', 'There are'],
    },
    {
      type: 'match',
      instruction: '将方位介词与对应的中文意思配对。',
      data: { prepositions: ['in front of', 'behind', 'next to', 'across from'], meanings: ['在……旁边', '在……对面', '在……前面', '在……后面'] },
      answer: { 'in front of': '在……前面', 'behind': '在……后面', 'next to': '在……旁边', 'across from': '在……对面' },
    },
    {
      type: 'correct',
      instruction: '找出并改正句子中的错误。',
      data: ['There is three buildings in our school.', 'The gym is next the library.', 'There are a book on the desk.', 'Is there some desks in the classroom?'],
      answer: ['There are three buildings in our school.', 'The gym is next to the library.', 'There is a book on the desk.', 'Are there some/any desks in the classroom?'],
    },
    {
      type: 'reorder',
      instruction: '将单词重新排列成正确的句子。',
      data: ['there / a / is / library / in / school / our', 'the / gym / is / where', 'is / the / next / classroom / to / library', 'there / many / are / in / books / the / bookcase'],
      answer: ['There is a library in our school.', 'Where is the gym?', 'The library is next to the classroom.', 'There are many books in the bookcase.'],
    },
    {
      type: 'fill',
      instruction: '根据提示用方位介词填空。',
      data: ['The library is ___ the gym.（在……对面）', 'The office is ___ the classroom.（在……后面）', 'The flag is ___ the playground.（在……中间）', 'The bookcase is ___ the window.（在……旁边）'],
      answer: ['across from', 'behind', 'in the middle of', 'next to'],
    },
  ],
  essays: [
    {
      title: 'My School',
      body: 'My school is big and beautiful. There are three buildings in my school. The classroom building is in the middle. My classroom is on the second floor. It is large and bright. There are 40 desks and a smart whiteboard in it. There is a reading corner in the back. The library is next to the classroom building. I often read books there. The gym is across from the library. We have PE lessons in the gym. In front of the buildings, there is a big sports field. We raise the flag every Monday. I love my school very much!',
      level: 'B',
      keyPhrases: ['There are...', 'My classroom is...', 'The library is next to...', 'I love my school.'],
      wordCount: 102,
      topic: 'Describing a school',
    },
  ],
}
