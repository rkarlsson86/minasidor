import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ApiConfigModule } from '@xact-checkout/api/config';
import { RouterModule } from 'nest-router'
import { routes } from '../routes'

@Module({
  imports: [
    ApiConfigModule,
    RouterModule.forRoutes(routes),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
