import React from 'react';

import styles from './tag.module.css';

export type PropTypes = {
  children: string

}

const Tag = ({ children }: PropTypes) => (
  <div className={styles.tag}>{children}</div>
);

export default Tag;
