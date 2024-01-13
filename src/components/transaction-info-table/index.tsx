import React, { FC } from 'react';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import styles from './styles.module.scss';

type Info = {
  currencySell: { qty: number, icon: string, currency: string },
  currencyBuy: { qty: number, icon: string, currency: string },
  commission: { qty: number, currency: string },
  wallet: string,
};

type Props = {
  data: Info,
  className?: string
}

export const TransactionInfoTable: FC<Props> = (props) => {
  const { data, className } = props;
  const {
    currencySell, currencyBuy, wallet, commission,
  } = data;

  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.column, styles.firstColumn)}>
        <span className={styles.topRow}><FormattedMessage id="" defaultMessage="Продажа валюты" /></span>
        <div className={styles.value}>
          <img className={styles.icon} src={currencySell.icon} alt="icon" />
          <span>{currencySell.qty}</span>
        </div>
      </div>
      <div className={cn(styles.column, styles.secondColumn)}>
        <span className={styles.topRow}><FormattedMessage id="" defaultMessage="Покупка валюты" /></span>
        <div className={styles.value}>
          <img className={styles.icon} src={currencyBuy.icon} alt="icon" />
          <span>{currencyBuy.qty}</span>
        </div>
      </div>
      <div className={cn(styles.column, styles.thirdColumn)}>
        <span className={styles.topRow}><FormattedMessage id="" defaultMessage="Комиссия" /></span>
        <div className={styles.value}>
          <span>{commission.qty}&nbsp;{commission.currency}</span>
        </div>
      </div>
      <div className={cn(styles.column, styles.fourthColumn)}>
        <span className={styles.topRow}><FormattedMessage id="" defaultMessage="Кошелек" /></span>
        <div className={styles.value}>
          <span className={styles.wallet}>{wallet}</span>
        </div>
      </div>
    </div>
  );
};
