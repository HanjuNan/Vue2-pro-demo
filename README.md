# vue2-pro

## vue2全家桶demo
vue + vuex + vue-router + element ui + axios

## 安装依赖
1.vue-router
2.vuex
3.axios
4.element ui

## 项目初始化
1.删除无用组件
2.配置css初始化

## 编程式导航跳转 控制台报错
解决方法: 降低vue-router版本
 "vue-router": "^3.2.0",
 "vue-router": "^3.0.7",
安装: npm install vue-router@3.0.7 --force


## Element-ui
1.自定义主题色
    1.1) Element 的 theme-chalk 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 Element 的样式变量。新建一个样式文件，例如 element-variables.scss，写入以下内容：

    /* 改变主题色变量 */
    $--color-primary: teal;

    /* 改变 icon 字体路径变量，必需 */
    $--font-path: '~element-ui/lib/theme-chalk/fonts';

    @import "~element-ui/packages/theme-chalk/src/index";

    1.2) 之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 Element 编译好的 CSS 文件）：

    import Vue from 'vue'
    import Element from 'element-ui'
    import './element-variables.scss'

    Vue.use(Element)


## 后台服务
1. node.js express mysql
2. 后台返回token: jsonwebtoken
3. 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
