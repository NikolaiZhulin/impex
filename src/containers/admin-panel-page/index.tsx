import React from 'react';
import { CurrenciesBlock } from '@components/currencies-block';
import { FormattedMessage } from 'react-intl';
import { AdminTable } from '@components/admin-table';
import { Layout } from '../../layout';
import styles from './styles.module.scss';

export const AdminPanelPage = () => (
  <>

    <Layout isAdminLayout>
      <div className={styles.container}>
        <AdminTable />
        <CurrenciesBlock title={<FormattedMessage id="" defaultMessage="Текущие курсы обмена" />} />
      </div>
    </Layout>
  </>
);
