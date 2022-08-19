import React from 'react';

import Twitter from 'img/twitter-white.svg';
import Discord from 'img/discord-white.svg';

import styles from './footer.module.css';

const Footer = () => (
  <div className={styles.container}>
    <span className={styles.rights}>© Scholar 2022</span>
    <div className={styles.iconContainer}>
      <a className={styles.icon} href="https://discord.gg/tJmw3UdYZV" target="_blank" rel="noreferrer">
        <img
          src={Discord}
          alt="Discord Logo"
          width="24px"
          height="24px"
        />
      </a>
      <a className={styles.icon} href="https://twitter.com/ScholarOrg" target="_blank" rel="noreferrer">
        <img
          src={Twitter}
          alt="Twitter Logo"
          width="24px"
          height="24px"
        />
      </a>
    </div>
  </div>
);

export default Footer;
