<template>
  <article :class="['d-item', size]">
    <div class="d-item__infos">
      <div v-if="spotlight" class="d-item__infos-spotlight">
        <span class="material-icons"> star </span>
      </div>
      <img :src="image" :alt="title + '.png'" />
      <h3
        :class="{ link: !!link, spotlight }"
        @click="link ? openLink() : null"
      >
        <div :style="{ backgroundColor: color || null }" />
        {{ title }}
      </h3>
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

<style scoped lang="scss">
@import '~/styles/variables', '~/styles/flex';

.d-item {
  width: 250px;
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
      padding-bottom: 5px;
      color: $white-dark;
      @extend .flex-row-center;

      div {
        height: 23px;
        width: 23px;
        border-radius: 50%;
        margin-right: 6px;
      }
    }
    p {
      color: $white-dark;
      padding: 15px 0;
    }

    &-spotlight {
      margin-bottom: 15px;
      span {
        color: rgb(214, 224, 71);
      }
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
