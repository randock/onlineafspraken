import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { IApiConfigOptions } from './types/IApiConfigOptions';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_OPTIONS',
      useFactory: (configService: ConfigService): IApiConfigOptions => {
        return {
          applicationId: configService.get<string>('applicationId'),
          userToken: configService.get<string>('userToken'),
          userSecret: configService.get<string>('userSecret'),
        };
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
