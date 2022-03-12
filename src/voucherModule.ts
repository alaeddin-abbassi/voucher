import { Module } from '@nestjs/common';
import { VoucherController } from './voucherController';

import { MongooseModule } from '@nestjs/mongoose';
import { Voucher, VoucherSchema } from './voucher.schema';
import { VoucherService } from './voucher.service';
import { VoucherRepository } from './voucher.repository';
const url = process.env.MONGO_URL || 'localhost';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://root:example@${url}:27017/nest?authSource=admin`,
    ),
    MongooseModule.forFeature([{ name: Voucher.name, schema: VoucherSchema }]),
  ],
  controllers: [VoucherController],
  providers: [VoucherService, VoucherRepository],
})
export class VoucherModule {}
