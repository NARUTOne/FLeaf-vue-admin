// import Mock from 'mockjs';

export const NAV_LIST = [{
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
    icon: 'social-facebook',
    isFLIcon: false
  }]
}];

