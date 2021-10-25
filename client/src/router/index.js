import Vue from "vue"
import VueRouter from "vue-router"

import Landing from '../components/layout/Landing'
import Auth from '../components/auth'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Dashboard from '../components/dashboard'

import dataStore from '../store'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: Landing },
    {
      path: '/auth',
      component: Auth,
      beforeEnter(to, from, next) {
        if (dataStore.state.auth.token) {
          next('/dashboard')
        } else {
          next()
        }
      },
      children: [
        { path: 'login', component: Login },
        { path: 'register', component: Register },
        { path: '', redirect: '/auth/login' }
      ]
    },
    { 
      path: '/dashboard', 
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (dataStore.state.auth.token) {
          next()
        } else {
          next('/auth/login')
        }
      }
    },
    { path: "*", redirect: "/" }
  ]
})