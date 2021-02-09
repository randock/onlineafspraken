import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty({ example: '14180546' })
  Id: string;

  @ApiProperty({ example: 'NJT' })
  AccountNumber: string;

  @ApiProperty({ example: 'x' })
  FirstName: string;

  @ApiProperty({ example: 'peters' })
  LastName: string;

  @ApiProperty({ example: 'Jopete' })
  Insertions: string;

  @ApiProperty({ example: '1970-01-01' })
  BirthDate: string;

  @ApiProperty({ example: 'M', enum: ['M', 'F']})
  Gender: string;

  @ApiProperty({ example: 'Espinosa' })
  Street: string;

  @ApiProperty({ example: '8' })
  HouseNr: string;

  @ApiProperty({ example: '508' })
  HouseNrAddition: string;

  @ApiProperty({ example: '46008' })
  ZipCode: string;

  @ApiProperty({ example: 'Valencia' })
  City: string;

  @ApiProperty({ example: 'Nederland' })
  Country: string;

  @ApiProperty({ example: '0622622622' })
  Phone: string;

  @ApiProperty({ example: '0622622622' })
  MobilePhone: string;

  @ApiProperty({ example: 'jop@randock.com' })
  Email: string;

  @ApiProperty({ example: '1', enum: ['1', '2', '3']})
  Status: string;

  @ApiProperty({ example: '2021-02-08 14:41:38' })
  UpdateTime: string;

  @ApiProperty({ example: '2021-02-08 14:41:38' })
  CreateTime: string;
}
