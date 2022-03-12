import { Injectable } from '@nestjs/common';
import { Voucher } from './voucher.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VoucherRepository {
  constructor(
    @InjectModel(Voucher.name) private voucherModel: Model<Voucher>,
  ) {}

  async save(number: number): Promise<Voucher> {
    const newVoucher = await new this.voucherModel({
      code: Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000),
      value: number,
    });
    return await newVoucher.save();
  }

  async findAll(): Promise<Voucher[]> {
    return await this.voucherModel
      .find()
      .select({ code: 1, value: 1, _id: 0 })
      .exec();
  }

  async update(code: number, value: number) {
    const filter = { code: code };
    const update = { value: value };
    const newVoucher = await this.voucherModel.findOneAndUpdate(
      filter,
      update,
      {
        new: true,
      },
    );
    return { code: newVoucher.code, value: newVoucher.value };
  }
}
