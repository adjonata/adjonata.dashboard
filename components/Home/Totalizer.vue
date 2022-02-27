<template>
  <div class="totalizer">
    <h2>{{ count }}</h2>
    <div class="totalizer__description">
      <span class="material-icons" v-text="icon" />
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
@import '~/styles/variables';

.totalizer {
  width: 150px;
  padding: 15px;
  margin: 0 20px 20px;
  border-radius: 10px;
  background: $blue-light;
  box-shadow: $shadow;

  h2 {
    font-weight: 600;
    font-size: 34px;
  }

  &__description {
    display: flex;
    align-items: center;
    margin-top: 8px;

    span {
      color: $white-light;
      padding-right: 5px;
    }
    h4 {
      color: $white-light;
    }
  }
}
</style>
