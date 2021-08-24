import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { validationSchema, appConfiguration } from '@xact-checkout/api/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [appConfiguration],
      validationSchema,
    }),
  ],
})
export class ApiConfigModule {}
