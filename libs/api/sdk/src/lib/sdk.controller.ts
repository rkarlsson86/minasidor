import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { SdkService } from './sdk.service'
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { NFTForSale, ScopeEnum, SellNFTDto } from '../../../../../../SDK/ts/packages/client'

@ApiTags('SDK')
@Controller()
export class SdkController {

  constructor(private readonly service: SdkService) {
  }

  @Get('getQrCode/:socketId')
  @ApiOperation({ description: 'Connect to Xact Wallet' })
  @ApiOkResponse()
  connect(@Param('socketId') socketId: string): Promise<string> {
    return this.service.getQrCode(socketId)
  }

  @Post('refresh')
  @ApiOperation({ description: 'Get NFTs' })
  @ApiOkResponse()
  listNFT(@Body() opts: { accountId: string, scope?: ScopeEnum[] }): Promise<string> {
    return this.service.refresh(opts)
  }


  @Post('sell-nft')
  @ApiBody({ type: SellNFTDto })
  @ApiOperation({ description: 'Sell a NFT' })
  @ApiOkResponse()
  sellNFT(@Body() opts: SellNFTDto): Promise<void> {
    return this.service.sellNFT(opts)
  }

  @Get('nft-for-sale')
  @ApiOperation({ description: 'Get NFT For Sale' })
  @ApiOkResponse()
  getNFTForSale(@Query('tokenId') tokenId: string): Promise<NFTForSale> {
    return this.service.getNFTForSale(tokenId)
  }


}
