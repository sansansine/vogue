import Vue from 'vue'
import Router from 'vue-router'
import activePublic from '@/components/index.vue'
import one from '@/components/one.vue'
import two from '@/components/two.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'one',
      component: one
      // ]
    },
    {
      path: '/activePublic',
      name: 'activePublic',
      component: activePublic
      // children: [
      //   {path: '', component: step1},
      //   {path: 'step1', component: step1}
      // ]
    },
    {
      path: '/one',
      name: 'one',
      component: one
      // ]
    },
    {
      path: '/two',
      name: 'two',
      component: two
      // ]
    }
  ]
})
