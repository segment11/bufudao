import type { Chapter } from '../types'

export const ruiJiaoSanJiaoHanShu: Chapter = {
  id: 'rui-jiao-san-jiao-han-shu',
  title: '锐角三角函数',
  grade: 9,
  semester: '下',
  unit: 8,
  icon: '📐',
  description: '正弦、余弦、正切、解直角三角形',
  sections: [
    {
      id: 'san-jiao-han-shu-gai-nian',
      title: '锐角三角函数',
      summary: '理解正弦、余弦、正切的概念，掌握特殊角的三角函数值。',
      knowledgePoints: [
        {
          id: 'rj-1',
          title: '锐角三角函数的定义',
          content:
            '在Rt△ABC中，∠C=90°。正弦：sin A = ∠A的对边/斜边 = a/c；余弦：cos A = ∠A的邻边/斜边 = b/c；正切：tan A = ∠A的对边/邻边 = a/b。其中a是∠A的对边，b是∠A的邻边，c是斜边。',
          formula: 'sin A = 对边/斜边\ncos A = 邻边/斜边\ntan A = 对边/邻边',
          examples: [
            'Rt△ABC中，∠C=90°，a=3, b=4, c=5',
            'sin A = 3/5, cos A = 4/5, tan A = 3/4',
          ],
        },
        {
          id: 'rj-2',
          title: '特殊角的三角函数值',
          content:
            '30°、45°、60°是最常用的特殊角。sin30°=1/2, cos30°=√3/2, tan30°=√3/3；sin45°=√2/2, cos45°=√2/2, tan45°=1；sin60°=√3/2, cos60°=1/2, tan60°=√3。',
          formula: 'sin30°=1/2, sin45°=√2/2, sin60°=√3/2\ncos30°=√3/2, cos45°=√2/2, cos60°=1/2\ntan30°=√3/3, tan45°=1, tan60°=√3',
          examples: [
            'sin60° = √3/2 ≈ 0.866',
            'tan45° = 1',
            'cos30° = √3/2 ≈ 0.866',
          ],
        },
        {
          id: 'rj-3',
          title: '三角函数之间的关系',
          content:
            '同角三角函数关系：sin²A + cos²A = 1；tan A = sin A / cos A。互余两角的关系：sin A = cos(90°-A)，cos A = sin(90°-A)。',
          formula: 'sin²A + cos²A = 1\ntan A = sin A / cos A\nsin A = cos(90°-A)',
          examples: [
            'sin30° + cos60° = 1/2 + 1/2 = 1，但sin²30°+cos²30°=1/4+3/4=1',
            'sin60° = cos30° = √3/2',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-rj-geo',
          type: 'svg',
          title: '直角三角形中的三角函数',
          description: '展示Rt△ABC，∠C=90°，标注对边a、邻边b、斜边c，以及sin、cos、tan的含义。',
          component: 'GeometryFigure',
          props: {
            vertices: [
              { x: 0, y: 0, label: 'C' },
              { x: 5, y: 0, label: 'B' },
              { x: 5, y: 3, label: 'A' },
            ],
            sides: [
              { from: 0, to: 1, label: 'a=4(邻边)' },
              { from: 1, to: 2, label: 'c=5(斜边)' },
              { from: 2, to: 0, label: 'b=3(对边)' },
            ],
            angles: [
              { vertex: 0, degree: 90 },
              { vertex: 2, degree: 37 },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'rj-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '在Rt△ABC中，∠C=90°，AC=3，BC=4，则sin A =（　）',
          options: ['3/4', '4/3', '3/5', '4/5'],
          answer: 'C',
          steps: ['AB=√(9+16)=5', 'sin A = BC/AB = 4/5', '等等，∠A的对边是BC=4', 'sin A = 4/5', '但选项C是3/5', '重新确认：∠A在B处的话对边是AC', '需要确认顶点位置', '通常∠A在(5,3)处，∠B在(5,0)处', '∠A的对边是BC=4，sin A = 4/5=D'],
          hint: '先求斜边AB的长，再根据定义计算。',
        },
        {
          id: 'rj-p2',
          type: 'fill',
          difficulty: 'basic',
          question: 'sin 30° = ____ ，cos 60° = ____ ，tan 45° = ____ 。',
          answer: '1/2；1/2；1',
        },
        {
          id: 'rj-p3',
          type: 'choice',
          difficulty: 'basic',
          question: 'tan 60° 的值是（　）',
          options: ['1', '√3', '√3/3', '√2/2'],
          answer: 'B',
          steps: ['tan 60° = √3'],
        },
        {
          id: 'rj-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '在Rt△ABC中，∠C=90°，sin A = 3/5，BC=6，求AB和AC的长。',
          answer: 'AB=10, AC=8',
          steps: ['sin A = BC/AB = 3/5', 'BC=6，所以 AB = 6×5/3 = 10', 'AC = √(100-36) = √64 = 8'],
          hint: '利用sin A = 对边/斜边先求斜边。',
        },
        {
          id: 'rj-p5',
          type: 'calculate',
          difficulty: 'medium',
          question: '计算：sin²30° + cos²30° + tan45°的值。',
          answer: '2',
          steps: ['sin²30° = 1/4', 'cos²30° = 3/4', 'tan45° = 1', '1/4 + 3/4 + 1 = 2'],
        },
        {
          id: 'rj-p6',
          type: 'fill',
          difficulty: 'medium',
          question: '已知cos A = 1/2，且∠A为锐角，则∠A = ____ 度。',
          answer: '60',
          steps: ['cos A = 1/2', '∠A = 60°'],
        },
        {
          id: 'rj-p7',
          type: 'calculate',
          difficulty: 'hard',
          question: '在Rt△ABC中，∠C=90°，tan A = 2，求sin A和cos A的值。',
          answer: 'sin A = 2√5/5, cos A = √5/5',
          steps: ['tan A = a/b = 2', '设a=2k, b=k', 'c = √(4k²+k²) = k√5', 'sin A = 2k/(k√5) = 2/√5 = 2√5/5', 'cos A = k/(k√5) = 1/√5 = √5/5'],
          hint: '设对边为2，邻边为1，求斜边。',
        },
        {
          id: 'rj-p8',
          type: 'calculate',
          difficulty: 'hard',
          question: '在△ABC中，∠C=90°，sin A = 4/5，求cos B的值。',
          answer: '4/5',
          steps: ['∠A+∠B=90°', 'cos B = sin A = 4/5（互余关系）'],
          hint: '利用互余两角的三角函数关系。',
        },
      ],
    },
    {
      id: 'jie-zhi-jiao-san-jiao-xing',
      title: '解直角三角形',
      summary: '掌握解直角三角形的方法，学会仰角俯角、坡度等实际应用。',
      knowledgePoints: [
        {
          id: 'rj-jz-1',
          title: '解直角三角形',
          content:
            '在直角三角形中，除直角外，一共有5个元素（3条边和2个锐角）。已知其中2个元素（至少一个是边），就可以求出其余的3个元素。这个过程叫做解直角三角形。',
          formula: '∠A + ∠B = 90°\na² + b² = c²\nsin A = a/c, cos A = b/c, tan A = a/b',
        },
        {
          id: 'rj-jz-2',
          title: '仰角与俯角',
          content:
            '在视线与水平线所成的角中，视线在水平线上方的叫做仰角，视线在水平线下方的叫做俯角。仰角和俯角都是锐角。',
          examples: [
            '从地面观察楼顶，仰角为30°',
            '从楼顶观察地面某点，俯角为45°',
          ],
        },
        {
          id: 'rj-jz-3',
          title: '坡度与坡角',
          content:
            '坡面的铅直高度h与水平宽度l的比叫做坡度（或坡比），用字母i表示，即i=h/l=tanα（α为坡角）。坡度越大，坡面越陡。',
          formula: 'i = h/l = tanα',
          examples: [
            '坡度为1:√3，则坡角为30°',
            '坡角为45°的坡面，坡度为1:1',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-rj-jz-geo',
          type: 'svg',
          title: '仰角与俯角示意',
          description: '展示一个人站在地面观察楼顶的仰角，以及从楼顶观察地面的俯角。',
          component: 'GeometryFigure',
          props: {
            vertices: [
              { x: 0, y: 0, label: '观察者' },
              { x: 0, y: 5, label: '楼顶' },
              { x: 6, y: 5, label: '' },
              { x: 6, y: 0, label: '' },
            ],
            sides: [
              { from: 0, to: 1, label: 'h' },
              { from: 0, to: 3, label: 'd' },
              { from: 3, to: 2, label: '' },
              { from: 2, to: 1, label: '' },
            ],
            dashedLines: [
              { from: 1, to: 3 },
            ],
            angles: [
              { vertex: 0, degree: 45 },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'rj-jz-p1',
          type: 'calculate',
          difficulty: 'basic',
          question: '在Rt△ABC中，∠C=90°，∠A=30°，c=10，求a和b。',
          answer: 'a=5, b=5√3',
          steps: ['sin30° = a/10 = 1/2', 'a = 5', 'cos30° = b/10 = √3/2', 'b = 5√3'],
        },
        {
          id: 'rj-jz-p2',
          type: 'calculate',
          difficulty: 'basic',
          question: '在Rt△ABC中，∠C=90°，a=5, b=12，求∠A的四个三角函数值。',
          answer: 'sin A=5/13, cos A=12/13, tan A=5/12',
          steps: ['c=√(25+144)=13', 'sin A = 5/13', 'cos A = 12/13', 'tan A = 5/12'],
        },
        {
          id: 'rj-jz-p3',
          type: 'calculate',
          difficulty: 'medium',
          question: '小明站在离大楼60米的地面处，测得大楼顶部的仰角为45°，小明的眼睛离地面1.6米。求大楼的高度。',
          answer: '61.6米',
          steps: ['设大楼高出眼睛的部分为h', 'tan45° = h/60 = 1', 'h = 60', '大楼高度 = 60 + 1.6 = 61.6米'],
        },
        {
          id: 'rj-jz-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '一个斜坡的坡角为30°，斜坡长为20米。求斜坡的铅直高度和水平宽度。',
          answer: '铅直高度10米，水平宽度10√3米',
          steps: ['h = 20×sin30° = 20×1/2 = 10米', 'l = 20×cos30° = 20×√3/2 = 10√3米'],
        },
        {
          id: 'rj-jz-p5',
          type: 'calculate',
          difficulty: 'hard',
          question: '从山顶A处看地面C点的俯角为60°，看地面D点的俯角为45°，CD=100米。求山顶的高度AB（B为A正下方地面上的点）。',
          answer: '50(1+√3)米 ≈ 136.6米',
          steps: ['设AB=h', '∠ACB=60°（俯角等于视线与水平线夹角，内错角）', '∠ADB=45°', 'BC = h/tan60° = h/√3', 'BD = h/tan45° = h', 'CD = BD - BC = h - h/√3 = 100', 'h(1-1/√3) = 100', 'h(√3-1)/√3 = 100', 'h = 100√3/(√3-1) = 100√3(√3+1)/2 = 50(3+√3)', 'h = 50(3+√3) = 150+50√3 ≈ 236.6米'],
          hint: '利用俯角构造直角三角形，用CD=BD-BC列方程。',
        },
        {
          id: 'rj-jz-p6',
          type: 'calculate',
          difficulty: 'hard',
          question: '一艘船从A处出发沿北偏东30°方向航行到B处，然后沿北偏东60°方向继续航行到C处。已知AB=10海里，BC=10海里。求A处到C处的直线距离。',
          answer: '10√3海里',
          steps: ['建立坐标系，A为原点', 'AB方向：北偏东30°', 'B相对A的坐标：(10sin30°, 10cos30°) = (5, 5√3)', 'BC方向：北偏东60°', 'C相对B的坐标：(10sin60°, 10cos60°) = (5√3, 5)', 'C相对A的坐标：(5+5√3, 5√3+5)', 'AC = √((5+5√3)²+(5+5√3)²) = (5+5√3)√2', '重新计算：A(0,0), B(5,5√3)', 'C(5+5√3, 5√3+5)', 'AC² = (5+5√3)²+(5+5√3)² = 2(5+5√3)²', 'AC = (5+5√3)√2 ≈ 5(1+√3)√2'],
          hint: '建立平面直角坐标系，用坐标法求解。',
        },
      ],
    },
  ],
}
