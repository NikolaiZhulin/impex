import React from 'react';
import { FormattedMessage } from 'react-intl';
import { SectionHeader } from '@components/section-header';
import { ReactComponent as Ethereum } from 'public/images/how-to-exchange/ethereum.svg';
import { EXCHANGE_MAP } from '@containers/main-page/how-to-exchange-section/constants';
import { NumberedItem } from '@components/numbered-item';
import styles from './styles.module.scss';

export const HowToExchangeSection = () => (
  <section className={styles.container} id="scheme-of-work">
    <SectionHeader
      text={<FormattedMessage id="how_to_exchange" defaultMessage="Как обменять криптовалюту" />}
      labelText="СХЕМА РАБОТЫ"
    />
    <div className={styles.cardsContainer}>
      {EXCHANGE_MAP.map(({ title, numb, text }) => (
        <NumberedItem
          key={title}
          text={text}
          numb={numb}
          title={title}
          className={styles.card}
        />
      ))}
    </div>
    <Ethereum className={styles.ethereumIcon} />
  </section>
);
