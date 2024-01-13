import React, { useState } from 'react';
import { CurrenciesBlock } from '@components/currencies-block';
import { FormattedMessage } from 'react-intl';
import { AdminTable } from '@components/admin-table';
import { StatusBanner } from '@components/status-banner';
import dynamic from 'next/dynamic';
import { Layout } from '../../layout';
import styles from './styles.module.scss';

const TransactionInfoModal = dynamic(() => import('src/components/transaction-confirmation-modal').then((mod) => mod.TransactionConfirmationModal));
const TransactionCancelModal = dynamic(() => import('@components/transaction-cancel-modal').then((mod) => mod.TransactionCancelModal));
const TransactionHistoryModal = dynamic(() => import('@components/transaction-history-modal').then((mod) => mod.TransactionHistoryModal));
const TransactionErrorModal = dynamic(() => import('@components/transaction-error-modal').then((mod) => mod.TransactionErrorModal));

export const AdminPanelPage = () => {
  const [isTransactionModalOpen, setTransactionModalOpen] = useState(false);
  const [isTransactionCancelModalOpen, setTransactionCancelModalOpen] = useState(false);
  const [isTransactionHistoryModalOpen, setTransactionHistoryModalOpen] = useState(false);
  const [isTransactionErrorModalOpen, setTransactionErrorModalOpen] = useState(false);

  return (
    <>
      {isTransactionModalOpen && <TransactionInfoModal isOpen={isTransactionModalOpen} onClose={() => setTransactionModalOpen(false)} transactionId={67416873461239} />}
      {isTransactionCancelModalOpen && <TransactionCancelModal isOpen={isTransactionCancelModalOpen} onClose={() => setTransactionCancelModalOpen(false)} />}
      {isTransactionHistoryModalOpen && <TransactionHistoryModal isOpen={isTransactionHistoryModalOpen} onClose={() => setTransactionHistoryModalOpen(false)} transactionId={67416873461239} />}
      {isTransactionErrorModalOpen && <TransactionErrorModal isOpen={isTransactionErrorModalOpen} onClose={() => setTransactionErrorModalOpen(false)} transactionId={67416873461239} />}
      <Layout isAdminLayout>
        <div className={styles.container}>
          <AdminTable />
          <CurrenciesBlock title={<FormattedMessage id="" defaultMessage="Текущие курсы обмена" />} />
          <StatusBanner onClick={() => setTransactionCancelModalOpen(true)} status="error" />
          <StatusBanner status="completed" onClick={() => setTransactionModalOpen(true)} />
          <StatusBanner onClick={() => setTransactionHistoryModalOpen(true)} status="processing" />
          <StatusBanner onClick={() => setTransactionErrorModalOpen(true)} status="processing" />
        </div>
      </Layout>
    </>
  );
};
