import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Voucher extends Document {
  //TODO make unique
  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  value: number;
}

export const VoucherSchema = SchemaFactory.createForClass(Voucher);
