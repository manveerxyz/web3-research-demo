import React, { ReactElement, useMemo } from 'react';

import styles from './bordered-card.module.css';

export type PropTypes = {
  children: ReactElement | (ReactElement | undefined)[] | undefined
  marginBottom?: string
  color?: 'grey' | 'black'
}

const BorderedCard = ({ children, marginBottom, color = 'grey' }: PropTypes) => {
  const className = useMemo(() => {
    const n = [styles.container];
    if (color === 'grey') {
      n.push(styles.grey);
    } else {
      n.push(styles.black);
    }

    return n.join(' ');
  }, [color]);

  return (
    <div className={className} style={{ marginBottom }}>
      {children}
    </div>
  );
};

export default BorderedCard;
