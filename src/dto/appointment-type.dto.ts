import { ApiProperty } from '@nestjs/swagger';

export class AppointmentType {
  @ApiProperty({ example: '286853' })
  Id: string;

  @ApiProperty({ example: 'PCR' })
  Name: string;

  @ApiProperty({ example: '' })
  Description: string;

  @ApiProperty({ example: '1' })
  Status: string;

  @ApiProperty({ example: 'resource' })
  SchedulingType: string;

  @ApiProperty({ example: '1' })
  PriceType: string;

  @ApiProperty({ example: '100.00' })
  Price: string;

  @ApiProperty({ example: '10' })
  Duration: string;

  @ApiProperty({ example: '1' })
  MinTimeBeforeAppointment: string;

  @ApiProperty({ example: '4320' })
  MaxTimeBeforeAppointment: string;

  @ApiProperty({ example: '0' })
  Buffer: string;

  @ApiProperty({ example: '1' })
  CanBeBookedByConsumer: string;

  @ApiProperty({ example: '' })
  ExplicitEndDate: string;

  @ApiProperty({ example: 'PCR' })
  Category: string;

  @ApiProperty({ example: '56057' })
  CategoryId: string;

  @ApiProperty({ example: '1' })
  Capacity: string;

  @ApiProperty({ example: '116711' })
  ResourceId: string;
}
