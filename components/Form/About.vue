<template>
  <form class="about-form form" @submit.prevent="submit">
    <DTextarea v-model="form.description" label="Description" />
    <button class="submit">Save</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import ValidateAbout from '@/utils/about/validate'

export default Vue.extend({
  props: {
    initialValue: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    form: {
      description: '',
    },
  }),
  created() {
    if (this.initialValue?.description) {
      this.form.description = this.initialValue.description
    }
  },
  methods: {
    submit() {
      const { error: validationError } = ValidateAbout(this.form)

      if (validationError) {
        return this.$swal.fire({
          icon: 'error',
          title: validationError.name,
          text: validationError.message,
        })
      }

      this.$swal
        .fire({
          title: 'Confirm?',
          text: 'A new version will replace the old one.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Yes',
          cancelButtonColor: '#d33',
          cancelButtonText: 'No',
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$emit('save', this.form)
          }
        })
    },
  },
})
</script>

<style lang="scss">
.about-form {
  textarea {
    height: 200px;
  }
}
</style>
