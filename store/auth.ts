import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import Cookies from 'js-cookie'

interface AuthState {
  loggedIn: boolean
  user: AuthLogin | null
}

export const state = (): AuthState => ({
  loggedIn: false,
  user: null,
})

export const mutations: MutationTree<AuthState> = {
  SET_LOGGED_IN(state, value: boolean) {
    state.loggedIn = value
  },
  SET_USER(state, value: AuthLogin | null) {
    state.user = value
  },
}

export const actions: ActionTree<AuthState, AuthState> = {
  handleLogin({ commit, dispatch }, body: Auth) {
    return new Promise((resolve, reject) => {
      const auth = this.app.$api.auth

      auth
        .login(body)
        .then((response) => {
          commit('SET_LOGGED_IN', true)
          commit('SET_USER', response)

          this.$axios.setToken(response.authorization)

          Cookies.set('auth', JSON.stringify(response), {
            expires: 1,
          })

          resolve(response)
        })
        .catch((error) => {
          dispatch('handleLogout')
          reject(error)
        })
    })
  },
  handleLogout({ commit }) {
    commit('SET_LOGGED_IN', false)
    commit('SET_USER', null)

    this.$axios.setToken(false)
    Cookies.remove('auth')
  },
  handleRefreshToken({ commit }, user: AuthLogin) {
    return new Promise((resolve) => {
      if (user) {
        commit('SET_LOGGED_IN', true)
        commit('SET_USER', user)
        this.$axios.setToken(user.authorization)
      }
      resolve(true)
    })
  },
}

export const getters: GetterTree<AuthState, AuthState> = {
  user: (state) => state.user,
  loggedIn: (state) => state.loggedIn,
}
