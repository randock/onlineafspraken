import { ApiProperty } from '@nestjs/swagger';

export class AppointmentTypeDto {
  @ApiProperty({ example: 286853 })
  Id: number;

  @ApiProperty({ example: 'PCR' })
  Name: string;

  @ApiProperty({ example: '', description: 'AppointmentType description' })
  Description: string;

  @ApiProperty({ example: 1, description: 'Not documented' })
  Status: number;

  @ApiProperty({ example: 'resource', enum: ['capacity','resource']})
  SchedulingType: string;

  @ApiProperty({
    example: 1,
    enum: [1, 2, 3],
    description: '1: fixed price 2: from price, 3: not applicable',
  })
  PriceType: number;

  @ApiProperty({ example: '100.00' })
  Price: number;

  @ApiProperty({ example: 10, description: 'Duration of the appointment, in minutes.' })
  Duration: number;

  @ApiProperty({ example: 1, description: 'Mimimum time before appointment, in minutes' })
  MinTimeBeforeAppointment: number;

  @ApiProperty({ example: 100, description: 'Maximum time before appointment, in minutes' })
  MaxTimeBeforeAppointment: number;

  @ApiProperty({ example: 0, description: 'Buffertime which is reserved after the appointment, in minutes. The total time for the appointment is Duration plus the Buffer.' })
  Buffer: number;

  @ApiProperty({ example: 1, enum: [1,2], description: 'Signals if this appointment type can be booked by consumer. 1: bookable, 2: not bookable' })
  CanBeBookedByConsumer: number;

  @ApiProperty({ description: 'Not documented' })
  ExplicitEndDate: string;

  @ApiProperty({ example: 'PCR', description: 'Category name' })
  Category: string;

  @ApiProperty({ example: 56057, description: 'Id of the category linked to this appointmentType' })
  CategoryId: number;

  @ApiProperty({ example: 1 })
  Capacity: number;

  @ApiProperty({ example: 116711, description: 'Not documented' })
  ResourceId: number;
}
