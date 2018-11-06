/*
 * @File: context-menu.js
 * @Project: fire-leaf-vue-scaffold
 * @File Created: Monday, 5th November 2018 8:50:53 pm
 * @Author: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com)
 * -----
 * @Last Modified: Monday, 5th November 2018 8:51:00 pm
 * @Modified By: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com>)
 * -----
 * @Copyright <<projectCreationYear>> - 2018 bairong, bairong
 * @fighting: code is far away from bug with the animal protecting
 *  ┏┓      ┏┓
 *  ┏┛┻━━━┛┻┓
 *  |           |
 *  |     ━    |
 *  |  ┳┛ ┗┳ |
 *  |          |
 *  |     ┻   |
 *  |           |
 *  ┗━┓     ┏━┛
 *     |      | 神兽保佑 🚀🚀🚀
 *     |      | 代码无BUG！！！
 *     |      ┗━━━┓
 *     |            ┣┓
 *     |            ┏┛
 *     ┗┓┓ ┏━┳┓┏┛
 *      |┫┫   |┫┫
 *      ┗┻┛   ┗┻┛
 */

const VueContextMenu = require('./VueContextMenu.vue');
const vueContextMenu = {};

/**
 * Plugin API
 */
vueContextMenu.install = function (Vue) {
  Vue.component(VueContextMenu.name, VueContextMenu);
};

vueContextMenu.component = VueContextMenu;

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueContextMenu);
}

module.exports = vueContextMenu;
