import Joi from 'joi';

export const productBodySchemas = {
  onCreateSchema: Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  }),
};

export const userBodySchemas = {
  onCreateSchema: Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().integer().min(1).required(),
    password: Joi.string().min(8).required(),
  }),

  onAuthenticateSchema: Joi.object({
    username: Joi.required(),
    password: Joi.required(),
  }),
};

export const orderSchemas = {
  onCreateSchema: Joi.array()
    .min(1)
    .items(Joi.number()
      .integer()
      .min(1))
    .required()
    .label('productsIds')
    .messages({ 'array.min': '"productsIds" must include only numbers' }),
};
