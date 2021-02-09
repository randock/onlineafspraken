import { CacheTTL, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetBookableDaysDto } from './dto/get-bookable-days.dto';
import { GetBookableTimesDto } from './dto/get-bookable-times.dto';
import { GetFieldsDto } from './dto/get-fields.dto';
import { Agenda } from './dto/agenda.dto';
import { ApiResponse } from '@nestjs/swagger';
import { AppointmentType } from './dto/appointment-type.dto';
import { Resource } from './dto/resource.dto';
import { Field } from './dto/field.dto';
import { Customer } from './dto/customer.dto';
import { BookableDay } from './dto/bookable-day.dto';
import { BookableTime } from './dto/bookable-time.dto';
import { GetAgendaDto } from './dto/get-agenda.dto';
import { GetAppointmentTypeDto } from './dto/get-appointment-type.dto';
import { GetResourceDto } from './dto/get-resource.dto';
import { GetCustomerDto } from './dto/get-customer.dto';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getAgendas')
  @ApiResponse({ status: 200, type: [Agenda]})
  async getAgendas(): Promise<Array<Agenda>> {
    const xml = await this.appService.query('getAgendas');

    return Array.isArray(xml.Objects.Agenda) ? xml.Objects.Agenda : [xml.Objects.Agenda];
  }

  @Get('getAgenda')
  @ApiResponse({ status: 200, type: Agenda })
  async getAgenda(@Query() params: GetAgendaDto): Promise<Agenda> {
    const xml = await this.appService.query('getAgenda', { ...params });

    return xml.Agenda;
  }

  @Get('getAppointmentTypes')
  @ApiResponse({ status: 200, type: [AppointmentType]})
  async getAppointmentTypes(): Promise<Array<AppointmentType>> {
    const xml = await this.appService.query('getAppointmentTypes', {});

    return Array.isArray(xml.Objects.AppointmentType)
      ? xml.Objects.AppointmentType
      : [xml.Objects.AppointmentType];
  }

  @Get('getAppointmentType')
  @ApiResponse({ status: 200, type: AppointmentType })
  async getAppointmentType(@Query() params: GetAppointmentTypeDto): Promise<AppointmentType> {
    const xml = await this.appService.query('getAppointmentType', { ...params });

    return xml.Objects.AppointmentType;
  }

  @Get('getResources')
  @ApiResponse({ status: 200, type: [Resource]})
  @CacheTTL(600)
  async getResources(): Promise<Array<Resource>> {
    const xml = await this.appService.query('getResources');

    return Array.isArray(xml.Objects.Resource) ? xml.Objects.Resource : [xml.Objects.Resource];
  }

  @Get('getResource')
  @ApiResponse({ status: 200, type: Resource })
  @CacheTTL(600)
  async getResource(@Query() params: GetResourceDto): Promise<Resource> {
    const xml = await this.appService.query('getResource', { ...params });

    return xml.Resource;
  }

  @Get('getFields')
  @ApiResponse({ status: 200, type: [Field]})
  async getFields(@Query() params: GetFieldsDto): Promise<Array<Field>> {
    const xml = await this.appService.query('getFields', {
      ...params,
    });

    return Array.isArray(xml.Objects.Field) ? xml.Objects.Field : [xml.Objects.Field];
  }

  @Get('getCustomers')
  @ApiResponse({ status: 200, type: [Customer]})
  async getCustomers(): Promise<Array<Customer>> {
    const xml = await this.appService.query('getCustomers', {});

    return Array.isArray(xml.Objects.Customer) ? xml.Objects.Customer : [xml.Objects.Customer];
  }

  @Get('getCustomer')
  @ApiResponse({ status: 200, type: Customer })
  async getCustomer(@Query() params: GetCustomerDto): Promise<Customer> {
    const xml = await this.appService.query('getCustomer', { ...params });

    return xml.Customer;
  }

  @Get('getBookableDays')
  @ApiResponse({ status: 200, type: [BookableDay]})
  async getBookableDays(@Query() params: GetBookableDaysDto): Promise<Array<BookableDay>> {
    return new Promise((resolve, reject) => {
      this.appService
        .query('getBookableDays', {
          ...params,
        })
        .then(xml => {
          const r = Array.isArray(xml.Objects.BookableDay)
            ? xml.Objects.BookableDay
            : [xml.Objects.BookableDay];
          return resolve(r);
        })
        .catch(e => {
          return resolve(e);
        });
    });
  }

  @Get('getBookableTimes')
  @ApiResponse({ status: 200, type: [BookableTime]})
  async getBookableTimes(@Query() params: GetBookableTimesDto): Promise<Array<BookableTime>> {
    const xml = await this.appService.query('getBookableTimes', {
      ...params,
    });

    // console.log(xml.Objects)
    return Array.isArray(xml.Objects.BookableTime)
      ? xml.Objects.BookableTime
      : [xml.Objects.BookableTime];
  }
}
