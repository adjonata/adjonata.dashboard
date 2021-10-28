import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface InformationsState extends Multi {}

const defaultState = {
  about: null,
  knowledges: [],
  projects: [],
  social: [],
}

export const state = (): InformationsState => ({ ...defaultState })

export const mutations: MutationTree<InformationsState> = {
  SET_INFORMATIONS(state, { about, projects, knowledges, social }: Multi) {
    state.about = about
    state.projects = projects
    state.knowledges = knowledges
    state.social = social
  },
}

export const actions: ActionTree<InformationsState, InformationsState> = {
  async seekInformations({ commit }) {
    const multi = this.app.$api.multi

    try {
      return await multi.get().then((response) => {
        commit('SET_INFORMATIONS', response)
        this.$router.push('/')
      })
    } catch (error) {
      commit('SET_INFORMATIONS', { ...defaultState })
    }
  },
}

export const getters: GetterTree<InformationsState, InformationsState> = {}
