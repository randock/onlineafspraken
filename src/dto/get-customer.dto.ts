import { ApiProperty } from '@nestjs/swagger';

export class GetCustomerDto {
  @ApiProperty({ example: 14180555 })
  id: number;
}
