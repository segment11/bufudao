import type { Chapter } from '../types'

export const buDengShiYuBuDengShiZu: Chapter = {
  id: 'bu-deng-shi-yu-bu-deng-shi-zu',
  title: '不等式与不等式组',
  grade: 7,
  semester: '下',
  unit: 9,
  icon: '◀▶',
  description: '不等式、一元一次不等式、一元一次不等式组',
  sections: [
    {
      id: 'bu-deng-shi-gai-nian',
      title: '不等式',
      summary: '理解不等式的概念，掌握不等式的基本性质。',
      knowledgePoints: [
        {
          id: 'bdsgn-1',
          title: '不等式的概念',
          content:
            '用不等号（<、>、≤、≥、≠）表示不等关系的式子叫做不等式。能使不等式成立的未知数的值叫做不等式的解。一个含有未知数的不等式的所有的解，组成这个不等式的解集。',
          formula: '常见不等号：<（小于）、>（大于）、≤（小于等于）、≥（大于等于）、≠（不等于）',
          examples: ['x>3是一个不等式', 'x=4是x>3的一个解', 'x>3的解集是所有大于3的数'],
        },
        {
          id: 'bdsgn-2',
          title: '不等式的基本性质',
          content:
            '性质1：不等式两边加（或减）同一个数（或式子），不等号的方向不变。性质2：不等式两边乘（或除以）同一个正数，不等号的方向不变。性质3：不等式两边乘（或除以）同一个负数，不等号的方向改变。',
          formula: '若a>b，则a+c>b+c\n若a>b, c>0，则ac>bc\n若a>b, c<0，则ac<bc（变号）',
          examples: [
            '3>2，则3+1>2+1（性质1）',
            '3>2，则3×2>2×2（性质2）',
            '3>2，则3×(-1)<2×(-1)（性质3，变号）',
          ],
        },
        {
          id: 'bdsgn-3',
          title: '不等式的解集',
          content:
            '一个含有未知数的不等式的所有的解，组成这个不等式的解集。求不等式解集的过程叫做解不等式。不等式的解集可以用数轴来表示。',
          formula: '用数轴表示解集：>空心向右，≥实心向右\n<空心向左，≤实心向左',
        },
      ],
      visuals: [
        {
          id: 'vis-bdsgn-nl',
          type: 'svg',
          title: '不等式解集在数轴上的表示',
          description: '展示x>2、x≤3、-1<x<4等不等式解集在数轴上的表示方法。',
          component: 'NumberLine',
          props: {
            min: -3,
            max: 6,
            marks: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
            highlights: [
              { value: 2, label: 'x>2 空心向右', color: '#3b82f6' },
              { value: 3, label: 'x≤3 实心向左', color: '#ef4444' },
            ],
            regions: [
              { start: 2, end: 6, color: '#3b82f6', open: true, label: 'x>2' },
              { start: -3, end: 3, color: '#ef4444', open: false, label: 'x≤3' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'bdsgn-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列式子中，是不等式的是（　）',
          options: ['x+1=3', 'x+1', 'x+1>3', 'x-1'],
          answer: 'C',
          steps: ['x+1=3是等式', 'x+1是代数式', 'x+1>3含不等号，是不等式', 'x-1是代数式'],
        },
        {
          id: 'bdsgn-p2',
          type: 'choice',
          difficulty: 'basic',
          question: '若a>b，则下列不等式中不成立的是（　）',
          options: ['a+2>b+2', 'a-3>b-3', '-2a>-2b', '2a>2b'],
          answer: 'C',
          steps: ['a>b两边加2，a+2>b+2，成立', 'a>b两边减3，a-3>b-3，成立', 'a>b两边乘-2，应变号，-2a<-2b，不成立', 'a>b两边乘2，2a>2b，成立'],
        },
        {
          id: 'bdsgn-p3',
          type: 'choice',
          difficulty: 'basic',
          question: '若a>b，且c<0，则下列不等式成立的是（　）',
          options: ['ac>bc', 'ac<bc', 'a/c>b/c', 'a+c<b+c'],
          answer: 'B',
          steps: ['c<0时，两边乘c不等号要变号', 'ac<bc，成立'],
        },
        {
          id: 'bdsgn-p4',
          type: 'fill',
          difficulty: 'basic',
          question: '用不等式表示"x的3倍减去2大于5"：____',
          answer: '3x-2>5',
        },
        {
          id: 'bdsgn-p5',
          type: 'calculate',
          difficulty: 'medium',
          question: '已知a>b，比较2-3a和2-3b的大小。',
          answer: '2-3a<2-3b',
          steps: [
            '因为a>b',
            '两边乘-3（负数，变号）：-3a<-3b',
            '两边加2：2-3a<2-3b',
          ],
          hint: '利用不等式的基本性质逐步推导。',
        },
      ],
    },
    {
      id: 'yi-yuan-yi-ci-bu-deng-shi',
      title: '一元一次不等式',
      summary: '掌握一元一次不等式的解法，能在数轴上表示解集。',
      knowledgePoints: [
        {
          id: 'yybd-1',
          title: '一元一次不等式',
          content:
            '含有一个未知数，未知数的次数是1的不等式，叫做一元一次不等式。如2x-1>3、3x+2≤8等。',
          formula: '一元一次不等式的一般形式：ax+b>0（或<, ≤, ≥）',
        },
        {
          id: 'yybd-2',
          title: '解一元一次不等式的步骤',
          content:
            '①去分母（两边乘以分母的最小公倍数，注意负数变号）；②去括号；③移项（移项变号）；④合并同类项；⑤系数化为1（除以系数，注意负数变号）。',
          formula: '去分母→去括号→移项→合并→系数化为1\n注意：乘以或除以负数时不等号要变号！',
        },
        {
          id: 'yybd-3',
          title: '在数轴上表示解集',
          content:
            '用数轴表示不等式的解集：大于向右画，小于向左画；有等号（≥, ≤）画实心圆点，无等号（>, <）画空心圆圈。',
          formula: '> 空心向右\n≥ 实心向右\n< 空心向左\n≤ 实心向左',
        },
      ],
      visuals: [
        {
          id: 'vis-yybd-nl',
          type: 'svg',
          title: '一元一次不等式的解集',
          description: '展示不等式2x-2<4的解集x<3在数轴上的表示。',
          component: 'NumberLine',
          props: {
            min: -2,
            max: 6,
            marks: [-2, -1, 0, 1, 2, 3, 4, 5, 6],
            highlights: [
              { value: 3, label: 'x<3 空心', color: '#ef4444' },
            ],
            regions: [
              { start: -2, end: 3, color: '#ef4444', open: true, label: 'x<3' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'yybd-p1',
          type: 'calculate',
          difficulty: 'basic',
          question: '解不等式：x+3>5',
          answer: 'x>2',
          steps: ['x+3>5', 'x>5-3', 'x>2'],
        },
        {
          id: 'yybd-p2',
          type: 'calculate',
          difficulty: 'basic',
          question: '解不等式：2x-1<7',
          answer: 'x<4',
          steps: ['2x-1<7', '2x<8', 'x<4'],
        },
        {
          id: 'yybd-p3',
          type: 'calculate',
          difficulty: 'basic',
          question: '解不等式：-3x>6',
          answer: 'x<-2',
          steps: ['-3x>6', '两边除以-3，变号', 'x<-2'],
        },
        {
          id: 'yybd-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '解不等式：2(x-1)≤3x+1，并在数轴上表示解集。',
          answer: 'x≥-3',
          steps: [
            '2x-2≤3x+1',
            '2x-3x≤1+2',
            '-x≤3',
            '两边除以-1，变号',
            'x≥-3',
          ],
          hint: '注意两边除以负数时要变号。',
        },
        {
          id: 'yybd-p5',
          type: 'calculate',
          difficulty: 'medium',
          question: '解不等式：(x+1)/3 - (x-1)/2 ≥ 1',
          answer: 'x≤-1',
          steps: [
            '两边乘以6：2(x+1)-3(x-1)≥6',
            '2x+2-3x+3≥6',
            '-x+5≥6',
            '-x≥1',
            'x≤-1',
          ],
          hint: '先去分母，再整理。',
        },
        {
          id: 'yybd-p6',
          type: 'calculate',
          difficulty: 'medium',
          question: '求不等式3x-2<4x+3的所有负整数解。',
          answer: 'x=-4, -3, -2, -1',
          steps: [
            '3x-2<4x+3',
            '3x-4x<3+2',
            '-x<5',
            'x>-5',
            '负整数解：-4, -3, -2, -1',
          ],
        },
        {
          id: 'yybd-p7',
          type: 'calculate',
          difficulty: 'medium',
          question: '当x取何值时，代数式(x+4)/3的值比(2x-1)/2的值大？',
          answer: 'x<11/4，即x<2.75',
          steps: [
            '(x+4)/3 > (2x-1)/2',
            '两边乘以6：2(x+4) > 3(2x-1)',
            '2x+8 > 6x-3',
            '8+3 > 6x-2x',
            '11 > 4x',
            'x < 11/4',
          ],
          hint: '列不等式：前式大于后式。',
        },
        {
          id: 'yybd-p8',
          type: 'calculate',
          difficulty: 'hard',
          question: '关于x的不等式2x-a<3的解集是x<2，求a的值。',
          answer: 'a=1',
          steps: [
            '2x-a<3',
            '2x<3+a',
            'x<(3+a)/2',
            '因为解集是x<2',
            '所以(3+a)/2=2',
            '3+a=4, a=1',
          ],
          hint: '将a视为常数，先解出x，再与已知解集比较。',
        },
      ],
    },
    {
      id: 'yi-yuan-yi-ci-bu-deng-shi-zu',
      title: '一元一次不等式组',
      summary: '理解一元一次不等式组的概念，掌握不等式组解集的四种情况。',
      knowledgePoints: [
        {
          id: 'yybdz-1',
          title: '一元一次不等式组',
          content:
            '把两个或两个以上含有相同未知数的一元一次不等式合在一起，就组成了一个一元一次不等式组。不等式组中所有不等式的解集的公共部分叫做不等式组的解集。',
          formula: '不等式组的解集 = 各不等式解集的公共部分',
        },
        {
          id: 'yybdz-2',
          title: '解集的四种情况',
          content:
            '设a<b，则：①{x>a, x>b}的解集为x>b（同大取大）；②{x<a, x<b}的解集为x<a（同小取小）；③{x>a, x<b}的解集为a<x<b（大小小大取中间）；④{x<b, x>a}即{x>a, x>b}同①。当出现{x>a, x<a}（大大小小）时无解。',
          formula: '同大取大：x>a, x>b → x>b\n同小取小：x<a, x<b → x<a\n大小小大取中间：x>a, x<b → a<x<b\n大大小小无解：x>a, x<a → 无解',
          examples: [
            '{x>2, x>3}的解集为x>3',
            '{x<2, x<3}的解集为x<2',
            '{x>2, x<5}的解集为2<x<5',
            '{x>5, x<2}无解',
          ],
        },
        {
          id: 'yybdz-3',
          title: '解不等式组的步骤',
          content:
            '①分别解每一个不等式，求出各自的解集；②在数轴上表示各解集；③找出所有解集的公共部分，即为不等式组的解集。',
        },
      ],
      visuals: [
        {
          id: 'vis-yybdz-nl',
          type: 'svg',
          title: '不等式组解集的四种情况',
          description: '在数轴上展示不等式组解集的四种情况：同大取大、同小取小、大小小大取中间、大大小小无解。',
          component: 'NumberLine',
          props: {
            min: -1,
            max: 7,
            marks: [0, 1, 2, 3, 4, 5, 6],
            highlights: [
              { value: 2, label: 'a=2', color: '#3b82f6' },
              { value: 5, label: 'b=5', color: '#ef4444' },
            ],
            regions: [
              { start: 5, end: 7, color: '#22c55e', open: true, label: 'x>5（同大取大）' },
              { start: -1, end: 2, color: '#f59e0b', open: true, label: 'x<2（同小取小）' },
              { start: 2, end: 5, color: '#a855f7', open: true, label: '2<x<5（取中间）' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'yybdz-p1',
          type: 'calculate',
          difficulty: 'basic',
          question: '解不等式组：{x+1>2, x-1<3}',
          answer: '1<x<4',
          steps: [
            '解①：x>1',
            '解②：x<4',
            '取公共部分：1<x<4',
          ],
        },
        {
          id: 'yybdz-p2',
          type: 'calculate',
          difficulty: 'basic',
          question: '解不等式组：{2x>4, x>3}',
          answer: 'x>3',
          steps: [
            '解①：x>2',
            '解②：x>3',
            '同大取大：x>3',
          ],
        },
        {
          id: 'yybdz-p3',
          type: 'calculate',
          difficulty: 'medium',
          question: '解不等式组：{2x-1>0, 3x-2<4}',
          answer: '1/2<x<2',
          steps: [
            '解①：2x>1, x>1/2',
            '解②：3x<6, x<2',
            '大小小大取中间：1/2<x<2',
          ],
        },
        {
          id: 'yybdz-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '解不等式组：{3x+1>2(x-1), 4x-1<3x+3}，并求出所有整数解。',
          answer: '-3<x<4，整数解：-2, -1, 0, 1, 2, 3',
          steps: [
            '解①：3x+1>2x-2, x>-3',
            '解②：4x-3x<3+1, x<4',
            '-3<x<4',
            '整数解：-2, -1, 0, 1, 2, 3',
          ],
        },
        {
          id: 'yybdz-p5',
          type: 'calculate',
          difficulty: 'hard',
          question: '解不等式组：{(2x+1)/3 - 1 ≤ x, 3x-2(x-1) > 4}，并求所有正整数解。',
          answer: 'x>2，正整数解：3, 4, 5, ...',
          steps: [
            '解①：(2x+1)/3 - 1 ≤ x',
            '2x+1-3 ≤ 3x',
            '-x ≤ 2, x ≥ -2',
            '解②：3x-2x+2>4 → x+2>4 → x>2',
            '取公共部分：x>2',
            '正整数解：3, 4, 5, ...',
          ],
          hint: '分别解每个不等式，取公共部分。',
        },
        {
          id: 'yybdz-p6',
          type: 'calculate',
          difficulty: 'hard',
          question: '已知不等式组{x>a, x<b}的解集为2<x<5，求a和b的值。',
          answer: 'a=2, b=5',
          steps: [
            '{x>a, x<b}的解集为a<x<b',
            '已知解集为2<x<5',
            '所以a=2, b=5',
          ],
        },
      ],
    },
  ],
}
