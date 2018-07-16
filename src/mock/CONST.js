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
  title: '组件',
  name: 'componentsview',
  url: '/componentsview',
  icon: 'cube',
  isFLIcon: false,
  children: [{
    title: '提示Message',
    name: 'CMessage',
    url: '/componentsview/Message',
    icon: 'chatbox-working',
    isFLIcon: false
  }]
}, {
  title: '图表',
  name: 'charts',
  url: '/charts',
  icon: 'pie-graph',
  isFLIcon: false,
  children: [{
    title: 'antv',
    name: 'antv',
    url: '/charts/antv',
    icon: 'settings',
    isFLIcon: false,
    children: [{
      title: '树形tree',
      name: 'antvTree',
      url: '/charts/antv/tree',
      icon: 'network',
      isFLIcon: false,
    }]
  }, {
    title: 'd3',
    name: 'd3',
    url: '/charts/d3',
    icon: 'settings',
    isFLIcon: false,
    children: [{
      title: '流程图',
      name: 'flow-chart',
      url: '/charts/d3/flow-chart',
      icon: 'network',
      isFLIcon: false,
    }]
  }, {
    title: 'echarts',
    name: 'echarts',
    url: '/charts/echarts',
    icon: 'settings',
    isFLIcon: false,
    children: [{
      title: 'bars图',
      name: 'bars',
      url: '/charts/echarts/bars',
      icon: 'network',
      isFLIcon: false,
    }]
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