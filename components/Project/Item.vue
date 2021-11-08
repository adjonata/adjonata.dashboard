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
      required: true,
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
      required: true,
    },
    color: {
      type: String,
      required: true,
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
  <article class="project-item" :style="{ borderColor: color }">
    <div class="project-item__infos">
      <img :src="image" :alt="title + '.png'" />
      <h3
        :class="{ link: !!link, spotlight }"
        @click="link ? openLink() : null"
        v-text="title"
      />
      <p v-text="description" />
    </div>
    <div class="project-item__actions">
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

.project-item {
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: $shadow;
  background: $black-light;

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
