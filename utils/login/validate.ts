import Joi from 'joi'

export interface LoginForm {
  email: string
  password: string
}

export default function validateLogin(form: LoginForm) {
  const schema = Joi.object().keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().required().min(4).max(30),
  })

  return schema.validate(form)
}
