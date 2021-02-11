import { ApiProperty } from '@nestjs/swagger';

export class AgendaDto {
  @ApiProperty({ example: 25796 })
  Id: number;

  @ApiProperty({ example: 'name' })
  Name: string;

  @ApiProperty({ example: 'D d/m/Y' })
  DateFormat: string;

  @ApiProperty({ example: 'H:i' })
  TimeFormat: string;

  @ApiProperty({ example: 5 })
  AlignGrid: number;

  @ApiProperty({ example: 1 })
  IsDefault: number;
}
