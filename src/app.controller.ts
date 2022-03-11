import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateVoucherDto } from './values/CreateVoucherDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloVoucher(): string {
    return this.appService.getHelloVoucher();
  }

  @Post()
  create(
    @Body()
    createVoucherDto: CreateVoucherDto,
  ): string {
    return (createVoucherDto.value + createVoucherDto.number).toString();
  }
}
