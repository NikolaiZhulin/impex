import React, { FC } from 'react';
import { Popup } from '@components/popup';
import { FormattedMessage } from 'react-intl';
import { BalanceTable } from '@components/balance-modal/balance-table';
import styles from './styles.module.scss';

type Props = {
  isOpen: boolean
  onClose: () => void
}

const balance = [
  {
    currency: { icon: '/images/icons/ruble.svg', slug: 'BNB' }, name: 'Binance', sum: 5000,
  },
  {
    currency: { icon: '/images/icons/ruble.svg', slug: 'BNB' }, name: 'Binance', sum: 5000,
  },
  {
    currency: { icon: '/images/icons/ruble.svg', slug: 'BNB' }, name: 'Binance', sum: 5000,
  },
  {
    currency: { icon: '/images/icons/ruble.svg', slug: 'BNB' }, name: 'Binance', sum: 5000,
  },
  {
    currency: { icon: '/images/icons/ruble.svg', slug: 'BNB' }, name: 'Binance', sum: 5000,
  },
  {
    currency: { icon: '/images/icons/ruble.svg', slug: 'BNB' }, name: 'Binance', sum: 5000,
  },
  {
    currency: { icon: '/images/icons/ruble.svg', slug: 'BNB' }, name: 'Binance', sum: 5000,
  },
  {
    currency: { icon: '/images/icons/ruble.svg', slug: 'BNB' }, name: 'Binance', sum: 5000,
  },
  {
    currency: { icon: '/images/icons/ruble.svg', slug: 'BNB' }, name: 'Binance', sum: 5000,
  },

];

export const BalanceModal: FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Popup appearFrom="center" isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.container}>
        <h3 className={styles.title}><FormattedMessage id="" defaultMessage="Ваш баланс" /></h3>
        <p className={styles.subTitle}>
          <FormattedMessage id="" defaultMessage="Ваш текущий баланс" />
        </p>
        <BalanceTable className={styles.balanceTable} data={balance} />
      </div>
    </Popup>
  );
};
