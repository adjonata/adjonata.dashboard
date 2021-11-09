<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  middleware: ['auth'],
  data: () => ({
    modalForm: {
      value: null as null | Knowledge,
      show: false,
    },
  }),
  head: () => ({
    title: 'Dashboard - Knowledges',
  }),
  computed: {
    ...mapGetters('informations', ['knowledges']),
  },
  methods: {
    openFormToCreate() {
      this.modalForm.value = null
      this.modalForm.show = true
    },
    openFormToEdit(value: Knowledge) {
      this.modalForm.value = value
      this.modalForm.show = true
    },

    async createKnowledge(value: Knowledge) {
      await this.$api.knowledge.create(value).then((response) => {
        this.$store.dispatch('informations/updateInformation', {
          key: 'knowledges',
          value: [...this.knowledges, response],
        })
      })
    },

    async updateKnowledge(form: Knowledge) {
      if (!this.modalForm.value || !this.modalForm.value._id) return

      const _id = this.modalForm.value._id

      await this.$api.knowledge.update(form, _id).then(() => {
        const updatedKnowledges = this.knowledges.map((knowledge: Knowledge) =>
          knowledge._id === _id ? { _id, ...form } : knowledge
        )

        this.$store.dispatch('informations/updateInformation', {
          key: 'knowledges',
          value: updatedKnowledges,
        })
      })
    },

    async deleteKnowledge(_id: string) {
      await this.$confirm().then(async () => {
        await this.$api.knowledge.delete(_id).then(() => {
          const updatedKnowledges = this.knowledges.filter(
            (knowledge: Knowledge) => knowledge._id !== _id
          )

          this.$store.dispatch('informations/updateInformation', {
            key: 'knowledges',
            value: updatedKnowledges,
          })
        })
      })
    },
  },
})
</script>

<template>
  <div class="knowledges">
    <DList>
      <DItem
        v-for="(knowledge, index) in knowledges"
        :key="'knowledge_' + index"
        :title="knowledge.title"
        :image="knowledge.image"
        :link="knowledge.link"
        @edit="openFormToEdit(knowledge)"
        @delete="deleteKnowledge(knowledge._id)"
      />
    </DList>

    <div class="knowledges__bottom">
      <button class="submit" @click="openFormToCreate">
        <span class="material-icons">add</span>
        <h4>New</h4>
      </button>
    </div>

    <!-- MODAL -->
    <DModal
      :active="modalForm.show"
      width="700px"
      title="Knowledge form"
      @close="modalForm.show = false"
    >
      <FormKnowledge
        :initial-value="modalForm.value || {}"
        @save="createKnowledge"
        @update="updateKnowledge"
        @close="modalForm.show = false"
      />
    </DModal>
  </div>
</template>

<style lang="scss">
@import '~/styles/flex', '~/styles/variables';

.knowledges {
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
