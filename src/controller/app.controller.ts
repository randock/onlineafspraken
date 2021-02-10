import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from '../service/app.service';
import { GetBookableDaysQuery } from '../types/query/get-bookable-days.query';
import { GetBookableTimesQuery } from '../types/query/get-bookable-times.query';
import { GetFieldsQuery } from '../types/query/get-fields.query';
import { AgendaDto } from '../types/response/agenda.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppointmentTypeDto } from '../types/response/appointment-type.dto';
import { ResourceDto } from '../types/response/resource.dto';
import { FieldDto } from '../types/response/field.dto';
import { CustomerDto } from '../types/response/customer.dto';
import { BookableDayDto } from '../types/response/bookable-day.dto';
import { BookableTimeDto } from '../types/response/bookable-time.dto';
import { GetAgendaQuery } from '../types/query/get-agenda.query';
import { GetAppointmentTypeQuery } from '../types/query/get-appointment-type.query';
import { GetResourceQuery } from '../types/query/get-resource.query';
import { GetCustomerQuery } from '../types/query/get-customer.query';
import { ResponseTransformer } from '../service/response-transformer.service';
import { SetCustomerQuery } from '../types/query/set-customer.query';
import { SetCustomerDto } from '../types/response/set-customer.dto';
import { UpdateCustomerQuery } from '../types/query/update-customer.query';
import { GetCustomersQuery } from '../types/query/get-customers.query';
import { SetAppointmentQuery } from '../types/query/set-appointment.query';
import { SetAppointmentDto } from '../types/response/set-appointment.dto';
import { ErrorResponseDto } from '../types/response/error-response.dto';
import { GetAppointmentQuery } from '../types/query/get-appointment.query';
import { GetAppointmentDto } from '../types/response/get-appointment.dto';
// import { UpdateAppointmentQuery } from '../types/query/update-appointment.query';
import { RemoveAppointmentQuery } from '../types/query/remove-appointment.query';

@ApiBearerAuth()
@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly responseTransformer: ResponseTransformer,
  ) {}

  @Get('getAgendas')
  @ApiOperation({ summary: 'Gets Agendas' })
  @ApiResponse({ status: 200, type: [AgendaDto]})
  async getAgendas(): Promise<Array<AgendaDto>> {
    const xml = await this.appService.query('getAgendas');

    return this.responseTransformer.transform<AgendaDto[]>(xml, ['Objects', 'Agenda'], true);
  }

  @Get('getAgenda')
  @ApiOperation({ summary: 'Get Agenda by Id' })
  @ApiResponse({ status: 200, type: AgendaDto })
  async getAgenda(@Query() params: GetAgendaQuery): Promise<AgendaDto> {
    const xml = await this.appService.query('getAgenda', { ...params });

    return this.responseTransformer.transform<AgendaDto>(xml, ['Agenda']);
  }

  @Get('getAppointmentTypes')
  @ApiOperation({ summary: 'Get Appointment Types' })
  @ApiResponse({ status: 200, type: [AppointmentTypeDto]})
  async getAppointmentTypes(): Promise<Array<AppointmentTypeDto>> {
    const xml = await this.appService.query('getAppointmentTypes', {});

    return this.responseTransformer.transform<AppointmentTypeDto[]>(
      xml,
      ['Objects', 'AppointmentType'],
      true,
    );
  }

  @Get('getAppointmentType')
  @ApiOperation({ summary: 'Gets an Appointment Type by Id' })
  @ApiResponse({ status: 200, type: AppointmentTypeDto })
  async getAppointmentType(@Query() params: GetAppointmentTypeQuery): Promise<AppointmentTypeDto> {
    const xml = await this.appService.query('getAppointmentType', { ...params });

    return this.responseTransformer.transform<AppointmentTypeDto>(xml, [
      'Objects',
      'AppointmentType',
    ]);
  }

  @Get('getResources')
  @ApiOperation({ summary: 'Get Resources' })
  @ApiResponse({ status: 200, type: [ResourceDto]})
  async getResources(): Promise<Array<ResourceDto>> {
    const xml = await this.appService.query('getResources');

    return this.responseTransformer.transform<ResourceDto[]>(xml, ['Objects', 'Resource'], true);
  }

  @Get('getResource')
  @ApiOperation({ summary: 'Get Resource by Id' })
  @ApiResponse({ status: 200, type: ResourceDto })
  async getResource(@Query() params: GetResourceQuery): Promise<ResourceDto> {
    const xml = await this.appService.query('getResource', { ...params });

    return this.responseTransformer.transform<ResourceDto>(xml, ['Resource']);
  }

  @Get('getFields')
  @ApiOperation({ summary: 'Get extra fields required or not for customer or appointment creation' })
  @ApiResponse({ status: 200, type: [FieldDto]})
  async getFields(@Query() params: GetFieldsQuery): Promise<Array<FieldDto>> {
    const xml = await this.appService.query('getFields', {
      ...params,
    });

    return this.responseTransformer.transform<FieldDto[]>(xml, ['Objects', 'Field'], true);
  }

  @Get('getCustomers')
  @ApiOperation({ summary: 'Get Customers //@TODO filter by AccountNumber' })
  @ApiResponse({ status: 200, type: [CustomerDto]})
  async getCustomers(@Query() params: GetCustomersQuery): Promise<Array<CustomerDto>> {
    const xml = await this.appService.query('getCustomers', {
      ...params,
      // AccountNumber: 'NJT',
    });

    return this.responseTransformer.transform<CustomerDto[]>(xml, ['Objects', 'Customer'], true);
  }

  @Get('getCustomer')
  @ApiOperation({ summary: 'Gets a customer by Id' })
  @ApiResponse({ status: 200, type: CustomerDto })
  async getCustomer(@Query() params: GetCustomerQuery): Promise<CustomerDto> {
    const xml = await this.appService.query('getCustomer', { ...params });

    return this.responseTransformer.transform<CustomerDto>(xml, ['Customer']);
  }

  @Get('getBookableDays')
  @ApiOperation({ summary: 'Gets a Bookable days' })
  @ApiResponse({ status: 200, type: [BookableDayDto]})
  async getBookableDays(@Query() params: GetBookableDaysQuery): Promise<Array<BookableDayDto>> {
    const xml = await this.appService.query('getBookableDays', {
      ...params,
    });

    return this.responseTransformer.transform<BookableDayDto[]>(
      xml,
      ['Objects', 'BookableDay'],
      true,
    );
  }

  @Get('getBookableTimes')
  @ApiOperation({ summary: 'Gets Bookable Times for a day' })
  @ApiResponse({ status: 200, type: [BookableTimeDto]})
  async getBookableTimes(@Query() params: GetBookableTimesQuery): Promise<Array<BookableTimeDto>> {
    const xml = await this.appService.query('getBookableTimes', {
      ...params,
    });

    return this.responseTransformer.transform<BookableTimeDto[]>(
      xml,
      ['Objects', 'BookableTime'],
      true,
    );
  }

  @Post('setCustomer')
  @ApiOperation({ summary: 'Stores a customer' })
  @ApiResponse({ status: 201, type: SetCustomerDto })
  @ApiResponse({ status: 400, type: ErrorResponseDto })
  async setCustomer(@Body() params: SetCustomerQuery): Promise<SetCustomerDto> {

    const xml = await this.appService.query('setCustomer', {
      ...params,
      // AccountNumber: 'NJT',
    });

    return this.responseTransformer.transform<SetCustomerDto>(
      xml,
      [],
    );
  }

  @Put('updateCustomer')
  @ApiOperation({ summary: 'Updates a customer' })
  @ApiResponse({ status: 200, type: SetCustomerDto })
  async updateCustomer(@Body() params: UpdateCustomerQuery): Promise<SetCustomerDto> {

    const xml = await this.appService.query('setCustomer', {
      ...params,
      // AccountNumber: 'NJT',
    });

    return this.responseTransformer.transform<SetCustomerDto>(
      xml,
      [],
    );
  }

  @Post('setAppointment')
  @ApiOperation({ summary: 'Creates an appointment' })
  @ApiResponse({ status: 201, type: SetAppointmentDto })
  @ApiResponse({ status: 400, type: ErrorResponseDto })
  async setAppointment(@Body() params: SetAppointmentQuery): Promise<SetAppointmentDto> {
    const xml = await this.appService.query('setAppointment', {
      ...params,
      // AccountNumber: 'NJT',
    });

    return this.responseTransformer.transform<SetAppointmentDto>(
      xml,
      ['Objects', 'Appointment'],
    );
  }

  // @Put('updateAppointment')
  // @ApiOperation({ summary: 'Creates an appointment' })
  // // @ApiResponse({ status: 200, type: SetAppointmentDto })
  // // @ApiResponse({ status: 400, type: ErrorResponseDto })
  // async updateAppointment(@Body() params: UpdateAppointmentQuery): Promise<SetAppointmentDto> {
  //   const xml = await this.appService.query('setAppointment', {
  //     ...params,
  //     // AccountNumber: 'NJT',
  //   });
  //
  //   return this.responseTransformer.transform<SetAppointmentDto>(
  //     xml,
  //     ['Objects', 'Appointment'],
  //   );
  // }


  @Get('getAppointment')
  @ApiOperation({ summary: 'Gets an appointment by Id' })
  @ApiResponse({ status: 200, type: GetAppointmentDto })
  async getAppointment(@Query() params: GetAppointmentQuery): Promise<GetAppointmentDto> {
    const xml = await this.appService.query('getAppointment', {
      ...params,
      // AccountNumber: 'NJT',
    });

    return this.responseTransformer.transform<GetAppointmentDto>(
      xml,
      ['Appointment'],
    );
  }


  @Delete('removeAppointment')
  @ApiOperation({ summary: 'Removes an appointment' })
  @ApiResponse({ status: 204, description: 'Successfully removed ' })
  @HttpCode(204)
  async removeAppointment(@Body() params: RemoveAppointmentQuery): Promise<void> {
    const xml = await this.appService.query('removeAppointment', {
      ...params,
    });

    if (xml.error) {
      throw new BadRequestException(xml);
    }

    return;
  }

}
