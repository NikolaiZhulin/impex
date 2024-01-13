import React, { FC, useState } from 'react';
import cn from 'classnames';
import { Button } from '@components/button';
import { FormattedMessage } from 'react-intl';
import { RequestBanner } from '@components/request-banner';
import dynamic from 'next/dynamic';
import { BaseDropdown } from '@components/base-dropdown';
import { DropdownItemWithCount } from '@components/dropdown-item-with-count';
import { Input } from '@components/input';
import styles from './styles.module.scss';

const BalanceModal = dynamic(() => import('@components/balance-modal').then((mod) => mod.BalanceModal));

export type Props = {
  className?: string
}

const TRANSACTIONS_OPTIONS = [
  { label: <DropdownItemWithCount text={<FormattedMessage id="" defaultMessage="Все транзакции" />} count={1} />, value: 'Все транзакции' },
  { label: <DropdownItemWithCount text={<FormattedMessage id="" defaultMessage="Покупка" />} count={54} />, value: 'Покупка' },
  { label: <DropdownItemWithCount text={<FormattedMessage id="" defaultMessage="Продажа" />} count={66} />, value: 'Продажа' },
  { label: <DropdownItemWithCount text={<FormattedMessage id="" defaultMessage="Обмен" />} count={45} />, value: 'Обмен' },
];

export const Head: FC<Props> = (props) => {
  const {
    className,
  } = props;
  const [isBalanceModalOpen, setBalanceModalOpen] = useState(false);

  return (
    <>
      <BalanceModal isOpen={isBalanceModalOpen} onClose={() => setBalanceModalOpen(false)} />
      <div className={cn(styles.container, className)}>
        <div className={styles.leftBlock}>
          <RequestBanner className={styles.requestBanner} requestQty={6} />
          <BaseDropdown options={TRANSACTIONS_OPTIONS} />
        </div>
        <div className={styles.rightBlock}>
          <Button className={styles.button} outline onClick={() => setBalanceModalOpen(true)}>
            <span className={styles.desktopButtonText}><FormattedMessage id="" defaultMessage="Посмотреть баланс" /></span>
            <span className={styles.mobileButtonText}><FormattedMessage id="" defaultMessage="Баланс" /></span>
          </Button>
          <div className={styles.rightBottomBlock}>
            <Input wrapClassName={styles.filterInput} placeholder="ДД/ММ/ГГГГ" label="Начало периода" />
            <Input wrapClassName={styles.filterInput} placeholder="ДД/ММ/ГГГГ" label="Конец периода" />
            <Button className={cn(styles.button, styles.transactionsButton)} green onClick={() => setBalanceModalOpen(true)}>
              <FormattedMessage id="" defaultMessage="Вывод транзакций" />
            </Button>
          </div>
        </div>
        {/* <SmallDropdown options={PAGE_OPTIONS} /> */}

      </div>
    </>
  );
};
