import React, { CSSProperties, ReactElement } from 'react';

import styles from './header.module.css';

export type PropTypes = {
  children: ReactElement | (ReactElement | string)[] | string
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  style?: CSSProperties
  showLine?: boolean
}

const Header = ({
  children, style, size = 'h4', showLine = true,
}: PropTypes) => (
  <div className={styles.container} style={style}>
    {{
      h1: <h1 className={styles.h1}>{children}</h1>,
      h2: <h2 className={styles.h2}>{children}</h2>,
      h3: <h3 className={styles.h3}>{children}</h3>,
      h4: <h4 className={styles.h4}>{children}</h4>,
      h5: <h5 className={styles.h5}>{children}</h5>,
    }[size]}
    {showLine && <div className={styles.divider} />}
  </div>
);

export default Header;
