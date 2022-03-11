import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloVoucher(): string {
    return 'Make the voucher world great a gain!';
  }
}
