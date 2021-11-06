<template>
  <div class="knowledges">
    <div class="knowledges__list">
      <KnowledgeItem
        v-for="(knowledge, index) in knowledges"
        :key="'knowledge_' + index"
        :title="knowledge.title"
        :image="knowledge.image"
        :link="knowledge.link"
        @edit="openFormToEdit(knowledge)"
      />
    </div>

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
      />
    </DModal>
  </div>
</template>

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

    async updateKnowledge(value: Knowledge) {
      if (!this.modalForm.value || !this.modalForm.value._id) return

      await this.$api.knowledge
        .update(value, this.modalForm.value._id)
        .then(({ data }) => {
          const updatedKnowledges = this.knowledges.map(
            (knowledge: Knowledge) => {
              if (knowledge._id === data._id) {
                return data
              } else {
                return knowledge
              }
            }
          )

          this.$store.dispatch('informations/updateInformation', {
            key: 'knowledges',
            value: updatedKnowledges,
          })
        })
    },
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
