<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '../layout/Navbar'

  export default {
    components: { Navbar }
  }
</script>