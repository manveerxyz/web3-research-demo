import React, { ReactElement } from 'react';

import styles from './fixed-width-page.module.css';

export type PropTypes = {
  children: ReactElement | ReactElement[]
}

const FixedWidthPageLayout = ({ children }: PropTypes): ReactElement => (
  <div className={styles.container}>
    { children }
  </div>
);

export default FixedWidthPageLayout;
