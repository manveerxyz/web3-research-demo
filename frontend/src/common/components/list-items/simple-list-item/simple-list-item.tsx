import TextButton from 'common/components/buttons/text-button/text-button';
import React from 'react';

import styles from './simple-list-item.module.css';

export type PropTypes = {
  title: string
  subtitle: string
  url: string
}

const SimpleListItem = ({ title, subtitle, url }: PropTypes) => (
  <div className={styles.container}>
    <TextButton href={url}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>{title}</div>
        <div>
          <span className={styles.subtitle}>
            {subtitle}
          </span>
        </div>
      </div>
    </TextButton>
  </div>
);

export default SimpleListItem;
