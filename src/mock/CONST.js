/** 
 * mock 静态数据
*/

const NAV_LIST = [{
  name: '概览',
  url: '/home',
  icon: 'home',
  isFLIcon: false
}, {
  name: '布局',
  url: '/layout',
  icon: 'layout',
  isFLIcon: true,
  children: [{
    name: 'Flex',
    url: '/layout/flex',
    icon: 'leaf',
    isFLIcon: false
  }, {
    name: 'Rem',
    url: '/layout/Rem',
    icon: 'leaf',
    isFLIcon: false
  }]
}];

const LAYOUT_VAR = {
  HEADER_H: 60,
  COLLAPSED_SIDER_W: 78
};


export {
  NAV_LIST,
  LAYOUT_VAR
};