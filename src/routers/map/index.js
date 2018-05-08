/**
 * 不同功能模块的路由应代码分离
 */ 
const App = () => import('@/pages/app/');
const Login = () => import('@/pages/login/');
const NotFound = () => import('@/pages/notFound/');

const Home = () => import('@/pages/home/');
const Layout = () => import('@/pages/layout/');
const LayoutFlex = () => import('@/pages/layout/flex/');
const LayoutRem= () => import('@/pages/layout/rem/');

export default [
  { // 路由从根app开始，注意@/index.js 注册
    path: '/',
    redirect: '/home',
    component: App,
    children: [
      // 地址为空时跳转home页面
       {
        path: '',
        name: 'home',
        redirect: '/home'
      },
      { 
        path: 'home',
        name: 'home',
        component: Home
      },
      { // layout
        path: 'layout',
        name: 'layout',
        redirect: '/layout/flex',
        component: Layout,
        children: [{
          path: 'flex',
          name: 'flex',
          component: LayoutFlex
        }, {
          path: 'rem',
          name: 'rem',
          component: LayoutRem
        }]
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
