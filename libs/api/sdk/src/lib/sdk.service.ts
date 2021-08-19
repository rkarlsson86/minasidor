import { Injectable } from '@nestjs/common'
import { AppConfig } from '@xact-checkout/api/configuration'
import { InjectAppConfig } from '@xact-checkout/api/config'
import { EventEmitter2 } from '@nestjs/event-emitter'
import { Client, NFTForSale, RefreshAccountDTO, ScopeEnum, SellNFTDto } from '../../../../../../SDK/ts/packages/client'

@Injectable()
export class SdkService {
  client

  constructor(@InjectAppConfig() readonly appConfig: AppConfig,
              private readonly eventEmitter: EventEmitter2) {
  }

  /* Init Client */
  async initClient() {
    this.client = new Client({ apiKey: this.appConfig.sdkApi })
    await this.client.initConnexion()
    /* Listen for Auth Connexion */
    this.listenForAuth()
    /* Listen for Sell */
    this.listenForSell()
  }

  /* Get QR Code */
  async getQrCode(socketId: string): Promise<string> {
    if (!this.client) {
      await this.initClient()
    }
    const qrCode = await this.client.generateQRCode({
      socketId,
      scope: [ScopeEnum.PROFILE, ScopeEnum.NFT],
    })
    return qrCode
  }

  /* Listen for new Auth */
  listenForAuth() {
    this.client.connect().subscribe(user => {
      this.eventEmitter.emit('xactCheckout.auth', user)
    })
  }

  /* Sell a NFT */
  async sellNFT(opts: SellNFTDto): Promise<void> {
    if (!this.client) {
      await this.initClient()
    }
    return this.client.sellNFT(opts)
  }

  /* Listen for new Sell */
  listenForSell() {
    this.client.sellNFTValidation().subscribe(nft => {
      this.eventEmitter.emit('xactCheckout.sell', nft)
    })
  }

  /* Refresh User's Account */
  async refresh(opts: RefreshAccountDTO) {
    if (!this.client) {
      await this.initClient()
    }
    return this.client.refreshAccount(opts)
  }

  async getNFTForSale(tokenId: string): Promise<NFTForSale>{
    if (!this.client) {
      await this.initClient()
    }
    return this.client.getNFTForSale({ tokenId })
  }


}
