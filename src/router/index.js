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
          component: () => import('../views/Test/index.vue'),
        },
        {
          path: '/home',
          component: () => import('../views/home/index.vue'),
        },
        // addSubject
        {
          path: '/addSubject',
          component: () => import('../views/subject/index.vue'),
        },
        // review
        {
          path: '/review',
          component: () => import('../views/review/index.vue'),
        },
        {
          path: '/studentSubject',
          component: () => import('../views/studentSubject/index.vue'),
        },
        {
          path: '/studentReview',
          component: () => import('../views/studentReview/index.vue'),
        },
      ],
    },

  ],
})

export default router
