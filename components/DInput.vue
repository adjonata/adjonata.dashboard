<template>
  <label class="d-input">
    {{ label }}
    <input
      :value="value"
      :type="type"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DInput',
  props: {
    label: {
      type: String,
      required: true,
      default: 'Input',
    },
    type: {
      type: String,
      required: true,
      default: 'text',
    },
    value: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/styles/variables';

.d-input {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin: 5px 0;
  text-align: left !important;
  color: $white-dark;

  input {
    margin-top: 4px;
    background: $black-light-2;
  }
}
</style>
