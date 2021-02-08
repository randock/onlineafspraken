import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SentryInterceptor } from './sentry.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new SentryInterceptor(app));

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = parseInt(process.env.PORT) || 3000;
  await app.listen(port).then(() => {
    console.log(`listening at port ${port}`);
  });
}

bootstrap();
