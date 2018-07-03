/**
 * 不同功能模块的路由应代码分离
 */ 
const App = () => import('@/pages/app/');
const Login = () => import('@/pages/login/');
const NotFound = () => import('@/pages/notFound/');

const Home = () => import('@/pages/home/');

// vue
const Vue = () => import('@/pages/vue/');

// icons
const FLIcon = () => import('@/pages/FLIcon/');

// layout
import layout from './layout';

// iview
import iview from './iview';

// FLV-Components
import vComponents from './v-components';

// chart
import charts from './charts';



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
      {...layout},
      {...iview},
      {...vComponents},
      {...charts},
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
