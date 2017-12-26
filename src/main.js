// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../theme/index.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store.js'
import axios from 'axios'
import headmenu from './components/head.vue'
import menupop from './components/popmenu.vue'
import questionlist from './components/questionlist.vue'
import newfood from './components/newfood.vue'
import pupsearch from './components/pupsearch.vue'
import popfood from './components/popfood'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.component('head_menu', headmenu)
Vue.component('menu_pop', menupop)
Vue.component('question_list', questionlist)
Vue.component('new_food', newfood)
Vue.component('pup_search', pupsearch)
Vue.component('pop_food', popfood)

Vue.prototype.$ajax = axios
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  // NProgress.start();
  if (to.path === '/') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/') {
    next({ path: '/' })
  } else {
    next()
  }
})
/*  Vue实例监听的范围（#app） */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
