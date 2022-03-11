import { Module } from '@nestjs/common';
import { VoucherController } from './voucherController';

import { MongooseModule } from '@nestjs/mongoose';
import { Voucher, VoucherSchema } from './voucher.schema';
import { VoucherService } from './voucher.service';
import { VoucherRepository } from './voucher.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    MongooseModule.forFeature([{ name: Voucher.name, schema: VoucherSchema }]),
  ],
  controllers: [VoucherController],
  providers: [VoucherService, VoucherRepository],
})
export class VoucherModule {}
