import db from 'src/common/db';
import log from 'src/common/log';

import waitlists from './db';

export const savePublishignWaitlist = async (
  email: string,
): Promise<void> => {
  await waitlists.insertPublishingWaitlist(db, email);
  log.info('saved to publishing waitlist');
};
