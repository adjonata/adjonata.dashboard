<template>
  <div class="home">
    <HomeAboutItem
      :about="about.description || ''"
      @edit="showAboutModal = true"
    />

    <div class="home__count">
      <HomeTotalizer
        title="Knowledges"
        icon="account_balance"
        :count="knowledges.length"
      />
      <HomeTotalizer title="Projects" icon="build" :count="projects.length" />
      <HomeTotalizer title="Social" icon="public" :count="social.length" />
    </div>

    <!-- MODALS -->
    <DModal
      :active="showAboutModal"
      width="700px"
      title="About form"
      @close="showAboutModal = false"
    >
      <FormAbout
        :initial-value="{ description: about.description }"
        @save="updateAbout"
      />
    </DModal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { AboutForm } from '~/utils/about/validate'

export default Vue.extend({
  middleware: ['auth', 'syncInformations'],
  data: () => ({ showAboutModal: false }),
  head: () => ({
    title: 'Dashboard - Home',
  }),
  computed: {
    ...mapGetters('informations', [
      'about',
      'knowledges',
      'projects',
      'social',
    ]),
  },
  methods: {
    async updateAbout(body: AboutForm) {
      await this.$api.about.update(body).then((response) => {
        this.$store.dispatch('informations/updateInformation', {
          key: 'about',
          value: response,
        })
        this.showAboutModal = false
      })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/styles/flex.scss';

.home {
  @extend .flex-column-center;
  padding: 40px 0;

  &__count {
    margin: 40px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
