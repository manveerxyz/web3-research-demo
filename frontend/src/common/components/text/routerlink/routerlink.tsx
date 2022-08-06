import React, { ReactNode, CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import styles from './routerlink.module.css';

export type PropTypes = {
  to: string | number
  children: string | ReactNode
  underlined?: boolean

  style?: CSSProperties
}

const Routerlink = ({
  to, children, underlined = false, style,
}: PropTypes) => (
  <Link
    to={to as any}
    className={underlined ? styles.underlined : styles.notUnderlined}
    style={style}
  >
    {children}
  </Link>
);

export default Routerlink;
