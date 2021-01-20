import * as Joi from 'joi';

export const registerSchema = Joi.object({
  userEmail: Joi.string().required(),
  userName: Joi.string().required(),
  userPwd: Joi.string().required()
})

export const loginSchema = Joi.object({
  userEmail: Joi.string().required(),
  userPwd: Joi.string().required()
})