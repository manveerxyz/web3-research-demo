import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';
import { logRequest } from 'src/middleware/log';
import { initConnectionPool } from './common/db';
import { addTraceId } from './middleware/trace';
import { addRoutes as addIPFSRoutes } from './ipfs/routes';
import { addRoutes as addWaitlistsRoutes } from './waitlists/routes';
import sentry from 'src/common/sentry';
import limiter from 'src/middleware/limiter';

const PORT = process.env.PORT || 5000;
const AllowedOrigins = ['http://usescholar.org', 'https://usescholar.org'];

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  AllowedOrigins.push('http://localhost:3000');
}

initConnectionPool();

const app = express();

// setup sentry
sentry.init(app);
app.use(sentry.getRequestHandler());
app.use(sentry.getTracingHandler());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// security and cors
app.use(helmet());
app.use(cors({ origin: AllowedOrigins }));

// logging
app.use(addTraceId);
app.use(logRequest);

// rate limiting
app.use(limiter);

// routes
app.get('/ping', (_, res) => {
  res.sendStatus(StatusCodes.OK);
});
const v1Router = express.Router();
addWaitlistsRoutes(v1Router);
addIPFSRoutes(v1Router);
app.use('/v1', v1Router);

// sentry error logging
app.use(sentry.getErrorHandler());

// 404 if not other handlers processed request
app.use((_, res) => {
  res.sendStatus(StatusCodes.NOT_FOUND);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
