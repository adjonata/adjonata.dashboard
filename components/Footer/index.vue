<template>
  <div class="footer">
    <FooterPhrase
      v-if="phraseLoaded"
      :author="phraseAuthor"
      :phrase="phrase"
      @refresh="getPhrase()"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters('phrase', ['phrase', 'phraseAuthor', 'phraseLoaded']),
  },
  created() {
    this.getPhrase()
  },
  methods: {
    ...mapActions('phrase', ['getPhrase']),
  },
})
</script>

<style scoped></style>
