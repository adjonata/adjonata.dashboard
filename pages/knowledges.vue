<template>
  <div class="knowledges">
    <div class="knowledges__list">
      <KnowledgeItem
        v-for="i in 7"
        :key="i"
        image="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png"
        title="Node.js"
        link="https://nodejs.org/en/"
      />
    </div>

    <div class="knowledges__bottom">
      <button class="submit">
        <span class="material-icons">add</span>
        <h4>New</h4>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  middleware: ['auth'],
  computed: {
    ...mapGetters('informations', ['knowledges']),
  },
})
</script>

<style lang="scss">
@import '~/styles/flex', '~/styles/variables';

.knowledges {
  @extend .flex-column-center;
  padding: 40px 0;

  &__list {
    width: 800px;
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    .knowledge-item {
      margin: 15px;
    }
  }

  &__bottom {
    width: 800px;
    max-width: 90%;
    margin-top: 30px;

    @extend .flex-row-center;

    button {
      width: 130px;
      background-color: $grey-dark;
    }
  }
}
</style>
