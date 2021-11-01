import { GetterTree, ActionTree, MutationTree } from 'vuex'
import GetPhrase from '@/utils/getPhrase'

interface PhraseState {
  phrase: string | null
  loaded: boolean
}

export const state = (): PhraseState => ({ phrase: null, loaded: false })

export const mutations: MutationTree<PhraseState> = {
  SET_PHRASE(state, value: string) {
    state.phrase = value
  },
  SET_LOADED(state, value: boolean) {
    state.loaded = value
  },
}

export const actions: ActionTree<PhraseState, PhraseState> = {
  getPhrase({ commit, state }) {
    return new Promise((resolve) => {
      if (state.loaded) resolve(state.phrase)
      else {
        GetPhrase(this.$axios).then((phrase) => {
          commit('SET_PHRASE', phrase)
          commit('SET_LOADED', !!phrase)
          resolve(phrase)
        })
      }
    })
  },
}

export const getters: GetterTree<PhraseState, PhraseState> = {
  phrase: (state) => state.phrase,
  loaded: (state) => state.loaded,
}
