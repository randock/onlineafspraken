import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SetAppointmentQuery {
  @ApiProperty({ example: 25796, description: 'Id of the agenda.' })
  AgendaId: number;

  @ApiProperty({ example: 14180555, description: 'Id of the customer.' })
  CustomerId: number;

  @ApiProperty({ example: 286853, description: 'Id of the appointmentType.' })
  AppointmentTypeId: number;

  @ApiPropertyOptional({
    example: 116711,
    description:
      'Id of the selected resource. If this parameter is not used the backend will autoselect an available resource.',
  })
  ResourceId: number;

  @ApiProperty({ example: '2021-03-11', description: 'YYYY-MM-DD	Date of the appointment' })
  Date: string;

  @ApiProperty({ example: '10:00', description: 'HH:MM	Start time of the appointment' })
  StartTime: string;

  @ApiProperty({ example: '11:00', description: 'HH:MM	End time of the appointment' })
  EndTime: string;

  @ApiProperty({ example: 'Customer name', description: 'Name' })
  Name: number;

  @ApiProperty({ example: 'PCR test + certificate', description: 'Description' })
  Description: string;
}
