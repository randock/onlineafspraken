import { HttpException, INestApplication, Injectable } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { RavenInterceptor } from 'nest-raven';
import * as Tracing from '@sentry/tracing';

@Injectable()
export class SentryInterceptor extends RavenInterceptor {
  constructor(app: INestApplication) {
    Sentry.init({
      environment: process.env.NODE_ENV,
      dsn: 'https://6ff0a32dd4fe4f24a6e4bf420dbb23c7@o311077.ingest.sentry.io/5628284',
      integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Tracing.Integrations.Express({ app: app as any }),
      ],
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.3 : 1.0,
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
