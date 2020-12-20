// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import tokenUtil from './util/token'

// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
// 拦截请求，注入token
axios.interceptors.request.use(function (config) {
  let token = window.sessionStorage.getItem('token')
  config.headers.common['Authorization'] = token;
  return config;
})
// 全局注册，之后可在其他组件中通过 this.$token 操作token
Vue.prototype.$tokenUtil = tokenUtil

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
