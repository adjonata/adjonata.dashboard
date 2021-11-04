import { Middleware } from '@nuxt/types'

const syncInformationsMiddleware: Middleware = async ({ store }) => {
  const loadedInformation = store.getters['informations/loadedInformation']

  if (!loadedInformation) {
    await store.dispatch('informations/getInformations')
  }
}

export default syncInformationsMiddleware
