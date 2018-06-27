/** 
 * mock 静态数据
*/

const NAV_LIST = [{
  title: '概览',
  name: 'home',
  url: '/home',
  icon: 'home',
  isFLIcon: false
}, {
  title: '布局',
  name: 'layout',
  url: '/layout',
  icon: 'layout',
  isFLIcon: true,
  children: [{
    title: 'Flex',
    name: 'flex',
    url: '/layout/flex',
    icon: 'leaf',
    isFLIcon: false
  }, {
    title: 'Grid',
    name: 'grid',
    url: '/layout/grid',
    icon: 'leaf',
    isFLIcon: false
  }]
}, {
  title: 'iview',
  name: 'iview',
  url: '/iview',
  icon: 'ios-play-outline',
  isFLIcon: false,
  children: [{
    title: '填坑',
    name: 'pits',
    url: '/iview/pits',
    icon: 'ios-paw',
    isFLIcon: false
  }]
}, {
  title: 'vue',
  name: 'vue',
  url: '/vue',
  icon: 'play',
  isFLIcon: false
}, {
  title: 'FLicons',
  name: 'flicons',
  url: '/flicons',
  icon: 'travel',
  isFLIcon: true
}];

const LAYOUT_VAR = {
  HEADER_H: 60,
  COLLAPSED_SIDER_W: 78
};


export {
  NAV_LIST,
  LAYOUT_VAR
};