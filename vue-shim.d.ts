interface About {
  _id?: string
  description: string
}
interface Auth {
  _id?: string
  email: string
  password: string
}
interface AuthLogin {
  authorization: string
  userInfo: {
    id: string
    email: string
  }
}
interface Knowledge {
  _id?: string
  link?: string
  title: string
  image: string
}
interface Project {
  _id?: string
  image: string
  title: string
  description?: string
  link: string
  spotlight: boolean
  color?: string
}
interface Social {
  _id?: string
  title: string
  image?: string
  link: string
}
interface Multi {
  about: About | null
  knowledges: Knowledge[]
  projects: Project[]
  social: Social[]
}
