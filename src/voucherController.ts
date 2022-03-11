import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { CreateVoucherDto } from './values/createVoucherDto';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

@Controller('voucher')
export class VoucherController {
  constructor(private readonly service: VoucherService) {}

  @Get()
  getHelloVoucher(): string {
    return this.service.getHelloVoucher();
  }

  @Post()
  @ApiCreatedResponse({
    type: [Number],
    description: 'created codes',
  })
  @ApiInternalServerErrorResponse({
    description: 'unprocessable entity',
    type: InternalServerErrorException,
  })
  async create(
    @Body()
    createVoucherDto: CreateVoucherDto,
  ): Promise<number[]> {
    return await this.service
      .create(createVoucherDto)
      .then((result) => result)
      .catch((error) => {
        throw new InternalServerErrorException(
          `can not create vouchers because: ${error.message}`,
        );
      });
  }
}
