import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as helmet from 'fastify-helmet'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import compression from 'fastify-compress'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app/app.module'
import { AppConfig, appConfiguration } from '@xact-checkout/api/configuration'

async function bootstrap() {

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  const appConfig = app.get<AppConfig>(appConfiguration.KEY)

  await app.register(compression, { encodings: ['gzip', 'deflate'] })
  await app.register(helmet.fastifyHelmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  })
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await app.register(require('fastify-rate-limit'), {
    max: 100,
    timeWindow: '1 minute',
  })

  const globalPrefix = 'api'

  app.setGlobalPrefix(globalPrefix)

  const swaggerDocOptions = new DocumentBuilder()
    .setTitle('Xact Checkout API')
    .setDescription('API documentation for Xact Checkout')
    .setVersion('1.0.0')
    .addServer(`${appConfig.domain}`, 'Development API')
    .build()

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerDocOptions)

  SwaggerModule.setup('api/docs', app, swaggerDoc, {
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
    },
  })

  Logger.log(`Swagger Docs enabled: ${appConfig.domain}/${globalPrefix}/docs`, 'NestApplication')

  const port = appConfig.port || 3333

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
  })
}

bootstrap()
