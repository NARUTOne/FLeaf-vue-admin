/**
 * home mock
 */

const FROM_INFO = [
  {
    src: '/static/img/avtor/naruto.jpg',
    name: '鸣人',
    info: '我的忍道，一直都是有话就说，说到做到（嘴遁😀），然后成为大家认可的火影🔥'
  },
  {
    src: '/static/img/avtor/wukong.png',
    name: '孙悟空',
    info: '哇，好兴奋啊 😠 , 龟 .. 派 .. 气 .. 功 .. 啊......'
  },
  {
    src: '/static/img/avtor/naci.jpg',
    name: '纳兹',
    info: '你准备好成为妖精的尾巴的敌人了吗？🔥 🐲'
  },
  {
    src: '/static/img/avtor/270.jpg',
    name: '纲吉',
    info: '指环上铭刻着我们的光阴 💍，黑手党什么的，我要亲手毁灭'
  },
  {
    src: '/static/img/avtor/reborn.jpg',
    name: 'reborn',
    info: '对我以貌取人可是会受伤的唷, reborn 🍵 '
  },
  {
    src: '/static/img/avtor/baobao.jpg',
    name: '宝宝',
    info: '没得事，交给我，我弄死他们，不要叫宝儿姐，要叫主人 😉'
  }
];

const REWARDS = [
  {
    src: '/static/img/onepiece/15billion.jpg',
    reward: 1500000000,
    auth: 100,
    name: '“草帽”蒙奇·D·路飞',
    career: '草帽海贼团船长',
    info: '海贼王'
  },
  {
    src: '/static/img/onepiece/chopper.jpg',
    reward: 100,
    auth: 60,
    name: '“驯鹿”托尼托尼·乔巴',
    career: '草帽海贼团船医',
    info: '【宠物】成为万能药（不管什么病都能治的医生）'
  },
  {
    src: '/static/img/onepiece/franky.jpg',
    reward: 94000000,
    auth: 78,
    name: '“改造人”弗兰奇',
    career: '草帽海贼团船工',
    info: '制造出梦想之船'
  },
  {
    src: '/static/img/onepiece/nami.jpg',
    reward: 66000000,
    auth: 70,
    name: '“小贼猫”娜美',
    career: '草帽海贼团航海士',
    info: '绘制出自己的世界地图、绘制全世界的航海图'
  },
  {
    src: '/static/img/onepiece/robin.jpg',
    reward: 130000000,
    auth: 76,
    name: '“恶魔之子”妮可·罗宾',
    career: '草帽海贼团考古学家',
    info: '寻找真正的“历史正文”，并且在历史正文碑的指引下，到达伟大航道的尽头“拉夫德鲁”'
  },
  {
    src: '/static/img/onepiece/sanji.jpg',
    reward: 177000000,
    auth: 86,
    name: '“黑足”山治',
    career: '草帽海贼团厨师',
    info: '寻找传说中的奇迹之海－ALL BLUE'
  },
  {
    src: '/static/img/onepiece/skbrook.jpg',
    reward: 83000000,
    auth: 78,
    name: '“灵魂之王”布鲁克',
    career: '草帽海贼团音乐家',
    info: '环绕世界一周到伟大航道双子岬跟伙伴鲸鱼“拉布”重逢。'
  },
  {
    src: '/static/img/onepiece/usopp.jpg',
    reward: 200000000,
    auth: 80,
    name: '“GOD”▪乌索普',
    career: '草帽海贼团狙击手',
    info: '成为勇敢的海上战士'
  },
  {
    src: '/static/img/onepiece/zoro.jpg',
    reward: 320000000,
    auth: 92,
    name: '“海贼猎人”罗罗诺亚·索隆',
    career: '草帽海贼团剑客',
    info: '世界第一大剑豪'
  },
  {
    src: '/static/img/onepiece/jinbei.jpg',
    reward: 250000000,
    auth: 90,
    name: '“海侠”甚平',
    career: '草帽海贼团舵手',
    info: '人类和鱼人之间的共处'
  }
];

const ONEPIECE_CHAPTERS = [
  {
    title: '东海登场序篇',
    value: 6
  },
  {
    title: '索隆上船篇',
    value: 8
  },
  {
    title: '巴基篇',
    value: 10
  },
  {
    title: '乌索普海贼团篇',
    value: 12
  },
  {
    title: '山治海上餐厅篇',
    value: 12
  },
  {
    title: '娜美阿龙篇',
    value: 20
  },
  {
    title: '罗格镇篇',
    value: 28
  },
  {
    title: '伟大航路威士忌山篇',
    value: 26
  },
  {
    title: '小花园巨人篇',
    value: 32
  },
  {
    title: '乔巴雪国篇',
    value: 28
  },
  {
    title: '阿拉巴斯坦沙鳄篇',
    value: 42
  },
  {
    title: '空岛篇',
    value: 48
  },
  {
    title: '长链岛青雉登场篇',
    value: 38
  },
  {
    title: '水之都篇',
    value: 42
  },
  {
    title: '司法岛cp9篇',
    value: 52
  },
  {
    title: '司法岛后世界碰撞篇',
    value: 46
  },
  {
    title: '恐怖三桅船篇',
    value: 48
  },
  {
    title: '香波地群岛篇',
    value: 56
  },
  {
    title: '女儿国篇',
    value: 48
  },
  {
    title: '海底监狱篇',
    value: 60
  },
  {
    title: '顶上战争篇',
    value: 80
  },
  {
    title: '路飞兄弟回忆篇',
    value: 55
  },
  {
    title: '3D2Y约定篇',
    value: 66
  },
  {
    title: '鱼人岛篇',
    value: 60
  },
  {
    title: '庞克哈萨德篇',
    value: 56
  },
  {
    title: '德雷斯罗萨明哥篇',
    value: 66
  },
  {
    title: '佐乌篇',
    value: 58
  },
  {
    title: '万国大妈篇',
    value: 60
  }
];


export {
  FROM_INFO,
  REWARDS,
  ONEPIECE_CHAPTERS
};
