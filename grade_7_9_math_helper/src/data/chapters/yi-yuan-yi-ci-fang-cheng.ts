import type { Chapter } from '../types'

export const yiYuanYiCiFangCheng: Chapter = {
  id: 'yi-yuan-yi-ci-fang-cheng',
  title: '一元一次方程',
  grade: 7,
  semester: '上',
  unit: 3,
  icon: '⚖️',
  description: '方程的概念、解一元一次方程、实际问题与方程',
  sections: [
    {
      id: 'cong-suan-shi-dao-fang-cheng',
      title: '从算式到方程',
      summary: '理解方程的概念，掌握等式的基本性质，学会用等式的性质变形。',
      knowledgePoints: [
        {
          id: 'csdfc-1',
          title: '方程的概念',
          content:
            '含有未知数的等式叫做方程。方程必须满足两个条件：①含有未知数 ②是等式。',
          formula: '方程 = 含有未知数的等式',
          examples: [
            '2x + 1 = 7 是方程（含未知数x，是等式）',
            '3 + 5 = 8 不是方程（不含未知数）',
            '2x + 1 不是方程（不是等式）',
          ],
        },
        {
          id: 'csdfc-2',
          title: '方程的解',
          content:
            '使方程左右两边相等的未知数的值叫做方程的解。求方程的解的过程叫做解方程。',
          examples: [
            'x = 3 是方程 2x + 1 = 7 的解，因为 2×3 + 1 = 7',
            '验证方法：将值代入方程，看左右两边是否相等',
          ],
        },
        {
          id: 'csdfc-3',
          title: '等式的性质',
          content:
            '等式的性质1：等式两边同时加上（或减去）同一个数（或式子），结果仍相等。等式的性质2：等式两边同时乘以（或除以）同一个不为0的数，结果仍相等。',
          formula:
            '性质1：若 a = b，则 a ± c = b ± c\n性质2：若 a = b，则 ac = bc，a/c = b/c（c≠0）',
          examples: [
            '由 x + 3 = 7，两边减3，得 x = 4',
            '由 2x = 8，两边除以2，得 x = 4',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-csdfc-geometry',
          type: 'svg',
          title: '等式与天平',
          description:
            '用天平模型理解等式：等式就像天平，左右两边保持平衡。对两边做相同操作，天平仍保持平衡。',
          component: 'BalanceScale',
          props: {
            leftItems: [
              { label: 'x', weight: 4 },
              { label: '3', weight: 3 },
            ],
            rightItems: [
              { label: '7', weight: 7 },
            ],
            balanced: true,
          },
        },
      ],
      practices: [
        {
          id: 'csdfc-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列各式中，是方程的是（　）',
          options: ['3 + 5 = 8', '2x - 1', '3x + 2 = 11', 'x + 1 > 0'],
          answer: 'C',
          steps: [
            '3 + 5 = 8：不含未知数，不是方程',
            '2x - 1：不是等式，不是方程',
            '3x + 2 = 11：含未知数x且是等式，是方程',
            'x + 1 > 0：不是等式（是不等式），不是方程',
          ],
        },
        {
          id: 'csdfc-p2',
          type: 'choice',
          difficulty: 'basic',
          question: 'x = 2 是下列哪个方程的解？（　）',
          options: ['2x + 1 = 6', '3x - 1 = 5', 'x + 3 = 6', '4 - x = 1'],
          answer: 'B',
          steps: [
            '代入 x=2 到 2×2+1=5≠6，不是',
            '代入 x=2 到 3×2-1=5=5，是',
            '代入 x=2 到 2+3=5≠6，不是',
            '代入 x=2 到 4-2=2≠1，不是',
          ],
        },
        {
          id: 'csdfc-p3',
          type: 'fill',
          difficulty: 'basic',
          question: '利用等式的性质填空：\n若 x + 5 = 12，则 x = ____',
          answer: '7',
          steps: ['等式两边同减5：x + 5 - 5 = 12 - 5', 'x = 7'],
        },
        {
          id: 'csdfc-p4',
          type: 'fill',
          difficulty: 'basic',
          question: '利用等式的性质填空：\n若 3x = 18，则 x = ____',
          answer: '6',
          steps: ['等式两边同除以3：3x ÷ 3 = 18 ÷ 3', 'x = 6'],
        },
        {
          id: 'csdfc-p5',
          type: 'choice',
          difficulty: 'medium',
          question:
            '下列等式变形中，正确的是（　）',
          options: [
            '由 x + 2 = 5，得 x = 5 + 2',
            '由 3x = 6，得 x = 2',
            '由 x/3 = 4，得 x = 4/3',
            '由 x - 1 = 3，得 x = 3 - 1',
          ],
          answer: 'B',
          steps: [
            'x + 2 = 5 应得 x = 5 - 2 = 3，错误',
            '3x = 6 两边除以3得 x = 2，正确',
            'x/3 = 4 应得 x = 4 × 3 = 12，错误',
            'x - 1 = 3 应得 x = 3 + 1 = 4，错误',
          ],
        },
      ],
    },
    {
      id: 'jie-fang-cheng-yi',
      title: '解一元一次方程（一）',
      summary:
        '学会用合并同类项和移项的方法解一元一次方程，掌握解方程的基本步骤。',
      knowledgePoints: [
        {
          id: 'jfcy-1',
          title: '一元一次方程',
          content:
            '只含有一个未知数（一元），未知数的最高次数是1（一次）的方程，叫做一元一次方程。标准形式为 ax + b = 0（a≠0）。',
          formula: 'ax + b = 0（a ≠ 0）',
          examples: [
            '2x + 3 = 7 是一元一次方程',
            'x² + 1 = 0 不是（最高次数为2）',
            'x + y = 3 不是（含两个未知数）',
          ],
        },
        {
          id: 'jfcy-2',
          title: '移项',
          content:
            '把方程中的某一项改变符号后，从方程的一边移到另一边，叫做移项。移项的依据是等式的性质1。注意：移项要变号！',
          formula: '从左边移到右边（或反之），正变负，负变正',
          examples: [
            'x + 3 = 7 → x = 7 - 3（+3移过去变-3）',
            '2x - 1 = x + 5 → 2x - x = 5 + 1',
          ],
        },
        {
          id: 'jfcy-3',
          title: '解方程的步骤（合并同类项与移项）',
          content:
            '解方程的一般步骤：①移项（把含未知数的项移到一边，常数项移到另一边）；②合并同类项；③系数化为1（两边除以未知数的系数）。',
          examples: [
            '解 3x + 5 = 2x + 8：',
            '移项：3x - 2x = 8 - 5',
            '合并：x = 3',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-jfcy-numberline',
          type: 'svg',
          title: '用数轴理解方程的解',
          description:
            '在数轴上标出方程 2x + 3 = 9 的解 x = 3，直观展示方程解的含义。',
          component: 'NumberLine',
          props: {
            min: -2,
            max: 8,
            marks: [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8],
            highlights: [
              { value: 3, label: 'x = 3', color: '#22c55e' },
              { value: 0, label: '0', color: '#3b82f6' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'jfcy-p1',
          type: 'calculate',
          difficulty: 'basic',
          question: '解方程：x + 7 = 13',
          answer: 'x = 6',
          steps: [
            '移项：x = 13 - 7',
            '计算：x = 6',
            '验证：6 + 7 = 13 ✓',
          ],
        },
        {
          id: 'jfcy-p2',
          type: 'calculate',
          difficulty: 'basic',
          question: '解方程：3x = 18',
          answer: 'x = 6',
          steps: [
            '系数化为1：x = 18 ÷ 3',
            'x = 6',
            '验证：3 × 6 = 18 ✓',
          ],
        },
        {
          id: 'jfcy-p3',
          type: 'calculate',
          difficulty: 'basic',
          question: '解方程：2x + 5 = 17',
          answer: 'x = 6',
          steps: [
            '移项：2x = 17 - 5',
            '2x = 12',
            '系数化为1：x = 6',
            '验证：2 × 6 + 5 = 17 ✓',
          ],
        },
        {
          id: 'jfcy-p4',
          type: 'calculate',
          difficulty: 'basic',
          question: '解方程：5x - 3 = 3x + 7',
          answer: 'x = 5',
          steps: [
            '移项：5x - 3x = 7 + 3',
            '合并：2x = 10',
            '系数化为1：x = 5',
            '验证：5×5-3=22，3×5+7=22 ✓',
          ],
        },
        {
          id: 'jfcy-p5',
          type: 'calculate',
          difficulty: 'medium',
          question: '解方程：7x - 2(x + 3) = 3x - 2',
          answer: 'x = 2',
          steps: [
            '去括号：7x - 2x - 6 = 3x - 2',
            '移项：7x - 2x - 3x = -2 + 6',
            '合并：2x = 4',
            '系数化为1：x = 2',
            '验证：7×2 - 2×5 = 4，3×2 - 2 = 4 ✓',
          ],
          hint: '先去括号，再移项合并。',
        },
        {
          id: 'jfcy-p6',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '已知 x = 2 是方程 3a - x = 5 的解，求 a 的值。',
          answer: 'a = 7/3',
          steps: [
            '将 x=2 代入方程：3a - 2 = 5',
            '移项：3a = 5 + 2',
            '3a = 7',
            'a = 7/3',
          ],
          hint: '把已知解代入方程，转化为关于a的方程求解。',
        },
      ],
    },
    {
      id: 'jie-fang-cheng-er',
      title: '解一元一次方程（二）',
      summary:
        '学会用去括号和去分母的方法解更复杂的一元一次方程。',
      knowledgePoints: [
        {
          id: 'jfce-1',
          title: '去括号',
          content:
            '方程中含有括号时，利用去括号法则和分配律去掉括号。括号前是正号，去掉括号后各项符号不变；括号前是负号，去掉括号后各项变号。',
          formula: '+(a - b) = a - b\n-(a - b) = -a + b',
          examples: [
            '3(x + 2) = 3x + 6',
            '-2(x - 5) = -2x + 10',
          ],
        },
        {
          id: 'jfce-2',
          title: '去分母',
          content:
            '方程两边同时乘以各分母的最小公倍数，从而消去分母。注意：去分母时，方程两边的每一项都要乘，不能遗漏。分子如果是多项式，去分母后要加括号。',
          formula: '两边同乘最小公倍数',
          examples: [
            'x/2 + x/3 = 5，两边乘6：3x + 2x = 30',
            '(x+1)/2 = 3，两边乘2：x + 1 = 6',
          ],
        },
        {
          id: 'jfce-3',
          title: '解一元一次方程的完整步骤',
          content:
            '解一元一次方程的一般步骤：①去分母（方程两边同乘最小公倍数）；②去括号（利用分配律）；③移项（含x的项移一边，常数移另一边）；④合并同类项；⑤系数化为1。',
          examples: [
            '解 (x+1)/2 - (x-1)/3 = 1：',
            '去分母（乘6）：3(x+1) - 2(x-1) = 6',
            '去括号：3x + 3 - 2x + 2 = 6',
            '合并：x + 5 = 6',
            '移项：x = 1',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-jfce-custom',
          type: 'interactive',
          title: '解方程步骤演示',
          description:
            '交互式演示解方程 (2x+1)/3 = (x+5)/2 的完整过程：去分母→去括号→移项→合并→系数化为1。',
          component: 'NumberLine',
          props: {
            min: -2,
            max: 16,
            marks: [-2, 0, 2, 4, 6, 8, 10, 12, 14, 16],
            highlights: [
              { value: 13, label: 'x = 13', color: '#22c55e' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'jfce-p1',
          type: 'calculate',
          difficulty: 'basic',
          question: '解方程：3(x - 2) + 1 = x + 3',
          answer: 'x = 4',
          steps: [
            '去括号：3x - 6 + 1 = x + 3',
            '3x - 5 = x + 3',
            '移项：3x - x = 3 + 5',
            '2x = 8',
            'x = 4',
          ],
        },
        {
          id: 'jfce-p2',
          type: 'calculate',
          difficulty: 'basic',
          question: '解方程：x/3 + x/4 = 7',
          answer: 'x = 12',
          steps: [
            '去分母（两边乘12）：4x + 3x = 84',
            '合并：7x = 84',
            'x = 12',
          ],
        },
        {
          id: 'jfce-p3',
          type: 'calculate',
          difficulty: 'basic',
          question: '解方程：(x + 2)/2 = 5',
          answer: 'x = 8',
          steps: [
            '去分母（两边乘2）：x + 2 = 10',
            '移项：x = 8',
          ],
        },
        {
          id: 'jfce-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '解方程：(2x - 1)/3 - (x + 1)/2 = 1',
          answer: 'x = 11',
          steps: [
            '去分母（两边乘6）：2(2x-1) - 3(x+1) = 6',
            '去括号：4x - 2 - 3x - 3 = 6',
            '合并：x - 5 = 6',
            'x = 11',
          ],
          hint: '去分母时分子是多项式的要加括号。',
        },
        {
          id: 'jfce-p5',
          type: 'calculate',
          difficulty: 'medium',
          question: '解方程：3x - [2(x - 1) + 5] = 2',
          answer: 'x = 5',
          steps: [
            '先去小括号：3x - [2x - 2 + 5] = 2',
            '合并中括号内：3x - [2x + 3] = 2',
            '去中括号：3x - 2x - 3 = 2',
            '合并：x - 3 = 2',
            'x = 5',
          ],
          hint: '从内到外逐层去括号。',
        },
        {
          id: 'jfce-p6',
          type: 'calculate',
          difficulty: 'medium',
          question: '解方程：(3x + 1)/2 - 2 = (x - 1)/3',
          answer: 'x = 1',
          steps: [
            '去分母（两边乘6）：3(3x+1) - 12 = 2(x-1)',
            '去括号：9x + 3 - 12 = 2x - 2',
            '合并：9x - 9 = 2x - 2',
            '移项：9x - 2x = -2 + 9',
            '7x = 7',
            'x = 1',
          ],
          hint: '去分母时不要忘记常数项也要乘。',
        },
      ],
    },
    {
      id: 'shi-ji-wen-ti-fang-cheng',
      title: '实际问题与一元一次方程',
      summary:
        '学会用方程的思想解决实际应用问题，掌握列方程解应用题的步骤和常见题型。',
      knowledgePoints: [
        {
          id: 'sjwtfc-1',
          title: '列方程解应用题的步骤',
          content:
            '列方程解应用题的一般步骤：①审题——弄清题意，找出等量关系；②设未知数——用字母表示要求的量；③列方程——根据等量关系列出方程；④解方程——求出未知数的值；⑤检验——检查求得的值是否符合实际意义；⑥答——写出答案。',
          formula: '审→设→列→解→检验→答',
        },
        {
          id: 'sjwtfc-2',
          title: '常见应用题型',
          content:
            '常见的一元一次方程应用题类型：①行程问题（路程=速度×时间）；②工程问题（工作量=工作效率×工作时间）；③利润问题（利润=售价-进价，利润率=利润/进价×100%）；④等积变形问题；⑤调配问题。',
          formula:
            '路程 = 速度 × 时间\n工作量 = 效率 × 时间\n利润率 = 利润/进价 × 100%',
          examples: [
            '行程问题：甲乙相距300km，甲速60km/h，乙速40km/h，相向而行，几小时相遇？',
            '工程问题：一项工程，甲独做10天完成，乙独做15天完成，合做几天完成？',
          ],
        },
        {
          id: 'sjwtfc-3',
          title: '设未知数的技巧',
          content:
            '设未知数时，一般有两种方法：①直接设——问什么设什么；②间接设——设其他量为x，便于列方程。选择合适的方法可以使方程更简单。',
          examples: [
            '直接设：问"甲有多少元？"就设"甲有x元"',
            '间接设：问"甲比乙多多少？"可以设乙为x',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-sjwtfc-coordinate',
          type: 'svg',
          title: '行程问题中的路程-时间图',
          description:
            '用坐标系展示行程问题：甲从A地出发以60km/h行驶，乙从B地出发以40km/h行驶，两人相向而行，相遇时路程之和等于总路程。',
          component: 'CoordinatePlane',
          props: {
            xRange: [0, 4],
            yRange: [0, 200],
            points: [
              { x: 0, y: 0, label: '起点' },
              { x: 1, y: 60, label: '60km' },
              { x: 2, y: 120, label: '120km' },
              { x: 3, y: 180, label: '180km' },
            ],
            lines: [
              { from: [0, 0], to: [3, 180], label: '60km/h' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'sjwtfc-p1',
          type: 'calculate',
          difficulty: 'basic',
          question:
            '甲、乙两地相距300千米，一辆汽车以每小时60千米的速度从甲地开往乙地，需要几小时到达？',
          answer: '5小时',
          steps: [
            '设需要x小时到达',
            '路程 = 速度 × 时间',
            '300 = 60x',
            'x = 5',
            '答：需要5小时到达。',
          ],
        },
        {
          id: 'sjwtfc-p2',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '甲、乙两地相距360千米，A车从甲地出发以每小时60千米的速度向乙地行驶，同时B车从乙地出发以每小时40千米的速度向甲地行驶。问两车几小时后相遇？',
          answer: '3.6小时',
          steps: [
            '设x小时后相遇',
            'A车行驶路程：60x',
            'B车行驶路程：40x',
            '60x + 40x = 360',
            '100x = 360',
            'x = 3.6',
            '答：3.6小时后相遇。',
          ],
          hint: '相遇时两车路程之和等于总路程。',
        },
        {
          id: 'sjwtfc-p3',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '一件商品进价200元，加价30%后作为标价，然后再打八折出售。这件商品的利润是多少元？',
          answer: '8元',
          steps: [
            '标价 = 200 × (1 + 30%) = 260元',
            '售价 = 260 × 0.8 = 208元',
            '利润 = 208 - 200 = 8元',
            '答：利润是8元。',
          ],
          hint: '注意先算标价，再算打折后的售价。',
        },
        {
          id: 'sjwtfc-p4',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '一项工程，甲单独做需12天完成，乙单独做需18天完成。两人合做几天可以完成？',
          answer: '7.2天',
          steps: [
            '设两人合做x天完成',
            '甲每天完成 1/12，乙每天完成 1/18',
            '(1/12 + 1/18)x = 1',
            '(3/36 + 2/36)x = 1',
            '(5/36)x = 1',
            'x = 36/5 = 7.2',
            '答：两人合做7.2天可以完成。',
          ],
          hint: '把总工程量看作1，甲乙效率分别为1/12和1/18。',
        },
        {
          id: 'sjwtfc-p5',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '小明比小红大3岁，两人年龄之和为27岁。求小明和小红各多少岁？',
          answer: '小明15岁，小红12岁',
          steps: [
            '设小红x岁，则小明(x+3)岁',
            'x + (x + 3) = 27',
            '2x + 3 = 27',
            '2x = 24',
            'x = 12',
            '小红12岁，小明15岁',
          ],
        },
        {
          id: 'sjwtfc-p6',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '一个两位数，个位数字是十位数字的2倍多1，个位数字与十位数字的和为10。求这个两位数。',
          answer: '37',
          steps: [
            '设十位数字为x，则个位数字为 2x + 1',
            'x + (2x + 1) = 10',
            '3x + 1 = 10',
            '3x = 9',
            'x = 3',
            '十位数字为3，个位数字为 2×3+1 = 7',
            '这个两位数是37',
          ],
          hint: '设十位数字为x，用x表示个位数字，利用数字之和列方程。',
        },
      ],
    },
  ],
}
