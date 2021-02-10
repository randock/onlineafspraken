import { ApiProperty } from '@nestjs/swagger';

export class GetAgendaQuery {
  @ApiProperty({ example: 25796 })
  id: number;
}
