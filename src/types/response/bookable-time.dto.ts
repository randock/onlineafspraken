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

  @ApiProperty({ example: 1613030400 })
  Timestamp: number

  @ApiProperty({ example: 286853 })
  AppointmentTypeId: number

  @ApiProperty({ example: 116717 })
  ResourceId: number
}
