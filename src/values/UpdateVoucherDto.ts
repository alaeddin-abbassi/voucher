import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class UpdateVoucherDto {
  @ApiProperty({
    description: 'value of voucher to update',
    required: true,
  })
  @IsNotEmpty()
  @IsPositive()
  value: number;
}
