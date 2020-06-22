<template>
  <v-snackbar
    v-model="error.state"
    :multi-line="multiLine"
  >
    {{ error.message }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="red"
        text
        v-bind="attrs"
        @click="closeSnackbar"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { SET_ERROR_STATE } from '../constants/constants'

export default {
  name: 'Snackbar',
  data: () => ({
    multiLine: true
  }),
  computed: {
    error () {
      return this.$store.state.error
    }
  },
  methods: {
    closeSnackbar () {
      this.$store.dispatch(SET_ERROR_STATE, { message: '', state: false })
    }
  }
}
</script>

<style scoped>

</style>
