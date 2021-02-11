import { ApiProperty } from '@nestjs/swagger';

export class SetAppointmentDto {
  @ApiProperty({ example: 25796 })
  Id: number

  @ApiProperty({
    example: 2,
    enum: [1, 2, 3],
    description: 'Status of the appointment. Possible values 1-enabled: 2-disabled 3-deleted',
  })
  Status: number
}
