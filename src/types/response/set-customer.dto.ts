import { ApiProperty } from '@nestjs/swagger';

export class SetCustomerDto{
  @ApiProperty({ example: 14249528 })
  Id: number

  @ApiProperty({ example: 1, enum: [1, 2, 3]})
  Status: number
}
