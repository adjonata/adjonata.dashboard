import { Plugin } from '@nuxt/types'
import apiRoutes from './apiRoutes'

// Interface to use in Context
interface ApiPlugin {
  auth: {
    register(body: Auth): Promise<AuthLogin>
    login(body: Auth): Promise<AuthLogin>
  }
  about: {
    get(): Promise<About>
    update(body: About): Promise<About>
  }
  knowledge: {
    get(): Promise<Knowledge[]>
    create(body: Knowledge): Promise<Knowledge>
    update(body: Knowledge, id: string): Promise<Knowledge>
    delete(id: string): Promise<Knowledge>
  }
  project: {
    get(): Promise<Project[]>
    create(body: Project): Promise<Project>
    update(body: Project, id: string): Promise<Project>
    delete(id: string): Promise<Project>
  }
  social: {
    get(): Promise<Social[]>
    create(body: Social): Promise<Social>
    update(body: Social, id: string): Promise<Social>
    delete(id: string): Promise<Social>
  }
  multi: {
    get(): Promise<Multi>
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
