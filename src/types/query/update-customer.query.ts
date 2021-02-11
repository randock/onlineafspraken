import { ApiProperty } from '@nestjs/swagger';
import { SetCustomerQuery } from './set-customer.query';

export class UpdateCustomerQuery extends SetCustomerQuery {
  @ApiProperty({
    example: 14180555,
    description:
      'If an id is supplied, an existing customer is modified. If not, a new customer is created.',
  })
  id: number;

}
