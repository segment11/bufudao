import type { Chapter } from '../types'

export const youLiShu: Chapter = {
  id: 'you-li-shu',
  title: '有理数',
  grade: 7,
  semester: '上',
  unit: 1,
  icon: 'Hash',
  description: '学习正数与负数的概念，有理数的分类，以及有理数的加减乘除和乘方运算。',
  sections: [
    {
      id: 'zheng-shu-he-fu-shu',
      title: '正数和负数',
      summary: '认识正数、负数的概念，学会用正负数表示具有相反意义的量，理解0的特殊含义。',
      knowledgePoints: [
        {
          id: 'zs-fs-1',
          title: '正数和负数的概念',
          content:
            '大于0的数叫做正数，如 +3、3.5、+1/2。在正数前面加上"-"号的数叫做负数，如 -3、-2.7、-1/3。0既不是正数也不是负数，它是正数和负数的分界点。',
          formula: '正数 > 0，负数 < 0，0既不是正数也不是负数',
          examples: ['+5 是正数，读作"正五"', '-3.2 是负数，读作"负三点二"'],
        },
        {
          id: 'zs-fs-2',
          title: '用正负数表示相反意义的量',
          content:
            '在现实生活中，有许多具有相反意义的量，可以用正数和负数来表示。习惯上，把"上升""增加""零上"等规定为正，把"下降""减少""零下"等规定为负。',
          examples: [
            '零上8℃记作 +8℃，零下5℃记作 -5℃',
            '向东走100米记作 +100米，向西走80米记作 -80米',
            '收入500元记作 +500元，支出300元记作 -300元',
          ],
        },
        {
          id: 'zs-fs-3',
          title: '0的意义',
          content:
            '0不仅仅表示"没有"，它还是正数和负数的分界。在实际问题中，0可以表示一个确定的量，例如0℃表示冰点温度，海拔0米表示海平面。',
        },
      ],
      visuals: [
        {
          id: 'vis-fs-numberline',
          type: 'svg',
          title: '正数和负数在数轴上的表示',
          description: '数轴上展示正数和负数，0为分界点，正数在右侧，负数在左侧。',
          component: 'NumberLine',
          props: {
            min: -8,
            max: 8,
            marks: [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8],
            highlights: [
              { value: 0, label: '0（分界点）', color: '#3b82f6' },
              { value: -5, label: '-5（负数）', color: '#ef4444' },
              { value: 3, label: '+3（正数）', color: '#22c55e' },
              { value: 7, label: '+7（正数）', color: '#22c55e' },
              { value: -3, label: '-3（负数）', color: '#ef4444' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'zs-fs-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列各数中，负数是（　）',
          options: ['+2', '0', '-0.5', '3/4'],
          answer: 'C',
          hint: '负数前面带有"-"号。',
          steps: ['+2 前面有"+"号，是正数', '0 既不是正数也不是负数', '-0.5 前面有"-"号，是负数', '3/4 是正数'],
        },
        {
          id: 'zs-fs-p2',
          type: 'choice',
          difficulty: 'basic',
          question:
            '如果规定向东为正，那么向西走30米应记作（　）',
          options: ['+30米', '-30米', '30米', '0米'],
          answer: 'B',
          hint: '与正方向相反的方向用负数表示。',
          steps: ['规定向东为正，即向东记作"+', '向西与向东是相反方向', '所以向西走30米记作 -30米'],
        },
        {
          id: 'zs-fs-p3',
          type: 'fill',
          difficulty: 'basic',
          question: '如果零上12℃记作 +12℃，那么零下7℃应记作 ____ 。',
          answer: '-7℃',
          hint: '零上与零下是具有相反意义的量。',
        },
        {
          id: 'zs-fs-p4',
          type: 'fill',
          difficulty: 'basic',
          question: '某地海拔高度为 -150米，表示该地比海平面 ____ 150米（填"高"或"低"）。',
          answer: '低',
          hint: '海拔高于海平面记为正，低于海平面记为负。',
        },
        {
          id: 'zs-fs-p5',
          type: 'fill',
          difficulty: 'medium',
          question:
            '一种零件的内径尺寸要求是 10±0.05（单位：mm），表示内径的标准尺寸是 ____ mm，合格范围是 ____ mm 到 ____ mm。',
          answer: '10；9.95；10.05',
          hint: '+0.05 表示比标准多0.05mm，-0.05 表示比标准少0.05mm。',
          steps: [
            '标准尺寸是10mm',
            '10+0.05=10.05mm（最大值）',
            '10-0.05=9.95mm（最小值）',
            '合格范围：9.95mm 到 10.05mm',
          ],
        },
      ],
    },
    {
      id: 'you-li-shu-fen-lei',
      title: '有理数',
      summary: '理解有理数的定义，掌握有理数的两种分类方法：按整数和分数分类，按正负分类。',
      knowledgePoints: [
        {
          id: 'yls-1',
          title: '有理数的定义',
          content:
            '整数和分数统称为有理数。也就是说，能表示为两个整数之比（p/q，其中q≠0）的数叫做有理数。',
          formula: '有理数 = 整数 + 分数',
        },
        {
          id: 'yls-2',
          title: '有理数的分类',
          content:
            '有理数按定义分类：分为整数（正整数、0、负整数）和分数（正分数、负分数）。有理数按符号分类：分为正有理数（正整数、正分数）、0、负有理数（负整数、负分数）。',
          examples: [
            '正整数：1, 2, 3, ...',
            '负整数：-1, -2, -3, ...',
            '正分数：1/2, 3/4, 0.5',
            '负分数：-1/3, -2/5, -0.7',
          ],
        },
        {
          id: 'yls-3',
          title: '注意要点',
          content:
            '有限小数和无限循环小数都是有理数，因为它们都可以化为分数。但无限不循环小数（如π、√2）不是有理数。0是整数但既不是正数也不是负数。',
          examples: ['0.5 = 1/2，是有理数', '0.333... = 1/3，是有理数', 'π = 3.14159...，不是有理数'],
        },
      ],
      visuals: [
        {
          id: 'vis-yls-numberline',
          type: 'svg',
          title: '有理数在数轴上的表示',
          description:
            '数轴上用不同颜色标注整数和分数，蓝色标注整数，绿色标注分数。',
          component: 'NumberLine',
          props: {
            min: -5,
            max: 5,
            marks: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
            highlights: [
              { value: -4, label: '-4（整数）', color: '#3b82f6' },
              { value: -2, label: '-2（整数）', color: '#3b82f6' },
              { value: 0, label: '0（整数）', color: '#3b82f6' },
              { value: 3, label: '3（整数）', color: '#3b82f6' },
              { value: 5, label: '5（整数）', color: '#3b82f6' },
              { value: -2.5, label: '-5/2（分数）', color: '#22c55e' },
              { value: -0.5, label: '-1/2（分数）', color: '#22c55e' },
              { value: 1.5, label: '3/2（分数）', color: '#22c55e' },
              { value: 3.5, label: '7/2（分数）', color: '#22c55e' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'yls-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列各数中，属于正整数的是（　）',
          options: ['-3', '0', '2', '1/2'],
          answer: 'C',
          steps: ['-3 是负整数', '0 既不是正数也不是负数', '2 是正整数', '1/2 是正分数'],
        },
        {
          id: 'yls-p2',
          type: 'choice',
          difficulty: 'basic',
          question: '下列说法正确的是（　）',
          options: [
            '0是最小的有理数',
            '负分数不是有理数',
            '整数和分数统称为有理数',
            '-1是最大的负整数',
          ],
          answer: 'C',
          steps: [
            '0不是最小的有理数，负数比0小',
            '负分数是有理数',
            '整数和分数统称为有理数，这是有理数的定义',
            '-1不是最大的负整数，没有最大的负整数',
          ],
        },
        {
          id: 'yls-p3',
          type: 'choice',
          difficulty: 'basic',
          question: '下列各数：-3、0、1/2、-0.7、π、√2 中，有理数有（　）个',
          options: ['3', '4', '5', '6'],
          answer: 'B',
          steps: [
            '-3 是负整数，是有理数',
            '0 是整数，是有理数',
            '1/2 是分数，是有理数',
            '-0.7 是有限小数，即 -7/10，是有理数',
            'π 是无限不循环小数，不是有理数',
            '√2 是无限不循环小数，不是有理数',
            '所以有理数共4个',
          ],
        },
        {
          id: 'yls-p4',
          type: 'fill',
          difficulty: 'basic',
          question:
            '将下列各数填入相应的集合中：-5、+3、0、-1/3、2.4、-0.7\n正数集合：{ ____ }\n负数集合：{ ____ }\n整数集合：{ ____ }\n分数集合：{ ____ }',
          answer:
            '正数集合：{+3, 2.4}；负数集合：{-5, -1/3, -0.7}；整数集合：{-5, +3, 0}；分数集合：{-1/3, 2.4, -0.7}',
          hint: '注意0是整数但既不是正数也不是负数。',
        },
        {
          id: 'yls-p5',
          type: 'choice',
          difficulty: 'medium',
          question: '下列四个数中，属于负分数的是（　）',
          options: ['-2', '-2/3', '0', '3.14'],
          answer: 'B',
          steps: ['-2 是负整数', '-2/3 是负分数', '0 不是负数', '3.14 是正小数（正分数）'],
        },
      ],
    },
    {
      id: 'jia-jian-fa',
      title: '有理数的加减法',
      summary:
        '掌握有理数加法法则和减法法则，能运用加法运算律简化计算，理解加减混合运算。',
      knowledgePoints: [
        {
          id: 'jjf-1',
          title: '有理数加法法则',
          content:
            '①同号两数相加，取相同的符号，并把绝对值相加。②异号两数相加，取绝对值较大的加数的符号，并用较大的绝对值减去较小的绝对值。③互为相反数的两个数相加得0。④一个数同0相加，仍得这个数。',
          formula:
            '(+) + (+) = +\n(-) + (-) = -\n(+a) + (-b) = ±(|a| - |b|)',
          examples: [
            '(+3) + (+5) = +8',
            '(-3) + (-5) = -8',
            '(+7) + (-3) = +4',
            '(-7) + (+3) = -4',
          ],
        },
        {
          id: 'jjf-2',
          title: '加法运算律',
          content:
            '加法交换律：两个数相加，交换加数的位置，和不变。加法结合律：三个数相加，先把前两个数相加，或者先把后两个数相加，和不变。',
          formula: 'a + b = b + a\n(a + b) + c = a + (b + c)',
          examples: [
            '3 + (-5) = (-5) + 3 = -2',
            '[(-2) + 3] + (-1) = (-2) + [3 + (-1)] = 0',
          ],
        },
        {
          id: 'jjf-3',
          title: '有理数减法法则',
          content: '减去一个数，等于加上这个数的相反数。',
          formula: 'a - b = a + (-b)',
          examples: [
            '3 - 5 = 3 + (-5) = -2',
            '(-3) - (-5) = (-3) + 5 = 2',
            '(-3) - 5 = (-3) + (-5) = -8',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-jjf-numberline',
          type: 'svg',
          title: '用数轴演示有理数加法',
          description:
            '在数轴上演示 -3 + 5 的过程：从 -3 出发，向右移动5个单位，到达2。',
          component: 'NumberLine',
          props: {
            min: -6,
            max: 6,
            marks: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
            highlights: [
              { value: -3, label: '起点：-3', color: '#3b82f6' },
              { value: 2, label: '终点：-3+5=2', color: '#22c55e' },
              { value: 0, label: '0', color: '#a855f7' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'jjf-p1',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(+3) + (+7)',
          answer: '10',
          steps: ['同号相加，取相同符号（正号）', '|3| + |7| = 10', '结果为 +10，即10'],
        },
        {
          id: 'jjf-p2',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(-4) + (-6)',
          answer: '-10',
          steps: ['同号相加，取相同符号（负号）', '|4| + |6| = 10', '结果为 -10'],
        },
        {
          id: 'jjf-p3',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(+8) + (-3)',
          answer: '5',
          steps: ['异号相加，取绝对值较大的符号（正号）', '|8| - |3| = 5', '结果为 +5，即5'],
        },
        {
          id: 'jjf-p4',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(-5) - (-8)',
          answer: '3',
          steps: ['减去一个数等于加上它的相反数', '(-5) - (-8) = (-5) + 8', '异号相加：|8| - |5| = 3', '结果为 +3，即3'],
        },
        {
          id: 'jjf-p5',
          type: 'calculate',
          difficulty: 'medium',
          question: '计算：(-2.5) + (+3.7) - (-1.3) + (-4.5)',
          answer: '-2',
          steps: [
            '(-2.5) + (+3.7) - (-1.3) + (-4.5)',
            '= (-2.5) + 3.7 + 1.3 + (-4.5)',
            '= (-2.5) + (-4.5) + 3.7 + 1.3',
            '= -7 + 5',
            '= -2',
          ],
          hint: '运用加法交换律和结合律，把同号的数先相加。',
        },
        {
          id: 'jjf-p6',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '某日早晨气温为 -3℃，中午上升了8℃，到了夜间又下降了12℃，求夜间的气温。',
          answer: '-7℃',
          steps: [
            '早晨气温：-3℃',
            '中午气温：-3 + 8 = 5℃',
            '夜间气温：5 - 12 = -7℃',
          ],
          hint: '用正负数表示温度的上升和下降。',
        },
        {
          id: 'jjf-p7',
          type: 'fill',
          difficulty: 'medium',
          question: '已知 |a| = 5，|b| = 3，且 a > b，则 a - b = ____ 。',
          answer: '8 或 2',
          steps: [
            '|a|=5，所以 a=5 或 a=-5',
            '|b|=3，所以 b=3 或 b=-3',
            'a > b 的情况：',
            '当 a=5，b=3 时，a-b=2',
            '当 a=5，b=-3 时，a-b=8',
            '当 a=-5 时，a<b 不成立',
            '所以 a-b=2 或 a-b=8',
          ],
          hint: '注意绝对值的定义，以及 a > b 的条件限制。',
        },
        {
          id: 'jjf-p8',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '用简便方法计算：(+23) + (-5) + (-23) + (+7) + (-2)',
          answer: '0',
          steps: [
            '利用加法交换律和结合律',
            '把互为相反数的数结合：(+23) + (-23) = 0',
            '剩余：(-5) + 7 + (-2)',
            '= (-5) + (-2) + 7',
            '= -7 + 7',
            '= 0',
          ],
          hint: '找互为相反数的数，先让它们相加得0。',
        },
      ],
    },
    {
      id: 'cheng-chu-fa',
      title: '有理数的乘除法',
      summary:
        '掌握有理数的乘法和除法法则，理解多个有理数相乘的符号规律，学会运用乘法运算律。',
      knowledgePoints: [
        {
          id: 'ccf-1',
          title: '有理数乘法法则',
          content:
            '两数相乘，同号得正，异号得负，并把绝对值相乘。任何数同0相乘，都得0。',
          formula:
            '(+) × (+) = +\n(-) × (-) = +\n(+) × (-) = -\n(-) × (+) = -',
          examples: [
            '(+3) × (+4) = +12',
            '(-3) × (-4) = +12',
            '(+3) × (-4) = -12',
            '(-3) × 0 = 0',
          ],
        },
        {
          id: 'ccf-2',
          title: '多个有理数相乘',
          content:
            '几个不为0的数相乘，负因数的个数是偶数时，积是正数；负因数的个数是奇数时，积是负数。几个数相乘，如果其中有因数为0，那么积等于0。',
          examples: [
            '(-2) × (-3) × (-1) = -6（3个负数，奇数个，积为负）',
            '(-2) × (-3) × (-1) × (-4) = 24（4个负数，偶数个，积为正）',
          ],
        },
        {
          id: 'ccf-3',
          title: '乘法运算律',
          content:
            '乘法交换律：ab = ba。乘法结合律：(ab)c = a(bc)。乘法对加法的分配律：a(b+c) = ab + ac。',
          formula:
            'ab = ba\n(ab)c = a(bc)\na(b+c) = ab + ac',
        },
        {
          id: 'ccf-4',
          title: '倒数',
          content: '乘积为1的两个数互为倒数。0没有倒数。互为倒数的两个数符号相同。',
          formula: '若 a × b = 1，则 a 和 b 互为倒数',
          examples: ['3 的倒数是 1/3', '-2 的倒数是 -1/2', '1/5 的倒数是 5'],
        },
        {
          id: 'ccf-5',
          title: '有理数除法法则',
          content:
            '除以一个不等于0的数，等于乘以这个数的倒数。两数相除，同号得正，异号得负，并把绝对值相除。0除以任何一个不等于0的数，都得0。',
          formula: 'a ÷ b = a × (1/b)（b≠0）',
          examples: [
            '(-12) ÷ (-4) = +3',
            '(+12) ÷ (-4) = -3',
            '0 ÷ (-5) = 0',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-ccf-numberline',
          type: 'svg',
          title: '用数轴理解乘法符号规律',
          description:
            '展示乘法运算的符号规律：同号得正，异号得负。通过数轴上的跳跃模式直观理解。',
          component: 'NumberLine',
          props: {
            min: -15,
            max: 15,
            marks: [-15, -12, -9, -6, -3, 0, 3, 6, 9, 12, 15],
            highlights: [
              { value: -12, label: '(-3)×4=-12', color: '#ef4444' },
              { value: 12, label: '(-3)×(-4)=12', color: '#22c55e' },
              { value: 12, label: '3×4=12', color: '#22c55e' },
              { value: -12, label: '3×(-4)=-12', color: '#ef4444' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'ccf-p1',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(-7) × (+3)',
          answer: '-21',
          steps: ['异号得负', '|7| × |3| = 21', '结果为 -21'],
        },
        {
          id: 'ccf-p2',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(-5) × (-8)',
          answer: '40',
          steps: ['同号得正', '|5| × |8| = 40', '结果为 +40，即40'],
        },
        {
          id: 'ccf-p3',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(-24) ÷ (+6)',
          answer: '-4',
          steps: ['异号得负', '|24| ÷ |6| = 4', '结果为 -4'],
        },
        {
          id: 'ccf-p4',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(-3/4) × (-8/9)',
          answer: '2/3',
          steps: ['同号得正', '|3/4| × |8/9| = 24/36 = 2/3', '结果为 +2/3，即2/3'],
        },
        {
          id: 'ccf-p5',
          type: 'calculate',
          difficulty: 'medium',
          question: '计算：(-2) × 3 × (-4) × (-1/2)',
          answer: '-12',
          steps: [
            '负因数个数：-2、-4、-1/2 共3个（奇数），积为负',
            '绝对值相乘：2 × 3 × 4 × 1/2 = 12',
            '结果为 -12',
          ],
          hint: '先判断符号（数负因数的个数），再算绝对值。',
        },
        {
          id: 'ccf-p6',
          type: 'calculate',
          difficulty: 'medium',
          question: '用简便方法计算：(-7/8) × (-4/5) + (-7/8) × (+1/5)',
          answer: '7/8',
          steps: [
            '利用分配律逆用：(-7/8) × [(-4/5) + (+1/5)]',
            '= (-7/8) × (-3/5)',
            '同号得正',
            '= 21/40',
          ],
          hint: '考虑提取公因数，逆用乘法分配律。',
        },
        {
          id: 'ccf-p7',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '某地区一天早晨的气温为 -5℃，到中午上升了10℃，到夜间又下降了15℃。如果每小时平均下降 1.5℃，问夜间气温是多少？',
          answer: '-10℃',
          steps: [
            '早晨：-5℃',
            '中午：-5 + 10 = 5℃',
            '夜间：5 - 15 = -10℃',
          ],
          hint: '注意审题，不要被多余信息干扰。',
        },
        {
          id: 'ccf-p8',
          type: 'fill',
          difficulty: 'medium',
          question: '已知 a、b 互为倒数，c、d 互为相反数，则 (a×b - 3) × (c + d + 2) = ____ 。',
          answer: '-1',
          steps: [
            'a、b 互为倒数，所以 a × b = 1',
            'c、d 互为相反数，所以 c + d = 0',
            '(1 - 3) × (0 + 2) = (-2) × 2 = -4',
            '等等，重新计算：',
            '(a×b - 3) × (c + d + 2)',
            '= (1 - 3) × (0 + 2)',
            '= (-2) × 2',
            '= -4',
          ],
          hint: '利用倒数和相反数的性质先化简。',
        },
      ],
    },
    {
      id: 'cheng-fang',
      title: '有理数的乘方',
      summary:
        '理解乘方的概念和运算，掌握幂的符号法则，学会科学记数法的表示方法。',
      knowledgePoints: [
        {
          id: 'cf-1',
          title: '乘方的定义',
          content:
            '求n个相同因数的积的运算叫做乘方，乘方的结果叫做幂。在 aⁿ 中，a 叫做底数，n 叫做指数，aⁿ 读作"a的n次方"或"a的n次幂"。',
          formula: 'aⁿ = a × a × a × ... × a（n个a相乘）',
          examples: [
            '2³ = 2 × 2 × 2 = 8',
            '(-3)² = (-3) × (-3) = 9',
            '(-2)³ = (-2) × (-2) × (-2) = -8',
          ],
        },
        {
          id: 'cf-2',
          title: '幂的符号法则',
          content:
            '正数的任何次幂都是正数；负数的奇数次幂是负数，负数的偶数次幂是正数；0的任何正整数次幂都是0。',
          formula:
            'aⁿ > 0（当 a > 0）\n(-a)ⁿ < 0（n为奇数）\n(-a)ⁿ > 0（n为偶数）',
          examples: [
            '3² = 9，3³ = 27（正数的幂为正）',
            '(-2)² = 4（负数的偶数次幂为正）',
            '(-2)³ = -8（负数的奇数次幂为负）',
          ],
        },
        {
          id: 'cf-3',
          title: '科学记数法',
          content:
            '把一个大于10的数表示成 a×10ⁿ 的形式，其中 1 ≤ a < 10，n为正整数。n等于原数的整数位数减1。',
          formula: 'N = a × 10ⁿ（1 ≤ a < 10，n为正整数）',
          examples: [
            '5600 = 5.6 × 10³',
            '320000 = 3.2 × 10⁵',
            '7080000 = 7.08 × 10⁶',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-cf-coordinate',
          type: 'svg',
          title: '2的幂次方增长图',
          description:
            '在坐标系中展示2的各次幂：2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32，直观感受指数增长的速度。',
          component: 'CoordinatePlane',
          props: {
            xLabel: '指数n',
            yLabel: '2ⁿ',
            points: [
              { x: 1, y: 2 },
              { x: 2, y: 4 },
              { x: 3, y: 8 },
              { x: 4, y: 16 },
              { x: 5, y: 32 },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'cf-p1',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(-3)²',
          answer: '9',
          steps: ['(-3)² = (-3) × (-3)', '负数的偶数次幂为正', '= 9'],
        },
        {
          id: 'cf-p2',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(-2)³',
          answer: '-8',
          steps: ['(-2)³ = (-2) × (-2) × (-2)', '负数的奇数次幂为负', '= 4 × (-2) = -8'],
        },
        {
          id: 'cf-p3',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：(-1)¹⁰ + (-1)⁹',
          answer: '0',
          steps: [
            '(-1)¹⁰ = 1（偶数次幂，结果为正）',
            '(-1)⁹ = -1（奇数次幂，结果为负）',
            '1 + (-1) = 0',
          ],
        },
        {
          id: 'cf-p4',
          type: 'fill',
          difficulty: 'basic',
          question: '用科学记数法表示：567000',
          answer: '5.67 × 10⁵',
          steps: [
            '567000 的整数部分有6位',
            'n = 6 - 1 = 5',
            'a = 5.67（将小数点左移5位）',
            '所以 567000 = 5.67 × 10⁵',
          ],
        },
        {
          id: 'cf-p5',
          type: 'fill',
          difficulty: 'medium',
          question: '用科学记数法表示：32080000',
          answer: '3.208 × 10⁷',
          steps: [
            '32080000 的整数部分有8位',
            'n = 8 - 1 = 7',
            'a = 3.208',
            '所以 32080000 = 3.208 × 10⁷',
          ],
        },
        {
          id: 'cf-p6',
          type: 'calculate',
          difficulty: 'medium',
          question: '计算：-2⁴ 与 (-2)⁴ 分别等于多少？它们相等吗？',
          answer: '-2⁴ = -16，(-2)⁴ = 16，它们不相等。',
          steps: [
            '-2⁴ = -(2⁴) = -(2×2×2×2) = -16',
            '(-2)⁴ = (-2)×(-2)×(-2)×(-2) = 16',
            '-2⁴ 中负号不参与乘方运算',
            '(-2)⁴ 中负号参与乘方运算',
            '所以 -2⁴ ≠ (-2)⁴',
          ],
          hint: '注意 -2⁴ 和 (-2)⁴ 的区别：前者是2⁴的相反数，后者是-2的四次方。',
        },
      ],
    },
  ],
}
