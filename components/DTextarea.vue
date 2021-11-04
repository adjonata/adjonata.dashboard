<template>
  <label class="d-textarea">
    {{ label ? label : null }}
    <textarea
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DTextarea',
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.d-textarea {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin: 5px 0;
  text-align: left !important;

  textarea {
    width: 100%;
    margin-top: 4px;
    padding: 10px;
    resize: vertical;
  }
}
</style>
