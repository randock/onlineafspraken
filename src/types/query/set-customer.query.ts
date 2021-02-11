import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SetCustomerQuery {
  @ApiProperty({ description: 'Email address', example: 'german@randock.com' })
  Email: string;

  @ApiProperty({ description: 'First name', example: 'Bruce' })
  FirstName: string;

  @ApiProperty({ description: 'Last name', example: 'Willis' })
  LastName: string;

  @ApiPropertyOptional({ description: 'Middle Name', example: 'Antonio' })
  Insertions: string;

  @ApiPropertyOptional({ description: 'Date of birth   FORMAT: YYYY-MM-DD', example: '1955-03-15' })
  BirthDate: string;

  @ApiPropertyOptional({ description: 'Gender', enum: { M: 'male', F: 'female' }, example: 'M' })
  Gender: string;

  @ApiPropertyOptional({ description: 'Street', example: 'Century Park East' })
  Street: string;

  @ApiPropertyOptional({ description: 'House number', example: 18 })
  HouseNr: number;

  @ApiPropertyOptional({ description: 'House number addition', example: 'A' })
  HouseNrAddition: string;

  @ApiPropertyOptional({ description: 'Zipcode', example: '90067' })
  ZipCode: string;

  @ApiPropertyOptional({ description: 'City', example: 'Los Angeles' })
  City: string;

  @ApiPropertyOptional({ description: 'Country', example: 'NL' })
  Country: string;

  @ApiPropertyOptional({
    example: '0633633633',
    description: 'Phone number. If this field is not empty it has to be valid.',
  })
  Phone: string;

  @ApiPropertyOptional({
    example: '0622622622',
    description: 'Mobile phone number. If this field is not empty it has to be valid.',
  })
  MobilePhone: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'Status of the customer',
    enum: [1, 2, 3],
  })
  Status: number;

  @ApiProperty({ description: 'Traveler uuid without', example: 'fed9f376-6c54-11eb-9439-0242ac130002' })
  AccountNumber: string;
}
