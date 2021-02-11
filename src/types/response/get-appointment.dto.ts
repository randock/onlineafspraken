import { ApiProperty } from '@nestjs/swagger';
import { ResourceDto } from './resource.dto';

export class GetAppointmentDto {
  @ApiProperty({ example: 80062772 })
  Id: number;

  @ApiProperty({ description: 'Name' })
  Name: string;

  @ApiProperty({ description: 'Description' })
  Description: string;

  @ApiProperty({ description: 'Start time of the appointment. FORMAT: YYYY-MM-DD HH:MM:SS' })
  StartTime: string;

  @ApiProperty({ description: 'End time of the appointment. FORMAT: YYYY-MM-DD HH:MM:SS' })
  FinishTime: string;

  @ApiProperty({
    description: 'End time of the appointment including buffertime. FORMAT: YYYY-MM-DD HH:MM:SS',
  })
  BlockedTime: string;

  @ApiProperty({ example: 286853 })
  AppointmentTypeId: number;

  @ApiProperty({ example: 14180555 })
  CustomerId: number;

  @ApiProperty({ description: 'Full name of the customer (if applicable)', example: 'Bruce Willis' })
  CustomerName: string;

  @ApiProperty({
    example: 1,
    enum: [1, 2, 3],
    description: 'Status of the appointment. Possible values 1-enabled: 2-disabled 3-deleted',
  })
  Status: string;

  @ApiProperty({
    description:
      'Label of the appointment. Possible values: 1 pending2 approved3 finished4 cancelled5 in progress',
    example: 2,
  })
  Label: number;

  @ApiProperty({
    description: 'List of resources linked to the appointment.',
    example: {
        'Id': 116711,
        'StartTime': '2021-03-11 12:00:00',
        'FinishTime': '2021-03-11 12:10:00',
      },
  })
  Resources: ResourceDto | ResourceDto[];

  @ApiProperty({ example: '2021-02-10 10:34:50' })
  CreateTime: string

  @ApiProperty({ example: '2021-02-10 10:34:50' })
  UpdateTime: string
}
