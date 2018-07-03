const Charts = () => import('@/pages/charts/');
const DTree = () => import('@/pages/charts/d3/');
const FlowChart = () => import('@/pages/charts/d3/flow-chart/');

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
    path: 'd3',
    name: 'd3',
    component: DTree,
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
  }]
};
