import React, { FC } from 'react';
import cn from 'classnames';
import { SmallDropdown } from '@components/small-dropdown';
import { FormattedMessage } from 'react-intl';
import { Pagination } from '@components/pagination';
import styles from './styles.module.scss';

type Props = {
  className?: string
}

const PAGE_OPTIONS = [
  { label: 10, value: 10 },
  { label: 20, value: 20 },
  { label: 30, value: 30 },
];

export const AdminTableFooter: FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={cn(styles.tableFooter, className)}>
      <div className={styles.footerLeftBlock}>
        <div className={styles.tableFooterText}>
          <FormattedMessage id="" defaultMessage="Количество клиентов" />: 400
        </div>
        <div className={styles.tableFooterText}>
          <FormattedMessage id="" defaultMessage="Количество обменов" />: 400
        </div>
      </div>
      <div className={styles.footerRightBlock}>
        <div className={styles.rowSettings}>
          <div className={styles.tableFooterText}>
            <FormattedMessage id="" defaultMessage="Строки" />
          </div>
          <SmallDropdown options={PAGE_OPTIONS} />
        </div>
        <div className={styles.tableFooterText}>
          1-10&nbsp;<FormattedMessage id="" defaultMessage="из" />&nbsp;100
        </div>
        <Pagination />
      </div>
    </div>
  );
};
