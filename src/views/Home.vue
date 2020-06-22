<template>
  <v-container>
    <v-row>
      <v-col xs="6" md="6" sm="6" xl="6" lg="6" offset-xs="3" offset-sm="3" offset-md="3">
        <Input :value.sync="packageName" />
      </v-col>
    </v-row>

    <v-row>
      <v-col xs="6" md="6" sm="6" xl="6" lg="6" offset-xs="3" offset-sm="3" offset-md="3">
        <v-progress-circular
          v-if="isLoading"
          :size="50"
          color="primary"
          indeterminate
        />

        <Table
          v-if="packageName"
          :headers="headers"
          :packages="packages"
          :footerProps="footer_props"
          @getRowInfo="getRowInfo"
        />
    </v-col>
  </v-row>
  </v-container>
</template>

<script>

import Input from '../components/Input.vue'
import Table from '../components/Table'
import 'promise-polyfill/src/polyfill'
import { FETCH_PACKAGES, SET_DIALOG_STATE, SET_PACKAGE_INFO } from '../constants/constants'

export default {
  name: 'Home',
  components: { Input, Table },
  data: function () {
    return {
      packageName: '',
      headers: [
        {
          text: 'Package name',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Author',
          align: 'start',
          sortable: false,
          value: 'author'
        }
      ],
      footer_props: {
        'items-per-page-options': [],
        'disable-items-per-page': true
      }
    }
  },
  methods: {
    getRowInfo (packageInfo) {
      this.$store.dispatch(SET_PACKAGE_INFO, packageInfo)
      this.$store.dispatch(SET_DIALOG_STATE, true)
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    packages () {
      return this.$store.state.packages
    }
  },
  watch: {
    packageName () {
      this.$store.dispatch(FETCH_PACKAGES, this.packageName)
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    margin-bottom: 50px;
  }
</style>
