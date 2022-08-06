import React, { CSSProperties, ReactElement } from 'react';

import styles from './paragraph.module.css';

export type PropTypes = {
  children: ReactElement | (ReactElement | string)[] | string
  style?: CSSProperties
}

const Paragraph = ({ children, style }: PropTypes) => (
  <p className={styles.paragraph} style={style}>{children}</p>
);

export default Paragraph;
