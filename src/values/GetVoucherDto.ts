import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class GetVoucherDto {
  @ApiProperty({
    description: 'Code of voucher',
    required: true,
  })
  @IsNotEmpty()
  @IsPositive()
  code: number;

  @ApiProperty({
    description: 'value of created vouchers',
    required: true,
  })
  @IsNotEmpty()
  @IsPositive()
  value: number;

  constructor(partial: Partial<GetVoucherDto>) {
    Object.assign(this, partial);
  }
}
