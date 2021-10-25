<template>
  <div>
    <Navbar />
    <div class="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {{user && user.name}}
      </p>
      <img v-if='user' :src='user.avatar' width="200px" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Navbar from '../layout/Navbar'

  export default {
    components: { Navbar },
    computed: {
      ...mapState({ user: state => state.auth.user })
    }
  }
</script>