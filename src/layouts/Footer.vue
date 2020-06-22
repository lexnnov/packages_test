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

        <strong><a id="github" href="https://github.com/lexnnov/packages" target="_blank">Vigriyanov Alexandr</a></strong>
      </v-col>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  #github {
    color: #707070;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .text-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
