import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getAgendas')
  async getAgendas(): Promise<string> {
    return this.appService.query('getAgendas');
  }

  @Get('getAppointmentType')
  async getAppointmentType(@Query('id') id: number): Promise<string> {
    return this.appService.query('getAppointmentType', { id });
  }

  @Get('getAppointmentTypes')
  async getAppointmentTypes(): Promise<string> {
    return this.appService.query('getAppointmentTypes', {});
  }

  @Get('getResource')
  async getResource(@Query('id') id: number): Promise<string> {
    return this.appService.query('getResource', { id });
  }

  @Get('getResources')
  async getResources(): Promise<string> {
    return this.appService.query('getResources');
  }

  @Get('getFields')
  async getFields(
    @Query('AgendaId') AgendaId: number,
    @Query('AppointmentTypeId') AppointmentTypeId: number,
  ): Promise<string> {
    return this.appService.query('getFields', {
      AgendaId,
      AppointmentTypeId,
    });
  }

  @Get('getCustomers')
  async getCustomers(): Promise<string> {
    return this.appService.query('getCustomer');
  }

  @Get('getCustomer')
  async getCustomer(@Query('id') id: number): Promise<string> {
    return this.appService.query('getCustomer', { id });
  }

  @Get('getBookableDays')
  async getBookableDays(
    @Query('AgendaId') AgendaId: number,
    @Query('AppointmentTypeId') AppointmentTypeId: number,
    @Query('ResourceId') ResourceId?: number,
    @Query('StartDate') StartDate?: string,
    @Query('EndDate') EndDate?: string,
  ): Promise<string> {
    return this.appService.query('getBookableDays', {
      AgendaId,
      AppointmentTypeId,
      ResourceId,
      StartDate,
      EndDate,
    });
  }

  @Get('getBookableTimes')
  async getBookableTimes(
    @Query('AgendaId') AgendaId: number,
    @Query('Date') Date: string,
    @Query('AppointmentTypeId') AppointmentTypeId: number,
    @Query('ResourceId') ResourceId?: number,
    @Query('StartTime') StartTime?: string,
    @Query('EndTime') EndTime?: string,
  ): Promise<string> {
    return this.appService.query('getBookableTimes', {
      AgendaId,
      AppointmentTypeId,
      ResourceId,
      StartTime,
      EndTime,
    });
  }

  @Get('getAgenda')
  async getAgenda(@Query('id') id: string): Promise<string> {
    return this.appService.query('getAgenda', { id });
  }
}
