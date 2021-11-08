import Joi from 'joi'

export interface ProjectForm {
  title: string
  description: string
  link: string
  image: string
  spotlight: boolean
  color: string
}

export default function validateProject(form: ProjectForm) {
  const schema = Joi.object().keys({
    title: Joi.string().required().min(4).max(30),
    description: Joi.string().required().min(4).max(300),
    image: Joi.string().required().uri(),
    link: Joi.string().required().uri(),
    spotlight: Joi.boolean().required(),
    color: Joi.string().required(),
  })

  return schema.validate(form)
}
