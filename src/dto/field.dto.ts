import { ApiProperty } from '@nestjs/swagger';

export class Field {
  @ApiProperty({ example: '24830' })
  Id: string;

  @ApiProperty({ example: 'Klachten' })
  Label: string;

  @ApiProperty({ example: 'Klachten' })
  Key: string;

  @ApiProperty({ example: 'Appointment', enum: ['Appointment', 'Registration']})
  Type: string;

  @ApiProperty({ example: '1' })
  Required: string;
}
