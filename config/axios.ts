type AxiosNuxtConfig = {
  baseURL: string
}

const axiosConfig: AxiosNuxtConfig = {
  baseURL: 'https://localhost:8080',
}

const { BACK_ENV = null, API_URL = null } = process.env

if (BACK_ENV === 'production' && API_URL) {
  axiosConfig.baseURL = API_URL
}

export default axiosConfig
