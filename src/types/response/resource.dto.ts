import { ApiProperty } from '@nestjs/swagger';

export class ResourceDto {

  @ApiProperty({ example: '116711' })
  Id: string;

  @ApiProperty({ example: 'Locatie A' })
  Name: string;

  @ApiProperty({ example: '' })
  Code: string;

  @ApiProperty({ example: '' })
  Description: string;

  @ApiProperty({ example: '' })
  Phone: string;

  @ApiProperty({ example: '' })
  MobilePhone: string;

  @ApiProperty({ example: '' })
  Email: string;

  @ApiProperty({ example: '1' })
  Status: string;

  @ApiProperty({ example: '' })
  Label: string;
}
