import Vue from 'vue'
import Router from 'vue-router'
import activePublic from '@/page/addfood.vue'
import one from '@/page/index.vue'
import two from '@/page/two.vue'
import login from '@/page/login.vue'
import editPerson from '@/page/editPerson.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/activePublic',
      name: 'activePublic',
      meta: {
        requireAuth: true
      },
      component: activePublic
      // children: [
      //   {path: '', component: step1},
      //   {path: 'step1', component: step1}
      // ]
    },
    {
      path: '/editPerson',
      name: 'editPerson',
      meta: {
        requireAuth: true
      },
      component: editPerson
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: one
      // ]
    },
    {
      path: '/two',
      name: 'two',
      meta: {
        requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: two
      // ]
    }
  ]
})
