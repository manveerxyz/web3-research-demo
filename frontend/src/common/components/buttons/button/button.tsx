import React, {
  CSSProperties, MouseEvent, ReactElement, useMemo,
} from 'react';
import { Link } from 'react-router-dom';

import styles from './button.module.css';

export type PropTypes = {
  type?: 'button' | 'reset' | 'submit'
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'large'

  icon?: ReactElement

  onClick?: () => void
  href?: string
  routerLink?: string

  loading?: boolean
  text: string
  disabled?: boolean
  style?: CSSProperties
}

const Button = ({
  variant = 'primary', onClick, href, text, disabled, style, type = 'button', size = 'default',
  icon, routerLink, loading,
}: PropTypes) => {
  const className = useMemo(() => {
    const n = [];
    if (variant === 'secondary') {
      n.push(styles.secondary);
    } else {
      n.push(styles.primary);
    }

    if (size === 'large') {
      n.push(styles.large);
    }

    return n.join(' ');
  }, [variant, size]);

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
        {icon && (
          <span
            className={variant === 'primary' ? styles.icon : styles.iconSecondary}
          >{icon}
          </span>
        )}
        {text}
      </a>
    );
  }

  if (routerLink) {
    return (
      <Link
        type={type}
        to={routerLink}
        className={className}
        style={style}
      >
        {icon && (
          <span
            className={variant === 'primary' ? styles.icon : styles.iconSecondary}
          >{icon}
          </span>
        )}
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={(e) => handleClick(e)}
      className={className}
      disabled={disabled || loading}
      style={style}
    >
      {loading ? (
        <div className={styles.spinner} />
      ) : (
        <>
          {icon && (
            <span
              className={variant === 'primary' ? styles.icon : styles.iconSecondary}
            >{icon}
            </span>
          )}
          {text}
        </>
      )}
    </button>
  );
};

export default Button;
