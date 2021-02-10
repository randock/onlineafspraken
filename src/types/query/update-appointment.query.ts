import { ApiProperty } from '@nestjs/swagger';
import { SetAppointmentQuery } from './set-appointment.query';

export class UpdateAppointmentQuery extends SetAppointmentQuery {
  @ApiProperty({ example: 80063105 })
  id: number;
}
