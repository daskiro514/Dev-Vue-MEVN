import Vue from 'vue'
import Notifications from 'vue-notification'
import App from './App.vue'

Vue.config.productionTip = false

import './App.css'

import store from "./store"
import router from "./router"

Vue.use(require('vue-moment'))
Vue.use(Notifications)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')