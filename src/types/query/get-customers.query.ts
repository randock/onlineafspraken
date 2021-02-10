import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetCustomersQuery {
  @ApiPropertyOptional({ description: 'INTEGER	Query limit of customers to retrieve in one call. By default a maximum of 500 customers are returned.' })
  Limit: string

  @ApiPropertyOptional({ description: 'INTEGER	Query offset of which customers to retrieve.' })
  Offset: string

  @ApiPropertyOptional({ description: 'DATE	Only retrieve customers with an modify date after this value FORMAT: YYYY-MM-DD HH:MM:SS If this parameter is used also deleted customers are returned. These customers only retrieve Id and Status. If this parameter is not used, all customers are returned.' })
  UpdatedAfter: string

  @ApiPropertyOptional({ description: 'STRING	If used, only customers with this email address are returned.' })
  Email: string

  @ApiPropertyOptional({ description: 'DATE	If used, only customers with this date of birth are returned. FORMAT: YYYY-MM-DD' })
  BirthDate: string

  @ApiPropertyOptional({ example: 'NJT', description: 'STRING	If used, only customers with this account number are returned.' })
  AccountNumber: string
  
}
