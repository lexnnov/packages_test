<template>
  <div v-if="routes" id="nav">
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigate',
  computed: {
    routes () {
      return this.$router.options.routes.length > 3
    }
  }
}
</script>

<style scoped lang="scss">

</style>
