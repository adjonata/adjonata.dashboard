import { Plugin } from '@nuxt/types'
import pensadorRoutes, { Phrase } from './pensadorRoutes'

// Interface to use in Context
interface PensadorPlugin {
  getPhrase(): Promise<Phrase>
}

// Inject type in Vue
declare module 'vue/types/vue' {
  interface Vue {
    $pensador: PensadorPlugin
  }
}

// Inject type in Nuxt
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $pensador: PensadorPlugin
  }
  interface Context {
    $pensador: PensadorPlugin
  }
}

// Pensador routes
const $pensador: Plugin = (context, inject) => {
  inject('pensador', pensadorRoutes(context.$axios))
}

export default $pensador
