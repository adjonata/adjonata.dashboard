<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  middleware: ['auth'],
  data: () => ({}),
  computed: {
    ...mapGetters('informations', ['about']),
  },
})
</script>

<template>
  <div class="home">Home</div>
</template>

<style lang="scss" scoped>
@import '~/styles/flex.scss';

.home {
  @extend .flex-column-center;
}
</style>
