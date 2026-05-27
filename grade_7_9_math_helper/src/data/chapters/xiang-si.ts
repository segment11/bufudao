import type { Chapter } from '../types'

export const xiangSi: Chapter = {
  id: 'xiang-si',
  title: '相似',
  grade: 9,
  semester: '下',
  unit: 7,
  icon: '🔲',
  description: '相似三角形、位似',
  sections: [
    {
      id: 'xiang-si-gai-nian',
      title: '图形的相似',
      summary: '理解相似图形的概念，掌握比例线段和相似多边形的性质。',
      knowledgePoints: [
        {
          id: 'xs-gn-1',
          title: '相似图形的定义',
          content:
            '形状相同的图形叫做相似图形。相似图形的对应角相等，对应边的比相等。两个相似多边形对应边的比叫做相似比。',
          formula: '相似比为k时，对应边之比 = k',
          examples: [
            '两个大小不同的正方形是相似图形',
            '照片与放大的照片是相似图形',
          ],
        },
        {
          id: 'xs-gn-2',
          title: '比例线段',
          content:
            '四条线段a、b、c、d中，如果a:b=c:d，那么这四条线段叫做成比例线段，简称比例线段。比例的基本性质：a/b=c/d ⟺ ad=bc。',
          formula: 'a:b = c:d ⟺ ad = bc',
          examples: [
            '若a:b=2:3，c:d=4:6，则a:b=c:d（因为2×6=3×4=12）',
          ],
        },
        {
          id: 'xs-gn-3',
          title: '相似多边形的性质',
          content:
            '相似多边形的对应角相等，对应边成比例。相似多边形的周长比等于相似比，面积比等于相似比的平方。',
          formula: '周长比 = k，面积比 = k²',
          examples: [
            '相似比为1:2的两个多边形，周长比为1:2，面积比为1:4',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-xs-gn-geo',
          type: 'svg',
          title: '相似多边形',
          description: '展示两个相似的矩形，标注对应边的比例为1:2。',
          component: 'GeometryFigure',
          props: {
            vertices: [
              { x: 0, y: 0, label: 'A' },
              { x: 3, y: 0, label: 'B' },
              { x: 3, y: 2, label: 'C' },
              { x: 0, y: 2, label: 'D' },
              { x: 5, y: 0, label: "A'" },
              { x: 11, y: 0, label: "B'" },
              { x: 11, y: 4, label: "C'" },
              { x: 5, y: 4, label: "D'" },
            ],
            sides: [
              { from: 0, to: 1, label: '3' },
              { from: 1, to: 2, label: '2' },
              { from: 2, to: 3, label: '' },
              { from: 3, to: 0, label: '' },
              { from: 4, to: 5, label: '6' },
              { from: 5, to: 6, label: '4' },
              { from: 6, to: 7, label: '' },
              { from: 7, to: 4, label: '' },
            ],
            dashedLines: [
              { from: 0, to: 4 },
              { from: 1, to: 5 },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'xs-gn-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列图形中，一定相似的是（　）',
          options: ['两个矩形', '两个菱形', '两个正方形', '两个平行四边形'],
          answer: 'C',
          steps: ['两个矩形对应角相等但边不一定成比例', '两个菱形边成比例但角不一定相等', '正方形四角都是直角、四边相等，一定相似', '平行四边形不一定相似'],
        },
        {
          id: 'xs-gn-p2',
          type: 'fill',
          difficulty: 'basic',
          question: '两个相似多边形的相似比为3:5，则它们的周长比为 ____ ，面积比为 ____ 。',
          answer: '3:5；9:25',
          steps: ['周长比等于相似比=3:5', '面积比等于相似比的平方=9:25'],
        },
        {
          id: 'xs-gn-p3',
          type: 'calculate',
          difficulty: 'medium',
          question: '已知a:b=3:5，且a+b=24，求a和b的值。',
          answer: 'a=9, b=15',
          steps: ['设a=3k, b=5k', '3k+5k=24', '8k=24', 'k=3', 'a=9, b=15'],
        },
        {
          id: 'xs-gn-p4',
          type: 'choice',
          difficulty: 'medium',
          question: '两个相似多边形的面积比为4:9，则相似比为（　）',
          options: ['2:3', '4:9', '16:81', '3:2'],
          answer: 'A',
          steps: ['面积比=相似比的平方', '相似比=√(4/9)=2/3'],
        },
        {
          id: 'xs-gn-p5',
          type: 'calculate',
          difficulty: 'hard',
          question: '两个相似三角形的面积分别为16cm²和25cm²，较小的三角形周长为24cm，求较大的三角形周长。',
          answer: '30cm',
          steps: ['面积比=16:25', '相似比=4:5', '周长比=4:5', '较大三角形周长=24×5/4=30cm'],
        },
      ],
    },
    {
      id: 'xiang-si-san-jiao-xing',
      title: '相似三角形',
      summary: '掌握相似三角形的判定方法和性质。',
      knowledgePoints: [
        {
          id: 'xs-sjx-1',
          title: '相似三角形的判定',
          content:
            '相似三角形的判定方法：①AA（两角分别相等的两个三角形相似）；②SAS（两边成比例且夹角相等的两个三角形相似）；③SSS（三边成比例的两个三角形相似）。',
          formula: 'AA: ∠A=∠A\', ∠B=∠B\'\nSAS: AB/A\'B\'=AC/A\'C\', ∠A=∠A\'\nSSS: AB/A\'B\'=BC/B\'C\'=AC/A\'C\'',
        },
        {
          id: 'xs-sjx-2',
          title: '相似三角形的性质',
          content:
            '相似三角形的对应角相等，对应边成比例。相似三角形对应高的比、对应中线的比、对应角平分线的比都等于相似比。相似三角形面积的比等于相似比的平方。',
          formula: '对应线段比 = 相似比k\n面积比 = k²',
          examples: [
            '相似比为2:3的两个三角形，面积比为4:9',
          ],
        },
        {
          id: 'xs-sjx-3',
          title: '直角三角形的相似',
          content:
            '斜边和一条直角边成比例的两个直角三角形相似。在直角三角形中，斜边上的高将原三角形分成两个与原三角形都相似的小三角形。',
          examples: [
            'Rt△ABC中，CD⊥AB于D，则△ACD∽△CBD∽△ABC',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-xs-sjx-geo',
          type: 'svg',
          title: '相似三角形',
          description: '展示两个相似三角形，标注对应边和对应角。',
          component: 'GeometryFigure',
          props: {
            vertices: [
              { x: 0, y: 0, label: 'A' },
              { x: 4, y: 0, label: 'B' },
              { x: 4, y: 3, label: 'C' },
              { x: 6, y: 0, label: "A'" },
              { x: 11, y: 0, label: "B'" },
              { x: 11, y: 3.75, label: "C'" },
            ],
            sides: [
              { from: 0, to: 1, label: '4' },
              { from: 1, to: 2, label: '3' },
              { from: 2, to: 0, label: '' },
              { from: 3, to: 4, label: '5' },
              { from: 4, to: 5, label: '3.75' },
              { from: 5, to: 3, label: '' },
            ],
            dashedLines: [
              { from: 0, to: 3 },
              { from: 1, to: 4 },
            ],
            angles: [
              { vertex: 1, degree: 37 },
              { vertex: 4, degree: 37 },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'xs-sjx-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '△ABC中，DE∥BC，AD=2，DB=3，则△ADE与△ABC的相似比为（　）',
          options: ['2:3', '2:5', '3:5', '5:2'],
          answer: 'B',
          steps: ['DE∥BC ⇒ △ADE∽△ABC', 'AD/AB = 2/(2+3) = 2/5', '相似比为2:5'],
        },
        {
          id: 'xs-sjx-p2',
          type: 'calculate',
          difficulty: 'medium',
          question: '在△ABC中，∠A=50°，∠B=60°。在△DEF中，∠D=50°，∠E=70°。判断△ABC和△DEF是否相似，并说明理由。',
          answer: '相似。因为∠C=180°-50°-60°=70°=∠E，∠A=∠D，由AA判定两个三角形相似。',
          steps: ['△ABC中：∠C=180°-50°-60°=70°', '∠A=∠D=50°', '∠C=∠E=70°', '由AA判定，△ABC∽△DEF'],
        },
        {
          id: 'xs-sjx-p3',
          type: 'calculate',
          difficulty: 'medium',
          question: '已知△ABC∽△DEF，AB=6，DE=9，BC=8，求EF的值。',
          answer: '12',
          steps: ['相似比=AB/DE=6/9=2/3', 'BC/EF=2/3', '8/EF=2/3', 'EF=12'],
        },
        {
          id: 'xs-sjx-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '△ABC中，∠ACB=90°，CD⊥AB于D，AC=6，BC=8，求CD的长。',
          answer: '4.8',
          steps: ['AB=√(36+64)=10', '由面积法：AC×BC=AB×CD', '6×8=10×CD', 'CD=4.8'],
          hint: '利用面积相等：AC×BC/2=AB×CD/2。',
        },
        {
          id: 'xs-sjx-p5',
          type: 'calculate',
          difficulty: 'hard',
          question: '在△ABC中，D、E分别是AB、AC上的点，DE∥BC，且S△ADE:S四边形BCED=1:3，求AD:AB。',
          answer: '1:2',
          steps: ['S△ADE:S△ABC = 1:(1+3) = 1:4', '面积比=相似比的平方', '相似比=AD:AB=√(1/4)=1:2'],
          hint: '先求S△ADE与S△ABC的面积比。',
        },
        {
          id: 'xs-sjx-p6',
          type: 'calculate',
          difficulty: 'hard',
          question: '如图，在平行四边形ABCD中，E是BC上一点，BE:EC=1:2，AE与BD交于F。求BF:FD。',
          answer: '1:3',
          steps: ['AB∥CD ⇒ △BEF∽△DFB（应该是△BEF∽△DAF）', 'BE∥AD（平行四边形）⇒ △BEF∽△DAF', 'BF:DF = BE:AD = BE:BC = 1:3'],
          hint: '利用平行线截得的相似三角形。',
        },
        {
          id: 'xs-sjx-p7',
          type: 'calculate',
          difficulty: 'hard',
          question: '两个相似三角形的最长边分别为10cm和15cm，它们的面积之和为130cm²，求较大三角形的面积。',
          answer: '90cm²',
          steps: ['相似比=10:15=2:3', '面积比=4:9', '设面积分别为4k和9k', '4k+9k=130', '13k=130', 'k=10', '较大三角形面积=9×10=90cm²'],
        },
        {
          id: 'xs-sjx-p8',
          type: 'prove',
          difficulty: 'hard',
          question: '在Rt△ABC中，∠ACB=90°，CD是斜边AB上的高。证明：CD²=AD·DB。',
          answer: '证明：因为CD⊥AB，所以∠ADC=∠BDC=90°。又∠ACB=90°，所以∠ACD=∠B（同为∠A的余角）。在△ACD和△CBD中，∠ADC=∠CDB=90°，∠ACD=∠B，所以△ACD∽△CBD（AA）。因此CD/BD=AD/CD，即CD²=AD·DB。',
          steps: [
            'CD⊥AB ⇒ ∠ADC=∠CDB=90°',
            '∠ACB=90° ⇒ ∠ACD+∠BCD=90°',
            '在Rt△ACD中，∠ACD+∠A=90°',
            '所以∠BCD=∠A',
            '△ACD∽△CBD（AA）',
            'CD/BD=AD/CD',
            'CD²=AD·DB',
          ],
        },
      ],
    },
    {
      id: 'wei-si',
      title: '位似',
      summary: '理解位似图形的定义与性质，学会用位似变换放大或缩小图形。',
      knowledgePoints: [
        {
          id: 'xs-ws-1',
          title: '位似图形的定义',
          content:
            '两个多边形不仅相似，而且对应顶点的连线相交于一点，对应边互相平行，这样的两个图形叫做位似图形。这个交点叫做位似中心。位似图形一定是相似图形，但相似图形不一定是位似图形。',
          examples: [
            '以O为位似中心，将△ABC放大2倍得到△A\'B\'C\'',
          ],
        },
        {
          id: 'xs-ws-2',
          title: '位似图形的性质',
          content:
            '位似图形上任意一对对应点到位似中心的距离之比等于位似比。位似图形的对应边平行或在同一条直线上。',
          formula: 'OA\'/OA = 位似比 = k',
          examples: [
            '位似比为2，则OA\'=2OA',
          ],
        },
        {
          id: 'xs-ws-3',
          title: '用坐标表示位似变换',
          content:
            '在平面直角坐标系中，如果位似中心是原点，位似比为k，则点(x,y)的对应点为(kx, ky)或(-kx, -ky)。',
          formula: '以原点为位似中心，位似比k：(x,y)→(kx,ky)或(-kx,-ky)',
          examples: [
            '位似比为2，点(1,3)的对应点为(2,6)或(-2,-6)',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-xs-ws-geo',
          type: 'svg',
          title: '位似图形',
          description: '展示以O为位似中心，将三角形放大2倍的位似变换。',
          component: 'GeometryFigure',
          props: {
            vertices: [
              { x: 0, y: 0, label: 'O' },
              { x: 2, y: 3, label: 'A' },
              { x: 5, y: 2, label: 'B' },
              { x: 4, y: 6, label: "A'" },
              { x: 10, y: 4, label: "B'" },
            ],
            sides: [
              { from: 1, to: 2, label: '' },
              { from: 2, to: 0, label: '' },
              { from: 0, to: 1, label: '' },
              { from: 3, to: 4, label: '' },
              { from: 4, to: 0, label: '' },
              { from: 0, to: 3, label: '' },
            ],
            dashedLines: [
              { from: 1, to: 3 },
              { from: 2, to: 4 },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'xs-ws-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列关于位似图形的说法正确的是（　）',
          options: [
            '位似图形一定是全等图形',
            '位似图形一定是相似图形',
            '相似图形一定是位似图形',
            '位似图形面积相等',
          ],
          answer: 'B',
          steps: ['位似是特殊的相似变换', '位似图形一定是相似图形'],
        },
        {
          id: 'xs-ws-p2',
          type: 'fill',
          difficulty: 'basic',
          question: '以原点为位似中心，位似比为3，则点(2,4)的对应点坐标为 ____ 。',
          answer: '(6,12)或(-6,-12)',
          steps: ['(2×3, 4×3) = (6, 12)', '或 (-2×3, -4×3) = (-6, -12)'],
        },
        {
          id: 'xs-ws-p3',
          type: 'choice',
          difficulty: 'medium',
          question: '△ABC以点O为位似中心放大2倍得到△A\'B\'C\'，若OA=3，则OA\'=（　）',
          options: ['3', '6', '1.5', '9'],
          answer: 'B',
          steps: ['OA\'/OA = 位似比 = 2', 'OA\' = 2×3 = 6'],
        },
        {
          id: 'xs-ws-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '在平面直角坐标系中，△ABC的顶点为A(1,1)、B(3,1)、C(2,3)。以原点为位似中心，将△ABC放大为原来的2倍，写出放大后的顶点坐标。',
          answer: 'A\'(2,2)、B\'(6,2)、C\'(4,6) 或 A\'(-2,-2)、B\'(-6,-2)、C\'(-4,-6)',
          steps: ['同侧放大：A\'(2,2)、B\'(6,2)、C\'(4,6)', '异侧放大：A\'(-2,-2)、B\'(-6,-2)、C\'(-4,-6)'],
        },
        {
          id: 'xs-ws-p5',
          type: 'calculate',
          difficulty: 'hard',
          question: '如图，四边形ABCD和四边形A\'B\'C\'D\'是位似图形，位似中心为O，OA:OA\'=2:5。已知四边形ABCD的面积为8cm²，求四边形A\'B\'C\'D\'的面积。',
          answer: '50cm²',
          steps: ['位似比=OA:OA\'=2:5', '面积比=位似比的平方=4:25', 'S四边形A\'B\'C\'D\'=8×25/4=50cm²'],
        },
      ],
    },
  ],
}
