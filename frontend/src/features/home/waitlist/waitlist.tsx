import React, { useMemo, useState } from 'react';
import HeaderFooterLayout from 'common/layouts/header-footer/header-footer';
import Button from 'common/components/buttons/button/button';
import Input from 'common/components/input/input';
import { ReduxStatus } from 'common/models/redux-status';

import styles from './waitlist.module.css';

export type PropTypes = {
  onJoin: (email: string) => void
  joinStatus: ReduxStatus
}

const Waitlist = ({ onJoin, joinStatus }: PropTypes) => {
  const [email, setEmail] = useState('');

  const bottomContent = useMemo(() => {
    if (joinStatus !== 'fulfilled') {
      return (
        <div className={styles.waitlistContainer}>
          <Input placeholder="Enter your email" onChange={(e) => setEmail(e)} type="email" />
          <div className={styles.buttonContainer}>
            <Button type="button" text="Join Waitlist" size="large" onClick={() => onJoin(email)} disabled={joinStatus === 'pending'} style={{ height: '44px' }} />
          </div>
        </div>
      );
    }
    return (
      <div className={styles.waitlistContainer}>
        <p className={styles.submittedText}>Thank you! We&apos;ll be in touch soon!</p>
      </div>
    );
  }, [email, joinStatus, onJoin]);

  return (
    <HeaderFooterLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Better Scientific Publishing.
          </h1>
          <h4 className={styles.subtitle}>
            Break free from the archaic formatting and peer review requirements of journals.
            {/* Get your research live for feedback instantly,
            whether it&apos;s a hypothesis, code, or the full paper. */}
          </h4>
          {bottomContent}
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default Waitlist;
