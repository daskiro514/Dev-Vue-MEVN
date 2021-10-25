<template>
  <div class='container'>
    <h1 class='large text-primary'>Sign Up</h1>
    <p class='lead'>
      <i class='fas fa-user'></i> Create Your Account
    </p>
    <form class='form' v-on:submit.prevent>
      <div class='form-group'>
        <input type='text' placeholder='Name' name='name' v-model='formData.name' required />
      </div>
      <div class='form-group'>
        <input type='email' placeholder='Email Address' name='email' v-model='formData.email' required />
        <small class='form-text'>
          This site uses Gravatar so if you want a profile image, use a
          Gravatar email
        </small>
      </div>
      <div class='form-group'>
        <input type='password' placeholder='Password' name='password' v-model='formData.password' required
          minLength="6" />
      </div>
      <div class='form-group'>
        <input type='password' placeholder='Confirm Password' name='password2' v-model='formData.password2' required
          minLength="6" />
      </div>
      <input type='submit' class='btn btn-primary' value='Register' v-on:click='onSubmit' />
    </form>
    <p class='my-1'>
      Already have an account?
      <router-link to='/auth/login'>Sign In</router-link>
    </p>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          password: '',
          password2: ''
        }
      }
    },
    computed: {
      ...mapState({ isAuthenticated: state => state.auth.isAuthenticated })
    },
    methods: {
      ...mapActions(['register', 'setAlert']),
      async onSubmit() {
        if (this.formData.password === this.formData.password2) {
          await this.register(this.formData)
          if (this.isAuthenticated) {
            this.$router.push('/dashboard')
          }
        } else {
          this.$notify({ type: 'warn', text: 'Passwords do not match' })
        }
      }
    }
  }
</script>