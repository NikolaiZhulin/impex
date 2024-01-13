import React, { FC } from 'react';
import { Popup } from '@components/popup';
import { FormattedMessage } from 'react-intl';
import { TransactionInfoTable } from 'src/components/transaction-info-table';
import { TransactionUserTable } from '@components/transaction-user-table';
import styles from './styles.module.scss';

type Props = {
  isOpen: boolean
  onClose: () => void
  transactionId: number
}

const info = {
  currencySell: { qty: 5000, icon: '/images/icons/ruble.svg', currency: 'BNB' },
  currencyBuy: { qty: 0.222332222, icon: '/images/icons/ruble.svg', currency: 'RUB' },
  commission: { qty: 500, currency: 'RUB' },
  wallet: '0x01AD2...r6745',
};

const userInfo = { name: 'Иванов Иван Иванович', email: 'alex.parfenkov@gmail.com', phone: '+7 (00) 123-45-67' };

export const TransactionHistoryModal: FC<Props> = (props) => {
  const { isOpen, onClose, transactionId } = props;

  return (
    <Popup appearFrom="center" isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.container}>
        <h3 className={styles.title}>id&nbsp;{transactionId}</h3>
        <div className={styles.transactionInfoWrapper}>
          <div className={styles.infoItem}>
            <span className={styles.subTitle}>
              <FormattedMessage id="" defaultMessage="Дата" />
            </span>
            <span className={styles.info}>
              05/12/2023 | 11:16:23
            </span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.subTitle}>
              <FormattedMessage id="" defaultMessage="Коментарий пользователя" />
            </span>
            <span className={styles.info}>
              В течение которого часа мне поступят денежные средства?
            </span>
          </div>
        </div>
        <div className={styles.tableWrapper}>
          <div className={styles.tableHeadText}>
            <span className={styles.subTitle}><FormattedMessage id="" defaultMessage="Информация о пользователе" /></span>
          </div>
          <TransactionUserTable data={userInfo} />
        </div>
        <div className={styles.tableWrapper}>
          <div className={styles.tableHeadText}>
            <span className={styles.subTitle}><FormattedMessage id="" defaultMessage="Денежный перевод" /></span>
          </div>
          <TransactionInfoTable data={info} />
        </div>
      </div>
    </Popup>
  );
};
