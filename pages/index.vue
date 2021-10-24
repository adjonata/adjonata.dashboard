<template>
  <div>
    <h1>
      <span class="aaa"> Alex </span>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    this.$api.multi.get().then((res) => console.log(res))
    console.log(this.$api)
  },
})
</script>

<style lang="scss">
.aaa {
  background: green;
}
</style>
