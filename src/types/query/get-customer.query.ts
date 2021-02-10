import { ApiProperty } from '@nestjs/swagger';

export class GetCustomerQuery {
  @ApiProperty({ example: 14180555 })
  id: number;
}
