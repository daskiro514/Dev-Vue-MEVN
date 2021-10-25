<template>
  <section class='landing'>
    <div class='dark-overlay'>
      <div class='landing-inner'>
        <h1 class='x-large'>Vue Project for Developers</h1>
        <div class='buttons'>
          <router-link to='/auth/register' class='btn btn-primary'>
            Sign Up
          </router-link>
          <router-link to='/auth/login' class='btn btn-light'>
            Login
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>