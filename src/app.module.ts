import { CacheInterceptor, CacheModule, HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { ApiConfigOptionsInterface } from './types/api-config-options.interface';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [ConfigModule, HttpModule, CacheModule.register()],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_OPTIONS',
      useFactory: (configService: ConfigService): ApiConfigOptionsInterface => {
        return {
          // applicationId: configService.get<string>('APPLICATION_ID'),
          userToken: configService.get<string>('USER_TOKEN'),
          userSecret: configService.get<string>('USER_SECRET'),
        };
      },
      inject: [ConfigService],
    },
  {
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor,
  },
  ],
})
export class AppModule {}
