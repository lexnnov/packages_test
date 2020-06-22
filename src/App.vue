<template>
  <v-app>
    <Navigate/>

    <v-main>
      <router-view/>
    </v-main>

    <Dialog/>
    <Snackbar/>
    <Footer/>
  </v-app>
</template>

<script>
import Dialog from './components/Dialog.vue'
import Footer from './layouts/Footer.vue'
import Snackbar from './components/Snackbar'
import Navigate from './layouts/Navigate'

export default {
  name: 'app',
  components: {
    Navigate,
    Snackbar,
    Dialog,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
