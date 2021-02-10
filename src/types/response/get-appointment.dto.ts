import { ApiProperty } from '@nestjs/swagger';

export class GetAppointmentDto {
  @ApiProperty({ example: '25796' })
  Id: string;

  @ApiProperty({ example: 'Name' })
  Name: string;

  @ApiProperty({ example: 'Description' })
  Description: string;

  @ApiProperty({ example: 'Start time of the appointment. FORMAT: YYYY-MM-DD HH:MM:SS' })
  StartTime: string;

  @ApiProperty({ example: 'End time of the appointment. FORMAT: YYYY-MM-DD HH:MM:SS' })
  FinishTime: string;

  @ApiProperty({
    example: 'End time of the appointment including buffertime. FORMAT: YYYY-MM-DD HH:MM:SS',
  })
  BlockedTime: string;

  @ApiProperty({ example: 'Id of the appointmentType' })
  AppointmentTypeId: string;

  @ApiProperty({ example: 'Id of the customer' })
  CustomerId: string;

  @ApiProperty({ example: 'Full name of the customer (if applicable)' })
  CustomerName: string;

  @ApiProperty({
    example: 'Status of the appointment. Possible values 1-enabled: 2-disabled 3-deleted',
    enum: {
      1: 'enabled',
      2: 'disabled',
      3: 'deleted',
    },
  })
  Status: string;

  @ApiProperty({
    example:
      'Label of the appointment. Possible values: 1 pending2 approved3 finished4 cancelled5 in progress',
  })
  Label: string;

  @ApiProperty({ example: 'List of resources linked to the appointment.' })
  Resources: string;
}
