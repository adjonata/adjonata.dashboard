<template>
  <main class="login">
    <div class="login-form">
      <input type="text" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    body: {
      email: '',
      password: '',
    },
  }),
  methods: {
    handleSubmit() {},
  },
}
</script>

<style lang="scss" scoped></style>
