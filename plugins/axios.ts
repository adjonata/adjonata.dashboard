import { Plugin } from '@nuxt/types'

const axiosPlugin: Plugin = ({ $axios }) => {
  $axios.onError((error) => {
    return Promise.reject(error.response)
  })
}

export default axiosPlugin
