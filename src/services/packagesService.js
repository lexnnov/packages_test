import Vue from 'vue'

export default {
  get (packageName) {
    return Vue.axios.get('https://api.jsdelivr.com/v1/jsdelivr/libraries?name=' + packageName + '*')
  }
}
