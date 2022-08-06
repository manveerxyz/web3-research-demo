import Paragraph from 'common/components/text/paragraph/paragraph';
import Routerlink from 'common/components/text/routerlink/routerlink';
import { Paper } from 'common/models/paper';
import React from 'react';

import styles from './card.module.css';

export type PropTypes = {
  p: Paper
}

const PaperCard = ({ p }: PropTypes) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Routerlink to={`/research/${p.id}`}><div className={styles.title}>{p.title}</div></Routerlink>
      <span className={styles.metadata}>
        <Paragraph style={{ fontSize: 'var(--font-size-sm)' }}>{p.authors.map((a) => a.display_name).join(', ')}</Paragraph>
      </span>
    </div>
  </div>
);

export default PaperCard;
