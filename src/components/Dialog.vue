<template>
  <div class="text-xs-left">
    <v-dialog
            v-model="dialogIsActive"
            width="500"
            @click:outside="closeDialog"
    >

      <v-card>
        <v-card-title
                class="headline grey lighten-2"
                primary-title
        >
          Package info
        </v-card-title>

        <v-card-text>
          <v-list>
            <v-list-item three-line v-for="(value, index) in propsFilter" :key="value.message">
              <v-list-item-content >
                <v-list-item-title>{{index}}</v-list-item-title>
                <v-list-item-subtitle v-html="addHref(index, value)"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
                  color="primary"
                  text
                  @click="closeDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { SET_DIALOG_STATE } from '../constants/constants'

export default {
  name: 'Dialog',
  computed: {
    dialogIsActive () {
      return this.$store.state.dialogIsActive
    },
    packageInfo () {
      return this.$store.state.packageInfo
    },
    propsFilter () {
      const propsForHidden = ['meta', 'assets', '$loki', 'versions'] // hidden information

      if (this.packageInfo) {
        propsForHidden.forEach(prop => {
          delete this.packageInfo[prop]
        })
      }
      return this.packageInfo
    }
  },
  methods: {
    closeDialog () {
      this.$store.dispatch(SET_DIALOG_STATE, false)
    },
    addHref (prop, value) {
      return (prop === 'homepage' || prop === 'github') ? `<a target="_blank" href=${value}>${value}</a>` : value
    }
  }
}
</script>

<style scoped lang="scss">
  .v-list-item__subtitle {
    text-align: left;
  }
  .v-list-item__title {
    text-align: left;
  }
</style>
