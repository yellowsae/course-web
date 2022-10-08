import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/index.vue'),
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('../views/Test/index.vue'),
    },
  ],
})

export default router
