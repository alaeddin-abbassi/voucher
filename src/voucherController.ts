import { Body, Controller, Get, Post } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { CreateVoucherDto } from './values/createVoucherDto';

@Controller()
export class VoucherController {
  constructor(private readonly appService: VoucherService) {}

  @Get()
  getHelloVoucher(): string {
    return this.appService.getHelloVoucher();
  }

  @Post()
  create(
    @Body()
    createVoucherDto: CreateVoucherDto,
  ): string {
    return this.appService.save(createVoucherDto);
  }
}
