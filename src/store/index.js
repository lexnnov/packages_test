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
    async getPackages (commit, state) {
      if (state) {
        try {
          commit.commit('setSpinnerState', true)
          const packages = await PostsService.get(state)
          commit.commit('setPackages', packages.data)
          commit.commit('setSpinnerState', false)
        } catch (e) {
          commit.commit('setErrorState', { state: true, message: e })
          commit.commit('setSpinnerState', false)
        }
      } else {
        commit.commit('setPackages', [])
      }
    },
    setSpinnerState (commit, payload) {
      commit.commit('setSpinnerState', payload)
    },
    setErrorState (commit, payload) {
      commit.commit('setErrorState', payload)
    },
    setDialogState (commit, payload) {
      commit.commit('setDialogState', payload)
    }
  }
})
