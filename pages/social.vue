<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: ['auth'],
  head: () => ({
    title: 'Dashboard - Social',
  }),
})
</script>

<template>
  <div>Social page</div>
</template>

<style scoped lang="scss"></style>
