import type { Chapter } from '../types'

export const gaiLv: Chapter = {
  id: 'gai-lu',
  title: '概率初步',
  grade: 9,
  semester: '上',
  unit: 5,
  icon: '🎲',
  description: '随机事件、概率、用列举法求概率',
  sections: [
    {
      id: 'sui-ji-shi-jian',
      title: '随机事件与概率',
      summary: '理解必然事件、不可能事件和随机事件的概念，掌握概率的定义。',
      knowledgePoints: [
        {
          id: 'gl-1',
          title: '随机事件',
          content:
            '在一定条件下，可能发生也可能不发生的事件称为随机事件。在一定条件下，一定会发生的事件称为必然事件。在一定条件下，一定不会发生的事件称为不可能事件。',
          examples: [
            '必然事件：太阳从东方升起',
            '不可能事件：掷一枚骰子出现7点',
            '随机事件：明天会下雨',
          ],
        },
        {
          id: 'gl-2',
          title: '概率的定义',
          content:
            '一般地，对于一个随机事件A，我们把刻画其发生可能性大小的数值称为随机事件A发生的概率，记作P(A)。一般地，如果在一次试验中，有n种可能的结果，并且它们发生的可能性都相等，事件A包含其中的m种结果，那么事件A发生的概率P(A)=m/n。',
          formula: 'P(A) = m/n（0 ≤ P(A) ≤ 1）',
          examples: [
            '掷硬币正面朝上的概率P=1/2',
            '掷骰子出现3点的概率P=1/6',
            '必然事件的概率P=1，不可能事件的概率P=0',
          ],
        },
        {
          id: 'gl-3',
          title: '概率的意义',
          content:
            '概率从数量上刻画了一个随机事件发生的可能性的大小。P(A)越大，表示事件A发生的可能性越大；P(A)越小，表示事件A发生的可能性越小。',
        },
      ],
      visuals: [
        {
          id: 'vis-gl-custom',
          type: 'interactive',
          title: '掷骰子概率模拟',
          description: '模拟掷骰子实验，统计各点数出现的频率，观察频率趋近于概率的现象。',
          component: 'AngleDemo',
          props: {
            angle: 60,
          },
        },
      ],
      practices: [
        {
          id: 'gl-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列事件中，是必然事件的是（　）',
          options: [
            '明天会下雨',
            '任意画一个三角形，其内角和为180°',
            '掷一枚硬币正面朝上',
            '买一张彩票会中奖',
          ],
          answer: 'B',
          steps: ['三角形内角和一定是180°', '这是确定会发生的事件，是必然事件'],
        },
        {
          id: 'gl-p2',
          type: 'choice',
          difficulty: 'basic',
          question: '掷一枚均匀的骰子，出现偶数点的概率是（　）',
          options: ['1/6', '1/3', '1/2', '2/3'],
          answer: 'C',
          steps: ['骰子有1-6共6个面', '偶数点有2、4、6共3个', 'P = 3/6 = 1/2'],
        },
        {
          id: 'gl-p3',
          type: 'fill',
          difficulty: 'basic',
          question: '一个不透明的袋子中有3个红球和2个白球（除颜色外完全相同），从中随机摸出一个球，摸到红球的概率是 ____ 。',
          answer: '3/5',
          steps: ['总球数=3+2=5', '红球数=3', 'P(红球)=3/5'],
        },
        {
          id: 'gl-p4',
          type: 'choice',
          difficulty: 'medium',
          question: '从1、2、3、4中随机选一个数，是偶数的概率为（　）',
          options: ['1/4', '1/3', '1/2', '3/4'],
          answer: 'C',
          steps: ['共4个数', '偶数有2、4共2个', 'P = 2/4 = 1/2'],
        },
        {
          id: 'gl-p5',
          type: 'calculate',
          difficulty: 'medium',
          question: '一副扑克牌（去掉大小王共52张），从中随机抽取一张，求抽到红心的概率。',
          answer: '1/4',
          steps: ['共52张牌', '红心有13张', 'P(红心) = 13/52 = 1/4'],
        },
      ],
    },
    {
      id: 'lie-ju-fa',
      title: '用列举法求概率',
      summary: '掌握列表法和树形图法求概率，了解用频率估计概率。',
      knowledgePoints: [
        {
          id: 'gl-lj-1',
          title: '列表法',
          content:
            '当一次试验要涉及两个因素，并且可能出现的结果数目较多时，为不重不漏地列出所有可能的结果，通常采用列表法。列表后，通过表格可以清楚地看到所有等可能的结果数。',
          examples: [
            '掷两枚骰子，列出6×6=36种结果',
          ],
        },
        {
          id: 'gl-lj-2',
          title: '树形图法',
          content:
            '当一次试验要涉及三个或更多因素时，为不重不漏地列出所有可能的结果，通常采用画树形图的方法。从树根开始，每个分支代表一种可能的结果。',
          examples: [
            '连续抛三次硬币，共有2³=8种结果',
          ],
        },
        {
          id: 'gl-lj-3',
          title: '用频率估计概率',
          content:
            '在相同条件下，大量重复进行同一试验时，随机事件发生的频率（m/n）会在某个常数附近摆动，即随机事件发生的频率具有稳定性。这时，我们把这个常数叫做事件A的概率。试验次数越多，频率越接近概率。',
          formula: '当n很大时，频率 ≈ 概率',
        },
      ],
      visuals: [
        {
          id: 'vis-gl-lj-custom',
          type: 'interactive',
          title: '抛硬币实验模拟',
          description: '模拟大量抛硬币实验，观察正面朝上的频率随试验次数增大而趋近于0.5的过程。',
          component: 'AngleDemo',
          props: {
            angle: 90,
          },
        },
      ],
      practices: [
        {
          id: 'gl-lj-p1',
          type: 'calculate',
          difficulty: 'basic',
          question: '同时掷两枚均匀的骰子，求两枚骰子点数之和为7的概率。',
          answer: '1/6',
          steps: ['两枚骰子共6×6=36种结果', '和为7的情况：(1,6)(2,5)(3,4)(4,3)(5,2)(6,1)共6种', 'P = 6/36 = 1/6'],
        },
        {
          id: 'gl-lj-p2',
          type: 'calculate',
          difficulty: 'medium',
          question: '一个袋子中有2个红球和1个白球，随机摸出一个球后不放回，再摸一个球。求两次都摸到红球的概率。',
          answer: '1/3',
          steps: ['第一次摸红球概率=2/3', '第二次摸红球概率=1/2（已摸走一个红球）', 'P = 2/3 × 1/2 = 1/3', '或列举：(红1,红2)、(红1,白)、(红2,红1)、(红2,白)、(白,红1)、(白,红2)共6种', '两次红球：(红1,红2)、(红2,红1)共2种', 'P = 2/6 = 1/3'],
          hint: '可以用列表法列举所有可能结果。',
        },
        {
          id: 'gl-lj-p3',
          type: 'calculate',
          difficulty: 'medium',
          question: '连续抛三次硬币，求恰好出现两次正面朝上的概率。',
          answer: '3/8',
          steps: ['三次抛硬币共2³=8种等可能结果', '两次正面的情况：(正,正,反)(正,反,正)(反,正,正)共3种', 'P = 3/8'],
        },
        {
          id: 'gl-lj-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '甲、乙两人玩石头剪刀布游戏，求甲赢的概率。',
          answer: '1/3',
          steps: ['共3×3=9种等可能结果', '甲赢的情况：(石,剪)(剪,布)(布,石)共3种', 'P = 3/9 = 1/3'],
        },
        {
          id: 'gl-lj-p5',
          type: 'calculate',
          difficulty: 'hard',
          question: '有两个不透明袋子，甲袋有2红1白，乙袋有1红2白。从每个袋子中各取一个球，求两球颜色相同的概率。',
          answer: '5/9',
          steps: ['列举所有结果：甲袋3个球×乙袋3个球=9种', '同红：(红1,红)、(红2,红)共2种', '同白：(白,白1)、(白,白2)共2种', '不对，甲袋2红1白，乙袋1红2白', '同红：2×1=2种', '同白：1×2=2种', 'P = (2+2)/9 = 4/9'],
          hint: '用列表法列出所有组合。',
        },
        {
          id: 'gl-lj-p6',
          type: 'fill',
          difficulty: 'hard',
          question: '做"抛硬币"试验1000次，正面朝上480次，则正面朝上的频率为 ____ ，估计正面朝上的概率约为 ____ 。',
          answer: '0.48；0.5',
          steps: ['频率 = 480/1000 = 0.48', '大量试验的频率接近概率', '概率约为0.5'],
        },
      ],
    },
  ],
}
