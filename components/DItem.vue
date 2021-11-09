<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    link: {
      type: String,
      required: false,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
    spotlight: {
      type: Boolean,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
    size: {
      type: String,
      required: false,
      default: 'small',
    },
  },
  methods: {
    openLink() {
      window.open(this.link, '_blank')
    },
  },
})
</script>

<template>
  <article
    :class="['d-item', size]"
    :style="{ borderColor: color ? color : null }"
  >
    <div class="d-item__infos">
      <img :src="image" :alt="title + '.png'" />
      <h3
        :class="{ link: !!link, spotlight }"
        @click="link ? openLink() : null"
        v-text="title"
      />
      <p v-if="description" v-text="description" />
    </div>
    <div class="d-item__actions">
      <button class="small" @click="$emit('edit')">
        <span class="material-icons">edit</span>
      </button>
      <button class="small" @click="$emit('delete')">
        <span class="material-icons">delete</span>
      </button>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '~/styles/variables', '~/styles/flex';

.d-item {
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: $shadow;
  background: $black-light;
  border: solid 2px transparent;

  &__infos {
    @extend .flex-column-center;
    text-align: center;
    padding: 5px 0;

    img {
      width: 100px;
    }
    h3 {
      font-weight: 500;
      margin: 15px 0 5px 0;
      color: $white-dark;
    }
    p {
      color: $white-dark;
      padding: 15px 0;
    }
  }

  &__actions {
    @extend .flex-row-center;

    button {
      &:nth-child(1) {
        span {
          color: $blue-light;
        }
      }
      &:nth-child(2) {
        span {
          color: $grey-light;
        }
      }
    }
  }
}
</style>
