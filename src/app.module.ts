import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AppService } from './service/app.service';
import { ApiConfigOptionsInterface } from './types/api-config-options.interface';
import { APP_GUARD } from '@nestjs/core';
import { ResponseTransformer } from './service/response-transformer.service';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    ResponseTransformer,
    {
      provide: 'API_OPTIONS',
      useFactory: (configService: ConfigService): ApiConfigOptionsInterface => {
        return {
          url: configService.get<string>('AFSPRAKEN_API_URL'),
          token: configService.get<string>('AFSPRAKEN_API_TOKEN'),
          secret: configService.get<string>('AFSPRAKEN_API_SECRET'),
        };
      },
      inject: [ConfigService],
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
