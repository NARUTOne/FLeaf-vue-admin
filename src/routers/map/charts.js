const Charts = () => import('@/pages/charts/');

// d3
const DTree = () => import('@/pages/charts/d3/');
const FlowChart = () => import('@/pages/charts/d3/flow-chart/');

// antv
const CAntv = () => import('@/pages/charts/antv/');
const AntvTree = () => import('@/pages/charts/antv/tree/');

// echarts
const CEcharts = () => import('@/pages/charts/echarts/');
const EchartsBars = () => import('@/pages/charts/echarts/bars/');

export default {
  // chart
  path: 'charts',
  name: 'charts',
  redirect: '/charts/d3/flow-chart',
  component: Charts,
  meta: {
    title: '图表'
  },
  children: [{
    path: 'antv',
    name: 'antv',
    component: CAntv,
    redirect: '/charts/antv/tree',
    meta: {
      title: 'antv'
    },
    children: [{
      path: 'tree',
      name: 'antvTree',
      component: AntvTree,
      meta: {
        title: '树形tree'
      }
    }]
  }, {
    path: 'd3',
    name: 'd3',
    component: DTree,
    redirect: '/charts/d3/flow-chart',
    meta: {
      title: 'd3JS'
    },
    children: [{
      path: 'flow-chart',
      name: 'flow-chart',
      component: FlowChart,
      meta: {
        title: '流程图'
      }
    }]
  }, {
    path: 'echarts',
    name: 'echarts',
    redirect: '/charts/echarts/bars',
    component: CEcharts,
    meta: {
      title: 'echarts'
    },
    children: [{
      path: 'bars',
      name: 'bars',
      component: EchartsBars,
      meta: {
        title: 'bar图'
      }
    }]
  }]
};
