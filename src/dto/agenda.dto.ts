import { ApiProperty } from '@nestjs/swagger';

export class Agenda {
  @ApiProperty({ example: '25796' })
  Id: string; //25796

  @ApiProperty({ example: 'name' })
  Name: string; //

  @ApiProperty({ example: 'D d/m/Y' })
  DateFormat: string; //D d/m/Y

  @ApiProperty({ example: 'H:i' })
  TimeFormat: string; //H:i

  @ApiProperty({ example: '5' })
  AlignGrid: string; //5

  @ApiProperty({ example: '1' })
  IsDefault: string; //1
}
