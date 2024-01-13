import React, { FC } from 'react';
import cn from 'classnames';
import { Head } from '@components/admin-table/head';
import { AdminMainTable } from '@components/admin-table/table';
import { ADMIN_TABLE_DATA } from '@components/admin-table/table/constants';
import { AdminTableFooter } from '@components/admin-table/footer';
import styles from './styles.module.scss';

export type Props = {
  className?: string
}

export const AdminTable: FC<Props> = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={cn(styles.container, className)}>
      <Head />
      <div>
        <AdminMainTable data={ADMIN_TABLE_DATA} />
        <AdminTableFooter />
      </div>
    </div>
  );
};
