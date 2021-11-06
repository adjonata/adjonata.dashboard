import Joi from 'joi'

export interface KnowledgeForm {
  title: string
  image: string
  link?: string
}

export default function validateKnowledge(form: KnowledgeForm) {
  const schema = Joi.object().keys({
    title: Joi.string().required().min(4).max(30),
    image: Joi.string().required().uri(),
    link: Joi.string().required().uri(),
  })

  return schema.validate(form)
}
