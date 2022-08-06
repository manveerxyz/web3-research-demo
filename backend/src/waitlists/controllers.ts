import { Request, Response } from 'express';
import { body } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

import { validate } from 'src/common/request-validator';
import log from 'src/common/log';
import * as s from './services';

export async function postPublishingWaitlist(req: Request, res: Response) {
  const errors = await validate(req, [
    body('email').isString().notEmpty(),
  ]);
  if (!errors.isEmpty()) {
    log.warn('bad request on post publishing waitlist', { errors: errors.array() });
    res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
    return;
  }

  const email: string = req.body.email;

  try {
    await s.savePublishignWaitlist(email);

    res.sendStatus(StatusCodes.OK);
    return;
  } catch (e) {
    log.error(`error on post publishing waitlist: ${(e as any).message}`, { error: e });
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
