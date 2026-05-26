import type { Unit } from '../types'

export const g7u4: Unit = {
  id: 'g7u4',
  title: 'My Favourite Subject',
  grade: 7,
  semester: '上',
  unitNumber: 7,
  topic: 'School subjects and preferences',
  objectives: [
    'Learn vocabulary for school subjects',
    'Use "and/but/because" to connect ideas',
    'Ask and answer about favourite subjects',
    'Give reasons for preferences',
  ],
  words: [
    { word: 'subject', phonetic: '/ˈsʌbdʒɪkt/', pos: 'n.', meaning: '学科；科目', example: 'What is your favourite subject?', exampleTranslation: '你最喜欢的学科是什么？' },
    { word: 'math', phonetic: '/mæθ/', pos: 'n.', meaning: '数学', example: 'I think math is interesting.', exampleTranslation: '我认为数学很有趣。' },
    { word: 'Chinese', phonetic: '/tʃaɪˈniːz/', pos: 'n.', meaning: '语文；汉语；中国人（的）', example: 'Chinese is my first language.', exampleTranslation: '语文是我的母语。' },
    { word: 'English', phonetic: '/ˈɪŋɡlɪʃ/', pos: 'n.', meaning: '英语；英国人（的）', example: 'I study English every day.', exampleTranslation: '我每天学英语。' },
    { word: 'science', phonetic: '/ˈsaɪəns/', pos: 'n.', meaning: '科学', example: 'Science is very exciting.', exampleTranslation: '科学非常令人激动。' },
    { word: 'history', phonetic: '/ˈhɪstri/', pos: 'n.', meaning: '历史；历史课', example: 'We learn about the past in history.', exampleTranslation: '我们在历史课了解过去。' },
    { word: 'geography', phonetic: '/dʒiˈɒɡrəfi/', pos: 'n.', meaning: '地理（学）', example: 'Geography helps us learn about the world.', exampleTranslation: '地理帮助我们了解世界。' },
    { word: 'biology', phonetic: '/baɪˈɒlədʒi/', pos: 'n.', meaning: '生物学', example: 'We study plants and animals in biology.', exampleTranslation: '我们在生物课学习动植物。' },
    { word: 'music', phonetic: '/ˈmjuːzɪk/', pos: 'n.', meaning: '音乐', example: 'I like listening to music.', exampleTranslation: '我喜欢听音乐。' },
    { word: 'art', phonetic: '/ɑːt/', pos: 'n.', meaning: '美术', example: 'She is good at art.', exampleTranslation: '她擅长美术。' },
    { word: 'PE', phonetic: '/piː iː/', pos: 'n.', meaning: '体育（physical education）', example: 'We have PE on Monday and Wednesday.', exampleTranslation: '我们周一和周三有体育课。' },
    { word: 'favourite', phonetic: '/ˈfeɪvərɪt/', pos: 'adj.', meaning: '最喜欢的', example: 'My favourite subject is English.', exampleTranslation: '我最喜欢的学科是英语。' },
    { word: 'because', phonetic: '/bɪˈkɒz/', pos: 'conj.', meaning: '因为', example: 'I like English because it is fun.', exampleTranslation: '我喜欢英语因为它很有趣。' },
    { word: 'interesting', phonetic: '/ˈɪntrəstɪŋ/', pos: 'adj.', meaning: '有趣的', example: 'The book is very interesting.', exampleTranslation: '这本书非常有趣。' },
    { word: 'useful', phonetic: '/ˈjuːsfl/', pos: 'adj.', meaning: '有用的；有益的', example: 'English is very useful.', exampleTranslation: '英语非常有用。' },
    { word: 'exciting', phonetic: '/ɪkˈsaɪtɪŋ/', pos: 'adj.', meaning: '令人激动的', example: 'The science experiment is exciting.', exampleTranslation: '这个科学实验令人激动。' },
    { word: 'boring', phonetic: '/ˈbɔːrɪŋ/', pos: 'adj.', meaning: '乏味的；令人厌烦的', example: 'I think history is boring.', exampleTranslation: '我认为历史很无聊。' },
    { word: 'difficult', phonetic: '/ˈdɪfɪkəlt/', pos: 'adj.', meaning: '困难的', example: 'Math is difficult for me.', exampleTranslation: '数学对我来说很难。' },
    { word: 'easy', phonetic: '/ˈiːzi/', pos: 'adj.', meaning: '简单的', example: 'This question is easy.', exampleTranslation: '这个问题很简单。' },
    { word: 'fun', phonetic: '/fʌn/', pos: 'adj.', meaning: '有趣的；令人愉快的', example: 'PE is really fun!', exampleTranslation: '体育课真的很有趣！' },
  ],
  grammar: [
    {
      title: '连词and/but/because的用法',
      explanation: 'and表示并列（"和"），but表示转折（"但是"），because表示原因（"因为"）。注意：because和so不能同时出现在一个句子中。',
      examples: [
        'I like English and math. → 我喜欢英语和数学。（并列）',
        'I like English, but I don\'t like history. → 我喜欢英语，但我不喜欢历史。（转折）',
        'I like English because it is interesting. → 我喜欢英语因为它很有趣。（原因）',
        '（错误）Because I like English, so I study hard. → because和so不能同时使用。',
      ],
      comparisons: [
        '中文"因为……所以……"常同时出现，英语中because和so不能同时使用，只能选其一。',
        '中文"和"连接所有并列内容，英语中and只连接最后两项，前面用逗号：A, B and C。',
      ],
    },
    {
      title: 'Why引导的特殊疑问句',
      explanation: '用"Why do you like...?"询问喜欢某事物的原因。回答用"Because..."。注意why提问用because回答。',
      examples: [
        '— Why do you like English? — Because it is fun.',
        '— Why does she like art? — Because she likes drawing.',
        'Why is science your favourite subject?',
        '— Why don\'t you like math? — Because it is difficult.',
      ],
      comparisons: [
        '中文"为什么"问"因为"答，和英语习惯一致。但英语中必须用"Because..."开头回答。',
      ],
    },
  ],
  dialogues: [
    {
      title: 'Talking About Subjects',
      scene: 'Two students are talking about their favourite subjects after class.',
      lines: [
        { speaker: 'Tom', text: 'Hi, Lucy! What\'s your favourite subject?', translation: '嗨，Lucy！你最喜欢的学科是什么？' },
        { speaker: 'Lucy', text: 'My favourite subject is English. I like it very much.', translation: '我最喜欢的学科是英语。我非常喜欢它。' },
        { speaker: 'Tom', text: 'Why do you like English?', translation: '你为什么喜欢英语？' },
        { speaker: 'Lucy', text: 'Because it is interesting and useful. What about you?', translation: '因为它既有趣又有用。你呢？' },
        { speaker: 'Tom', text: 'I like science. It is exciting!', translation: '我喜欢科学。它令人激动！' },
        { speaker: 'Lucy', text: 'Do you like math?', translation: '你喜欢数学吗？' },
        { speaker: 'Tom', text: 'No, I don\'t. Math is difficult for me, but I still work hard.', translation: '不，我不喜欢。数学对我来说很难，但我仍然努力学习。' },
        { speaker: 'Lucy', text: 'That\'s the right attitude! Let\'s study together!', translation: '这种态度是对的！让我们一起学习吧！' },
      ],
    },
  ],
  readings: [
    {
      title: 'Different Favourite Subjects',
      text: 'Students in Class 1 have different favourite subjects. Tom likes science best because it is exciting. He wants to be a scientist. Lucy\'s favourite subject is English. She thinks it is useful and fun. She reads English books every day. Jack likes PE because he loves sports. He plays basketball and football. But he doesn\'t like math because it is difficult. Lily likes art and music. She says art is beautiful and music makes her happy. All the students work hard at every subject. Their teacher says every subject is important.',
      annotations: [
        { word: 'scientist', meaning: '科学家' },
        { word: 'best', meaning: '最好地' },
        { word: 'important', meaning: '重要的' },
        { word: 'attitude', meaning: '态度' },
      ],
      questions: [
        { q: 'Why does Tom like science?', a: 'Because it is exciting.' },
        { q: 'What does Lucy do every day?', a: 'She reads English books every day.' },
        { q: 'Why doesn\'t Jack like math?', a: 'Because it is difficult.' },
        { q: 'What does the teacher say about subjects?', a: 'Every subject is important.' },
      ],
    },
  ],
  exercises: [
    {
      type: 'fill',
      instruction: '用and、but或because填空。',
      data: ['I like English ___ it is fun.', 'She likes art ___ she doesn\'t like math.', 'I study Chinese ___ English.', 'He works hard ___ he wants to be a scientist.'],
      answer: ['because', 'but', 'and', 'because'],
    },
    {
      type: 'match',
      instruction: '将学科名称与对应的描述配对。',
      data: { subjects: ['science', 'PE', 'music', 'geography'], descriptions: ['关于世界的学科', '做运动的课', '学习自然规律的学科', '唱歌和听乐器的课'] },
      answer: { science: '学习自然规律的学科', PE: '做运动的课', music: '唱歌和听乐器的课', geography: '关于世界的学科' },
    },
    {
      type: 'correct',
      instruction: '找出并改正句子中的错误。',
      data: ['Because I like English, so I study hard.', 'My favourite subject are English.', 'Why do you likes science?', 'I don\'t like math because is boring.'],
      answer: ['I study hard because I like English.', 'My favourite subject is English.', 'Why do you like science?', 'I don\'t like math because it is boring.'],
    },
    {
      type: 'reorder',
      instruction: '将单词重新排列成正确的句子。',
      data: ['favourite / your / what / is / subject', 'like / why / you / do / science', 'is / interesting / I / English / like / because / it', 'difficult / but / math / I / is / like / it'],
      answer: ['What is your favourite subject?', 'Why do you like science?', 'I like English because it is interesting.', 'Math is difficult but I like it.'],
    },
    {
      type: 'fill',
      instruction: '根据描述写出学科名称。',
      data: ['We learn about the past. → ___', 'We study numbers and shapes. → ___', 'We sing and listen to music. → ___', 'We run and play sports. → ___'],
      answer: ['history', 'math', 'music', 'PE'],
    },
    {
      type: 'match',
      instruction: '将形容词与对应的反义词配对。',
      data: { words: ['interesting', 'easy', 'exciting', 'useful'], opposites: ['boring', 'useless', 'difficult', 'boring'] },
      answer: { interesting: 'boring', easy: 'difficult', exciting: 'boring', useful: 'useless' },
    },
  ],
  essays: [
    {
      title: 'My Favourite Subject',
      body: 'My favourite subject is English. I like it because it is interesting and useful. We learn new words and sentences in every lesson. Our English teacher, Miss Wang, is very kind. She makes the class fun. We play games and sing English songs. I also read English storybooks after school. English helps me talk with people from other countries. It is difficult sometimes, but I never give up. I want to speak English very well. I believe practice makes perfect!',
      level: 'B',
      keyPhrases: ['My favourite subject is...', 'I like it because...', 'Our teacher is...', 'English helps me...'],
      wordCount: 88,
      topic: 'Favourite school subject',
    },
  ],
}
