/**
 * config paths
 */

'use strict';

const path = require('path');

const ghPath = "https://narutone.github.io/FLeaf-vue-admin/";

module.exports = {
  dev: {
    assetsPublicPath: '/', // 资源path
    assetsSubDirectory: 'static', // 项目资源目录
    cssSourceMap: false,
    devtool: 'eval-source-map',
    proxyTable: {} // 代理api
  },
  build: {
    buildPath: path.resolve(__dirname, '../dist'), // 打包文件path 
    assetsPublicPath: ghPath, // 资源path
    assetsSubDirectory: 'static', // 项目资源目录
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
  },  
  PName: 'FLeaf-vue-admin', // 项目名称
  useEslint: true // eslint
};