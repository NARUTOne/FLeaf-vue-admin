/**
 * SPA 单页应用 入口
 */

import Vue from 'vue';
import router from './routers/';
import store from './store/';

// import iView from 'iview';
import {Message, LoadingBar} from 'iview';
import 'iview/dist/styles/iview.css';
import 'utils/style/theme.less';

import 'utils/xhr_config';
import './mock/'; // simulation data

Vue.config.productionTip = false; // 阻止 vue 在启动时生成生产提示

// Vue.use(iView);

Vue.prototype.$Message = Message;
Vue.prototype.$Loading = LoadingBar;

new Vue({
  el: '#app',
  router,
  store
});

