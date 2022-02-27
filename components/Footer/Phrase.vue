<template>
  <div class="phrase">
    <div class="phrase__refresh" @click="$emit('refresh')">
      <span class="material-icons">refresh</span>
    </div>
    <h3 class="phrase__content">{{ phrase }}</h3>
    <h4 class="phrase__author">- {{ author }}</h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    phrase: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
@import '~/styles/variables.scss', '~/styles/flex.scss';

.phrase {
  @extend .flex-column-center;

  width: 100%;
  padding: 30px 40px;
  text-align: center;

  h3 {
    font-size: 17px;
    letter-spacing: 0.5px;
    line-height: 25px;
    max-width: 780px;
    color: $white-dark;
  }

  h4 {
    font-size: 16px;
    font-weight: 300;
    padding: 8px;
    color: $grey-light;
  }

  &__refresh {
    cursor: pointer;
    padding-bottom: 10px;
    span.material-icons {
      color: $blue-light;
      font-size: 30px;
    }
  }
}
</style>
