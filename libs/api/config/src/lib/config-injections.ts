import { Inject } from '@nestjs/common'
import {
  appConfiguration,
  authConfiguration,
} from '@provefa/api/configurations'

export const InjectAppConfig = () => Inject(appConfiguration.KEY)
export const InjectAuthConfig = () => Inject(authConfiguration.KEY)
