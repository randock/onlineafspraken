import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GetBookableTimesDto {
  @ApiProperty({ example: 25796 })
  AgendaId: number;

  @ApiProperty({ example: '2021-02-11' })
  Date: string;

  @ApiProperty({ example: 286853 })
  AppointmentTypeId: number;

  @ApiPropertyOptional({ example: 116711 })
  ResourceId?: number;

  @ApiPropertyOptional({ example: '10:00', description: 'does not work' })
  StartTime?: string;

  @ApiPropertyOptional({ example: '14:00', description: 'does not work' })
  EndTime?: string;
}
