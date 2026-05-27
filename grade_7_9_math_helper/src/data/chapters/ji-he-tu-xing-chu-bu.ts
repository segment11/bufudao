import type { Chapter } from '../types'

export const jiHeTuXingChuBu: Chapter = {
  id: 'ji-he-tu-xing-chu-bu',
  title: '几何图形初步',
  grade: 7,
  semester: '上',
  unit: 4,
  icon: '📐',
  description: '几何图形、直线射线线段、角',
  sections: [
    {
      id: 'ji-he-tu-xing',
      title: '几何图形',
      summary:
        '认识立体图形和平面图形，理解点、线、面、体之间的关系，了解展开图的概念。',
      knowledgePoints: [
        {
          id: 'jhtx-1',
          title: '立体图形与平面图形',
          content:
            '有些几何图形（如长方体、圆柱、圆锥、球等）的各部分不都在同一平面内，它们是立体图形。有些几何图形（如线段、角、三角形、长方形、圆等）的各部分都在同一平面内，它们是平面图形。',
          examples: [
            '立体图形：长方体、正方体、圆柱、圆锥、球',
            '平面图形：三角形、长方形、正方形、圆、线段',
          ],
        },
        {
          id: 'jhtx-2',
          title: '点、线、面、体',
          content:
            '几何体简称体，包围着体的是面，面与面相交的地方形成线，线与线相交的地方是点。点动成线，线动成面，面动成体。',
          formula: '点→线→面→体',
          examples: [
            '笔尖可以看作一个点，笔尖移动画出一条线（点动成线）',
            '旋转门可以看作一条线段绕轴旋转形成圆柱面（线动成面）',
            '长方形绕一边旋转形成圆柱（面动成体）',
          ],
        },
        {
          id: 'jhtx-3',
          title: '展开图',
          content:
            '有些立体图形是由一些平面图形围成的，将它们的表面适当剪开，可以展开成平面图形，这样的平面图形称为相应立体图形的展开图。正方体的展开图有11种基本情况。',
          examples: [
            '正方体的展开图可以是"十字形"、"一字形"等',
            '圆柱的展开图：两个圆 + 一个长方形',
            '圆锥的展开图：一个圆 + 一个扇形',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-jhtx-geometry',
          type: 'svg',
          title: '基本几何图形',
          description:
            '展示常见的基本立体图形（正方体、圆柱、圆锥、球）和平面图形（三角形、长方形、圆）。',
          component: 'GeometryFigure',
          props: {
            vertices: [
              { x: 0, y: 0, label: '' },
              { x: 4, y: 0, label: '' },
              { x: 2, y: 4, label: '' },
              { x: 6, y: 0, label: '' },
              { x: 10, y: 0, label: '' },
              { x: 10, y: 4, label: '' },
              { x: 6, y: 4, label: '' },
            ],
            sides: [
              { from: 0, to: 1, label: '' },
              { from: 1, to: 2, label: '' },
              { from: 2, to: 0, label: '' },
              { from: 3, to: 4, label: '' },
              { from: 4, to: 5, label: '' },
              { from: 5, to: 6, label: '' },
              { from: 6, to: 3, label: '' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'jhtx-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列图形中，属于立体图形的是（　）',
          options: ['三角形', '圆', '圆柱', '正方形'],
          answer: 'C',
          steps: [
            '三角形是平面图形',
            '圆是平面图形',
            '圆柱是立体图形',
            '正方形是平面图形',
          ],
        },
        {
          id: 'jhtx-p2',
          type: 'choice',
          difficulty: 'basic',
          question: '下列说法正确的是（　）',
          options: [
            '柱体的上、下两个面一样大',
            '圆柱、圆锥的底面都是圆',
            '棱柱的侧面是三角形',
            '球不是立体图形',
          ],
          answer: 'B',
          steps: [
            '柱体上下两面一样大，正确，但B更明确',
            '圆柱和圆锥的底面确实都是圆形',
            '棱柱的侧面是长方形（或平行四边形），不是三角形',
            '球是立体图形',
          ],
        },
        {
          id: 'jhtx-p3',
          type: 'choice',
          difficulty: 'basic',
          question:
            '将一个正方体的表面沿某些棱剪开，展开成平面图形，下列展开图中不可能的是（　）',
          options: [
            '十字形展开图（中间4个，上下各1个）',
            '一字形展开图（6个正方形排成一排）',
            '田字形展开图（2×3排列中间田字）',
            '阶梯形展开图',
          ],
          answer: 'C',
          steps: [
            '田字形排列无法折叠成正方体，因为有4个面共顶点重叠',
            '其他展开图都可以折叠成正方体',
          ],
          hint: '正方体的展开图不能出现"田"字形排列。',
        },
        {
          id: 'jhtx-p4',
          type: 'fill',
          difficulty: 'medium',
          question:
            '圆柱的展开图由 ____ 个圆和 ____ 个长方形组成。圆锥的展开图由 ____ 个圆和 ____ 个扇形组成。',
          answer: '2；1；1；1',
          hint: '想一想圆柱和圆锥的表面由哪些部分组成。',
          steps: [
            '圆柱有上底面和下底面（2个圆）和侧面（1个长方形）',
            '圆锥有1个底面（1个圆）和侧面（1个扇形）',
          ],
        },
      ],
    },
    {
      id: 'zhi-xian-she-xian-xian-duan',
      title: '直线、射线、线段',
      summary:
        '掌握直线公理，理解直线、射线、线段的区别与联系，学会线段的比较和计算。',
      knowledgePoints: [
        {
          id: 'zxsxxd-1',
          title: '直线、射线、线段的定义',
          content:
            '直线：没有端点，向两方无限延伸，不可度量。射线：有一个端点，从端点向一方无限延伸，不可度量。线段：有两个端点，不能延伸，可以度量。',
          formula:
            '直线：无端点，可无限延伸\n射线：1个端点，一端无限延伸\n线段：2个端点，不可延伸，可度量',
          examples: [
            '直线AB（或直线l），用两个大写字母或一个小写字母表示',
            '射线AB（A为端点，向B方向延伸）',
            '线段AB（A、B为端点）',
          ],
        },
        {
          id: 'zxsxxd-2',
          title: '直线公理',
          content:
            '经过两点有一条直线，并且只有一条直线。简称：两点确定一条直线。',
          formula: '两点确定一条直线',
          examples: [
            '要在墙上钉一根木条，至少需要两个钉子',
            '两个点可以确定唯一一条直线',
          ],
        },
        {
          id: 'zxsxxd-3',
          title: '线段的比较与中点',
          content:
            '比较两条线段的长短可以用度量法或叠合法。线段的中点：把一条线段分成两条相等线段的点叫做这条线段的中点。两点之间，线段最短。',
          formula:
            '若M是AB中点，则 AM = MB = AB/2\n两点之间，线段最短',
          examples: [
            '若 AB = 10cm，M是AB中点，则 AM = MB = 5cm',
            '从A到B的所有连线中，线段AB最短',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-zxsxxd-geometry',
          type: 'svg',
          title: '直线、射线与线段',
          description:
            '展示直线、射线、线段的区别：直线两端无限延伸，射线一端无限延伸，线段两端有端点。同时展示线段的中点。',
          component: 'GeometryFigure',
          props: {
            vertices: [
              { x: 0, y: 8, label: '' },
              { x: 10, y: 8, label: '' },
              { x: 0, y: 5, label: 'A' },
              { x: 10, y: 5, label: 'B' },
              { x: 0, y: 2, label: 'A' },
              { x: 5, y: 2, label: 'B' },
              { x: 2.5, y: 2, label: 'M' },
            ],
            sides: [
              { from: 0, to: 1, label: '直线' },
              { from: 2, to: 3, label: '射线' },
              { from: 4, to: 5, label: '线段' },
            ],
          },
        },
      ],
      practices: [
        {
          id: 'zxsxxd-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列说法正确的是（　）',
          options: [
            '直线AB和直线BA是不同的直线',
            '射线AB和射线BA是同一条射线',
            '线段AB和线段BA是同一条线段',
            '直线有且只有两个端点',
          ],
          answer: 'C',
          steps: [
            '直线AB和直线BA表示同一条直线',
            '射线AB（端点A）和射线BA（端点B）是不同的射线',
            '线段AB和线段BA是同一条线段',
            '直线没有端点',
          ],
        },
        {
          id: 'zxsxxd-p2',
          type: 'choice',
          difficulty: 'basic',
          question: '经过两点可以（　）',
          options: [
            '作一条射线',
            '作两条直线',
            '确定一条直线',
            '作无数条直线',
          ],
          answer: 'C',
          steps: ['两点确定一条直线，这是直线公理。'],
        },
        {
          id: 'zxsxxd-p3',
          type: 'fill',
          difficulty: 'basic',
          question:
            '线段 AB = 8cm，M 是 AB 的中点，则 AM = ____ cm，MB = ____ cm。',
          answer: '4；4',
          steps: ['M是AB中点，AM = MB = AB/2 = 8/2 = 4cm'],
        },
        {
          id: 'zxsxxd-p4',
          type: 'calculate',
          difficulty: 'basic',
          question:
            '已知线段 AB = 10cm，C 是 AB 上一点，且 AC = 4cm，M 是 AB 的中点。求 MC 的长。',
          answer: 'MC = 1cm',
          steps: [
            'M是AB中点，AM = AB/2 = 5cm',
            'MC = AM - AC = 5 - 4 = 1cm',
          ],
        },
        {
          id: 'zxsxxd-p5',
          type: 'calculate',
          difficulty: 'medium',
          question:
            '已知 A、B、C 三点在同一条直线上，AB = 6cm，BC = 4cm，M 是 AC 的中点。求 AM 的长。',
          answer: 'AM = 5cm 或 AM = 1cm',
          steps: [
            '情况1：C在AB外（B在AC之间），AC = AB + BC = 10cm',
            '  M是AC中点，AM = 10/2 = 5cm',
            '情况2：C在AB上（C在AB之间），AC = AB - BC = 2cm',
            '  M是AC中点，AM = 2/2 = 1cm',
          ],
          hint: 'C点可能在AB上，也可能在AB的延长线上，需要分类讨论。',
        },
        {
          id: 'zxsxxd-p6',
          type: 'fill',
          difficulty: 'medium',
          question:
            '要在墙上固定一根木条，至少需要 ____ 个钉子，理由是 ____。',
          answer: '2；两点确定一条直线',
          hint: '这是直线公理的实际应用。',
        },
      ],
    },
    {
      id: 'jiao',
      title: '角',
      summary:
        '理解角的概念和度量，掌握余角和补角的概念及性质，学会角的计算。',
      knowledgePoints: [
        {
          id: 'jiao-1',
          title: '角的定义',
          content:
            '有公共端点的两条射线组成的图形叫做角。这个公共端点叫做角的顶点，这两条射线叫做角的边。角也可以看作由一条射线绕着它的端点旋转而形成的图形。',
          formula: '角 = 有公共端点的两条射线',
          examples: [
            '∠AOB，O是顶点，OA和OB是两条边',
            '平角 = 180°（射线旋转半周）',
            '周角 = 360°（射线旋转一周）',
          ],
        },
        {
          id: 'jiao-2',
          title: '角的度量',
          content:
            '角的度量单位是度（°）、分（′）、秒（″）。1° = 60′，1′ = 60″，即度分秒是60进制。',
          formula: '1° = 60′ = 3600″\n1′ = 60″',
          examples: [
            '30°30′ = 30.5°',
            '45.5° = 45°30′',
            '32°18′ + 15°54′ = 48°12′',
          ],
        },
        {
          id: 'jiao-3',
          title: '余角和补角',
          content:
            '如果两个角的和等于90°（直角），就说这两个角互为余角，简称互余。如果两个角的和等于180°（平角），就说这两个角互为补角，简称互补。同角（等角）的余角相等，同角（等角）的补角相等。',
          formula:
            '互余：∠α + ∠β = 90°\n互补：∠α + ∠β = 180°\n同角的余角相等\n同角的补角相等',
          examples: [
            '∠α = 30°，则它的余角是60°，补角是150°',
            '∠α = 45°，则它的余角是45°，补角是135°',
          ],
        },
      ],
      visuals: [
        {
          id: 'vis-jiao-angledemo',
          type: 'interactive',
          title: '角的类型展示',
          description:
            '展示不同类型的角：锐角（小于90°）、直角（等于90°）、钝角（大于90°且小于180°）、平角（等于180°），以及余角和补角的关系。',
          component: 'AngleDemo',
          props: {
            degree: 60,
            label: '锐角 60°',
            type: 'acute',
          },
        },
      ],
      practices: [
        {
          id: 'jiao-p1',
          type: 'choice',
          difficulty: 'basic',
          question: '下列角度中，是钝角的是（　）',
          options: ['30°', '90°', '100°', '180°'],
          answer: 'C',
          steps: [
            '30°是锐角（小于90°）',
            '90°是直角',
            '100°是钝角（大于90°且小于180°）',
            '180°是平角',
          ],
        },
        {
          id: 'jiao-p2',
          type: 'calculate',
          difficulty: 'basic',
          question: '计算：32°24′ + 15°48′',
          answer: '48°12′',
          steps: [
            '先加度：32° + 15° = 47°',
            '加分：24′ + 48′ = 72′',
            '72′ = 1°12′（满60进1）',
            '47° + 1°12′ = 48°12′',
          ],
        },
        {
          id: 'jiao-p3',
          type: 'fill',
          difficulty: 'basic',
          question: '∠α = 35°，则它的余角是 ____ ，补角是 ____ 。',
          answer: '55°；145°',
          steps: [
            '余角 = 90° - 35° = 55°',
            '补角 = 180° - 35° = 145°',
          ],
        },
        {
          id: 'jiao-p4',
          type: 'fill',
          difficulty: 'basic',
          question: '一个角的补角是它的余角的3倍，则这个角是 ____ 度。',
          answer: '45°',
          steps: [
            '设这个角为x°',
            '补角 = 180° - x',
            '余角 = 90° - x',
            '180 - x = 3(90 - x)',
            '180 - x = 270 - 3x',
            '2x = 90',
            'x = 45',
          ],
          hint: '设这个角为x°，用x表示补角和余角，列方程求解。',
        },
        {
          id: 'jiao-p5',
          type: 'calculate',
          difficulty: 'medium',
          question: '已知 ∠α 和 ∠β 互余，且 ∠α 比 ∠β 大 20°，求 ∠α 和 ∠β 的度数。',
          answer: '∠α = 55°，∠β = 35°',
          steps: [
            '设 ∠β = x°，则 ∠α = (x + 20)°',
            '互余：x + (x + 20) = 90',
            '2x + 20 = 90',
            '2x = 70',
            'x = 35',
            '∠β = 35°，∠α = 55°',
          ],
        },
        {
          id: 'jiao-p6',
          type: 'calculate',
          difficulty: 'medium',
          question: '计算：180° - 52°18′36″',
          answer: '127°41′24″',
          steps: [
            '180° = 179°59′60″',
            '179°59′60″ - 52°18′36″',
            '秒：60″ - 36″ = 24″',
            '分：59′ - 18′ = 41′',
            '度：179° - 52° = 127°',
            '结果：127°41′24″',
          ],
          hint: '借位时，1° = 60′，1′ = 60″。',
        },
      ],
    },
  ],
}
