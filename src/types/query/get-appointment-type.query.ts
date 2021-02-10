import { ApiProperty } from '@nestjs/swagger';

export class GetAppointmentTypeQuery {
  @ApiProperty({ example: 286853 })
  id: number;
}
