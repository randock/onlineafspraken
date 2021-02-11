import { ApiProperty } from '@nestjs/swagger';

export class CustomerDto {
  @ApiProperty({ example: 14180546 })
  Id: number;

  @ApiProperty({ example: 'NJT' })
  AccountNumber: string;

  @ApiProperty({ example: 'John' })
  FirstName: string;

  @ApiProperty({ example: 'Cobra' })
  LastName: string;

  @ApiProperty({ example: 'Antonio' })
  Insertions: string;

  @ApiProperty({ example: '1970-01-01' })
  BirthDate: string;

  @ApiProperty({ example: 'M', enum: ['M', 'F']})
  Gender: string;

  @ApiProperty({ example: 'Espinosa' })
  Street: string;

  @ApiProperty({ example: 8 })
  HouseNr: number;

  @ApiProperty({ example: '508' })
  HouseNrAddition: string;

  @ApiProperty({ example: '46008AZ' })
  ZipCode: string;

  @ApiProperty({ example: 'Valencia' })
  City: string;

  @ApiProperty({ example: 'NL' })
  Country: string;

  @ApiProperty({ example: '0622622622' })
  Phone: string;

  @ApiProperty({ example: '0622622622' })
  MobilePhone: string;

  @ApiProperty({ example: 'jop@randock.com' })
  Email: string;

  @ApiProperty({ example: 1, enum: [1, 2, 3]})
  Status: number;

  @ApiProperty({ example: '2021-02-08 14:41:38' })
  UpdateTime: string;

  @ApiProperty({ example: '2021-02-08 14:41:38' })
  CreateTime: string;
}
