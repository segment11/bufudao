import type { Chapter } from '../types'

export const fanBiLiHanShu: Chapter = {
  id: 'fan-bi-li-han-shu',
  title: '反比例函数',
  grade: 9,
  semester: '下',
  unit: 6,
  icon: '↗️',
  description: '反比例函数的图像与性质',
  sections: [
    {
      id: 'fan-bi-li-han-shu-gai-nian',
      title: '反比例函数',
      summary: '理解反比例函数的定义，掌握自变量取值范围。',
      knowledgePoints: [
        {
          id: 'fbl-gn-1',
          title: '反比例函数的定义',
          content:
            '一般地，形如 y=k/x（k是常数，k≠0）的函数叫做反比例函数。自变量x的取值范围是不等于0的一切实数。',
          formula: 'y = k/x（k≠0，x≠0）',
          examples: [
            'y = 2/x 是反比例函数，k=2',
            'y = -6/x 是反比例函数，k=-6',
            'xy = 3 即 y = 3/x，是反比例函数',
          ],
        },
        {
          id: 'fbl-gn-2',
          title: '自变量取值范围',
          content:
            '反比例函数y=k/x中，自变量x的取值范围是x≠0的一切实数。这是因为分母不能为0。相应地，y的取值范围也是y≠0的一切实数。',
          examples: [
            'y=3/x中，x可以取±1, ±2, ±3等，但不能取0',
          ],
        },
        {
          id: 'fbl-gn-3',
          title: 'k的确定',
          content:
            '确定反比例函数只需要一个条件，即确定k的值。若已知函数图像过某点(a,b)，则k=ab。',
          formula: 'y=k/x过点(a,b) ⇒ k = ab',
          examples: [
            'y=k/x过点(2,3)，则k=2×3=6，解析式为y=6/x',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-fbl-gn-graph',
          type: 'svg',
          title: '反比例函数图像',
          description: '展示y=1/x和y=-2/x的图像，比较k>0和k<0时图像的位置差异。',
          component: 'FunctionGraph',
          props: {
            expressions: ['1/x', '-2/x'],
            xRange: [-6, 6],
            yRange: [-6, 6],
          },
        },
      ],
      practices: [
        {
          id: 'fbl-gn-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列函数中，是反比例函数的是（　）',
          options: ['y = 2x', 'y = x/3', 'y = 3/x', 'y = x²'],
          answer: 'C',
          steps: ['A是一次函数', 'B是一次函数', 'C形如y=k/x，k=3≠0，是反比例函数', 'D是二次函数'],
        },
        {
          id: 'fbl-gn-p2',
          type: 'fill',
          difficulty: 'basic',
          question: '反比例函数 y = -4/x 中，k = ____ ，自变量x的取值范围是 ____ 。',
          answer: '-4；x≠0',
        },
        {
          id: 'fbl-gn-p3',
          type: 'fill',
          difficulty: 'basic',
          question: '已知反比例函数 y = k/x 的图像经过点(2,-3)，则 k = ____ ，函数解析式为 ____ 。',
          answer: '-6；y = -6/x',
          steps: ['k = 2×(-3) = -6', 'y = -6/x'],
        },
        {
          id: 'fbl-gn-p4',
          type: 'choice',
          difficulty: 'medium',
          question: '若 y 与 x 成反比例，且当x=2时y=3，则当x=-3时y的值为（　）',
          options: ['2', '-2', '3', '-3'],
          answer: 'B',
          steps: ['设y=k/x', 'k=2×3=6', 'y=6/x', '当x=-3时，y=6/(-3)=-2'],
        },
        {
          id: 'fbl-gn-p5',
          type: 'fill',
          difficulty: 'medium',
          question: '若函数 y = (m-1)/x 是反比例函数，则 m 的取值范围是 ____ 。',
          answer: 'm≠1',
          steps: ['反比例函数要求k≠0', 'm-1≠0', 'm≠1'],
        },
      ],
    },
    {
      id: 'fan-bi-li-ying-yong',
      title: '实际问题与反比例函数',
      summary: '掌握反比例函数的图像性质，了解k的几何意义，学会实际应用。',
      knowledgePoints: [
        {
          id: 'fbl-yy-1',
          title: '反比例函数的图像与性质',
          content:
            '反比例函数y=k/x的图像是双曲线。当k>0时，双曲线的两支分别位于第一、三象限，在每个象限内y随x增大而减小；当k<0时，双曲线的两支分别位于第二、四象限，在每个象限内y随x增大而增大。双曲线关于原点中心对称。',
          examples: [
            'y=2/x的图像在一、三象限',
            'y=-3/x的图像在二、四象限',
          ],
        },
        {
          id: 'fbl-yy-2',
          title: 'k的几何意义',
          content:
            '反比例函数y=k/x图像上任意一点向两坐标轴作垂线，与坐标轴围成的矩形面积为|k|。这是k的重要几何意义。',
          formula: 'S矩形 = |k|',
          examples: [
            'y=3/x上取点P(1,3)，矩形面积=|3|=3',
            'y=-2/x上取点P(1,-2)，矩形面积=|-2|=2',
          ],
        },
        {
          id: 'fbl-yy-3',
          title: '实际应用',
          content:
            '反比例函数在实际生活中有广泛应用，如：电压一定时电流与电阻的关系(I=U/R)、路程一定时速度与时间的关系(v=s/t)、面积一定时矩形长与宽的关系等。',
          examples: [
            '矩形面积S=60，长y与宽x的关系：y=60/x',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-fbl-yy-graph',
          type: 'svg',
          title: '反比例函数与矩形面积',
          description: '展示y=3/x图像上一点P向两坐标轴作垂线形成的矩形，矩形面积=|k|=3。',
          component: 'FunctionGraph',
          props: {
            expressions: ['3/x'],
            xRange: [-6, 6],
            yRange: [-6, 6],
          },
        },
      ],
      practices: [
        {
          id: 'fbl-yy-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '反比例函数 y = 5/x 的图像位于（　）',
          options: ['一、二象限', '一、三象限', '二、四象限', '三、四象限'],
          answer: 'B',
          steps: ['k=5>0', '图像位于第一、三象限'],
        },
        {
          id: 'fbl-yy-p2',
          type: 'choice',
          difficulty: 'basic',
          question: '反比例函数 y = k/x 的图像在第二、四象限，则k的值可能是（　）',
          options: ['1', '2', '3', '-1'],
          answer: 'D',
          steps: ['图像在二、四象限⇒k<0', '只有D选项-1<0'],
        },
        {
          id: 'fbl-yy-p3',
          type: 'fill',
          difficulty: 'medium',
          question: '反比例函数 y = -3/x 的图像上有一点P(1,-3)，则点P向两坐标轴作垂线围成的矩形面积为 ____ 。',
          answer: '3',
          steps: ['S = |k| = |-3| = 3'],
        },
        {
          id: 'fbl-yy-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '已知反比例函数y=k/x的图像经过点(-2,4)，求：(1)k的值；(2)当x=4时y的值。',
          answer: 'k=-8，y=-2',
          steps: ['(1) k = (-2)×4 = -8', '(2) y = -8/x', '当x=4时，y = -8/4 = -2'],
        },
        {
          id: 'fbl-yy-p5',
          type: 'calculate',
          difficulty: 'hard',
          question: '某水池容积为120m³，每小时注水x m³，注满水池需要y小时。求y与x的函数关系式，并求每小时注水10m³时注满需要多少小时。',
          answer: 'y = 120/x，12小时',
          steps: ['xy = 120', 'y = 120/x', '当x=10时，y = 120/10 = 12小时'],
        },
        {
          id: 'fbl-yy-p6',
          type: 'calculate',
          difficulty: 'hard',
          question: '在反比例函数y=6/x的图像上有两点A(x₁,y₁)和B(x₂,y₂)，若x₁<0<x₂，比较y₁和y₂的大小。',
          answer: 'y₁ < 0 < y₂，即 y₁ < y₂',
          steps: ['k=6>0', 'x₁<0时，A在第三象限，y₁<0', 'x₂>0时，B在第一象限，y₂>0', '所以 y₁ < y₂'],
          hint: '注意两个点在不同的象限，不能直接用单调性。',
        },
      ],
    },
  ],
}
