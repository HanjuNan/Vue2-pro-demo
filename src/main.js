import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import "./router/permission"

import "./assets/css/reset.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './element-variables.scss'

Vue.config.productionTip = false
Vue.use(ElementUI);

// 进入项目 获取本地是否有存储信息token
let token = localStorage.getItem("token");
if (token) {
  store.commit('LoginModule/setUserinfo', {
      user: '',
      token,
      isLogin: true
  })
}
console.log("main.js..");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
