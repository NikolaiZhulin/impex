import React from 'react';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { SectionHeader } from '@components/section-header';
import { FAQ_QUESTIONS } from '@containers/main-page/faq-section/constants';
import { Accordion } from '@components/accordion';
import styles from './styles.module.scss';

export const FaqSection = () => (
  <section className={styles.container} id="faq">
    <SectionHeader text={<FormattedMessage id="faq" defaultMessage="Часто задаваемые вопросы" />} labelText="FAQ" />
    <div className={styles.accordionsContainer}>
      {FAQ_QUESTIONS.map(({ text, head }) => (
        <Accordion title={head} key={head}>
          {text}
        </Accordion>
      ))}
    </div>
    <Image width={250} height={250} src="/images/faq/coin1.png" alt="coin" className={styles.firstCoin} />
    <Image width={250} height={250} src="/images/faq/coin2.png" alt="coin" className={styles.secondCoin} />
    <Image width={250} height={250} src="/images/faq/coin3.png" alt="coin" className={styles.thirdCoin} />
    <Image width={250} height={250} src="/images/faq/bitcoin-symbol.png" alt="coin" className={styles.bitcoinImage} />
  </section>
);
