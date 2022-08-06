import React from 'react';
import styles from './top-bar.module.css';

export type PropTypes = {
  onHome: () => void
}

const Topbar = ({
  onHome,
}: PropTypes) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.logoContainer} onClick={onHome}>
        <span>Scholar</span>
      </div>
    </div>
  </div>
);

export default Topbar;
