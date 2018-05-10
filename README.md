# FLeaf-vue-admin
> :fallen_leaf: 基于[FireLeaf-Vue-Scaffold](https://github.com/NARUTOne/FireLeaf-Vue-Scaffold)开发的demo

独立的前端代码包，接通数据源后（`src/utils/config.js`）即可本地运行，放置服务器后端环境下即可部署

## 技术选型

 - webpack(4.1.1) : https://doc.webpack-china.org/
 - vue(2.5.16): https://cn.vuejs.org/index.html
 - vue-router(3.0.1): https://router.vuejs.org/zh-cn/
 - vuex: https://vuex.vuejs.org/zh-cn/installation.html
 - iview (默认): https://www.iviewui.com/docs/guide/start
 - axios: https://github.com/axios/axios
 - mockjs: http://mockjs.com/

## 安装

```sh
$ git clone </path/to/repository>

$ cd repository

$ npm install
```

## 本地开发环境运行

```sh
$ npm start 

或

$ npm start -p [port]
```

## 打包发布

```sh
$ npm run build
```

## DEMO目录

```
|-- config                             // webpack、vue配置
|-- md                                 // 脚手架文档
|-- script                             // 项目构建, 环境path
|-- src                                // 项目源码
|   |-- api                            // request
|   |-- components                     // 业务组件
|   |-- mock                           // 开发数据源
|   |-- pages                          // 业务界面
|       |-- app                        // 单页入口（布局）
|       |-- home                       // 默认首页
|       |-- notFound                   // 404页
|   |-- routers                        // 路由配置
|   |-- template                       // vue单页组件模板（简易）
|   |store
|       |-- index.js                   // 组装模块并导出 store 
|       |-- actions.js                 // 根级别的 action
|       |-- mutations.js               // 根级别的 mutation
|       |-- modules                    // 模块集
|   |-- utils                          // 公共集合（配置，样式，工具）
|       |-- style                      // 公共样式（less 变量）
|       |-- config                     // 项目业务配置
|       |-- tools                      // 工具方法
|   |-- index                          // 项目入口
|-- static                             // 项目静态文件
|-- .babelrc                           // babel配置
|-- .editorconfig                      // 定义代码格式
|-- .eslintrc                          // eslint代码规范
|-- .stylelintrc                       // stylelint样式规范
|-- package.json                       // 项目基本信息
|-- template.html                      // html 模板

```

**api规范**
> 遵循RESTful规范

- [模拟接口](https://easy-mock.com/project/5ab8d1653838ca14983dc0ee)

返回结构

```
{
  "data": {}, // 返回数据
  "code": 200, // code状态码
  "msg": "success" // 返回信息
}
```

## Log

[LOG](./md/log.md)

## 兼容性

- flex: 采用flex布局，注意浏览器兼容性