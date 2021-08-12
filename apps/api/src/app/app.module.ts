import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiConfigModule } from '@xact-checkout/api/config';

@Module({
  imports: [
    ApiConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
