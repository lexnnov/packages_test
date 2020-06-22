<template>
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
          <v-icon size="24px">mdi-github</v-icon>

         <strong>Vigriyanov Alexandr</strong>
      </v-col>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .text-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
