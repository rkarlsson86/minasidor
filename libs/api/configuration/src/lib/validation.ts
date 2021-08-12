import * as Joi from '@hapi/joi'

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default("development"),
  APP_HOST: Joi.string().alphanum().default('localhost'),
  APP_PORT: Joi.number().default(8080),
  APP_DOMAIN: Joi.string().default('http://localhost:8080'),
  JWT_SECRET: Joi.string().default('Thisis@Mysuper@Secret!'),
  JWT_EXPIRED: Joi.string().default('7d'),
  DATABASE_URL: Joi.string().default('mysql://reminderDB:reminderDB@localhost:3307/reminderDB?schema=public'),
})
