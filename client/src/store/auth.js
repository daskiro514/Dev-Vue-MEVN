import api from "../utils/api"

export default {
  state: {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  },
  getters: {

  },
  mutations: {
    REGISTER_SUCCESS(state, payload) {
      state.isAuthenticated = true
      state.loading = true
      state.token = payload.token
    },
    USER_LOADED(state, payload) {
      state.isAuthenticated = true
      state.loading = false
      state.user = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    LOGOUT(state) {
      state.isAuthenticated = false
      state.loading = false
      state.token = null
      state.user = null
    }
  },
  actions: {
    async register(context, formData) {
      const res = await api.post('/users', formData)
      context.commit('REGISTER_SUCCESS', res.data)
      context.dispatch('setAuthToken', res.data.token)
      context.dispatch('loadUser')
    },
    async login(context, formData) {
      const res = await api.post('/auth', formData)
      await context.dispatch('setAuthToken', res.data.token)
      await context.dispatch('loadUser')
    },
    async loadUser(context) {
      const res = await api.get('/auth')
      context.commit('USER_LOADED', res.data)
    },
    async setAuthToken(context, token) {
      if (token) {
        context.commit('SET_TOKEN', token)
        api.defaults.headers.common['x-auth-token'] = token
        localStorage.setItem('token', token)
      } else {
        delete api.defaults.headers.common['x-auth-token']
        localStorage.removeItem('token')
      }
    },
    async logout(context) {
      context.dispatch('setAuthToken')
      context.commit('LOGOUT')
    }
  }
}