import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('../layout/index.vue'),
      redirect: '/welcome', // 配置路由重定向
      children: [
        {
          path: '/welcome',
          component: () => import('../views/welcome/index.vue'),
        },
        {
          path: '/test',
          component: () => import('../views/test/index.vue'),
        },
        {
          path: '/home',
          component: () => import('../views/home/index.vue'),
        },
      ],
    },

  ],
})

export default router
