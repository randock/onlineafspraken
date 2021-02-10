import { ApiProperty } from '@nestjs/swagger';

export class RemoveAppointmentQuery {
  @ApiProperty({ example: 80063105 })
  id: number;
}
