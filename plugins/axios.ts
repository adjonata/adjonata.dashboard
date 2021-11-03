import { Plugin } from '@nuxt/types'

const axiosPlugin: Plugin = ({ $axios }) => {
  $axios.onError((error) => {
    if (error.response) {
      return Promise.reject(error.response)
    } else {
      return null
    }
  })
}

export default axiosPlugin
