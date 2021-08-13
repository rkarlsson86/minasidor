import { Controller, Get, Param } from '@nestjs/common'
import { SdkService } from './sdk.service'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('SDK')
@Controller()
export class SdkController {

  constructor(private readonly service: SdkService) {
  }

  @Get('getQrCode/:clientId')
  @ApiOperation({ description: 'Connect to Xact allet' })
  @ApiOkResponse()
  connect(@Param('clientId') clientId: string): Promise<string> {
    return this.service.getQrCode(clientId);
  }
}
