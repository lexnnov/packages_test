import Vue from 'vue'
import Vuex from 'vuex'
import PostsService from '../services/packagesService'
import { FETCH_PACKAGES, SET_SPINNER_STATE, SET_ERROR_STATE, SET_DIALOG_STATE, SET_PACKAGE_INFO, SET_PACKAGES } from '../constants/constants'

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
    [SET_PACKAGES] (state, payload) {
      state.packages = payload
    },
    [SET_PACKAGE_INFO] (state, payload) {
      state.packageInfo = payload
    },
    [SET_DIALOG_STATE] (state, payload) {
      state.dialogIsActive = payload
    },
    [SET_ERROR_STATE] (state, payload) {
      state.error = payload
    },
    [SET_SPINNER_STATE] (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    async [FETCH_PACKAGES] (context, state) {
      if (state) {
        try {
          context.commit(SET_SPINNER_STATE, true)
          const packages = await PostsService.get(state)
          context.commit(SET_PACKAGES, packages.data)
          context.commit(SET_SPINNER_STATE, false)
        } catch (e) {
          context.commit(SET_ERROR_STATE, { state: true, message: e })
          context.commit(SET_SPINNER_STATE, false)
        }
      } else {
        context.commit(SET_PACKAGES, [])
      }
    },
    [SET_PACKAGE_INFO] (context, payload) {
      context.commit(SET_PACKAGE_INFO, payload)
    },
    [SET_SPINNER_STATE] (context, payload) {
      context.commit(SET_SPINNER_STATE, payload)
    },
    [SET_ERROR_STATE] (context, payload) {
      context.commit(SET_ERROR_STATE, payload)
    },
    [SET_DIALOG_STATE] (context, payload) {
      context.commit(SET_DIALOG_STATE, payload)
    }
  }
})
