import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          isLogin: false
        }
      },
      {
        path: 'news',
        name: 'News',
        component: () => import("../views/News.vue"),
        meta: {
          isLogin: true
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import("../views/About.vue"),
        meta: {
          isLogin: true
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

// 路由全局守卫
router.beforeEach((to, from, next) => {
  // 登录验证: 1.进入路由界面是否需要登录 2.再验证是否登录
  if (to.meta.isLogin) { // true需要登录

  } else {
    // 不需要登录,直接放行
    next()
  }
})

const router = new VueRouter({
  routes
})

export default router
