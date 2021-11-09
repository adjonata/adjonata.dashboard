import { Plugin } from '@nuxt/types'

type ConfirmPlugin = () => Promise<any>

declare module 'vue/types/vue' {
  interface Vue {
    $confirm: ConfirmPlugin
  }
}

// Inject type in Nuxt
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $confirm: ConfirmPlugin
  }
  interface Context {
    $confirm: ConfirmPlugin
  }
}

const confirmPlugin: Plugin = (context, inject) => {
  const { $swal } = context.app

  inject('confirm', () => {
    return new Promise((resolve) => {
      $swal
        .fire({
          title: 'Confirm?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Yes',
          cancelButtonColor: '#d33',
          cancelButtonText: 'No',
        })
        .then((result: any) => {
          if (result.isConfirmed) {
            resolve(true)
          }
        })
    })
  })
}

export default confirmPlugin
