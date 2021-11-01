<template>
  <div class="home">
    {{ phrase }}
    {{ about }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  middleware: ['auth'],
  data: () => ({}),
  computed: {
    ...mapGetters('phrase', ['loaded', 'phrase']),
    ...mapGetters('informations', ['about']),
  },
  created() {
    this.getPhrase()
    this.getInformations()
  },
  methods: {
    ...mapActions('phrase', ['getPhrase']),
    ...mapActions('informations', ['getInformations']),
  },
})
</script>

<style lang="scss" scoped></style>
