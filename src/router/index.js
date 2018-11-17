import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import list from '@/views/list/index'
import edit from '@/views/edit/index'

import h5list from '@/components/h5list/h5list'
import spaList from '@/components/spaList/spaList'
import about from '@/components/about/about'

// 注册vue-router
Vue.use(Router)




export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      redirect:'/list',
      children: [
        {
          path: '/list',
          component: list,
          children: [
            {
              path: 'h5list',
              component: h5list
            }, {
              path: 'spaList',
              component: spaList
            }, {
              path: 'about',
              component: about
            }
          ]
        },
        {
          path: '/edit',
          component: edit,
        },
      ]
    }
  ]
})
