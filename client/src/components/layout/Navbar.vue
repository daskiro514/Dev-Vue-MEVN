<template>
  <nav class='navbar bg-dark'>
    <h1>
      <router-link to='/'>
        <i class='fas fa-code'></i> Dev-Vue
      </router-link>
    </h1>
    <div v-if='isAuthenticated'>
      <ul>
        <li>
          <router-link to='/dashboard'>
          <i class='fas fa-user'></i> {{user.name}}'s
          <span class='hide-sm'> Dashboard</span>
          </router-link>
        </li>
        <li>
          <a v-on:click='logout' href='/'>
            <i class='fas fa-sign-out-alt'></i>
            <span class='hide-sm'> Logout</span>
          </a>
        </li>
      </ul>
    </div>
    <div v-else>
      <ul>
        <li>
          <router-link to='/auth/register'>Register</router-link>
        </li>
        <li>
          <router-link to='/auth/login'>Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState({ 
        isAuthenticated: state => state.auth.isAuthenticated,
        user: state => state.auth.user
      })
    },
    methods: {
      ...mapActions(['logout'])
    }
  }
</script>