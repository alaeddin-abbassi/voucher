import { Module } from '@nestjs/common';
import { VoucherController } from './voucherController';
import { VoucherService } from './voucher.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [VoucherController],
  providers: [VoucherService],
})
export class VoucherModule {}
