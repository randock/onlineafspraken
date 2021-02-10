import { ApiProperty } from '@nestjs/swagger';

export class GetAppointmentQuery {
  @ApiProperty({ example: 80063105 })
  id: number;
}
