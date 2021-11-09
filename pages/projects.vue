<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  middleware: ['auth'],
  data: () => ({
    modalForm: {
      value: null as null | Project,
      show: false,
    },
  }),
  head: () => ({
    title: 'Dashboard - Projects',
  }),
  computed: {
    ...mapGetters('informations', ['projects']),
  },
  methods: {
    openFormToCreate() {
      this.modalForm.value = null
      this.modalForm.show = true
    },
    openFormToEdit(value: Project) {
      this.modalForm.value = value
      this.modalForm.show = true
    },

    async createProject(value: Project) {
      await this.$api.project.create(value).then((response) => {
        this.$store.dispatch('informations/updateInformation', {
          key: 'projects',
          value: [...this.projects, response],
        })
      })
    },

    async updateProject(form: Project) {
      if (!this.modalForm.value || !this.modalForm.value._id) return

      const _id = this.modalForm.value._id

      await this.$api.project.update(form, _id).then(() => {
        const updatedProjects = this.projects.map((project: Project) =>
          project._id === _id ? { _id, ...form } : project
        )

        this.$store.dispatch('informations/updateInformation', {
          key: 'projects',
          value: updatedProjects,
        })
      })
    },

    async deleteProject(_id: string) {
      await this.$confirm().then(async () => {
        await this.$api.project.delete(_id).then(() => {
          const updatedProjects = this.projects.filter(
            (project: Project) => project._id !== _id
          )

          this.$store.dispatch('informations/updateInformation', {
            key: 'projects',
            value: updatedProjects,
          })
        })
      })
    },
  },
})
</script>

<template>
  <div class="projects">
    <div class="projects__list">
      <ProjectItem
        v-for="(project, index) in projects"
        :key="'project_' + index"
        :title="project.title"
        :image="project.image"
        :link="project.link"
        :color="project.color"
        :spotlight="project.spotlight"
        :description="project.description"
        @edit="openFormToEdit(project)"
        @delete="deleteProject(project._id)"
      />
    </div>

    <div class="projects__bottom">
      <button class="submit" @click="openFormToCreate">
        <span class="material-icons">add</span>
        <h4>New</h4>
      </button>
    </div>

    <!-- MODAL -->
    <DModal
      :active="modalForm.show"
      width="700px"
      title="Project form"
      @close="modalForm.show = false"
    >
      <FormProject
        :initial-value="modalForm.value || {}"
        @save="createProject"
        @update="updateProject"
        @close="modalForm.show = false"
      />
    </DModal>
  </div>
</template>

<style lang="scss">
@import '~/styles/flex', '~/styles/variables';

.projects {
  @extend .flex-column-center;
  padding: 40px 0;

  &__list {
    width: 800px;
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    .project-item {
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
