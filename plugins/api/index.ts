import { Plugin } from '@nuxt/types'
import apiRoutes from './apiRoutes'

type ApiResponse<T> = Promise<T>

// Interface to use in Context
interface ApiPlugin {
  auth: {
    register(body: Auth): ApiResponse<AuthLogin>
    login(body: Auth): ApiResponse<AuthLogin>
  }
  about: {
    get(): ApiResponse<About>
    update(body: About): ApiResponse<About>
  }
  knowledge: {
    get(): ApiResponse<Knowledge>[]
    create(body: Knowledge): ApiResponse<Knowledge>
    update(body: Knowledge, id: string): ApiResponse<Knowledge>
    delete(id: string): ApiResponse<Knowledge>
  }
  project: {
    get(): ApiResponse<Project>[]
    create(body: Project): ApiResponse<Project>
    update(body: Project, id: string): ApiResponse<Project>
    delete(id: string): ApiResponse<Project>
  }
  social: {
    get(): ApiResponse<Social>[]
    create(body: Social): ApiResponse<Social>
    update(body: Social, id: string): ApiResponse<Social>
    delete(id: string): ApiResponse<Social>
  }
  multi: {
    get(): ApiResponse<Multi>
  }
}

// Inject type in Vue
declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiPlugin
  }
}

// Inject type in Nuxt
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: ApiPlugin
  }
  interface Context {
    $api: ApiPlugin
  }
}

// Api routes
const api: Plugin = (context, inject) => {
  inject('api', apiRoutes(context.$axios))
}

export default api
