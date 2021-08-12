import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as helmet from 'fastify-helmet'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import compression from 'fastify-compress'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
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
    .addServer(`${process.env.domain}`, 'Development API')
    .addBearerAuth({
      name: 'Authorization',
      in: 'header',
      type: 'apiKey'
    })
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerDocOptions);
  SwaggerModule.setup('api/docs', app, swaggerDoc, {
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true
    }
  });
  Logger.log(`Swagger Docs enabled: ${process.env.domain}/${globalPrefix}/docs`, 'NestApplication')
  const port = process.env.PORT || 3333
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
  })
}

bootstrap()
