import { ApiProperty } from '@nestjs/swagger';

export class GetTravelerQuery {
  @ApiProperty({
    example: 'fed9f376-6c54-11eb-9439-0242ac130002',
    description: 'Find by AccountNumber',
  })
  uuid: string
}
