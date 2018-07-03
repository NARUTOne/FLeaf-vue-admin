const ComponentsView = () => import('@/pages/components-view/');
const CMessage = () => import('@/pages/components-view/Message/');

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
    },
  }]
};
