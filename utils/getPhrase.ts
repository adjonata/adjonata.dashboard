import { NuxtAxiosInstance } from '@nuxtjs/axios'
import randomNumber from './randomNumber'

type PensadorFrase = {
  autor: string
  texto: string
}

interface PensadorResponse {
  termoDePesquisa: string
  total: number
  frases: PensadorFrase[]
}

const thinkers: string[] = [
  'PLATÃO',
  'RENÉ DESCARTES',
  'GEORG HEGEL',
  'SÃO TOMÁS DE AQUINO',
  'LUDWIG WITTGENSTEIN',
  'DAVID HUME',
  'SANTO AGOSTINHO',
  'FRIEDRICH NIETZSCHE',
]

export default async function GetPhrases(
  $axios: NuxtAxiosInstance
): Promise<string | null> {
  const thinker = thinkers[randomNumber(0, thinkers.length - 1)]

  const phrase = await $axios
    .$get<PensadorResponse>('https://pensador-api.vercel.app/', {
      params: {
        term: thinker,
        max: 50,
      },
    })
    .then((data) =>
      data.frases.length
        ? data.frases[randomNumber(0, data.frases.length - 1)].texto
        : null
    )
    .catch(() => null)

  return phrase
}
