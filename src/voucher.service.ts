import { Injectable } from '@nestjs/common';
import { CreateVoucherDto } from './values/createVoucherDto';
import { VoucherRepository } from './voucher.repository';

@Injectable()
export class VoucherService {
  constructor(private readonly repository: VoucherRepository) {}
  getHelloVoucher(): string {
    return 'Make the voucher world great a gain!';
  }

  async create(dto: CreateVoucherDto): Promise<number[]> {
    const codes: number[] = [];

    for (let i = 1; i <= dto.number; i++) {
      const voucher = await this.repository.save(dto.value);
      codes.push(voucher.code);
    }
    return codes;
  }
}
