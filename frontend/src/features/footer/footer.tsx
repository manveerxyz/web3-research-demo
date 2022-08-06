import React from 'react';

import Twitter from 'img/twitter-white.svg';
import Github from 'img/github-white.svg';
import TextButton from 'common/components/buttons/text-button/text-button';

import styles from './footer.module.css';

const Footer = () => (
  <div className={styles.container}>
    <span className={styles.rights}>Created by <TextButton href="https://twitter.com/manveerbasra_" color="white" underlined>Manveer Basra</TextButton></span>
    <div className={styles.iconContainer}>
      <a className={styles.icon} href="https://github.com" target="_blank" rel="noreferrer">
        <img
          src={Github}
          alt="Github Logo"
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
