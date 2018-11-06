/**
 * prod webpack config
 */

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge'); // 配置合并
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 配置html
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'); // css压缩优化 ， cssnano =>postcss
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const utils = require('./utils');
const PATHS = require('../script/PATHS');
const baseConfig = require('./webpack.base.config.js');
const pnamePath = PATHS.PName ? (PATHS.PName + '/').replace(/\/\//, '/') : '' ;

const webpackConfig = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: PATHS.build.assetsPublicPath,
    filename: pnamePath +'static/js/[name].[chunkhash:8].js'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: PATHS.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: PATHS.build.productionSourceMap ? PATHS.build.devtool : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: PATHS.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    new webpack.ContextReplacementPlugin(/moment[\\/\\]locale$/, /zh-cn/),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, PATHS.build.buildPath, 'index.html'),
      template: 'template.ejs',
      inject: false, // 注入
      favicon: utils.resolve('favicon.ico'),
      minify: {
        removeComments: true, // 带HTML注释
        collapseWhitespace: true, // 文本节点出现的空白而崩溃
        removeAttributeQuotes: true // 删除属性引用
      }
    }),
    new BundleAnalyzerPlugin(
      {
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 8889,
        reportFilename: 'report.html',
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        logLevel: 'info'
      }
    )
  ],
  // webpack 4.x 删除了 CommonsChunkPlugin，以支持两个新的选项（optimization.splitChunks 和 optimization.runtimeChunk）
  optimization: {
    splitChunks: {
      chunks: "async", // 必须三选一： "initial" | "all"(默认) | "async"
      minSize: 30000, // 最小尺寸，默认0
      minChunks: 1, // 最小 chunk ，默认1
      maxAsyncRequests: 5, // 最大异步请求数， 默认1
      maxInitialRequests: 3, // 最大初始化请求书，默认1
      name: true, // 名称，此选项可接收 function
      cacheGroups: { // 这里开始设置缓存的 chunks
        common: {
          name: 'common',
          // chunks: 'all',
          minChunks: 2,
          enforce: true,
          priority: -20, // 缓存组优先级
        },
        vendor: { // key 为entry中定义的 入口名称
          chunks: "all", // 必须三选一： "initial" | "all" | "async"(默认)
          test: /vue|vuex|vue-router/, // 正则规则验证，如果符合就提取 chunk
          name: "vendor", // 要缓存的 分隔出来的 chunk 名称
          minSize: 0,
          minChunks: 1,
          enforce: true,
          priority: -10, // 缓存组优先级
          maxAsyncRequests: 1, // 最大异步请求数， 默认1
          maxInitialRequests: 1, // 最大初始化请求书，默认1
          reuseExistingChunk: true // 可设置是否重用该chunk
        },
        charts: { // key 为entry中定义的 入口名称
          chunks: "all",
          test: /@antv\/g6/, // 正则规则验证，如果符合就提取 chunk
          name: "charts", // 要缓存的 分隔出来的 chunk 名称
          minSize: 0,
          minChunks: 1,
          enforce: true,
          priority: -10,
          maxAsyncRequests: 1,
          maxInitialRequests: 1,
          reuseExistingChunk: true
        },
        tools: { // key 为entry中定义的 入口名称
          chunks: "all",
          test: /lodash|moment/, // 正则规则验证，如果符合就提取 chunk
          name: "tools", // 要缓存的 分隔出来的 chunk 名称
          minSize: 0,
          minChunks: 1,
          enforce: true,
          priority: -10,
          maxAsyncRequests: 1,
          maxInitialRequests: 1,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
});

module.exports = webpackConfig;
