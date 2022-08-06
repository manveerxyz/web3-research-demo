import React, {
  CSSProperties, MouseEvent, ReactElement, useMemo,
} from 'react';

import styles from './icon-button.module.css';

export type PropTypes = {
  type?: 'button' | 'reset' | 'submit'
  size?: 'default' | 'large'

  onClick?: () => void
  href?: string

  children: ReactElement
  disabled?: boolean
  style?: CSSProperties
}

const IconButton = ({
  onClick, href, children, disabled, style, type = 'button', size = 'default',
}: PropTypes) => {
  const className = useMemo(() => {
    const n = [styles.btn];

    if (size === 'large') {
      n.push(styles.large);
    }

    return n.join(' ');
  }, [size]);

  const handleClick = (e: MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.preventDefault();
    if (onClick) onClick();
  };

  if (href) {
    return (
      <a
        type={type}
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
    <button
      type={type}
      onClick={(e) => handleClick(e)}
      className={className}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default IconButton;
