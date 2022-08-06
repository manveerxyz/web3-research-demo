import { Db } from 'src/common/db';

const insertPublishingWaitlist = async (
  db: Db, email: string,
) => {
  return db.query(
    'INSERT INTO scientific_publishing_waitlist(email) VALUES($1)',
    [email],
  );
};

const waitlists = {
  insertPublishingWaitlist,
};
export default waitlists;
