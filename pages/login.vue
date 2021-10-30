<script lang="ts">
import Vue from 'vue'
import { AxiosResponse } from 'axios'
import ValidateLogin from '@/utils/login/validate'

export default Vue.extend({
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),
  methods: {
    async login() {
      const { error: validationError } = ValidateLogin(this.form)

      if (validationError) {
        return this.$swal.fire({
          icon: 'error',
          title: validationError.name,
          text: validationError.message,
        })
      }

      await this.$store
        .dispatch('auth/handleLogin', this.form)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error: AxiosResponse) => {
          this.$swal.fire({
            icon: 'error',
            title: 'Invalid login',
            text: error.data.msg,
          })
        })
    },
  },
})
</script>

<template>
  <main class="login">
    <form class="login__form" @submit.prevent="login">
      <input v-model="form.email" type="email" placeholder="Email:" required />
      <input
        v-model="form.password"
        type="password"
        placeholder="Password:"
        required
      />
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<style lang="scss" scoped>
.login {
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  &__form {
    display: flex;
    flex-direction: column;

    input {
      width: 200px;
      padding: 10px;
      border-radius: 5px;
      border: solid 1px #cecece;
      margin-bottom: 10px;
    }

    button {
    }
  }
}
</style>
