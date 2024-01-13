import React, { FC } from 'react';
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
import styles from './styles.module.scss';

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

const columns = [
  columnHelper.accessor('id', {
    header: () => <div>ID</div>,
    cell: (info) => <div><IdItem id={info.getValue()} /></div>,
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
    cell: (info) => <StatusBanner onClick={() => console.log(info.row.original.id)} status={info.getValue()} />,
  }),
];

export const AdminMainTable: FC<Props> = (props) => {
  const { data, className } = props;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
  );
};
