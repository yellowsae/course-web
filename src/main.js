import Vue from 'vue'
import { PiniaVuePlugin, createPinia } from 'pinia'

import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import './global.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(PiniaVuePlugin)
Vue.use(ElementUI)

new Vue({
  router,
  pinia: createPinia(),
  render: h => h(App),
}).$mount('#app')
