import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('Agendas')
  async Agendas(@Param() params: Record<string, any>): Promise<string> {
    return this.appService.query('getAgendas', params);
  }
  @Get('AppointmentType')
  async AppointmentType(@Param() params: Record<string, any>): Promise<string> {
    return this.appService.query('getAppointmentType', params);
  }
  @Get('AppointmentTypes')
  async AppointmentTypes(@Param() params: Record<string, any>): Promise<string> {
    return this.appService.query('getAppointmentTypes', params);
  }
  @Get('Resource')
  async Resource(@Param() params: Record<string, any>): Promise<string> {
    return this.appService.query('getResource', params);
  }
  @Get('Resources')
  async Resources(@Param() params: Record<string, any>): Promise<string> {
    return this.appService.query('getResources', params);
  }
  @Get('Fields')
  async Fields(@Param() params: Record<string, any>): Promise<string> {
    return this.appService.query('getFields', params);
  }
  @Get('Customer')
  async Customer(@Param() params: Record<string, any>): Promise<string> {
    return this.appService.query('getCustomer', params);
  }
  @Get('BookableDays')
  async BookableDays(@Param() params: Record<string, any>): Promise<string> {
    return this.appService.query('getBookableDays', params);
  }
  @Get('BookableTimes')
  async BookableTimes(@Param() params: Record<string, any>): Promise<string> {
    return this.appService.query('getBookableTimes', params);
  }
  @Get('Agenda')
  async Agenda(@Param() params: Record<string, any>): Promise<string> {
    return this.appService.query('getAgenda', params);
  }
}
