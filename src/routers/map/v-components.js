const ComponentsView = () => import('@/pages/components-view/');
const CMessage = () => import('@/pages/components-view/Message/');
const CCollapse = () => import('@/pages/components-view/Collapse/');

export default {
  // v-components
  path: 'componentsview',
  name: 'componentsview',
  redirect: '/componentsview/Message',
  component: ComponentsView,
  meta: {
    title: '组件'
  },
  children: [{
    path: 'Message',
    name: 'CMessage',
    component: CMessage,
    meta: {
      title: '提示Message'
    }
  }, {
    path: 'Collapse',
    name: 'CCollapse',
    component: CCollapse,
    meta: {
      title: '折叠Collapse'
    },
  }]
};
