import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      // component: HelloWorld
      component: () => import('@/views/login')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/signin')
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: () => import('@/views/articleDetail')
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
