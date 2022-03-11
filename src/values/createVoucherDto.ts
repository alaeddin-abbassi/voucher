import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateVoucherDto {
  @ApiProperty({
    description: 'number of vouchers to create',
    required: true,
  })
  @IsNotEmpty()
  @IsPositive()
  number: number;

  @ApiProperty({
    description: 'value of created vouchers',
    required: true,
  })
  @IsNotEmpty()
  @IsPositive()
  value: number;
}
