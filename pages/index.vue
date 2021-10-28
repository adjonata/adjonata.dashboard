<template>
  <div>
    <h1>
      <span class="aaa"> Alex </span>
    </h1>
    <div>
      <button @click="login">Login</button>
    </div>
    <div><button @click="showState">Show state</button></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: ['auth'],
  mounted() {
    console.log('teste')
    this.$api.multi.get().then((response) => {
      console.log(response)
    })
  },
  methods: {
    async login() {
      await this.$store.dispatch('auth/handleLogin', {
        email: 'alexdjonata30@gmail.com',
        password: 'Abalon456_',
      })
    },
    showState() {
      console.log(this.$store.state.auth)
    },
  },
})
</script>

<style lang="scss">
.aaa {
  background: green;
}
</style>
