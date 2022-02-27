import Vue from 'vue'
import Cookies from 'js-cookie'

export default Vue.extend({
  methods: {
    checkCookies(): Promise<any> {
      return new Promise((resolve) => {
        const loggedIn = this.$store.state.auth.loggedIn

        if (loggedIn) return

        const authLogin = Cookies.get('auth')

        if (authLogin) {
          const authLoginObject = JSON.parse(authLogin) as AuthLogin

          this.$store
            .dispatch('auth/handleRefreshToken', authLoginObject)
            .then(() => {
              this.$router.push('/')
              resolve(true)
            })
        } else {
          resolve(true)
        }
      })
    },
  },
})
