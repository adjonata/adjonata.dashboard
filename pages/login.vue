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
      // Check for error
      const { error: validationError } = ValidateLogin(this.form)

      // If there is an error, it returns an alert
      if (validationError) {
        return this.$swal.fire({
          icon: 'error',
          title: validationError.name,
          text: validationError.message,
        })
      }

      // Perform login action
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
    <header class="login__header">
      <img src="~/assets/boy.svg" alt="Boy Image" />
    </header>
    <form class="login__form" @submit.prevent="login">
      <h2>Dashboard</h2>
      <DInput v-model="form.email" type="email" label="E-mail:" required />
      <DInput
        v-model="form.password"
        type="password"
        label="Password:"
        required
      />
      <button class="submit" type="submit">Login</button>
    </form>
  </main>
</template>

<style lang="scss">
@import '~/styles/flex', '~/styles/variables';

.login {
  @extend .flex-row-center;

  height: 100vh;

  @media (max-width: $mobile) {
    flex-direction: column;
  }
  @media (min-width: $tablet) {
    padding-top: 60px;
  }

  &__header {
    text-align: center;
    img {
      width: 380px;

      @media (max-width: $mobile) {
        width: 300px;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;

    @media (min-width: $tablet) {
      margin-left: 30px;
    }

    h2 {
      color: $white-dark;
      font-weight: 300;
      text-transform: uppercase;
      padding-bottom: 15px;
      font-size: 28px;
      letter-spacing: 3px;

      @media (max-width: $mobile) {
        text-align: center;
      }
    }

    input {
      letter-spacing: 0.8px;
      color: $grey-light !important;
      border: solid 2px $blue-light;
    }
    button {
      margin-top: 10px;
    }
  }
}
</style>
