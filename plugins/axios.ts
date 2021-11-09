import { Plugin } from '@nuxt/types'

const axiosPlugin: Plugin = ({ $axios, redirect, store }) => {
  $axios.onError((error) => {
    if (error.response?.status === 410) {
      store.dispatch('auth/handleLogout')
      redirect('/login')
    }

    if (error.response) {
      return Promise.reject(error.response)
    } else {
      return null
    }
  })
}

export default axiosPlugin
