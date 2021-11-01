<template>
  <div class="default">
    <DHeader v-if="loggedIn" />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters('auth', ['loggedIn']),
  },
})
</script>

<style lang="scss" scoped></style>
