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

import {FLVMessage} from '@/components/';

Vue.config.productionTip = false; // 阻止 vue 在启动时生成生产提示

// Vue.use(iView);

Vue.prototype.$Message = Message;
Vue.prototype.$FLVMessage = FLVMessage;
Vue.prototype.$Loading = LoadingBar;

// 指令
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  }
});

// 过滤
Vue.filter('toNum', function (arr) {
  return arr.map(item => {
    item = item - 0;
    return item;
  });
});

new Vue({
  el: '#app',
  router,
  store
});

