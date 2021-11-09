<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  middleware: ['auth'],
  data: () => ({
    modalForm: {
      value: null as null | Social,
      show: false,
    },
  }),
  head: () => ({
    title: 'Dashboard - Socials',
  }),
  computed: {
    ...mapGetters('informations', ['social']),
  },
  methods: {
    openFormToCreate() {
      this.modalForm.value = null
      this.modalForm.show = true
    },
    openFormToEdit(value: Social) {
      this.modalForm.value = value
      this.modalForm.show = true
    },

    async createSocial(value: Social) {
      await this.$api.social.create(value).then((response) => {
        this.$store.dispatch('informations/updateInformation', {
          key: 'social',
          value: [...this.social, response],
        })
      })
    },

    async updateSocial(form: Social) {
      if (!this.modalForm.value || !this.modalForm.value._id) return

      const _id = this.modalForm.value._id

      await this.$api.social.update(form, _id).then(() => {
        const updatedSocials = this.social.map((social: Social) =>
          social._id === _id ? { _id, ...form } : social
        )

        this.$store.dispatch('informations/updateInformation', {
          key: 'social',
          value: updatedSocials,
        })
      })
    },

    async deleteSocial(_id: string) {
      await this.$confirm().then(async () => {
        await this.$api.social.delete(_id).then(() => {
          const updatedSocials = this.social.filter(
            (social: Social) => social._id !== _id
          )

          this.$store.dispatch('informations/updateInformation', {
            key: 'social',
            value: updatedSocials,
          })
        })
      })
    },
  },
})
</script>

<template>
  <div class="socials">
    <DList>
      <DItem
        v-for="(item, index) in social"
        :key="'social_' + index"
        :title="item.title"
        :image="item.image"
        :link="item.link"
        @edit="openFormToEdit(item)"
        @delete="deleteSocial(item._id)"
      />
    </DList>

    <div class="socials__bottom">
      <button class="submit" @click="openFormToCreate">
        <span class="material-icons">add</span>
        <h4>New</h4>
      </button>
    </div>

    <!-- MODAL -->
    <DModal
      :active="modalForm.show"
      width="700px"
      title="Social form"
      @close="modalForm.show = false"
    >
      <FormSocial
        :initial-value="modalForm.value || {}"
        @save="createSocial"
        @update="updateSocial"
        @close="modalForm.show = false"
      />
    </DModal>
  </div>
</template>

<style lang="scss">
@import '~/styles/flex', '~/styles/variables';

.socials {
  @extend .flex-column-center;
  padding: 40px 0;

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
