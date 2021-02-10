import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GetFieldsQuery {
  @ApiProperty({ example: 25796 })
  AgendaId: number

  @ApiPropertyOptional({ example: 286853 })
  AppointmentTypeId: number
}
