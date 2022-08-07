import TextButton from 'common/components/buttons/text-button/text-button';
import Tag from 'common/components/tag/tag';
import React from 'react';

import styles from './artifact-item.module.css';

export type PropTypes = {
  title: string
  subtitle: string
  url: string
}

const ResearchArtifactItem = ({ title, subtitle, url }: PropTypes) => (
  <div className={styles.container}>

    <div className={styles.contentContainer}>
      <TextButton href={url}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>
          {subtitle.replace('ipfs/', 'ipfs://')}
        </div>
      </TextButton>

      {title === 'IPFS' && <Tag>Immutable</Tag>}
    </div>
  </div>
);

export default ResearchArtifactItem;
