import { ApiProperty } from '@nestjs/swagger';

export class BookableDay {
  
  @ApiProperty({ example: '2021-02-12' })
  Date: string

  @ApiProperty({ example: '02' })
  Month: string

  @ApiProperty({ example: '12' })
  Day: string
}
