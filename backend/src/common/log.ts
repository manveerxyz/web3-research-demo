import { requestTracingNamespace, TRACING_ID } from 'src/middleware/trace';
import { createLogger, format, transports } from 'winston';

// add trace ID to logs
const trace = format((info) => {
  info.trace_id = requestTracingNamespace.get(TRACING_ID);
  return info;
});

// create a Winston logger
const log = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp(),
    trace(),
    format.json(),
  ),
  transports: [
    new transports.Console({
      level: 'debug',
    }),
  ],
});

export default log;
