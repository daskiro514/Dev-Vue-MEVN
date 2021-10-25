<template>
  <div class="container">
    <h1 class="large text-primary">Sign In</h1>
    <p class="lead">
      <i class="fas fa-user"></i> Sign Into Your Account
    </p>
    <form class="form" v-on:submit.prevent>
      <div class="form-group">
        <input type="email" placeholder="Email Address" name="email" v-model='email' required />
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" name="password" v-model='password' minLength="6" />
      </div>
      <input type="submit" class="btn btn-primary" value="Login" v-on:click='onSubmit' />
    </form>
    <p class="my-1">
      Don't have an account? <router-link to="/auth/register">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    computed: {
      ...mapState({ isAuthenticated: state => state.auth.isAuthenticated })
    },
    methods: {
      ...mapActions(['login']),
      async onSubmit() {
        await this.login({
          email: this.email,
          password: this.password
        })
        if (this.isAuthenticated) {
          this.$router.push('/dashboard')
        }
      }
    }
  }
</script>