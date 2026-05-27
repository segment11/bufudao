import type { Chapter } from '../types'

export const zhengShiDeJiaJian: Chapter = {
  id: 'zheng-shi-de-jia-jian',
  title: '整式的加减',
  grade: 7,
  semester: '上',
  unit: 2,
  icon: '📝',
  description: '用字母表示数、整式、整式的加减运算',
  sections: [
    {
      id: 'zheng-shi',
      title: '整式',
      summary:
        '理解单项式（系数、次数）和多项式（项、次数）的概念，掌握整式的分类。',
      knowledgePoints: [
        {
          id: 'zs-1',
          title: '单项式',
          content:
            '由数与字母的积组成的代数式叫做单项式。单独的一个数或一个字母也是单项式。单项式中的数字因数叫做这个单项式的系数，一个单项式中所有字母的指数的和叫做这个单项式的次数。',
          formula: '单项式 = 系数 × 字母部分',
          examples: [
            '2ab 的系数是2，次数是 1+1=2',
            '-3x²y 的系数是-3，次数是 2+1=3',
            '5（单独的数）是零次单项式',
            'a（单独的字母）系数为1，次数为1',
          ],
        },
        {
          id: 'zs-2',
          title: '多项式',
          content:
            '几个单项式的和叫做多项式。多项式中每个单项式叫做多项式的项，不含字母的项叫做常数项。多项式里次数最高的项的次数，叫做这个多项式的次数。',
          formula: '多项式 = 项₁ + 项₂ + ... + 项ₙ',
          examples: [
            '3x² + 2x - 1 是二次三项式，常数项是-1',
            'a²b - 2ab + b² 的最高次项是 a²b，次数为3',
          ],
        },
        {
          id: 'zs-3',
          title: '整式',
          content:
            '单项式和多项式统称为整式。整式是代数式中最基本的形式，是进一步学习代数的基础。',
          formula: '整式 = 单项式 ∪ 多项式',
          examples: [
            '2x + 3 是整式（多项式）',
            '3xy 是整式（单项式）',
            '1/x 不是整式（分母含字母）',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-zs-geometry',
          type: 'svg',
          title: '用面积模型理解整式',
          description:
            '用矩形面积直观理解单项式2ab的含义：长为a，宽为b的矩形，2ab表示两个这样的矩形面积之和。',
          component: 'GeometryFigure',
          props: {
            vertices: [
              { x: 0, y: 0, label: '' },
              { x: 6, y: 0, label: '' },
              { x: 6, y: 3, label: '' },
              { x: 0, y: 3, label: '' },
            ],
            sides: [
              { from: 0, to: 1, label: 'a' },
              { from: 1, to: 2, label: 'b' },
              { from: 2, to: 3, label: 'a' },
              { from: 3, to: 0, label: 'b' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'zs-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列各式中，是单项式的是（　）',
          options: ['x + 1', '-3xy²', 'a/b', '2x - y'],
          answer: 'B',
          steps: [
            'x + 1 是多项式，不是单项式',
            '-3xy² 是数与字母的积，是单项式',
            'a/b 分母含字母，不是整式',
            '2x - y 是多项式',
          ],
        },
        {
          id: 'zs-p2',
          type: 'choice',
          difficulty: 'basic',
          question: '单项式 -2x³y 的系数和次数分别是（　）',
          options: [
            '系数是2，次数是3',
            '系数是-2，次数是4',
            '系数是-2，次数是3',
            '系数是2，次数是4',
          ],
          answer: 'B',
          steps: [
            '系数是数字因数：-2',
            '次数是所有字母指数的和：3 + 1 = 4',
          ],
        },
        {
          id: 'zs-p3',
          type: 'choice',
          difficulty: 'basic',
          question: '多项式 2x³ - 3x² + x - 5 的次数和常数项分别是（　）',
          options: [
            '次数是2，常数项是5',
            '次数是3，常数项是-5',
            '次数是3，常数项是5',
            '次数是2，常数项是-5',
          ],
          answer: 'B',
          steps: [
            '最高次项是 2x³，次数为3',
            '常数项是不含字母的项：-5',
          ],
        },
        {
          id: 'zs-p4',
          type: 'fill',
          difficulty: 'basic',
          question:
            '写出下列单项式的系数和次数：\n（1）-a²b 的系数是 ____，次数是 ____\n（2）(1/2)xy³ 的系数是 ____，次数是 ____',
          answer: '（1）系数是-1，次数是3；（2）系数是1/2，次数是4',
          hint: '注意当系数为1或-1时，1省略不写。',
          steps: [
            '-a²b = (-1)·a²·b，系数是-1，次数 2+1=3',
            '(1/2)xy³，系数是1/2，次数 1+3=4',
          ],
        },
        {
          id: 'zs-p5',
          type: 'choice',
          difficulty: 'medium',
          question:
            '若单项式 2x²yᵐ 与 -3xⁿy³ 是同次数的单项式，则 m + n =（　）',
          options: ['3', '4', '5', '6'],
          answer: 'C',
          steps: [
            '2x²yᵐ 的次数为 2 + m',
            '-3xⁿy³ 的次数为 n + 3',
            '次数相同：2 + m = n + 3',
            '因为都是同次数且都是关于x、y的单项式',
            '取 m = 3 时，次数为 5，n = 2 时，次数为 5',
            '所以 m + n = 3 + 2 = 5',
          ],
          hint: '同次数意味着两个单项式的次数相等。',
        },
      ],
    },
    {
      id: 'zheng-shi-de-jia-jian-yun-suan',
      title: '整式的加减',
      summary:
        '掌握同类项的概念和合并同类项法则，学会去括号，能熟练进行整式的加减运算。',
      knowledgePoints: [
        {
          id: 'zsjj-1',
          title: '同类项',
          content:
            '所含字母相同，并且相同字母的指数也分别相同的项叫做同类项。几个常数项也是同类项。',
          formula: '同类项条件：①字母相同 ②相同字母的指数相同',
          examples: [
            '3x²y 和 -5x²y 是同类项（字母x、y相同，指数也分别相同）',
            '2ab 和 2ac 不是同类项（字母不完全相同）',
            '3x² 和 3x 不是同类项（x的指数不同）',
            '-7 和 4 是同类项（都是常数项）',
          ],
        },
        {
          id: 'zsjj-2',
          title: '合并同类项',
          content:
            '把多项式中的同类项合并成一项，叫做合并同类项。法则：合并同类项后，所得项的系数是合并前各同类项的系数的和，且字母连同它的指数不变。',
          formula: 'axⁿ + bxⁿ = (a+b)xⁿ',
          examples: [
            '3x² + 5x² = (3+5)x² = 8x²',
            '2xy - 7xy = (2-7)xy = -5xy',
            '4a + 3b - 2a + b = 2a + 4b',
          ],
        },
        {
          id: 'zsjj-3',
          title: '去括号法则',
          content:
            '括号前面是"+"号，去掉括号后，括号内各项的符号都不变。括号前面是"-"号，去掉括号后，括号内各项的符号都要改变（正变负，负变正）。',
          formula: '+(a - b) = a - b\n-(a - b) = -a + b',
          examples: [
            '+(3x - 2) = 3x - 2',
            '-(3x - 2) = -3x + 2',
            '2(x + 3) = 2x + 6（分配律）',
          ],
        },
        {
          id: 'zsjj-4',
          title: '整式的加减步骤',
          content:
            '整式加减运算的一般步骤：①如果有括号，按去括号法则先去括号；②合并同类项。结果中不再含有同类项。',
          examples: [
            '(3x + 2) + (5x - 3) = 3x + 2 + 5x - 3 = 8x - 1',
            '(2a - b) - (a - 3b) = 2a - b - a + 3b = a + 2b',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-zsjj-numberline',
          type: 'svg',
          title: '合并同类项的直观理解',
          description:
            '用数轴表示同类项的合并过程，类似有理数加法中相同单位的累加。',
          component: 'NumberLine',
          props: {
            min: -10,
            max: 10,
            marks: [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10],
            highlights: [
              { value: 3, label: '3x', color: '#3b82f6' },
              { value: 5, label: '5x', color: '#3b82f6' },
              { value: 8, label: '3x+5x=8x', color: '#22c55e' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'zsjj-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列各组中，是同类项的是（　）',
          options: [
            '2x²y 和 3xy²',
            '-5a²b 和 6a²b',
            '3x 和 3y',
            '4m²n 和 4mn',
          ],
          answer: 'B',
          steps: [
            '2x²y：x指数2，y指数1；3xy²：x指数1，y指数2，不是同类项',
            '-5a²b 和 6a²b：字母都是a、b，且指数分别相同，是同类项',
            '3x 和 3y：字母不同，不是同类项',
            '4m²n：m指数2；4mn：m指数1，不是同类项',
          ],
        },
        {
          id: 'zsjj-p2',
          type: 'calculate',
          difficulty: 'basic',
          question: '合并同类项：3x² + 5x² - 2x²',
          answer: '6x²',
          steps: [
            '系数相加：3 + 5 + (-2) = 6',
            '字母部分不变：x²',
            '结果：6x²',
          ],
        },
        {
          id: 'zsjj-p3',
          type: 'calculate',
          difficulty: 'basic',
          question: '去括号并合并：2(x + 3) - (x - 1)',
          answer: 'x + 7',
          steps: [
            '去括号：2x + 6 - x + 1',
            '合并同类项：(2x - x) + (6 + 1)',
            '= x + 7',
          ],
        },
        {
          id: 'zsjj-p4',
          type: 'calculate',
          difficulty: 'basic',
          question: '化简：(4a² - 3a + 1) - (2a² - 5a + 3)',
          answer: '2a² + 2a - 2',
          steps: [
            '去括号：4a² - 3a + 1 - 2a² + 5a - 3',
            '合并a²项：4a² - 2a² = 2a²',
            '合并a项：-3a + 5a = 2a',
            '合并常数项：1 - 3 = -2',
            '结果：2a² + 2a - 2',
          ],
        },
        {
          id: 'zsjj-p5',
          type: 'calculate',
          difficulty: 'medium',
          question: '化简求值：3(2a² - ab) - 2(3a² + ab)，其中 a = -2，b = 3',
          answer: '8',
          steps: [
            '去括号：6a² - 3ab - 6a² - 2ab',
            '合并同类项：(6a² - 6a²) + (-3ab - 2ab) = -5ab',
            '代入 a=-2，b=3：-5×(-2)×3 = 30',
            '结果：30',
          ],
          hint: '先化简再代入，计算更简便。',
        },
        {
          id: 'zsjj-p6',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '已知 A = 2x² + 3x - 1，B = x² - 2x + 5，求 A - 2B',
          answer: '7x - 11',
          steps: [
            'A - 2B = (2x² + 3x - 1) - 2(x² - 2x + 5)',
            '= 2x² + 3x - 1 - 2x² + 4x - 10',
            '合并x²项：2x² - 2x² = 0',
            '合并x项：3x + 4x = 7x',
            '合并常数项：-1 - 10 = -11',
            '结果：7x - 11',
          ],
        },
        {
          id: 'zsjj-p7',
          type: 'fill',
          difficulty: 'medium',
          question:
            '若 3xᵃy² 与 -2x³yᵇ 是同类项，则 a = ____，b = ____。',
          answer: 'a = 3，b = 2',
          steps: [
            '同类项要求相同字母的指数相同',
            'x的指数：a = 3',
            'y的指数：b = 2',
          ],
          hint: '同类项中相同字母的指数必须分别相等。',
        },
        {
          id: 'zsjj-p8',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '某长方形的长为 (2a + b) cm，宽为 (a - b) cm，求该长方形的周长。（用含a、b的式子表示）',
          answer: '(6a) cm',
          steps: [
            '周长 = 2 × (长 + 宽)',
            '= 2 × [(2a + b) + (a - b)]',
            '= 2 × [3a]',
            '= 6a cm',
          ],
          hint: '周长 = 2(长 + 宽)，先化简括号内的式子。',
        },
      ],
    },
  ],
}
