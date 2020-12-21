import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import token from '@/util/token'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'api',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      // component: HelloWorld
      component: () => import('@/views/login')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/signin')
    },
    {
      path: '/blogManage',
      name: 'blogManage',
      component: () => import('@/views/blogManage')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/articleDetail/:blogID',
      name: 'articleDetail',
      props: true,
      component: () => import('@/views/articleDetail')
    },
    {
      path: '/createBlog',
      name: 'createBlog',
      props: true,
      component: () => import('@/views/createBlog')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/views/404')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const hasToken = token.getID()
  if (hasToken !== '') { // 登录状态
    if (to.path === '/login') {
      next({ path: '/home' })
    } else {
      next()
    }
  } else { // 未登录状态
    if (to.path !== '/login' && to.path !== '/signup') {
      console.log('跳到login')
      next({path: '/login'})
    } else {
      next()
    }
  }
})
export default router
