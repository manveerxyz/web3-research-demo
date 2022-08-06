import { Request, Response, NextFunction } from 'express';
import log from 'src/common/log';

/**
 * Log request and response details for every request made to our api endpoints.
 */
export const logRequest = (req: Request, _: Response, next: NextFunction): void => {
  log.info(`${req.method} ${req.url}`, {
    httpRequest: {
      requestUrl: req.url,
      requestMethod: req.method,
      remoteIp: req.ip,
    },
  });

  next();
};
