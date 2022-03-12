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
  ApiOkResponse,
} from '@nestjs/swagger';
import { Voucher } from './voucher.schema';
import { GetVoucherDto } from './values/GetVoucherDto';

@Controller('voucher')
export class VoucherController {
  constructor(private readonly service: VoucherService) {}

  @Get('/hello')
  getHelloVoucher(): string {
    return this.service.getHelloVoucher();
  }

  @Post()
  @ApiCreatedResponse({
    type: [Number],
    description: 'created voucher codes',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
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

  @ApiOkResponse({
    description: 'voucher retrieved successfully',
    type: [GetVoucherDto],
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: InternalServerErrorException,
  })
  @Get('/list')
  list(): Promise<Voucher[] | void> {
    return this.service
      .list()
      .then((result) => result)
      .catch((error) => {
        throw new InternalServerErrorException(
          `can not create vouchers because: ${error.message}`,
        );
      });
  }
}
