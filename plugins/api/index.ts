import { Plugin } from '@nuxt/types'
import { AxiosResponse } from 'axios'
import apiRoutes from './apiRoutes'

// Interface to use in Context
interface ApiPlugin {
  auth: {
    register(body: Auth): Promise<AxiosResponse<AuthLogin>>
    login(body: Auth): Promise<AxiosResponse<AuthLogin>>
  }
  about: {
    get(): Promise<AxiosResponse<About>>
    update(body: About): Promise<AxiosResponse<About>>
  }
  knowledge: {
    get(): Promise<AxiosResponse<Knowledge>[]>
    create(body: Knowledge): Promise<AxiosResponse<Knowledge>>
    update(body: Knowledge, id: string): Promise<AxiosResponse<Knowledge>>
    delete(id: string): Promise<AxiosResponse<Knowledge>>
  }
  project: {
    get(): Promise<AxiosResponse<Project>[]>
    create(body: Project): Promise<AxiosResponse<Project>>
    update(body: Project, id: string): Promise<AxiosResponse<Project>>
    delete(id: string): Promise<AxiosResponse<Project>>
  }
  social: {
    get(): Promise<AxiosResponse<Social>[]>
    create(body: Social): Promise<AxiosResponse<Social>>
    update(body: Social, id: string): Promise<AxiosResponse<Social>>
    delete(id: string): Promise<AxiosResponse<Social>>
  }
  multi: {
    get(): Promise<AxiosResponse<Multi>>
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
