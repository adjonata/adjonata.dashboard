<script lang="ts">
import Vue from 'vue'
import sections from '@/utils/sections'

export default Vue.extend({
  data: () => ({
    sections,
  }),
  methods: {
    logout() {
      this.$store.dispatch('auth/handleLogout').then(() => {
        this.$router.push('/login')
      })
    },
  },
})
</script>

<template>
  <header class="header">
    <div class="header__logout">
      <div class="header__logout-button" @click="logout">
        <span class="material-icons">logout</span>
        <h4>Logout</h4>
      </div>
    </div>
    <div class="header__menu">
      <DSectionItem
        v-for="(section, sectionIndex) in sections"
        :key="'section_' + sectionIndex"
        :path="section.path"
        :icon="section.icon"
        :title="section.title"
        :color="section.color"
      />
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '~/styles/flex';

.header {
  @extend .flex-column-center;
  &__logout {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px;

    &-button {
      @extend .flex-row-center;
      padding: 5px 10px;

      span.material-icons {
        padding-right: 5px;
      }
    }
  }

  &__menu {
    @extend .flex-row-center;
  }
}
</style>
