import cls from 'cls-hooked';
import { NextFunction, Request, Response } from 'express';
import { uuid } from 'src/common/random';

export const TRACING_ID = 'tracingId';
export const requestTracingNamespace = cls.createNamespace('request-tracing');

export const addTraceId = (req: Request, res: Response, next: NextFunction) => {
  requestTracingNamespace.bindEmitter(req);
  requestTracingNamespace.bindEmitter(res);

  const tracingId = req.header('X-Tracing-Id') || uuid();

  requestTracingNamespace.run(() => {
    requestTracingNamespace.set(TRACING_ID, tracingId);
    next();
  });
};