import Joi from 'joi'

export interface AboutForm {
  description: string
}

export default function validateAbout(form: AboutForm) {
  const schema = Joi.object().keys({
    description: Joi.string().required().min(4)
  })

  return schema.validate(form)
}
