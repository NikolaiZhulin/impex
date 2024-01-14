import React, { FC, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import cn from 'classnames';
import { StatusBanner } from '@components/status-banner';
import { IdItem } from '@components/id-item';
import { CurrencyInfo } from '@components/currency-info';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';

const TransactionInfoModal = dynamic(() => import('src/components/transaction-confirmation-modal').then((mod) => mod.TransactionConfirmationModal));
const TransactionCancelModal = dynamic(() => import('@components/transaction-cancel-modal').then((mod) => mod.TransactionCancelModal));
const TransactionErrorModal = dynamic(() => import('@components/transaction-error-modal').then((mod) => mod.TransactionErrorModal));

type AdminTableInfo = {
  id: number
  date: string
  email: string
  sum: {icon: string, value: number, slug: string}
  exchangeRate: string
  fiatCurrency: {icon: string, value: number, slug: string}
  commission: { value: number, slug: string}
  status: string
}

type Props = {
  data: AdminTableInfo[],
  className?: string
}

const columnHelper = createColumnHelper<AdminTableInfo>();

export const AdminMainTable: FC<Props> = (props) => {
  const { data, className } = props;

  const [isTransactionModalOpen, setTransactionModalOpen] = useState(false);
  const [isTransactionCancelModalOpen, setTransactionCancelModalOpen] = useState(false);
  const [isTransactionErrorModalOpen, setTransactionErrorModalOpen] = useState(false);

  const columns = [
    columnHelper.accessor('id', {
      header: () => <div>ID</div>,
      cell: (info) => <div onClick={() => setTransactionModalOpen(true)}><IdItem id={info.getValue()} /></div>,
    }),
    columnHelper.accessor('date', {
      header: () => <div>Дата и время</div>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email', {
      header: () => <div>E-mail</div>,
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('sum', {
      header: () => <div>Сумма</div>,
      cell: (info) => <CurrencyInfo slug={info.getValue().slug} price={info.getValue().value} icon={info.getValue().icon} />,
    }),
    columnHelper.accessor('exchangeRate', {
      header: () => <div>Текущий курс</div>,
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('fiatCurrency', {
      header: () => <div>Фиатная валюта</div>,
      cell: (info) => <CurrencyInfo slug={info.getValue().slug} price={info.getValue().value} icon={info.getValue().icon} />,
    }),
    columnHelper.accessor('commission', {
      header: () => <div>Комиссия</div>,
      cell: (info) => <CurrencyInfo slug={info.getValue().slug} price={info.getValue().value} />,
    }),
    columnHelper.accessor('status', {
      header: () => <div>Статус операции</div>,
      cell: (info) => <StatusBanner onClick={() => setTransactionErrorModalOpen(true)} status={info.getValue()} />,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {isTransactionModalOpen && <TransactionInfoModal isOpen={isTransactionModalOpen} onClose={() => setTransactionModalOpen(false)} transactionId={67416873461239} />}
      {isTransactionCancelModalOpen && <TransactionCancelModal isOpen={isTransactionCancelModalOpen} onClose={() => setTransactionCancelModalOpen(false)} />}
      {isTransactionErrorModalOpen && <TransactionErrorModal isOpen={isTransactionErrorModalOpen} onClose={() => setTransactionErrorModalOpen(false)} />}
      <div className={cn(styles.container, className)}>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
