import { ApiProperty } from '@nestjs/swagger';

export class SetCustomerDto{
  @ApiProperty()
  Id: number

  @ApiProperty({ enum: { 1: 'enabled', 2: 'disabled', 3: 'deleted' } })
  Status: string
}