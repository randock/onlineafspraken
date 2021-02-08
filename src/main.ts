import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SentryInterceptor } from './sentry.interceptor';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new SentryInterceptor(app));

  const port = parseInt(process.env.PORT) || 3000;
  await app.listen(port).then(() => {
    console.log(`listening at port ${port}`);
  });
}

bootstrap();
