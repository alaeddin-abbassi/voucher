import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateVoucherDto {
  @ApiProperty({
    description: 'number of vouchers to create',
    required: true,
  })
  @IsNotEmpty()
  @Expose()
  number: number;

  @ApiProperty({
    description: 'value of created vouchers',
    required: true,
  })
  @IsNotEmpty()
  @Expose()
  value: number;
}
