import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GetFieldsDto {
  @ApiProperty({ example: 25796 })
  AgendaId: number

  @ApiPropertyOptional({ example: 286853 })
  AppointmentTypeId: number
}
