import { Body, Controller, Get, Post } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { CreateVoucherDto } from './values/createVoucherDto';
import { Voucher } from './voucher.schema';

@Controller()
export class VoucherController {
  constructor(private readonly appService: VoucherService) {}

  @Get()
  getHelloVoucher(): string {
    return this.appService.getHelloVoucher();
  }

  @Post()
  async create(
    @Body()
    createVoucherDto: CreateVoucherDto,
  ): Promise<Voucher> {
    return await this.appService.save(createVoucherDto);
  }
}
