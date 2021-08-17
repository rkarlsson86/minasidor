import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { SdkService } from './sdk.service'
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { SellNFTDto } from '@xact-wallet-sdk/client'

@ApiTags('SDK')
@Controller()
export class SdkController {

  constructor(private readonly service: SdkService) {
  }

  @Get('getQrCode/:socketId')
  @ApiOperation({ description: 'Connect to Xact Wallet' })
  @ApiOkResponse()
  connect(@Param('socketId') socketId: string): Promise<string> {
    return this.service.getQrCode(socketId);
  }


  @Post('sell-nft')
  @ApiBody({type: SellNFTDto})
  @ApiOperation({ description: 'Sell a NFT' })
  @ApiOkResponse()
  sellNFT(@Body() opts: SellNFTDto): Promise<void> {
    return this.service.sellNFT(opts);
  }
}
