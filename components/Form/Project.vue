<script lang="ts">
import Vue from 'vue'
import ValidateProject from '@/utils/project/validate'

export default Vue.extend({
  props: {
    initialValue: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data: () => ({
    form: {
      title: '',
      description: '',
      link: '',
      image: '',
      spotlight: false,
      color: '',
    },
  }),
  created() {
    this.fillForm()
  },
  methods: {
    submit() {
      const { error: validationError } = ValidateProject(this.form)

      if (validationError) {
        return this.$swal.fire({
          icon: 'error',
          title: validationError.name,
          text: validationError.message,
        })
      }

      if (this.initialValue?._id) {
        this.$emit('update', this.form)
      } else {
        this.$emit('save', this.form)
      }

      this.$emit('close')
    },

    fillForm() {
      const form = this.form
      const formKeys = Object.keys(form) as Array<keyof typeof form>

      for (const key of formKeys) {
        if (key in this.initialValue) {
          if (key === 'spotlight') {
            form[key] = Boolean(this.initialValue[key])
          } else {
            form[key] = this.initialValue[key]
          }
        }
      }
    },
  },
})
</script>

<template>
  <form class="project-form form" @submit.prevent="submit">
    <DInput v-model="form.title" label="Title" type="text" />
    <DTextarea v-model="form.description" label="Description" type="text" />
    <DInput v-model="form.image" label="Image link" type="text" />
    <DInput v-model="form.link" label="Site link" type="text" />
    <DInput v-model="form.color" label="Color" type="color" />
    <DCheckbox v-model="form.spotlight" label="Spotlight" />
    <button class="submit">Save</button>
  </form>
</template>

<style lang="scss">
.project-form {
  textarea {
    height: 150px;
  }
}
</style>
