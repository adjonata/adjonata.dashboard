import { Plugin } from '@nuxt/types'

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
const myPlugin: Plugin = (context, inject) => {
  const { $axios } = context

  inject('api', {
    auth: {
      register(body: Auth) {
        return $axios.$post<AuthLogin>('/auth/register', body)
      },
      login(body: Auth) {
        return $axios.$post<AuthLogin>('/auth/login', body)
      },
    },
    about: {
      get() {
        return $axios.$get<About>('/about/')
      },
      update(body: About) {
        return $axios.$post<About>('/about', body)
      },
    },
    knowledge: {
      get() {
        return $axios.$get<Knowledge[]>('/knowledge/')
      },
      create(body: Knowledge) {
        return $axios.$post<Knowledge>('/knowledge', body)
      },
      update(body: Knowledge, id: string) {
        return $axios.$put<Knowledge>(`/knowledge/${id}`, body)
      },
      delete(id: string) {
        return $axios.$delete(`/knowledge/${id}`)
      },
    },
    project: {
      get() {
        return $axios.$get<Project[]>('/project/')
      },
      create(body: Project) {
        return $axios.$post<Project>('/project', body)
      },
      update(body: Project, id: string) {
        return $axios.$put<Project>(`/project/${id}`, body)
      },
      delete(id: string) {
        return $axios.$delete(`/project/${id}`)
      },
    },
    social: {
      get() {
        return $axios.$get<Social[]>('/social/')
      },
      create(body: Social) {
        return $axios.$post<Social>('/social', body)
      },
      update(body: Social, id: string) {
        return $axios.$put<Social>(`/social/${id}`, body)
      },
      delete(id: string) {
        return $axios.$delete(`/social/${id}`)
      },
    },
    multi: {
      get() {
        return $axios.$get<Multi>('/multi/')
      },
    },
  })
}

export default myPlugin
