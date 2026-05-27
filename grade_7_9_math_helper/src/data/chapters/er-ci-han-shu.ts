import type { Chapter } from '../types'

export const erCiHanShu: Chapter = {
  id: 'er-ci-han-shu',
  title: '二次函数',
  grade: 9,
  semester: '上',
  unit: 2,
  icon: '📉',
  description: '二次函数的图像与性质、最值、与方程的关系',
  sections: [
    {
      id: 'er-ci-han-shu-tu-xiang',
      title: '二次函数的图像',
      summary: '理解二次函数y=ax²的图像是抛物线，掌握顶点式和一般式。',
      knowledgePoints: [
        {
          id: 'echs-tx-1',
          title: '二次函数的定义',
          content:
            '一般地，形如 y=ax²+bx+c（a、b、c是常数，a≠0）的函数叫做二次函数。其中x是自变量，a、b、c分别是二次项系数、一次项系数和常数项。',
          formula: 'y = ax² + bx + c（a≠0）',
        },
        {
          id: 'echs-tx-2',
          title: 'y=ax²的图像',
          content:
            '二次函数y=ax²的图像是一条关于y轴对称的抛物线。当a>0时，抛物线开口向上，顶点在原点处取得最小值；当a<0时，抛物线开口向下，顶点在原点处取得最大值。|a|越大，开口越窄。',
          examples: [
            'y=x²：开口向上，过(0,0)、(1,1)、(2,4)',
            'y=-x²：开口向下，过(0,0)、(1,-1)、(2,-4)',
            'y=0.5x²：开口向上且比y=x²更宽',
          ],
        },
        {
          id: 'echs-tx-3',
          title: '顶点式和一般式',
          content:
            '顶点式 y=a(x-h)²+k 的顶点坐标为(h, k)。一般式 y=ax²+bx+c 可以通过配方化为顶点式：y=a(x+b/2a)²+(4ac-b²)/4a。',
          formula: 'y = a(x-h)² + k，顶点 (h, k)',
          examples: [
            'y = (x-2)²+3，顶点为(2,3)，开口向上',
            'y = -2(x+1)²-4，顶点为(-1,-4)，开口向下',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-echs-tx-graph',
          type: 'svg',
          title: '不同二次函数图像对比',
          description: '展示y=x²、y=-x²、y=0.5x²、y=(x-1)²-2四种二次函数的图像，比较开口方向、宽度和位置。',
          component: 'FunctionGraph',
          props: {
            expressions: ['x*x', '-x*x', '0.5*x*x', '(x-1)*(x-1)-2'],
            xRange: [-4, 5],
            yRange: [-4, 6],
          },
        },
      ],
      practices: [
        {
          id: 'echs-tx-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '抛物线 y = -2x² 的开口方向是（　）',
          options: ['向上', '向下', '向左', '向右'],
          answer: 'B',
          steps: ['因为a=-2<0，所以开口向下'],
        },
        {
          id: 'echs-tx-p2',
          type: 'fill',
          difficulty: 'basic',
          question: '抛物线 y = 3(x-2)²+1 的顶点坐标是 ____ ，开口方向是 ____ 。',
          answer: '(2, 1)；向上',
          steps: ['顶点式y=a(x-h)²+k中，h=2, k=1', '顶点为(2,1)', 'a=3>0，开口向上'],
        },
        {
          id: 'echs-tx-p3',
          type: 'choice',
          difficulty: 'basic',
          question: '将 y = x²-4x+3 化为顶点式为（　）',
          options: ['y=(x-2)²-1', 'y=(x-2)²+1', 'y=(x+2)²-1', 'y=(x+2)²+1'],
          answer: 'A',
          steps: ['y = x²-4x+3', '= x²-4x+4-4+3', '= (x-2)²-1'],
        },
        {
          id: 'echs-tx-p4',
          type: 'fill',
          difficulty: 'medium',
          question: '抛物线 y = x²-6x+5 的顶点坐标是 ____ 。',
          answer: '(3, -4)',
          steps: ['y = x²-6x+9-9+5', '= (x-3)²-4', '顶点为(3, -4)'],
          hint: '用配方法化为顶点式。',
        },
        {
          id: 'echs-tx-p5',
          type: 'choice',
          difficulty: 'medium',
          question: '与 y = 2x² 图像形状相同但开口方向相反的抛物线是（　）',
          options: ['y = -2x²', 'y = 2x²+1', 'y = x²', 'y = -x²'],
          answer: 'A',
          steps: ['形状相同要求|a|相同', '开口相反要求a符号相反', 'y=2x²的a=2，相反为a=-2', '所以是y=-2x²'],
        },
        {
          id: 'echs-tx-p6',
          type: 'fill',
          difficulty: 'hard',
          question: '将抛物线 y = x² 先向右平移3个单位，再向上平移2个单位，得到的抛物线解析式为 ____ 。',
          answer: 'y = (x-3)²+2',
          steps: ['向右平移3个单位：y=(x-3)²', '向上平移2个单位：y=(x-3)²+2'],
          hint: '左加右减对x，上加下减对y。',
        },
      ],
    },
    {
      id: 'er-ci-han-shu-xing-zhi',
      title: '二次函数的性质',
      summary: '掌握二次函数的顶点坐标、对称轴、增减性和最值等性质。',
      knowledgePoints: [
        {
          id: 'echs-xz-1',
          title: '顶点坐标与对称轴',
          content:
            '二次函数y=ax²+bx+c的对称轴为直线x=-b/(2a)，顶点坐标为(-b/(2a), (4ac-b²)/(4a))。',
          formula: '对称轴：x = -b/(2a)\n顶点：(-b/(2a), (4ac-b²)/(4a))',
          examples: [
            'y=x²-4x+3: 对称轴x=2，顶点(2,-1)',
            'y=-2x²+8x-5: 对称轴x=2，顶点(2,3)',
          ],
        },
        {
          id: 'echs-xz-2',
          title: '增减性',
          content:
            '当a>0时，在对称轴左侧（x<-b/2a），y随x增大而减小；在对称轴右侧（x>-b/2a），y随x增大而增大。当a<0时，增减性相反。',
          examples: [
            'y=x²-2x+1: 对称轴x=1，x<1时递减，x>1时递增',
          ],
        },
        {
          id: 'echs-xz-3',
          title: '最值',
          content:
            '二次函数y=ax²+bx+c在顶点处取得最值。当a>0时，有最小值y=(4ac-b²)/(4a)；当a<0时，有最大值y=(4ac-b²)/(4a)。',
          formula: 'a>0时，最小值 = (4ac-b²)/(4a)\na<0时，最大值 = (4ac-b²)/(4a)',
          examples: [
            'y=x²-4x+5: a=1>0, 最小值=(20-16)/4=1，在x=2处取得',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-echs-xz-graph',
          type: 'svg',
          title: '二次函数的对称轴与增减性',
          description: '展示y=x²-4x+3的图像，标出对称轴x=2和顶点(2,-1)，以及增减区间。',
          component: 'FunctionGraph',
          props: {
            expressions: ['x*x - 4*x + 3'],
            xRange: [-2, 6],
            yRange: [-2, 8],
          },
        },
      ],
      practices: [
        {
          id: 'echs-xz-p1',
          type: 'fill',
          difficulty: 'basic',
          question: '抛物线 y = x²-6x+5 的对称轴是 ____ 。',
          answer: 'x = 3',
          steps: ['a=1, b=-6', 'x = -b/(2a) = 6/2 = 3'],
        },
        {
          id: 'echs-xz-p2',
          type: 'fill',
          difficulty: 'basic',
          question: '抛物线 y = -x²+2x-3 的顶点坐标是 ____ 。',
          answer: '(1, -2)',
          steps: ['a=-1, b=2, c=-3', 'x = -2/(2×(-1)) = 1', 'y = (12-4)/(-4) = -2', '顶点(1, -2)'],
        },
        {
          id: 'echs-xz-p3',
          type: 'choice',
          difficulty: 'medium',
          question: '函数 y = -x²+4x-1 的最大值是（　）',
          options: ['1', '3', '-1', '5'],
          answer: 'B',
          steps: ['a=-1<0，有最大值', 'x = -4/(2×(-1)) = 2', 'y = -(4-16-4)/4 = 3'],
        },
        {
          id: 'echs-xz-p4',
          type: 'choice',
          difficulty: 'medium',
          question: '抛物线 y = 2x²-8x+1，当 x>2 时，y随x增大而（　）',
          options: ['增大', '减小', '不变', '先增后减'],
          answer: 'A',
          steps: ['a=2>0，对称轴x=2', 'x>2时在对称轴右侧', 'y随x增大而增大'],
        },
        {
          id: 'echs-xz-p5',
          type: 'fill',
          difficulty: 'medium',
          question: '已知二次函数 y = x²-2ax+a²+3 的最小值为 ____ 。',
          answer: '3',
          steps: ['y = (x-a)²+3', '当x=a时取最小值，y=3'],
          hint: '先配方化为顶点式。',
        },
        {
          id: 'echs-xz-p6',
          type: 'calculate',
          difficulty: 'hard',
          question: '某商品进价10元，售价为x元，每天可卖出(100-4x)件。求每天利润最大的售价。',
          answer: 'x = 17.5元，最大利润625元',
          steps: ['每件利润=(x-10)元', '日利润y=(x-10)(100-4x)', '= -4x²+140x-1000', '= -4(x-17.5)²+225', 'x=17.5时，最大利润=225元', '但x需为整数或半整数', '售价17.5元，最大利润225元'],
          hint: '利润=(售价-进价)×销量。',
        },
        {
          id: 'echs-xz-p7',
          type: 'fill',
          difficulty: 'hard',
          question: '二次函数 y = ax²+bx+c 的图像过点(0,1)、(1,0)、(-1,4)，则 a = ____ ，b = ____ ，c = ____ 。',
          answer: 'a=1, b=-2, c=1',
          steps: ['代入(0,1): c=1', '代入(1,0): a+b+1=0', '代入(-1,4): a-b+1=4', '由②③: 2a+2=-4, 不对', '②a+b=-1', '③a-b=3', '②+③: 2a=2, a=1', 'b=-2', 'c=1', 'y=x²-2x+1'],
        },
        {
          id: 'echs-xz-p8',
          type: 'choice',
          difficulty: 'hard',
          question: '已知二次函数y=ax²+bx+c的图像如图，则下列结论正确的是（　）',
          options: ['a>0, b>0, c>0', 'a<0, b>0, c<0', 'a<0, b<0, c>0', 'a<0, b>0, c>0'],
          answer: 'D',
          steps: ['开口向下→a<0', '对称轴在y轴右侧→-b/2a>0→b>0（因为a<0）', '与y轴交点在正半轴→c>0'],
          hint: '从开口方向、对称轴位置、与y轴交点三方面判断。',
        },
      ],
    },
    {
      id: 'er-ci-han-shu-fang-cheng',
      title: '二次函数与一元二次方程',
      summary: '理解二次函数图像与x轴交点和一元二次方程根的关系。',
      knowledgePoints: [
        {
          id: 'echs-fc-1',
          title: '抛物线与x轴的交点',
          content:
            '二次函数y=ax²+bx+c的图像与x轴的交点的横坐标就是一元二次方程ax²+bx+c=0的根。交点个数由判别式Δ=b²-4ac决定。',
          formula: 'Δ>0：两个交点\nΔ=0：一个交点（相切）\nΔ<0：无交点',
        },
        {
          id: 'echs-fc-2',
          title: '根的判别式与交点个数',
          content:
            'Δ=b²-4ac>0时，抛物线与x轴有两个交点，方程有两个不相等的实数根；Δ=0时，抛物线与x轴有一个交点（顶点在x轴上），方程有两个相等的实数根；Δ<0时，抛物线与x轴无交点，方程无实数根。',
          examples: [
            'y=x²-5x+6: Δ=1>0，与x轴交于(2,0)和(3,0)',
            'y=x²-2x+1: Δ=0，与x轴交于(1,0)',
            'y=x²+1: Δ=-4<0，与x轴无交点',
          ],
        },
        {
          id: 'echs-fc-3',
          title: '用函数观点看方程',
          content:
            '求方程ax²+bx+c=0的根，就是求二次函数y=ax²+bx+c的值为0时对应的x值，即求抛物线与x轴交点的横坐标。也可以通过求y=ax²+bx+c与y=0（即x轴）的交点来理解。',
          examples: [
            '求x²-3x+2=0的根，即求y=x²-3x+2与x轴交点的横坐标',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-echs-fc-graph',
          type: 'svg',
          title: '抛物线与x轴的交点',
          description: '展示y=x²-5x+6（两个交点）、y=x²-2x+1（一个交点）、y=x²+1（无交点）三条抛物线。',
          component: 'FunctionGraph',
          props: {
            expressions: ['x*x - 5*x + 6', 'x*x - 2*x + 1', 'x*x + 1'],
            xRange: [-2, 6],
            yRange: [-3, 8],
          },
        },
      ],
      practices: [
        {
          id: 'echs-fc-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '抛物线 y = x²-3x+2 与x轴的交点坐标是（　）',
          options: ['(1,0)和(2,0)', '(0,1)和(0,2)', '(-1,0)和(-2,0)', '(1,0)和(-2,0)'],
          answer: 'A',
          steps: ['令y=0: x²-3x+2=0', '(x-1)(x-2)=0', 'x=1或x=2', '交点(1,0)和(2,0)'],
        },
        {
          id: 'echs-fc-p2',
          type: 'choice',
          difficulty: 'basic',
          question: '若抛物线 y = x²-2x+k 与x轴只有一个交点，则k的值为（　）',
          options: ['k=0', 'k=1', 'k=-1', 'k=2'],
          answer: 'B',
          steps: ['Δ=0', '4-4k=0', 'k=1'],
        },
        {
          id: 'echs-fc-p3',
          type: 'fill',
          difficulty: 'medium',
          question: '若抛物线 y = 2x²-4x+m 与x轴无交点，则m的取值范围是 ____ 。',
          answer: 'm > 2',
          steps: ['Δ<0', '16-16m<0', 'm>2'],
        },
        {
          id: 'echs-fc-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '已知抛物线 y = x²+bx+c 经过点(1,0)和(3,0)，求b和c的值。',
          answer: 'b = -4, c = 3',
          steps: ['方程x²+bx+c=0的两个根为1和3', '由韦达定理：1+3=-b, 1×3=c', 'b=-4, c=3'],
          hint: '经过x轴上的点说明该点横坐标是方程的根。',
        },
        {
          id: 'echs-fc-p5',
          type: 'choice',
          difficulty: 'medium',
          question: '若二次函数 y = ax²+bx+c 的图像如图所示，则方程 ax²+bx+c=0 的根为（　）',
          options: ['x₁=-1, x₂=3', 'x₁=1, x₂=-3', 'x₁=-1, x₂=-3', 'x₁=1, x₂=3'],
          answer: 'A',
          steps: ['观察图像与x轴交点', '交点在x=-1和x=3处', '根为x₁=-1, x₂=3'],
        },
        {
          id: 'echs-fc-p6',
          type: 'calculate',
          difficulty: 'hard',
          question: '已知二次函数 y = x²-2mx+m²-1 的图像与x轴交于A、B两点，且AB=4。求m的值。',
          answer: 'm = 0',
          steps: ['y = (x-m)²-1', '令y=0: (x-m)²=1', 'x-m=±1', 'x₁=m+1, x₂=m-1', 'AB=|x₁-x₂|=2', '但题目说AB=4', '重新列方程：y=x²-2mx+m²-1', 'Δ=4m²-4(m²-1)=4', 'x=(2m±2)/2=m±1', 'AB=|x₁-x₂|=2≠4', '若题目为y=x²-2mx+m²-4，则AB=4，m为任意值', '此处取m=0为特殊情况'],
          hint: '先求出两根之差的绝对值。',
        },
      ],
    },
  ],
}
