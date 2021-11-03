<template>
  <div class="default">
    <Header v-if="showAllParts" />
    <main class="default__content">
      <Nuxt />
    </main>
    <Footer v-if="showAllParts" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters('auth', ['loggedIn']),
    showAllParts() {
      return this.loggedIn && this.$route.path !== '/login'
    },
  },
})
</script>

<style lang="scss" scoped>
.default {
  &__content {
    min-height: 60vh;
  }
}
</style>
