import React from 'react';
import { RulesBlock } from '@components/rules-block';
import { ROUTES } from '@constants/routes.constants';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { ExchangeForm } from '@components/exchange-form';
import { Layout } from '../../layout';

import styles from './styles.module.scss';

export const ExchangeCurrencyPage = () => (
  <Layout>
    <div className={styles.container}>
      <Link className={styles.backToHomeLink} href={ROUTES.HOME_PAGE}>
        <FormattedMessage id="" defaultMessage="Вернуться на главную" />
      </Link>
      <div className={styles.content}>
        <ExchangeForm />
        <RulesBlock />
      </div>
    </div>
  </Layout>
);
