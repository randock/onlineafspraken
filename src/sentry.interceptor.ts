import { HttpException, INestApplication, Injectable } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { RavenInterceptor } from 'nest-raven';

@Injectable()
export class SentryInterceptor extends RavenInterceptor {
  constructor(app: INestApplication) {
    Sentry.init({
      environment: process.env.NODE_ENV,
      dsn: 'https://bfa1c4434edb40f48524b19462a758e9@o160393.ingest.sentry.io/5627982',
      integrations: [
        new Sentry.Integrations.Http(),
      ],
    });

    // RequestHandler creates a separate execution context using domains, so that every
    // transaction/span/breadcrumb is attached to its own Hub instance
    app.use(Sentry.Handlers.requestHandler());

    // TracingHandler creates a trace for every incoming request
    app.use(Sentry.Handlers.tracingHandler());

    super({
      filters: [
        {
          type: HttpException,
          filter: (exception: HttpException): boolean => 400 > exception.getStatus(),
        },
      ],
    });
  }
}
