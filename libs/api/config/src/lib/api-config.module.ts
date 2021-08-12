import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { appConfiguration, authConfiguration, validationSchema } from '@provefa/api/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [appConfiguration, authConfiguration],
      validationSchema,
    }),
  ],
})
export class ApiConfigModule {}
