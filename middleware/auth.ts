import { Middleware } from '@nuxt/types'

const authMiddleware: Middleware = ({ store, redirect }) => {
  if (!store.state.auth.loggedIn) {
    redirect('/login')
  }
}

export default authMiddleware
