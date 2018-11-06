'use strict';
// ? https://vue-loader.vuejs.org/zh/
// ! vue-loader  14.x
// const utils = require('./utils');
// const PATHS = require('../script/PATHS');
// const isProduction = process.env.NODE_ENV === 'production';
// const sourceMapEnabled = isProduction
//   ? PATHS.build.productionSourceMap
//   : PATHS.dev.cssSourceMap;

// module.exports = {
//   loaders: utils.cssLoaders({
//     sourceMap: sourceMapEnabled,
//     extract: isProduction
//   }),
//   cssSourceMap: sourceMapEnabled,
//   transformToRequire: {
//     video: ['src', 'poster'],
//     source: 'src',
//     img: 'src',
//     image: 'xlink:href'
//   }
// };

// ! vue-loader 15.x

module.exports = {
  transformAssetUrls: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};
