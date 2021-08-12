import { ConfigType, registerAs } from '@nestjs/config';

export const appConfiguration = registerAs('app', () => ({
  host: process.env.APP_HOST,
  port: process.env.APP_PORT,
  domain: process.env.APP_DOMAIN,
  env: process.env.NODE_ENV
}));

export type AppConfig = ConfigType<typeof appConfiguration>
