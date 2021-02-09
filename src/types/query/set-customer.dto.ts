import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SetCustomerDto {
  // @ApiPropertyOptional({
  //   example: '17dadced-635e-466d-b41f-f8044bd04956',
  //   description:
  //     'If an id is supplied, an existing customer is modified. If not, a new customer is created.',
  // })
  // id: number;

  @ApiProperty({ description: 'Email address', example: 'germen@randock.com' })
  Email: string;

  @ApiProperty({ description: 'First name', example: 'Bruce' })
  FirstName: string;

  @ApiProperty({ description: 'Last name', example: 'Willis' })
  LastName: string;

  @ApiPropertyOptional({ description: 'Name insertions', example: 'Mr' })
  Insertions: string;

  @ApiPropertyOptional({ description: 'Date of birth   FORMAT: YYYY-MM-DD', example: '1955-03-15' })
  BirthDate: string;

  @ApiPropertyOptional({ description: 'Gender', enum: { M: 'male', F: 'female' }, example: 'M' })
  Gender: string;

  @ApiPropertyOptional({ description: 'Street', example: 'Century Park East' })
  Street: string;

  @ApiPropertyOptional({ description: 'House number', example: 18 })
  HouseNr: number;

  @ApiPropertyOptional({ description: 'House number addition', example: 'Floor' })
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
    enum: { 1: 'enabled', 2: 'disabled', 3: 'deleted' },
  })
  Status: string;

  // @ApiProperty({ description: 'Username of the account that the customer can use to login to their account. User account can only be created for new customers. For existing customers this parameter is ignored. If you don\'t want to create a user account leave this parameter empty.' })
  // Username: string
  //
  //
  // @ApiProperty({ description: 'STRING	The password of the user account. The password has to be at least 6 characters long. This parameter is required if you use the Username parameter to create a new user account.   ' })
  // Password: string

  // [variabel]
  // STRING	Possible extra field as retrieved by getFields. Use the Key of the field as the name of the paraneter.
}