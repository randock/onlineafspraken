import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiProperty({ example: 'Geen vrij tijdslot voor afspraak.' })
  error: string;
}
