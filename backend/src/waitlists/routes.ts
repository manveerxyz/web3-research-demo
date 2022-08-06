import { Router } from 'express';

import { postPublishingWaitlist } from './controllers';

export function addRoutes(router: Router) {
  router.post('/waitlists/scientific-publishing', postPublishingWaitlist);
}
