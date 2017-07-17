// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../theme/index.css'
import App from './App'
import router from './router'
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
