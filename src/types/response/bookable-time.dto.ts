import { ApiProperty } from '@nestjs/swagger';

export class BookableTimeDto {

  @ApiProperty({ example: '2021-02-11' })
  Date: string

  @ApiProperty({ example: '09:00' })
  StartTime: string

  @ApiProperty({ example: '09:00' })
  LabelTime: string

  @ApiProperty({ example: '09:10' })
  EndTime: string

  @ApiProperty({ example: '1613030400' })
  Timestamp: string

  @ApiProperty({ example: '286853' })
  AppointmentTypeId: string

  @ApiProperty({ example: '116717' })
  ResourceId: string
}
