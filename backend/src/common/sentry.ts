import { Express, RequestHandler, ErrorRequestHandler } from 'express';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

const init = (app: Express) => {
  Sentry.init({
    dsn: 'https://10eb36771f744e909e5dd4f2db16dc55@o1186948.ingest.sentry.io/6306778',
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true }),
      // enable Express.js middleware tracing
      new Tracing.Integrations.Express({ app }),
    ],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
};

const getRequestHandler = () => Sentry.Handlers.requestHandler({
  request: ['cookies', 'method', 'query_string', 'url'],
}) as RequestHandler;
const getTracingHandler = () => Sentry.Handlers.requestHandler() as RequestHandler;
const getErrorHandler = () => Sentry.Handlers.errorHandler() as ErrorRequestHandler;

const captureException = (exception: any, captureContext?: any ) => {
  Sentry.captureException(exception, captureContext);
};

const sentry = {
  init,
  getRequestHandler,
  getTracingHandler,
  getErrorHandler,
  captureException,
};
export default sentry;
