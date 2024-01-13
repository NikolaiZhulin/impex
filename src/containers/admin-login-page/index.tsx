import React from 'react';
import { LoginForm } from '@components/login-form';
import { FormattedMessage } from 'react-intl';
import { Layout } from '../../layout';

import styles from './styles.module.scss';

export const AdminLoginPage = () => (
  <Layout isAdminLayout>
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.mainTitle}>
          <FormattedMessage id="" defaultMessage="Добро пожаловать" />
        </h1>

        <p className={styles.subtitle}>
          <FormattedMessage id="" defaultMessage="Войдите в свою учетную запись, чтобы продолжить работу в системе" />
        </p>
      </div>
      <LoginForm />
    </div>
    <img className={styles.image} src="/images/login/coins-bg.png" alt="coins" />
  </Layout>
);
