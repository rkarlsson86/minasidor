import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiConfigModule } from '@xact-checkout/api/config';
import { RouterModule } from 'nest-router'
import { routes } from '../routes'

@Module({
  imports: [
    ApiConfigModule,
    RouterModule.forRoutes(routes),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
