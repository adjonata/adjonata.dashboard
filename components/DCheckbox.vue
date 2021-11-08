<template>
  <div class="d-checkbox">
    <span>{{ label }}</span>
    <label :for="randomFor">
      <input :id="randomFor" v-model="innerValue" type="checkbox" />
      {{ innerValue ? 'Yes' : 'No' }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import randomNumber from '~/utils/randomNumber'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    randomFor: '',
    innerValue: false,
  }),
  watch: {
    innerValue(newValue) {
      this.$emit('input', newValue)
    },
  },
  created() {
    this.randomFor = 'checkbox_' + randomNumber(0, 10 * 4)
    this.innerValue = this.$props.value
  },
})
</script>

<style scoped lang="scss">
@import '~/styles/variables';

.d-checkbox {
  display: flex;
  flex-direction: column;
  padding: 15px 0;

  span {
    color: $white-dark;
    font-weight: 500;
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: $white-dark;
    margin-top: 10px;
    margin-left: 10px;

    input {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>
