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

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)

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

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
