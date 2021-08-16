import { Injectable } from '@nestjs/common'
import { Client, ScopeEnum } from '../../../../../../SDK/ts/packages/client'
import { AppConfig } from '@xact-checkout/api/configuration'
import { InjectAppConfig } from '@xact-checkout/api/config'
import { EventEmitter2 } from '@nestjs/event-emitter'

@Injectable()
export class SdkService {
  client

  constructor(@InjectAppConfig() readonly appConfig: AppConfig,
              private readonly eventEmitter: EventEmitter2) {
  }

  async initClient() {
    this.client = new Client({ apiKey: this.appConfig.sdkApi })
    await this.client.initConnexion();
    console.log(this.client.clientId);
  }

  async getQrCode(socketId: string): Promise<string> {
    if (!this.client) {
      await this.initClient()
    }
    const qrCode = await this.client.generateQRCode({
      socketId,
      scope: [ScopeEnum.PROFILE, ScopeEnum.NFT]
    });
    /* Listen for Auth Connexion */
    this.listenForAuth();
    return qrCode;
  }

  listenForAuth(){
    this.client.connect().subscribe(user => {
      this.eventEmitter.emit('xactCheckout.auth', user)
    })
  }


}
