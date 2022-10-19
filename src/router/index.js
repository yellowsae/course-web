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
    // login
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/index.vue'),
    },

  ],
})

// 配置路由守卫
router.beforeEach((to, from, next) => {
  // to 将要访问那个路径
  // from 代表从那个路径跳转而来
  // next() 是一个函数， 表示放行  ，  next('/login') 强制跳转

  // 判断/login表示可以放行
  if (to.path === '/login')
    return next()
  // 获取 token
  const tokenStr = window.sessionStorage.getItem('token')
  // 判断是否具有 token , 如果没有token, 或者token为空， 则强制条状 /login
  if (!tokenStr)
    return next('/login')

  // 其他情况， 放行
  next()
})

export default router
