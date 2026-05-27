export interface ExamPoint {
  grade: 7 | 8 | 9
  category: string
  points: {
    title: string
    description: string
    examples: string[]
    commonMistakes: string[]
  }[]
}

export const examPoints: ExamPoint[] = [
  {
    grade: 7,
    category: '基础语法',
    points: [
      {
        title: 'Be动词用法',
        description: 'be动词(am/is/are)是七年级核心考点，易与中文"是"混淆',
        examples: [
          'I am a student. / She is from Beijing.',
          'They are in Class 3. / We are friends.',
        ],
        commonMistakes: [
          '错误：I is a student. / 正确：I am a student.',
          '错误：She are my teacher. / 正确：She is my teacher.',
          '错误：I am not know. / 正确：I don\'t know.',
        ],
      },
      {
        title: '人称代词与物主代词',
        description: '主格/宾格和形容词性/名词性物主代词是高频考点',
        examples: [
          'I → me / he → him / she → her',
          'my → mine / your → yours / his → his / her → hers',
        ],
        commonMistakes: [
          '错误：This is my. / 正确：This is mine. / This is my book.',
          '错误：Her is a teacher. / 正确：She is a teacher. / Her teacher is...',
        ],
      },
      {
        title: 'There be 句型',
        description: '"某地有某物"，be动词形式根据后面名词单复数决定',
        examples: [
          'There is a book on the desk.',
          'There are many students in the classroom.',
          'There is some water in the cup.',
        ],
        commonMistakes: [
          '错误：There has... / 正确：There is/are...',
          '错误：There is many books. / 正确：There are many books.',
        ],
      },
      {
        title: '一般现在时',
        description: '描述经常性动作，第三人称单数动词要加-s/-es',
        examples: [
          'I play football every day.',
          'She plays football every day.',
          'He usually goes to school by bike.',
        ],
        commonMistakes: [
          '错误：He play football. / 正确：He plays football.',
          '错误：She don\'t like it. / 正确：She doesn\'t like it.',
        ],
      },
      {
        title: '情态动词Can',
        description: 'can表示能力，后接动词原形，否定为cannot/can\'t',
        examples: [
          'I can swim. / Can you play the piano?',
          'She can\'t drive. / We can speak English.',
        ],
        commonMistakes: [
          '错误：I can to swim. / 正确：I can swim.',
          '错误：He can sings. / 正确：He can sing.',
        ],
      },
    ],
  },
  {
    grade: 8,
    category: '核心语法',
    points: [
      {
        title: '一般过去时',
        description: '描述过去发生的动作，规则动词加-ed，不规则动词需特殊记忆',
        examples: [
          'I went to Beijing last week.',
          'She played tennis yesterday.',
          'They didn\'t come to school yesterday.',
        ],
        commonMistakes: [
          '错误：I go to school yesterday. / 正确：I went to school yesterday.',
          '错误：He goed home. / 正确：He went home.',
        ],
      },
      {
        title: '形容词/副词比较级和最高级',
        description: '两者比较用比较级，三者及以上用最高级',
        examples: [
          'Tom is taller than Jim. / Tom is the tallest in our class.',
          'She runs faster than me. / He is the fastest runner.',
        ],
        commonMistakes: [
          '错误：She is more beautiful than any girl. / 正确：She is more beautiful than any other girl.',
          '错误：He runs more fast. / 正确：He runs faster.',
        ],
      },
      {
        title: '现在完成时',
        description: '过去的动作对现在有影响，或从过去持续到现在，常与already/yet/for/since连用',
        examples: [
          'I have finished my homework. / Have you eaten yet?',
          'She has lived here since 2010. / We have known each other for 5 years.',
        ],
        commonMistakes: [
          '错误：I have went there. / 正确：I have gone there. / I have been there.',
          '错误：I have come here since two days. / 正确：I have been here for two days.',
        ],
      },
      {
        title: '条件状语从句 (If从句)',
        description: 'If从句用现在时，主句用将来时(will)',
        examples: [
          'If it rains tomorrow, I will stay at home.',
          'If you study hard, you will pass the exam.',
        ],
        commonMistakes: [
          '错误：If it will rain... / 正确：If it rains... (主将从现)',
        ],
      },
      {
        title: '情态动词must/should/have to',
        description: 'must表示必须，should表示建议，have to表示客观需要',
        examples: [
          'You must finish your homework first.',
          'You should drink more water.',
          'I have to go to school by bus today.',
        ],
        commonMistakes: [
          '错误：You must not go. (语气太重) / 建议：You shouldn\'t go.',
          '错误：I must to work. / 正确：I must work.',
        ],
      },
    ],
  },
  {
    grade: 9,
    category: '综合语法',
    points: [
      {
        title: '被动语态',
        description: '动作承受者作主语，be + 过去分词，不同时态be动词变化',
        examples: [
          'The book is read by us. (一般现在时)',
          'The work was done yesterday. (一般过去时)',
          'The trees will be planted next week. (一般将来时)',
          'English is spoken in many countries. (现在进行时)',
        ],
        commonMistakes: [
          '错误：The book is read by me yesterday. / 正确：The book was read by me yesterday.',
          '忽略时态变化：be动词形式必须与时态一致',
        ],
      },
      {
        title: '宾语从句',
        description: 'that引导的陈述句，if/whether一般疑问句，疑问词从句',
        examples: [
          'I think that he is right.',
          'I don\'t know if/whether she will come.',
          'Can you tell me where the station is?',
        ],
        commonMistakes: [
          '错误：I think that he is right. (that不可省) 实际可省，但考试从句语序必须陈述句语序',
          '错误：Tell me where is the station? / 正确：Tell me where the station is?',
        ],
      },
      {
        title: '定语从句',
        description: 'who/that指人，which/that指物，修饰限定名词',
        examples: [
          'The boy who is playing football is my brother.',
          'The book which I bought yesterday is interesting.',
          'The teacher who teaches us English is very kind.',
        ],
        commonMistakes: [
          '错误：The book who is on the desk is mine. / 正确：The book which/that is on the desk is mine.',
          '关系词使用混淆：who/which/that要根据先行词决定',
        ],
      },
      {
        title: 'used to / be used to',
        description: 'used to do过去常常，be used to doing习惯于',
        examples: [
          'I used to play basketball. (我以前常打篮球)',
          'I am used to getting up early. (我习惯早起)',
        ],
        commonMistakes: [
          '错误：I used to playing basketball. / 正确：I used to play basketball.',
          '混淆：I am used to do... (我习惯做...) / I used to do... (我曾经做...)',
        ],
      },
      {
        title: '主谓一致',
        description: '第三人称单数主语动词要变化，不定代词作主语动词单数',
        examples: [
          'Each student has a book. / Either teacher is OK.',
          'The number of students is 40. / A number of students are playing.',
        ],
        commonMistakes: [
          '错误：Everyone have their books. / 正确：Everyone has their book.',
          '错误：Either of the answers are correct. / 正确：Either of the answers is correct.',
        ],
      },
    ],
  },
]
