import React, { CSSProperties, useMemo } from 'react';
import ErrorMessage from '../error-message/error-message';

import styles from './input.module.css';

export type PropTypes = {
  value?: string
  onChange: (s: string) => void
  type: string
  placeholder?: string
  autoComplete?: 'off' | 'new-password'
  autoFocus?: boolean
  disablePaste?: boolean
  maxLength?: number

  containerStyle?: CSSProperties

  help?: string

  error?: boolean
  errorMessage?: string
}

const Input = ({
  type, onChange, value, placeholder, error = false, disablePaste = false,
  errorMessage, containerStyle, autoComplete, autoFocus, help, maxLength,
}: PropTypes) => {
  const handleChange = (e: any) => onChange(e.target.value);

  const className = useMemo(() => {
    const res = [styles.input];
    if (error) {
      res.push(styles.error);
    }

    return res.join(' ');
  }, [error]);

  return (
    <div style={containerStyle} className={styles.container}>
      <input
        className={className}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        onPaste={disablePaste ? (e) => {
          e.preventDefault();
          return false;
        } : undefined}
        maxLength={maxLength}
      />

      {help && <div className={styles.helpText}>{help}</div>}

      {error && (
        <div style={{ marginTop: '2px' }}>
          <ErrorMessage size="small">{errorMessage || 'Invalid input.'}</ErrorMessage>
        </div>
      )}
    </div>
  );
};

export default Input;
