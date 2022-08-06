import axios, { Method } from 'axios';
import { Request, Response } from 'express';

import log from 'src/common/log';

export async function ipfsProxy(req: Request, res: Response) {
  const path: string = req.path;
  const split = path?.split('ipfs/');
  split.shift();
  let url = split.join('ipfs/');
  const method = req.method;

  if (!url.includes('https://')) {
    // for some reason, the // gets replaced with /, so we have to add back the //
    url = url.replace('https:/', 'https://');
  }

  // eslint-disable-next-line security/detect-object-injection
  log.info(`forwarding proxy request to: ${method} ${url}`);

  const response = await axios.request({
    url,
    method: method as Method,
    params: req.query,
  });
  log.info(`proxy response: ${response.status}`);
  res.status(response.status).send(response.data);
}