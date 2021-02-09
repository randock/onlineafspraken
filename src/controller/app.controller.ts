import { CacheTTL, Controller, Get, Query } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { GetBookableDaysDto } from '../types/query/get-bookable-days.dto';
import { GetBookableTimesDto } from '../types/query/get-bookable-times.dto';
import { GetFieldsDto } from '../types/query/get-fields.dto';
import { AgendaDto } from '../types/response/agenda.dto';
import { ApiResponse } from '@nestjs/swagger';
import { AppointmentTypeDto } from '../types/response/appointment-type.dto';
import { ResourceDto } from '../types/response/resource.dto';
import { FieldDto } from '../types/response/field.dto';
import { CustomerDto } from '../types/response/customer.dto';
import { BookableDayDto } from '../types/response/bookable-day.dto';
import { BookableTimeDto } from '../types/response/bookable-time.dto';
import { GetAgendaDto } from '../types/query/get-agenda.dto';
import { GetAppointmentTypeDto } from '../types/query/get-appointment-type.dto';
import { GetResourceDto } from '../types/query/get-resource.dto';
import { GetCustomerDto } from '../types/query/get-customer.dto';
import { ResponseTransformer } from '../service/response-transformer.service';

@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly responseTransformer: ResponseTransformer,
  ) {}

  @Get('getAgendas')
  @ApiResponse({ status: 200, type: [AgendaDto]})
  async getAgendas(): Promise<Array<AgendaDto>> {
    const xml = await this.appService.query('getAgendas');

    return this.responseTransformer.transform<AgendaDto[]>(xml, ['Objects', 'Agenda'], true);
  }

  @Get('getAgenda')
  @ApiResponse({ status: 200, type: AgendaDto })
  async getAgenda(@Query() params: GetAgendaDto): Promise<AgendaDto> {
    const xml = await this.appService.query('getAgenda', { ...params });

    return this.responseTransformer.transform<AgendaDto>(xml, ['Agenda']);
  }

  @Get('getAppointmentTypes')
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
  @ApiResponse({ status: 200, type: AppointmentTypeDto })
  async getAppointmentType(@Query() params: GetAppointmentTypeDto): Promise<AppointmentTypeDto> {
    const xml = await this.appService.query('getAppointmentType', { ...params });

    return this.responseTransformer.transform<AppointmentTypeDto>(xml, [
      'Objects',
      'AppointmentType',
    ]);
  }

  @Get('getResources')
  @ApiResponse({ status: 200, type: [ResourceDto]})
  @CacheTTL(600)
  async getResources(): Promise<Array<ResourceDto>> {
    const xml = await this.appService.query('getResources');

    return this.responseTransformer.transform<ResourceDto[]>(xml, ['Objects', 'Resource'], true);
  }

  @Get('getResource')
  @ApiResponse({ status: 200, type: ResourceDto })
  @CacheTTL(600)
  async getResource(@Query() params: GetResourceDto): Promise<ResourceDto> {
    const xml = await this.appService.query('getResource', { ...params });

    return this.responseTransformer.transform<ResourceDto>(xml, ['Resource']);
  }

  @Get('getFields')
  @ApiResponse({ status: 200, type: [FieldDto]})
  async getFields(@Query() params: GetFieldsDto): Promise<Array<FieldDto>> {
    const xml = await this.appService.query('getFields', {
      ...params,
    });

    return this.responseTransformer.transform<FieldDto[]>(xml, ['Objects', 'Field'], true);
  }

  @Get('getCustomers')
  @ApiResponse({ status: 200, type: [CustomerDto]})
  async getCustomers(): Promise<Array<CustomerDto>> {
    const xml = await this.appService.query('getCustomers', {});

    return this.responseTransformer.transform<CustomerDto[]>(xml, ['Objects', 'Customer'], true);
  }

  @Get('getCustomer')
  @ApiResponse({ status: 200, type: CustomerDto })
  async getCustomer(@Query() params: GetCustomerDto): Promise<CustomerDto> {
    const xml = await this.appService.query('getCustomer', { ...params });

    return this.responseTransformer.transform<CustomerDto>(xml, ['Customer']);
  }

  @Get('getBookableDays')
  @ApiResponse({ status: 200, type: [BookableDayDto]})
  async getBookableDays(@Query() params: GetBookableDaysDto): Promise<Array<BookableDayDto>> {
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
  @ApiResponse({ status: 200, type: [BookableTimeDto]})
  async getBookableTimes(@Query() params: GetBookableTimesDto): Promise<Array<BookableTimeDto>> {
    const xml = await this.appService.query('getBookableTimes', {
      ...params,
    });

    return this.responseTransformer.transform<BookableTimeDto[]>(
      xml,
      ['Objects', 'BookableTime'],
      true,
    );
  }
}
