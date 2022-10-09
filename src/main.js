import Vue from 'vue'
import { PiniaVuePlugin, createPinia } from 'pinia'
import axios from 'axios'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import './global.css'
import 'element-ui/lib/theme-chalk/index.css'

// 引入 mock
import './mock/mock.js'
import api from './api/index.js'
Vue.config.productionTip = false
// 将封装的接口挂载到vue原型上
Vue.prototype.$api = api
Vue.prototype.axios = axios
Vue.use(PiniaVuePlugin)
Vue.use(ElementUI)

new Vue({
  router,
  pinia: createPinia(),
  render: h => h(App),
}).$mount('#app')
