import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default ($axios: NuxtAxiosInstance) => {
  return {
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
  }
}
