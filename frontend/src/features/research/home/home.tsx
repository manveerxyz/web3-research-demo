import Button from 'common/components/buttons/button/button';
import TextButton from 'common/components/buttons/text-button/text-button';
import Paragraph from 'common/components/text/paragraph/paragraph';
import FooterLayout from 'common/layouts/footer/footer';
import React from 'react';

import Diagram from './diagram.svg';
import styles from './home.module.css';

export type PropTypes = {}

const ResearchHome = () => (
  <FooterLayout>
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>Web3: Better Infrastructure for Scientific Research</h3>
          <Paragraph style={{ marginBottom: '48px' }}>
            Scientific research, stored permanently on open, tamper-proof, shared databases.
            Anyone can access it, anyone can contribute, and anyone can reproduce it, forever.
          </Paragraph>
        </div>

        <img className={styles.diagramMobile} src={Diagram} alt="diagram" />

        <div>
          <h5 className={styles.subtitle}>
            Accessible, Composable and Ownable on&nbsp;
            <TextButton href="https://ethereum.org" underlined>Ethereum</TextButton>
          </h5>
          <Paragraph style={{ marginBottom: '48px' }}>
            Research represented on-chain&mdash;on an open and shared database&mdash;with links
            to all research artifacts, so anyone can access it.<br /><br />
            Since research output is represented in <TextButton href="https://ethereum.org/en/developers/docs/smart-contracts/" underlined>smart contracts</TextButton>
            , it&apos;s timestamped for provenance, composable with function calls,
            and researchers can truly own their scientific output.
          </Paragraph>
        </div>

        <div>
          <h5 className={styles.subtitle}>
            Permanently and Immutably Stored on&nbsp;
            <TextButton href="https://ipfs.tech" underlined>IPFS</TextButton>
          </h5>
          <Paragraph style={{ marginBottom: '48px' }}>
            Store all research artifacts permanently, in tamper-proof storage.<br /><br />
            Nobody can censor it, and there&apos;s no fear of losing access to valuable
            scientific knowledge.
          </Paragraph>

          <div className={styles.buttonContainer}>
            <Button text="View Demo" routerLink="/research/0" size="large" />
          </div>
        </div>
      </div>
      <img className={styles.diagram} src={Diagram} alt="diagram" />
    </div>
  </FooterLayout>
);

export default ResearchHome;
