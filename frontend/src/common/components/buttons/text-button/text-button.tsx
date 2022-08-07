import React, { CSSProperties, ReactElement, useMemo } from 'react';

import styles from './text-button.module.css';

export type PropTypes = {
  href?: string
  onClick?: () => void
  children: string | ReactElement | ReactElement[]
  underlined?: boolean
  bold?: boolean
  color?: 'black' | 'grey' | 'white'

  style?: CSSProperties
}

const TextButton = ({
  href, onClick, children, underlined = false, color = 'black', style,
  bold = false,
}: PropTypes) => {
  const className = useMemo(() => {
    const n = [];
    if (underlined) {
      n.push(styles.underlined);
    } else {
      n.push(styles.notUnderlined);
    }

    if (color === 'grey') {
      n.push(styles.grey);
    }
    if (color === 'white') {
      n.push(styles.white);
    }

    if (bold) {
      n.push(styles.bold);
    }

    return n.join(' ');
  }, [underlined, color, bold]);

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer"
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </span>
  );
};

export default TextButton;
