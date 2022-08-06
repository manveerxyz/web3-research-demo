import { Router } from 'express';

import {
  ipfsProxy,
} from './controllers';

export function addRoutes(router: Router) {
  router.get('/ipfs/*', ipfsProxy);
}
