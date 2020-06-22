<template>
    <v-text-field
        v-model="inputVal"
        label="Package name"
        v-on:keyup.enter="$event.target.blur()"
    ></v-text-field>
</template>

<script>

export default {
  name: 'Input',
  props: {
    getPackages: { type: Function },
    value: { type: String }
  },
  computed: {
    inputVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:value', val)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
