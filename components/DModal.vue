<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '500px',
    },
  },
})
</script>

<template>
  <div v-if="active" class="modal">
    <div class="modal__content" :style="{ width }">
      <div class="modal__content-header">
        <span v-text="title" />
        <button class="small" @click="$emit('close')">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="modal__content-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/styles/variables', '~/styles/flex';

.modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  min-height: 100vh;
  overflow: auto;

  @extend .flex-row-center;

  &__content {
    max-width: 90%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    background: $white-light;

    &-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: solid 1px $white-dark;

      & > span {
        font-weight: 500;
        font-size: 20px;
      }
    }

    &-body {
      padding: 15px;
    }
  }
}
</style>
