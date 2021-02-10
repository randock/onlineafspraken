import { ApiProperty } from '@nestjs/swagger';

export class SetAppointmentDto {
  @ApiProperty({ example: '25796' })
  Id: string; //25796

  @ApiProperty({ example: '2' })
  Status: string; //
}
