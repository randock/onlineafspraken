import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GetBookableDaysDto{
  @ApiProperty({ example: 25796 })
  AgendaId: number

  @ApiProperty({ example: 286853 })
  AppointmentTypeId: number

  @ApiPropertyOptional({ example: 116711 })
  ResourceId?: number

  @ApiProperty({ example: '2021-03-11' })
  StartDate?: string

  @ApiProperty({ example: '2021-03-15' })
  EndDate?: string
}
