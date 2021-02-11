import { ApiProperty } from '@nestjs/swagger';

export class FieldDto {
  @ApiProperty({ example: 24830 })
  Id: number;

  @ApiProperty({ example: 'Klachten' })
  Label: string;

  @ApiProperty({ example: 'Klachten' })
  Key: string;

  @ApiProperty({ example: 'Appointment', enum: ['Appointment', 'Registration']})
  Type: string;

  @ApiProperty({ example: 1, enum: [1, 0]})
  Required: number;
}
