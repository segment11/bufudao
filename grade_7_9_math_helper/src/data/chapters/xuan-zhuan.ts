import type { Chapter } from '../types'

export const xuanZhuan: Chapter = {
  id: 'xuan-zhuan',
  title: '旋转',
  grade: 9,
  semester: '上',
  unit: 3,
  icon: '🔄',
  description: '图形的旋转、中心对称',
  sections: [
    {
      id: 'tu-xing-xuan-zhuan',
      title: '图形的旋转',
      summary: '理解旋转的概念，掌握旋转的三要素和旋转的性质。',
      knowledgePoints: [
        {
          id: 'xz-1',
          title: '旋转的定义',
          content:
            '把一个平面图形绕着平面内某一点O转动一个角度，叫做图形的旋转。点O叫做旋转中心，转动的角叫做旋转角。旋转中心、旋转角和旋转方向称为旋转的三要素。',
          examples: [
            '时钟的指针绕轴心旋转',
            '风车的叶片绕中心旋转',
          ],
        },
        {
          id: 'xz-2',
          title: '旋转的性质',
          content:
            '旋转的性质：①对应点到旋转中心的距离相等；②对应点与旋转中心所连线段的夹角等于旋转角；③旋转前后的图形全等（形状和大小不变）。',
          formula: 'OA = OA\'，∠AOA\' = 旋转角，△ABC ≌ △A\'B\'C\'',
          examples: [
            '将△ABC绕点O旋转90°，则OA=OA\'，∠AOA\'=90°',
          ],
        },
        {
          id: 'xz-3',
          title: '旋转作图',
          content:
            '旋转作图的步骤：①确定旋转中心、旋转角和旋转方向；②找出关键点；③作出各关键点的对应点；④顺次连接各对应点。',
        },
      ],
      visuals: [
        {
          id: 'vis-xz-geo',
          type: 'svg',
          title: '三角形绕顶点旋转',
          description: '展示一个三角形绕其一个顶点旋转90°的过程，标注旋转中心和对应点。',
          component: 'GeometryFigure',
          props: {
            vertices: [
              { x: 0, y: 0, label: 'O' },
              { x: 4, y: 0, label: 'A' },
              { x: 4, y: 3, label: 'B' },
              { x: 0, y: 4, label: "A'" },
              { x: -3, y: 4, label: "B'" },
            ],
            sides: [
              { from: 0, to: 1, label: 'OA' },
              { from: 1, to: 2, label: 'AB' },
              { from: 2, to: 0, label: '' },
              { from: 0, to: 3, label: "OA'" },
              { from: 3, to: 4, label: "A'B'" },
              { from: 4, to: 0, label: '' },
            ],
            dashedLines: [
              { from: 1, to: 3 },
              { from: 2, to: 4 },
            ],
            angles: [
              { vertex: 0, degree: 90 },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'xz-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '图形旋转时，下列说法正确的是（　）',
          options: [
            '图形的形状和大小都发生改变',
            '图形的形状不变，大小改变',
            '图形的形状和大小都不变',
            '图形的大小不变，形状改变',
          ],
          answer: 'C',
          steps: ['旋转是全等变换', '图形的形状和大小都不变'],
        },
        {
          id: 'xz-p2',
          type: 'fill',
          difficulty: 'basic',
          question: '旋转的三要素是 ____ 、____ 和 ____ 。',
          answer: '旋转中心；旋转角；旋转方向',
        },
        {
          id: 'xz-p3',
          type: 'choice',
          difficulty: 'basic',
          question: '将点A(2,3)绕原点逆时针旋转90°后，对应点A\'的坐标为（　）',
          options: ['(-3,2)', '(3,-2)', '(-2,-3)', '(2,-3)'],
          answer: 'A',
          steps: ['绕原点逆时针旋转90°', '(x,y)→(-y,x)', '(2,3)→(-3,2)'],
        },
        {
          id: 'xz-p4',
          type: 'calculate',
          difficulty: 'medium',
          question: '将点P(3,4)绕原点顺时针旋转90°，求旋转后对应点P\'的坐标。',
          answer: '(4, -3)',
          steps: ['绕原点顺时针旋转90°', '(x,y)→(y,-x)', '(3,4)→(4,-3)'],
        },
        {
          id: 'xz-p5',
          type: 'calculate',
          difficulty: 'hard',
          question: '在Rt△ABC中，∠C=90°，AC=3，BC=4，将△ABC绕点C顺时针旋转60°得到△A\'B\'C，求点A走过的路径长。',
          answer: 'π',
          steps: ['A走过的路径是以C为圆心、CA为半径的60°弧', 'CA=3', '弧长 = 60°×π×3/180° = π'],
          hint: '点A走过的路径是一段弧，弧长=nπr/180。',
        },
      ],
    },
    {
      id: 'zhong-xin-dui-cheng',
      title: '中心对称',
      summary: '理解中心对称的定义和性质，认识中心对称图形。',
      knowledgePoints: [
        {
          id: 'zxdc-1',
          title: '中心对称的定义',
          content:
            '把一个图形绕着某一点旋转180°，如果它能够与另一个图形重合，那么就说这两个图形关于这个点对称或中心对称。这个点叫做对称中心。两个图形中的对应点叫做关于中心的对称点。',
          examples: [
            '△ABC与△A\'B\'C\'关于点O中心对称，则A与A\'关于O对称',
          ],
        },
        {
          id: 'zxdc-2',
          title: '中心对称的性质',
          content:
            '①关于中心对称的两个图形是全等形；②关于中心对称的两个图形，对称点连线都经过对称中心，而且被对称中心所平分。',
          formula: 'OA = OA\'（O为对称中心）',
          examples: [
            '点A(2,3)关于原点对称的点为A\'(-2,-3)',
          ],
        },
        {
          id: 'zxdc-3',
          title: '中心对称图形',
          content:
            '把一个图形绕某一点旋转180°，如果旋转后的图形能够与原来的图形重合，那么这个图形叫做中心对称图形。这个点就是它的对称中心。常见的中心对称图形有：平行四边形、矩形、菱形、正方形、圆等。',
          examples: [
            '平行四边形是中心对称图形，对称中心是对角线交点',
            '圆是中心对称图形，对称中心是圆心',
            '等边三角形不是中心对称图形',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-zxdc-geo',
          type: 'svg',
          title: '中心对称图形',
          description: '展示两个三角形关于点O中心对称，标注对称中心和对应点。',
          component: 'GeometryFigure',
          props: {
            vertices: [
              { x: 0, y: 0, label: 'O' },
              { x: 3, y: 4, label: 'A' },
              { x: 5, y: 4, label: 'B' },
              { x: 5, y: 2, label: 'C' },
              { x: -3, y: -4, label: "A'" },
              { x: -5, y: -4, label: "B'" },
              { x: -5, y: -2, label: "C'" },
            ],
            sides: [
              { from: 1, to: 2, label: '' },
              { from: 2, to: 3, label: '' },
              { from: 3, to: 1, label: '△ABC' },
              { from: 4, to: 5, label: '' },
              { from: 5, to: 6, label: '' },
              { from: 6, to: 4, label: "△A'B'C'" },
            ],
            dashedLines: [
              { from: 0, to: 1 },
              { from: 0, to: 4 },
              { from: 1, to: 4 },
            ],
            angles: [
              { vertex: 0, degree: 180 },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'zxdc-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列图形中，是中心对称图形的是（　）',
          options: ['等边三角形', '等腰梯形', '平行四边形', '正五边形'],
          answer: 'C',
          steps: ['等边三角形不是中心对称图形', '等腰梯形不是中心对称图形', '平行四边形是中心对称图形', '正五边形不是中心对称图形'],
        },
        {
          id: 'zxdc-p2',
          type: 'fill',
          difficulty: 'basic',
          question: '点A(3,-2)关于原点对称的点A\'的坐标是 ____ 。',
          answer: '(-3, 2)',
          steps: ['关于原点对称：横纵坐标都取相反数', '(3,-2)→(-3,2)'],
        },
        {
          id: 'zxdc-p3',
          type: 'choice',
          difficulty: 'basic',
          question: '点P(-5,4)关于原点对称的点坐标为（　）',
          options: ['(5,4)', '(5,-4)', '(-5,-4)', '(-5,4)'],
          answer: 'B',
          steps: ['关于原点对称：(x,y)→(-x,-y)', '(-5,4)→(5,-4)'],
        },
        {
          id: 'zxdc-p4',
          type: 'choice',
          difficulty: 'medium',
          question: '下列说法正确的是（　）',
          options: [
            '轴对称图形一定是中心对称图形',
            '中心对称图形一定是轴对称图形',
            '正方形既是轴对称图形又是中心对称图形',
            '矩形是轴对称图形但不是中心对称图形',
          ],
          answer: 'C',
          steps: ['正方形有4条对称轴，且对角线交点是对称中心', '所以正方形既是轴对称又是中心对称图形'],
        },
        {
          id: 'zxdc-p5',
          type: 'fill',
          difficulty: 'hard',
          question: '已知点A(a, 2)与点B(3, b)关于原点对称，则 a+b = ____ 。',
          answer: '-5',
          steps: ['关于原点对称：a=-3, b=-2', 'a+b = -3+(-2) = -5'],
        },
      ],
    },
  ],
}
