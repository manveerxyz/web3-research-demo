import React, { ReactElement } from 'react';

import styles from './loading-layout.module.css';

export type PropTypes = {
  children: ReactElement
  loading: boolean
}

const LoadingLayout = (
  { children, loading }: PropTypes,
): ReactElement => {
  if (!loading) {
    return children;
  }

  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
};

export default LoadingLayout;
