<template>
  <v-data-table
    :headers="this.headers"
    :items="this.packages"
    :items-per-page="10"
    class="elevation-1"
    @click:row="clickOnRow"
    :footer-props="this.footerProps"
  ></v-data-table>
</template>

<script>

export default {
  name: 'Table',
  props: {
    headers: { type: Array },
    packages: { type: Array },
    footerProps: { type: Object }
  },
  methods: {
    clickOnRow (rowInfo) {
      this.$emit('getRowInfo', rowInfo)
    }
  }
}
</script>

<style lang="scss">

  .row td {
    cursor: pointer;
  }

  .v-data-table-header-mobile {
    display: none !important;
  }

  .row-pointer >>> tbody tr :hover {
    cursor: pointer;
  }

</style>
