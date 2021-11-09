<script lang="ts">
import Vue from 'vue'
import ValidateSocial from '@/utils/social/validate'

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
      image: '',
      link: '',
    },
  }),
  created() {
    this.fillForm()
  },
  methods: {
    submit() {
      const { error: validationError } = ValidateSocial(this.form)

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
          this.form[key] = this.initialValue[key]
        }
      }
    },
  },
})
</script>

<template>
  <form class="social-form form" @submit.prevent="submit">
    <DInput v-model="form.title" label="Title" type="text" />
    <DInput v-model="form.image" label="Image link" type="text" />
    <DInput v-model="form.link" label="Site link" type="text" />
    <button class="submit">Save</button>
  </form>
</template>

<style lang="scss"></style>
