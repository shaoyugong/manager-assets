import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/index',
      component: Layout,
      children: [
        {
          path: '/index',
          component: () => import('@/views/index'),
          name: 'index',
          meta: {
            title: 'home',
            icon: 'home',
            noCache: true
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/index',
      hidden: true
    }
  ]
})
