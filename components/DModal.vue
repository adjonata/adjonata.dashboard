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

<style lang="scss">
@import '~/styles/variables', '~/styles/flex';

.modal {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 20px 0 40px;
  min-height: 100%;
  overflow-y: auto;

  @extend .flex-row-center;

  &__content {
    max-width: 90%;
    min-height: 200px;
    max-height: auto;
    display: flex;
    flex-direction: column;
    background: $black-light;
    box-shadow: $shadow;
    border-radius: 5px;
    overflow-y: auto;

    &-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: solid 1px $black-dark;

      & > span {
        font-weight: 500;
        font-size: 20px;
        color: $white-dark;
      }

      button {
        span.material-icons {
          color: $white-dark;
        }
      }
    }

    &-body {
      padding: 15px;
    }
  }
}
</style>
