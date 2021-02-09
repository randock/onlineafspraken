import { ApiProperty } from '@nestjs/swagger';

export class GetResourceDto {
  @ApiProperty({ example: 116711 })
  id: number;
}
