import React, { FC } from 'react';
import { Popup } from '@components/popup';
import { FormattedMessage } from 'react-intl';
import { Button } from '@components/button';
import { TransactionInfoTable } from 'src/components/transaction-info-table';
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

export const TransactionConfirmationModal: FC<Props> = (props) => {
  const { isOpen, onClose, transactionId } = props;

  return (
    <Popup appearFrom="center" isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.container}>
        <h3 className={styles.title}><FormattedMessage id="" defaultMessage="Информация о переводе id" />&nbsp;{transactionId}</h3>
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
              <FormattedMessage id="" defaultMessage="Данные получателя" />
            </span>
            <span className={styles.info}>
              Александр Алехсандрович Александров, alex.parfenkov@gmail.com
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
            <span className={styles.subTitle}>Денежный перевод</span>
            <span className={styles.subTitle}>1 BNB ≈ 22,026.35646536 RUB</span>
          </div>
          <TransactionInfoTable data={info} />
        </div>

        <div className={styles.buttonsWrapper}>
          <Button outline onClick={() => console.log(1)}>
            <FormattedMessage id="" defaultMessage="Отменить" />
          </Button>
          <Button onClick={() => console.log(1)}>
            <FormattedMessage id="" defaultMessage="Подтвердить" />
          </Button>
        </div>
      </div>
    </Popup>
  );
};
