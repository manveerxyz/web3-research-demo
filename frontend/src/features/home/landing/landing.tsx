import Button from 'common/components/buttons/button/button';
import TextButton from 'common/components/buttons/text-button/text-button';
import HeaderFooterLayout from 'common/layouts/header-footer/header-footer';
import React from 'react';

import styles from './landing.module.css';

const Landing = () => (
  <HeaderFooterLayout>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Open Scientific Publishing.
        </h1>
        <h5 className={styles.subtitle}>
          Scholar lets researchers publish to an open, immutable
          and permanently accessible scientific record.
        </h5>

        <Button
          routerLink="research"
          text="View Demo"
          size="large"
          style={{ maxWidth: '216px', marginBottom: '16px' }}
        />
        <TextButton href="https://discord.gg/tJmw3UdYZV" underlined>
          Join Discord
        </TextButton>
      </div>
    </div>
  </HeaderFooterLayout>
);

export default Landing;
