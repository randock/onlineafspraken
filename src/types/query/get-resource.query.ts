import { ApiProperty } from '@nestjs/swagger';

export class GetResourceQuery {
  @ApiProperty({ example: 116711 })
  id: number;
}
