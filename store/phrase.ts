import { GetterTree, ActionTree, MutationTree } from 'vuex'
interface PhraseState {
  phrase: string | null
  author: string | null
  loaded: boolean
}

export const state = (): PhraseState => ({
  phrase: null,
  author: null,
  loaded: false,
})

export const mutations: MutationTree<PhraseState> = {
  SET_PHRASE(state, value: string) {
    state.phrase = value
  },
  SET_AUTHOR(state, author: string) {
    state.author = author
  },
  SET_LOADED(state, value: boolean) {
    state.loaded = value
  },
}

export const actions: ActionTree<PhraseState, PhraseState> = {
  getPhrase({ commit }) {
    return new Promise((resolve) => {
      this.app.$pensador.getPhrase().then((phrase) => {
        if (phrase) {
          commit('SET_PHRASE', phrase.text)
          commit('SET_AUTHOR', phrase.author)
          commit('SET_LOADED', true)
          resolve(phrase)
        } else {
          commit('SET_LOADED', false)
          resolve(null)
        }
      })
    })
  },
}

export const getters: GetterTree<PhraseState, PhraseState> = {
  phrase: (state) => state.phrase,
  phraseAuthor: (state) => state.author,
  phraseLoaded: (state) => state.loaded,
}
