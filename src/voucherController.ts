import { Body, Controller, Get, Post } from '@nestjs/common';
import { VoucherRepository } from './voucher-repository.service';
import { CreateVoucherDto } from './values/createVoucherDto';

@Controller()
export class VoucherController {
  constructor(private readonly repository: VoucherRepository) {}

  @Get()
  getHelloVoucher(): string {
    return this.repository.getHelloVoucher();
  }

  @Post()
  async create(
    @Body()
    createVoucherDto: CreateVoucherDto,
  ): Promise<number[]> {
    const codes: number[] = [];
    for (let i = 1; i <= createVoucherDto.number; i++) {
      const voucher = await this.repository.save(createVoucherDto.value);
      codes.push(voucher.code);
    }
    return codes;
  }
}
