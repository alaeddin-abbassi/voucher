import { Module } from '@nestjs/common';
import { VoucherController } from './voucherController';
import { VoucherRepository } from './voucher-repository.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Voucher, VoucherSchema } from './voucher.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    MongooseModule.forFeature([{ name: Voucher.name, schema: VoucherSchema }]),
  ],
  controllers: [VoucherController],
  providers: [VoucherRepository],
})
export class VoucherModule {}
