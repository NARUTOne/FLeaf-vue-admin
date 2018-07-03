const Iview = () => import('@/pages/iview/');
const IviewPits = () => import('@/pages/iview/pits/');

export default {
  // iview
  path: 'iview',
  name: 'iview',
  redirect: '/iview/pits',
  component: Iview,
  meta: {
    title: 'iview'
  },
  children: [{
    path: 'pits',
    name: 'pits',
    component: IviewPits,
    meta: {
      title: '填坑'
    },
  }]
};
