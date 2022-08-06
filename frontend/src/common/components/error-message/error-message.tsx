import React, { ReactElement } from 'react';

import styles from './error-message.module.css';

export type PropTypes = {
  children: ReactElement | (ReactElement | string)[] | string
  size?: 'default' | 'small'
}

const ErrorMessage = ({ children, size = 'default' }: PropTypes) => (
  <p
    className={`${styles.error} ${size === 'small' && styles.small}`}
  >
    {children}
  </p>
);

export default ErrorMessage;
