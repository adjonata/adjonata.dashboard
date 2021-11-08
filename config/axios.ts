type AxiosNuxtConfig = {
  baseURL: string
}

const axiosConfig: AxiosNuxtConfig = {
  baseURL: 'https://localhost:8080',
}

const { API_URL = null } = process.env

if (API_URL) {
  axiosConfig.baseURL = API_URL
}

export default axiosConfig
