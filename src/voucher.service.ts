import { Injectable } from '@nestjs/common';
import { CreateVoucherDto } from './values/createVoucherDto';

@Injectable()
export class VoucherService {
  getHelloVoucher(): string {
    return 'Make the voucher world great a gain!';
  }

  save(dto: CreateVoucherDto): string {
    return (dto.value + dto.number).toString();
  }
}
