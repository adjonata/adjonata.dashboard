import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface InformationsState extends Multi {
  loaded: boolean
}

const defaultState: InformationsState = {
  about: null,
  knowledges: [],
  projects: [],
  social: [],
  loaded: false,
}

type InformationStateKeys = 'about' | 'knowledges' | 'projects' | 'social'

export const state = (): InformationsState => ({ ...defaultState })

export const mutations: MutationTree<InformationsState> = {
  SET_INFORMATIONS(state, { about, projects, knowledges, social }: Multi) {
    state.about = about
    state.knowledges = knowledges
    state.projects = projects
    state.social = social
  },
  UPDATE_INFORMATION(
    state,
    { key, value }: { key: InformationStateKeys; value: any }
  ) {
    state[key] = value
  },
  SET_LOADED(state, value: boolean) {
    state.loaded = value
  },
}

export const actions: ActionTree<InformationsState, InformationsState> = {
  async getInformations({ commit }) {
    const multi = this.app.$api.multi

    try {
      return await multi.get().then((response) => {
        commit('SET_INFORMATIONS', response)
        commit('SET_LOADED', true)
        this.$router.push('/')
      })
    } catch (error) {
      commit('SET_INFORMATIONS', { ...defaultState })
      commit('SET_LOADED', false)
    }
  },
  updateInformation(
    { commit },
    { key, value }: { key: InformationStateKeys; value: any }
  ) {
    commit('UPDATE_INFORMATION', {
      key,
      value,
    })
  },
  setLoaded({ commit }, value: boolean) {
    commit('SET_LOADED', value)
  },
}

export const getters: GetterTree<InformationsState, InformationsState> = {
  about: (state) => state.about,
  knowledges: (state) => state.knowledges,
  projects: (state) => {
    const projects = [...state.projects].sort((project) => {
      if (project.spotlight) {
        return -1
      } else {
        return 0
      }
    })

    return projects
  },
  social: (state) => state.social,
  loadedInformation: (state) => state.loaded,
}
