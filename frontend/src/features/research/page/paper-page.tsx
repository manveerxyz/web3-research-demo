import Button from 'common/components/buttons/button/button';
import BorderedCard from 'common/components/cards/bordered-card/bordered-card';
import Header from 'common/components/text/header/header';
import Paragraph from 'common/components/text/paragraph/paragraph';
import FixedWidthPageLayout from 'common/layouts/fixed-width-page/fixed-width-page';
import FooterLayout from 'common/layouts/footer/footer';
import SimpleListItem from 'common/components/list-items/simple-list-item/simple-list-item';
import Routerlink from 'common/components/text/routerlink/routerlink';
import LoadingLayout from 'common/layouts/loading-layout/loading-layout';
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import { Paper, groupArtifactsByType } from 'common/models/paper';
import TextButton from 'common/components/buttons/text-button/text-button';
import HandleStatus from 'common/components/handle-status-container/handle-status';
import { toTitleCase } from 'common/util/string';
import { ReduxStatus } from 'common/models/redux-status';
import { DateTime } from 'luxon';
import React from 'react';

import styles from './paper-page.module.css';

export type PropTypes = {
  paper?: Paper
  status: ReduxStatus
}

const PaperPage = ({
  paper, status,
}: PropTypes) => (
  <LoadingLayout loading={status === 'pending'}>
    <FooterLayout>
      <FixedWidthPageLayout>
        <div className={styles.backContainer}>
          <Routerlink to={paper?.id === 0 ? '/research' : '/research/0/citations'}>&lt; Back</Routerlink>
        </div>
        <HandleStatus errorMsg="Failed to get paper data" status={status}>
          <div className={styles.container}>
            {paper && (
              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.title}>{paper.title}</h3>
                    <div className={styles.subtitle}>
                      <Paragraph>
                        {DateTime.fromISO(paper.published_date).toLocaleString(DateTime.DATE_MED)}
                        &ensp;·&ensp;
                      </Paragraph>
                      {paper.authors.map((a, i) => (
                        <div key={a.display_name}>
                          <TextButton href={a.url}>
                            {a.display_name}
                          </TextButton>
                          {i < paper.authors.length - 1 && <span>,&nbsp;</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.section}>
                  <Header size="h5" style={{ paddingBottom: '16px' }}>Abstract</Header>
                  <Paragraph>{paper.abstract}</Paragraph>
                </div>
                {paper.artifacts && Object.entries(groupArtifactsByType(paper.artifacts))
                  .map(([type, artifacts]) => (
                    <div className={styles.section} key={type}>
                      <Header size="h5">{toTitleCase(type)}</Header>
                      {(artifacts as Paper['artifacts']).map((artifact) => (
                        <SimpleListItem
                          key={artifact.display_name}
                          title={artifact.display_name}
                          subtitle={new URL(artifact.url).pathname.substring(1)}
                          url={artifact.url}
                        />
                      ))}
                    </div>
                  ))}
              </div>
            )}
            <div className={styles.sidebar}>
              <BorderedCard marginBottom="8px">
                {paper && (
                  <div className={styles.sidebarCardContent}>
                    <Button
                      text="Replicate"
                      icon={<OpenInNewSharpIcon style={{ color: 'white' }} fontSize="small" />}
                      href={paper.replication_url}
                      style={{ marginBottom: '8px' }}
                    />
                    <Button
                      text="PDF"
                      icon={<OpenInNewSharpIcon style={{ color: 'var(--black)' }} fontSize="small" />}
                      variant="secondary"
                      href={paper.pdf_url}
                    />
                    {paper.id === 0 && (
                      <Button
                        text="Citations"
                        routerLink="citations"
                        variant="secondary"
                        style={{ marginTop: '8px' }}
                      />
                    )}
                  </div>
                )}
              </BorderedCard>
              <BorderedCard>
                {paper && (
                  <div className={styles.sidebarCardContent}>
                    <h5 className={styles.metadataHeader}>Metadata</h5>
                    <span className={styles.metadata}>DOI: <TextButton href={`https://doi.org/${paper.doi}`} color="grey" underlined>{paper.doi}</TextButton></span>
                    <span className={styles.metadata}>
                      Ethereum Contract: <TextButton href={`https://etherscan.io/address/${paper.ethereum_contract_address}`} color="grey" underlined>{paper.ethereum_contract_address}</TextButton>
                    </span>
                    <span className={styles.metadata}>
                      IPFS: <TextButton href={`https://ipfs.io/ipfs/${paper.ipfs_uri.replace('ipfs://', '')}`} color="grey" underlined>{paper.ipfs_uri}</TextButton>
                    </span>
                  </div>
                )}
              </BorderedCard>
            </div>
          </div>
        </HandleStatus>
      </FixedWidthPageLayout>
    </FooterLayout>
  </LoadingLayout>
);

export default PaperPage;
