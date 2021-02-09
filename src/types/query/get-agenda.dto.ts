import { ApiProperty } from '@nestjs/swagger';

export class GetAgendaDto {
  @ApiProperty({ example: 25796 })
  id: number;
}
