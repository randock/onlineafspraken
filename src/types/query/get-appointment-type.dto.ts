import { ApiProperty } from '@nestjs/swagger';

export class GetAppointmentTypeDto {
  @ApiProperty({ example: 286853 })
  id: number;
}
