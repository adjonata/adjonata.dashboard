<template>
  <main class="login">
    <div class="login-form">
      <input v-model="form.email" type="email" placeholder="Email:" required />
      <input
        v-model="form.password"
        type="password"
        placeholder="Senha:"
        required
      />
      <button @click="login">Entrar</button>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
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
      const { error } = ValidateLogin(this.form)

      if (error) {
        this.$swal.fire({
          icon: 'error',
          title: error.name,
          text: error.message,
        })
      } else {
        await this.$store
          .dispatch('auth/handleLogin', this.form)
          .catch((error) => {
            console.log(error.data)
          })
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
