<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    about: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div class="about-item">
    <span class="material-icons about-item__icon">person</span>

    <div class="about-item__content">
      <p>{{ about ? about : '- Without about me' }}</p>
    </div>

    <button class="small about-item__edit" @click="$emit('edit')">
      <span class="material-icons">edit</span>
    </button>
  </div>
</template>

<style lang="scss">
@import '~/styles/variables';

.about-item {
  width: 900px;
  max-width: 90%;
  padding: 30px;
  border-radius: 5px;
  background: $black-light;
  box-shadow: $shadow;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &__icon {
    color: $grey-dark;
  }

  &__edit {
    span.material-icons {
      color: $blue-light;
    }
  }

  &__content {
    p {
      padding: 0 30px;
      letter-spacing: 0.6px;
      line-height: 25px;
      font-size: 14px;
      white-space: pre-wrap;
      color: $white-dark;
    }
  }
  @media (max-width: $mobile) {
    padding: 30px 15px;
    flex-direction: column;

    &__content {
      margin: 15px 0;
    }
  }
}
</style>
