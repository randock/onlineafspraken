import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { IApiConfigOptions } from './types/IApiConfigOptions';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_OPTIONS',
      useFactory: (configService: ConfigService): IApiConfigOptions => {
        return {
          // applicationId: configService.get<string>('APPLICATION_ID'),
          userToken: configService.get<string>('USER_TOKEN'),
          userSecret: configService.get<string>('USER_SECRET'),
        };
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
