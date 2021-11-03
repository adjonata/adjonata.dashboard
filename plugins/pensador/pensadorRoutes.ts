import { NuxtAxiosInstance } from '@nuxtjs/axios'
import randomNumber from '@/utils/randomNumber'

type PensadorFrase = {
  autor: string
  texto: string
}

interface PensadorResponse {
  termoDePesquisa: string
  total: number
  frases: PensadorFrase[]
}

export interface Phrase {
  text: string
  author: string
}

const philosophers: string[] = [
  'Aristóteles',
  'Platão',
  'Nietzsche',
  'Wittgenstein',
  'Descartes',
  'Hegel',
  'Kant',
  'Sócrates',
  'Confúcio',
  'Montesquieu',
]

const pensadorURL = 'https://pensador-api.vercel.app'

export default ($axios: NuxtAxiosInstance) => {
  return {
    async getPhrase() {
      const thinker = philosophers[randomNumber(0, philosophers.length - 1)]

      const phrase = await $axios
        .$get<PensadorResponse>(pensadorURL, {
          params: {
            term: thinker,
            max: 50,
          },
        })
        .then((data) => {
          if (data.frases.length) {
            const { autor, texto } =
              data.frases[randomNumber(0, data.frases.length - 1)]

            return { author: autor, text: texto } as Phrase
          }
          return null
        })
        .catch(() => null)

      return phrase
    },
  }
}
