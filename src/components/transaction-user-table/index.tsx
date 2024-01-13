import React, { FC } from 'react';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import styles from './styles.module.scss';

type User = { name: string, email: string, phone: string };

type Props = {
  data: User,
  className?: string
}

export const TransactionUserTable: FC<Props> = (props) => {
  const { data, className } = props;
  const {
    name, email, phone,
  } = data;

  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.column, styles.firstColumn)}>
        <span className={styles.topRow}><FormattedMessage id="" defaultMessage="Продажа валюты" /></span>
        <div className={styles.value}>
          <span>{name}</span>
        </div>
      </div>
      <div className={cn(styles.column, styles.secondColumn)}>
        <span className={styles.topRow}><FormattedMessage id="" defaultMessage="Покупка валюты" /></span>
        <div className={styles.value}>
          <span>{email}</span>
        </div>
      </div>
      <div className={cn(styles.column, styles.thirdColumn)}>
        <span className={styles.topRow}><FormattedMessage id="" defaultMessage="Комиссия" /></span>
        <div className={styles.value}>
          <span>{phone}</span>
        </div>
      </div>
    </div>
  );
};
