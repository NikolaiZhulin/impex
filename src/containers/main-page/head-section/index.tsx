import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ConverterForm } from 'src/components/converter-form';
import { CurrenciesBlock } from '@components/currencies-block';
import styles from './styles.module.scss';

export const HeadSection = () => (
  <section className={styles.container}>
    <div className={styles.topContainer}>
      <div className={styles.infoContainer}>
        <span className={styles.subtitle}>
          <FormattedMessage id="crypto_exchange_subtitle" defaultMessage="Безграничный обмен криптовалюты" />
        </span>
        <h1 className={styles.title}>
          Меняем криптопланы <br /> на выгодную реальность
        </h1>
        <p className={styles.description}>
          <FormattedMessage
            id="crypto_exchange_description"
            defaultMessage="Impex Crypto — это площадка для обмена криптовалютой.
           Наши пользователи могут обменять один актив блокчейна на другой за пару кликов!"
          />
        </p>
      </div>
      <ConverterForm />
    </div>
    <CurrenciesBlock title={<FormattedMessage id="" defaultMessage="Популярные монеты" />} />
  </section>
);
