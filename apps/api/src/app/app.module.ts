import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ApiConfigModule } from '@xact-checkout/api/config';
import { ApiSdkModule } from '@xact-checkout/api/sdk';
import { RouterModule } from 'nest-router'
import { routes } from '../routes'
import { EventEmitterModule } from '@nestjs/event-emitter'

@Module({
  imports: [
    ApiConfigModule,
    EventEmitterModule.forRoot(),
    ApiSdkModule,
    RouterModule.forRoutes(routes),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
