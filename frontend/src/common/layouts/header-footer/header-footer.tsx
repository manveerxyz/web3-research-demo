import FooterContainer from 'features/footer/footer-container';
import React, { ReactElement } from 'react';
import TopbarContainer from '../../../features/top-bar/top-bar-container';

import styles from './header-footer.module.css';

export type PropTypes = {
  children: ReactElement | ReactElement[]
}

const HeaderFooterLayout = (
  { children }: PropTypes,
): ReactElement => (
  <div className={styles.container}>
    <TopbarContainer />
    <div className={styles.content}>
      { children }
    </div>
    <FooterContainer />
  </div>
);

export default HeaderFooterLayout;
