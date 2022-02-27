<template>
  <header class="header">
    <div class="header__logout">
      <div class="header__logout-button" @click="logout">
        <span class="material-icons">logout</span>
        <h4>Logout</h4>
      </div>
    </div>
    <div class="header__menu">
      <HeaderSectionItem
        v-for="(section, sectionIndex) in sections"
        :key="'section_' + sectionIndex"
        :path="section.path"
        :icon="section.icon"
        :title="section.title"
      />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import sections from '@/utils/sections'

export default Vue.extend({
  data: () => ({
    sections,
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('auth/handleLogout')
      await this.$store.dispatch('informations/setLoaded', false)
      this.$router.push('/login')
    },
  },
})
</script>

<style scoped lang="scss">
@import '~/styles/flex', '~/styles/variables';

.header {
  @extend .flex-column-center;
  &__logout {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    color: $grey-light;

    &-button {
      @extend .flex-row-center;
      cursor: pointer;
      padding: 5px 10px;

      span.material-icons {
        padding-right: 5px;
      }
    }
  }

  &__menu {
    @extend .flex-row-center;
    flex-wrap: wrap;

    @media (max-width: $mobile) {
      padding: 0 15px;
    }
  }
}
</style>
