<template>
  <div class="d-list">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
@import '~/styles/variables';

.d-list {
  width: 800px;
  max-width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: $mobile) {
    justify-content: space-around;

    .d-item {
      margin-bottom: 30px;
      &.large {
        width: 80%;
      }
      &.small {
        width: 45%;
      }
    }
  }

  @media (min-width: $tablet) {
    .d-item {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
}
</style>
