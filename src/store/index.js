import Vue from 'vue'
import Vuex from 'vuex'
import PostsService from '../services/packagesService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packageInfo: null,
    packages: [],
    dialogIsActive: false,
    error: { state: false, message: '' },
    isLoading: false
  },
  mutations: {
    setPackages (state, payload) {
      state.packages = payload
    },
    setPackagesInfo (state, payload) {
      state.packageInfo = payload
    },
    setDialogState (state, payload) {
      state.dialogIsActive = payload
    },
    setErrorState (state, payload) {
      state.error = payload
    },
    setSpinnerState (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    async getPackages (context, state) {
      if (state) {
        try {
          context.commit('setSpinnerState', true)
          const packages = await PostsService.get(state)
          context.commit('setPackages', packages.data)
          context.commit('setSpinnerState', false)
        } catch (e) {
          context.commit('setErrorState', { state: true, message: e })
          context.commit('setSpinnerState', false)
        }
      } else {
        context.commit('setPackages', [])
      }
    },
    setSpinnerState (context, payload) {
      context.commit('setSpinnerState', payload)
    },
    setErrorState (context, payload) {
      context.commit('setErrorState', payload)
    },
    setDialogState (context, payload) {
      context.commit('setDialogState', payload)
    }
  }
})
