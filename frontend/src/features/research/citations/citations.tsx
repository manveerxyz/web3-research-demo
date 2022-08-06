import Paragraph from 'common/components/text/paragraph/paragraph';
import FixedWidthPageLayout from 'common/layouts/fixed-width-page/fixed-width-page';
import FooterLayout from 'common/layouts/footer/footer';
import LoadingLayout from 'common/layouts/loading-layout/loading-layout';
import Routerlink from 'common/components/text/routerlink/routerlink';
import { Paper } from 'common/models/paper';
import TextButton from 'common/components/buttons/text-button/text-button';
import HandleStatus from 'common/components/handle-status-container/handle-status';
import { ReduxStatus } from 'common/models/redux-status';
import React from 'react';

import styles from './citations.module.css';
import PaperCardContainer from '../paper-card/card-container';

export type PropTypes = {
  paper?: Paper
  citation?: Paper
  status: ReduxStatus
}

const Citations = ({
  paper, citation, status,
}: PropTypes) => (
  <LoadingLayout loading={status === 'pending'}>
    <FooterLayout>
      <FixedWidthPageLayout>
        <div className={styles.backContainer}>
          <Routerlink to={paper ? `/research/${paper.id}` : '/research'}>&lt; Back</Routerlink>
        </div>
        <HandleStatus errorMsg="Failed to get citation data" status={status}>
          <div className={styles.container}>
            {paper && citation && (
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.title}>Citation Graph</h3>
                </div>
                <Paragraph>
                  Since the research is stored in&nbsp;
                  <TextButton href="https://ethereum.org/en/developers/docs/smart-contracts/" underlined>smart contracts</TextButton>
                  &nbsp;on the Ethereum blockchain, citations are represented as&nbsp;
                  <TextButton href="https://etherscan.io/address/0xd34f64723ad7f257a7afb14311dc78f2e918971d#code#F1#L33" underlined>function calls</TextButton>.
                  <br /><br />
                  <i>This is just a demo, so not all citations are shown.</i>
                </Paragraph>
                <div className={styles.papers}>
                  <PaperCardContainer paper={paper} />
                  <div className={styles.divider}>
                    <TextButton href="https://etherscan.io/address/0xd34f64723ad7f257a7afb14311dc78f2e918971d#code#F1#L33"><span>cite()</span></TextButton>
                    <svg className={styles.desktopArrow} width="98" height="10" viewBox="0 0 98 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4.375H0.375V5.625H1V4.375ZM97.4419 5.44194C97.686 5.19786 97.686 4.80214 97.4419 4.55806L93.4645 0.580583C93.2204 0.336505 92.8247 0.336505 92.5806 0.580583C92.3365 0.82466 92.3365 1.22039 92.5806 1.46447L96.1161 5L92.5806 8.53553C92.3365 8.77961 92.3365 9.17534 92.5806 9.41942C92.8247 9.6635 93.2204 9.6635 93.4645 9.41942L97.4419 5.44194ZM1 5.625H97V4.375H1V5.625Z" fill="black" />
                    </svg>
                    <svg className={styles.mobileArrow} width="10" height="98" viewBox="0 0 10 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.625 1L5.625 0.375L4.375 0.375L4.375 1L5.625 1ZM4.55805 97.4419C4.80213 97.686 5.19786 97.686 5.44194 97.4419L9.41941 93.4645C9.66349 93.2204 9.66349 92.8247 9.41941 92.5806C9.17534 92.3365 8.77961 92.3365 8.53553 92.5806L5 96.1161L1.46446 92.5806C1.22038 92.3365 0.824656 92.3365 0.580579 92.5806C0.336501 92.8247 0.336501 93.2204 0.580579 93.4645L4.55805 97.4419ZM4.375 1L4.375 97L5.625 97L5.625 1L4.375 1Z" fill="black" />
                    </svg>

                  </div>
                  <PaperCardContainer paper={citation} />
                </div>
              </div>
            )}
          </div>
        </HandleStatus>
      </FixedWidthPageLayout>
    </FooterLayout>
  </LoadingLayout>
);

export default Citations;
