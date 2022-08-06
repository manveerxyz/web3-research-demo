import FooterContainer from 'features/footer/footer-container';
import React, { ReactElement } from 'react';

import styles from './footer.module.css';

export type PropTypes = {
  children: ReactElement | ReactElement[]
}

const FooterLayout = (
  { children }: PropTypes,
): ReactElement => (
  <div className={styles.container}>
    <div className={styles.content}>
      { children }
    </div>
    <FooterContainer />
  </div>
);

export default FooterLayout;
