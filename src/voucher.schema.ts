import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Voucher extends Document {
  @Prop({ required: true, unique: true, length: 8 })
  code: number;
  @Prop({ required: true })
  value: number;
}

export const VoucherSchema = SchemaFactory.createForClass(Voucher);
