import { Injectable } from '@nestjs/common';
import { CreateVoucherDto } from './values/createVoucherDto';
import { Voucher } from './voucher.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VoucherService {
  constructor(
    @InjectModel(Voucher.name) private voucherModel: Model<Voucher>,
  ) {}

  getHelloVoucher(): string {
    return 'Make the voucher world great a gain!';
  }

  async save(dto: CreateVoucherDto): Promise<Voucher> {
    const newVoucher = await new this.voucherModel(dto);
    return await newVoucher.save();
  }
}
