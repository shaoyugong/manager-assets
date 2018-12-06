import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
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
            title: 'index',
            icon: 'index',
            noCache: true
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/',
      hidden: true
    }
  ]
})
