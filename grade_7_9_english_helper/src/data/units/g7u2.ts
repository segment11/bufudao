import type { Unit } from '../types'

export const g7u2: Unit = {
  id: 'g7u2',
  title: 'We\'re Family!',
  grade: 7,
  semester: '上',
  unitNumber: 5,
  topic: 'Family members and family activities',
  objectives: [
    'Learn vocabulary for family members',
    'Use demonstrative pronouns to introduce family',
    'Use possessive case of nouns',
    'Talk about family activities',
  ],
  words: [
    { word: 'family', phonetic: '/ˈfæməli/', pos: 'n.', meaning: '家；家庭；家人', example: 'I love my family.', exampleTranslation: '我爱我的家人。' },
    { word: 'father', phonetic: '/ˈfɑːðə/', pos: 'n.', meaning: '父亲；爸爸', example: 'My father is a teacher.', exampleTranslation: '我爸爸是一名老师。' },
    { word: 'mother', phonetic: '/ˈmʌðə/', pos: 'n.', meaning: '母亲；妈妈', example: 'My mother cooks dinner for us.', exampleTranslation: '我妈妈为我们做晚饭。' },
    { word: 'parent', phonetic: '/ˈpeərənt/', pos: 'n.', meaning: '父（母）亲（复数parents）', example: 'My parents love me very much.', exampleTranslation: '我的父母非常爱我。' },
    { word: 'grandfather', phonetic: '/ˈɡrændˌfɑːðə/', pos: 'n.', meaning: '祖父；外祖父', example: 'My grandfather is 70 years old.', exampleTranslation: '我爷爷70岁了。' },
    { word: 'grandmother', phonetic: '/ˈɡrændˌmʌðə/', pos: 'n.', meaning: '祖母；外祖母', example: 'My grandmother lives with us.', exampleTranslation: '我奶奶和我们住在一起。' },
    { word: 'uncle', phonetic: '/ˈʌŋkl/', pos: 'n.', meaning: '叔父；伯父；舅父；姑父；姨父', example: 'My uncle works in a hospital.', exampleTranslation: '我叔叔在医院工作。' },
    { word: 'aunt', phonetic: '/ɑːnt/', pos: 'n.', meaning: '姑母；姨母；伯母；婶母；舅母', example: 'My aunt is very kind.', exampleTranslation: '我阿姨非常和蔼。' },
    { word: 'cousin', phonetic: '/ˈkʌzn/', pos: 'n.', meaning: '堂（表）兄/弟/姐/妹', example: 'My cousin and I are the same age.', exampleTranslation: '我表哥和我同龄。' },
    { word: 'son', phonetic: '/sʌn/', pos: 'n.', meaning: '儿子', example: 'He is their only son.', exampleTranslation: '他是他们的独子。' },
    { word: 'daughter', phonetic: '/ˈdɔːtə/', pos: 'n.', meaning: '女儿', example: 'She has two daughters.', exampleTranslation: '她有两个女儿。' },
    { word: 'husband', phonetic: '/ˈhʌzbənd/', pos: 'n.', meaning: '丈夫', example: 'Her husband is a doctor.', exampleTranslation: '她的丈夫是一名医生。' },
    { word: 'wife', phonetic: '/waɪf/', pos: 'n.', meaning: '妻子（复数wives）', example: 'His wife is very beautiful.', exampleTranslation: '他的妻子非常漂亮。' },
    { word: 'brother', phonetic: '/ˈbrʌðə/', pos: 'n.', meaning: '兄；弟', example: 'My brother is two years older than me.', exampleTranslation: '我哥哥比我大两岁。' },
    { word: 'sister', phonetic: '/ˈsɪstə/', pos: 'n.', meaning: '姐；妹', example: 'I have one sister.', exampleTranslation: '我有一个姐姐。' },
    { word: 'photo', phonetic: '/ˈfəʊtəʊ/', pos: 'n.', meaning: '照片（复数photos）', example: 'This is a photo of my family.', exampleTranslation: '这是一张我的全家福。' },
    { word: 'mean', phonetic: '/miːn/', pos: 'v.', meaning: '意思是；打算', example: 'What does this word mean?', exampleTranslation: '这个词是什么意思？' },
    { word: 'together', phonetic: '/təˈɡeðə/', pos: 'adv.', meaning: '一起；共同', example: 'We have dinner together every evening.', exampleTranslation: '我们每天晚上一起吃晚饭。' },
    { word: 'activity', phonetic: '/ækˈtɪvəti/', pos: 'n.', meaning: '活动（复数activities）', example: 'We have many family activities.', exampleTranslation: '我们有很多家庭活动。' },
    { word: 'chess', phonetic: '/tʃes/', pos: 'n.', meaning: '国际象棋', example: 'My father and I often play chess.', exampleTranslation: '我爸爸和我经常下棋。' },
  ],
  grammar: [
    {
      title: '指示代词this/that/these/those介绍家人',
      explanation: '介绍家人时用"This is..."（这是……）或"These are..."（这些是……）。远处的人用"That is..."或"Those are..."。this/that后接is，these/those后接are。',
      examples: [
        'This is my father. → 这是我爸爸。',
        'These are my parents. → 这是我父母。',
        'That is my uncle. → 那是我叔叔。',
        'Those are my grandparents. → 那是我的祖父母。',
      ],
      comparisons: [
        '中文介绍人时说"这是我爸爸"，英语用"This is my father"，不能说"He is my father"来介绍。',
      ],
    },
    {
      title: '名词所有格',
      explanation: '在名词后加\'s表示所属关系，即"的"。以s结尾的复数名词只加\'。用"Whose...?"提问物品归属。',
      examples: [
        'This is Tom\'s father. → 这是Tom的爸爸。',
        'These are my parents\' photo. → 这是我父母的照片。',
        '— Whose pen is this? — It\'s Lucy\'s.',
        'My sister\'s name is Lily. → 我姐姐的名字叫Lily。',
      ],
      comparisons: [
        '中文"的"用在所有名词后，英语名词所有格需要加\'s（或s\'），形式不同。',
        '中文"这是谁的书"，英语用"Whose book is this?"，whose紧跟名词。',
      ],
    },
  ],
  dialogues: [
    {
      title: 'My Family Photo',
      scene: 'Li Ming is showing a family photo to his new friend Lucy at school.',
      lines: [
        { speaker: 'Lucy', text: 'Hi, Li Ming! What\'s that in your hand?', translation: '嗨，李明！你手里那个是什么？' },
        { speaker: 'Li Ming', text: 'It\'s a photo of my family. Look!', translation: '这是我家的全家福。看！' },
        { speaker: 'Lucy', text: 'Oh, what a nice photo! Who is this?', translation: '哦，照片真好！这位是谁？' },
        { speaker: 'Li Ming', text: 'This is my father. He is a doctor. And this is my mother.', translation: '这是我爸爸。他是医生。这位是我妈妈。' },
        { speaker: 'Lucy', text: 'Is she a doctor too?', translation: '她也是医生吗？' },
        { speaker: 'Li Ming', text: 'No, she is a teacher. And these are my grandparents.', translation: '不，她是老师。这些是我的祖父母。' },
        { speaker: 'Lucy', text: 'Who is the boy next to you?', translation: '你旁边那个男孩是谁？' },
        { speaker: 'Li Ming', text: 'That\'s my brother. He is a student too. We often play chess together.', translation: '那是我哥哥。他也是学生。我们经常一起下棋。' },
      ],
    },
  ],
  readings: [
    {
      title: 'My Happy Family',
      text: 'Hello! My name is Tom. Let me tell you about my family. I have a big family. My father is a doctor. He works in a hospital. My mother is a teacher. She teaches English. I have a brother and a sister. My brother\'s name is Jack. He is 15 years old. He likes playing basketball. My sister\'s name is Lily. She is only 5. My grandparents live with us. My grandfather likes reading. My grandmother likes cooking. We often have dinner together on weekends. I love my family!',
      annotations: [
        { word: 'hospital', meaning: '医院' },
        { word: 'teach', meaning: '教' },
        { word: 'weekend', meaning: '周末' },
        { word: 'only', meaning: '仅仅；只有' },
      ],
      questions: [
        { q: 'What does Tom\'s father do?', a: 'He is a doctor.' },
        { q: 'How old is Tom\'s sister?', a: 'She is only 5 years old.' },
        { q: 'What does Tom\'s grandmother like?', a: 'She likes cooking.' },
        { q: 'When do they have dinner together?', a: 'They often have dinner together on weekends.' },
      ],
    },
  ],
  exercises: [
    {
      type: 'fill',
      instruction: '用名词所有格形式填空。',
      data: ['This is ___ (Tom) father.', 'These are my ___ (parents) books.', '___ (Lucy) sister is my friend.', 'Whose pen is this? — It\'s ___ (Jack).'],
      answer: ['Tom\'s', 'parents\'', 'Lucy\'s', 'Jack\'s'],
    },
    {
      type: 'match',
      instruction: '将家庭称谓与中文意思配对。',
      data: { words: ['grandfather', 'uncle', 'cousin', 'daughter'], meanings: ['女儿', '祖父', '堂/表兄弟姐妹', '叔父/伯父'] },
      answer: { grandfather: '祖父', uncle: '叔父/伯父', cousin: '堂/表兄弟姐妹', daughter: '女儿' },
    },
    {
      type: 'correct',
      instruction: '找出并改正句子中的错误。',
      data: ['This is Toms\' father.', 'These is my parents.', 'My sister name is Lily.', 'Whose is this pen?'],
      answer: ['This is Tom\'s father.', 'These are my parents.', 'My sister\'s name is Lily.', 'Whose pen is this?'],
    },
    {
      type: 'reorder',
      instruction: '将单词重新排列成正确的句子。',
      data: ['is / photo / this / a / my / of / family', 'these / your / are / parents', 'is / sister / my / name / Lily\'s', 'together / dinner / we / have'],
      answer: ['This is a photo of my family.', 'Are these your parents?', 'My sister\'s name is Lily.', 'We have dinner together.'],
    },
    {
      type: 'fill',
      instruction: '用this、that、these或those填空。',
      data: ['___ is my father.（指着近处照片）', '___ are my grandparents.（指着近处照片）', '___ is my uncle.（指着远处的人）', '___ are my cousins.（指着远处的人）'],
      answer: ['This', 'These', 'That', 'Those'],
    },
    {
      type: 'match',
      instruction: '根据描述选择正确的家庭成员。',
      data: { descriptions: ['My mother\'s brother.', 'My father\'s father.', 'My aunt\'s son.', 'My parents\' daughter.'], family: ['grandfather', 'cousin', 'uncle', 'daughter'] },
      answer: { 'My mother\'s brother.': 'uncle', 'My father\'s father.': 'grandfather', 'My aunt\'s son.': 'cousin', 'My parents\' daughter.': 'daughter' },
    },
  ],
  essays: [
    {
      title: 'My Family',
      body: 'I have a happy family. There are five people in my family: my grandfather, my father, my mother, my brother and me. My grandfather is 68 years old. He likes reading newspapers. My father is a doctor. He works very hard. My mother is a teacher. She teaches Chinese. My brother is a student. He is in Grade 9. He likes playing basketball. I am in Grade 7. My hobby is playing chess. On weekends, we often visit my grandparents. We have a big dinner together. I love my family very much!',
      level: 'B',
      keyPhrases: ['There are... people in my family.', 'My father is a...', 'He/She likes...', 'On weekends, we often...'],
      wordCount: 104,
      topic: 'Introducing family',
    },
  ],
}
