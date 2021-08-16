import { Controller, Get, Param } from '@nestjs/common'
import { SdkService } from './sdk.service'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

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
}
