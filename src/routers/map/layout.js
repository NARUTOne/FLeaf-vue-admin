// Layout
const Layout = () => import('@/pages/layout/');
const LayoutFlex = () => import('@/pages/layout/flex/');
const LayoutGrid = () => import('@/pages/layout/grid/');

export default {
  // layout
  path: 'layout',
  name: 'layout',
  redirect: '/layout/flex',
  component: Layout,
  meta: {
    title: 'layout'
  },
  children: [{
    path: 'flex',
    name: 'flex',
    component: LayoutFlex,
    meta: {
      title: 'flex'
    },
  }, {
    path: 'grid',
    name: 'grid',
    component: LayoutGrid,
    meta: {
      title: 'grid'
    },
  }]
};