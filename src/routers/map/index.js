/**
 * 不同功能模块的路由应代码分离
 */ 
const App = () => import('@/pages/app/');
const Login = () => import('@/pages/login/');
const NotFound = () => import('@/pages/notFound/');

const Home = () => import('@/pages/home/');

// Layout
const Layout = () => import('@/pages/layout/');
const LayoutFlex = () => import('@/pages/layout/flex/');
const LayoutGrid = () => import('@/pages/layout/grid/');

// iview
const Iview = () => import('@/pages/iview/');
const IviewPits = () => import('@/pages/iview/pits/');

// vue
const Vue = () => import('@/pages/vue/');

// icons
const FLIcon = () => import('@/pages/FLIcon/');

// FLV-Components
const ComponentsView = () => import('@/pages/components-view/');
const CMessage = () => import('@/pages/components-view/Message/');

export default [
  { // 路由从根app开始，注意@/index.js 注册
    path: '/',
    redirect: '/home',
    component: App,
    name: '/',
    meta: {
      title: 'FLV'
    },
    children: [
      // 地址为空时跳转home页面
      {
        path: '',
        name: '',
        redirect: '/home'
      },
      { 
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
          title: '首页'
        },
      },
      { // layout
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
      },
      { // iview
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
      },
      { // v-components
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
      },
      {
        // vue
        path: 'vue',
        name: 'vue',
        component: Vue,
        meta: {
          title: 'vue'
        },
      },
      {
        path: 'flicons',
        name: 'flicons',
        component: FLIcon,
        meta: {
          title: 'FLIcons'
        }
      },
      { 
        path: 'login',
        name: 'login',
        component: Login
      },
      { // 404 置后
        path: '404',
        name: '404',
        component: NotFound
      },
      {
        path: '*',
        redirect: '/404'
      },
    ]
  }
  
];
