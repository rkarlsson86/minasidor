import { Injectable, Scope } from '@nestjs/common'
import { Client } from '@xact-wallet-sdk/client'
import { AppConfig } from '@xact-checkout/api/configuration'
import { InjectAppConfig } from '@xact-checkout/api/config'
import { EventEmitter2 } from '@nestjs/event-emitter'

@Injectable({
  scope: Scope.DEFAULT,
})
export class SdkService {

  constructor(@InjectAppConfig() readonly appConfig: AppConfig,
              private readonly eventEmitter: EventEmitter2) {
  }

  async getQrCode(clientId: string): Promise<string> {
    const client = new Client({ apiKey: this.appConfig.sdkApi })
    await client.initConnexion()
    const qrCode = await client.generateQRCode()
    client.connect().subscribe(user => {
      console.log('user', user, clientId)
      this.eventEmitter.emit('app.auth', user, clientId)
    })
    return qrCode
  }


}
