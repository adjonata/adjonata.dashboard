<template>
  <div :class="['section-item', { selected }]" @click="$router.push(path)">
    <span class="material-icons" v-text="icon" />
    <h4 v-text="title" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    selected() {
      const atualPath = this.$route.path
      return atualPath === this.path
    },
  },
})
</script>

<style scoped lang="scss">
@import '~/styles/variables', '~/styles/flex';

.section-item {
  @extend .flex-row-center;

  height: 50px;
  margin: 0 15px;
  cursor: pointer;

  h4 {
    font-weight: 300;
    letter-spacing: 1.3px;
    font-size: 16px;
  }

  span {
    font-size: 25px;
    padding-right: 6px;
    color: $grey-blue-dark;
  }

  &.selected {
    span {
      color: $blue-dark;
    }
  }
}
</style>
