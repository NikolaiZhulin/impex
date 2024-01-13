import React, { FC } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import cn from 'classnames';
import styles from './styles.module.scss';

type Balance = {
  currency: {icon: string, slug: string}
  name: string
  sum: number
}

type Props = {
  data: Balance[],
  className?: string
}

const columnHelper = createColumnHelper<Balance>();

const columns = [
  columnHelper.accessor('currency', {
    header: () => <span>Валюта</span>,
    cell: (info) => <div className={styles.currencyCell}><img src={info.getValue().icon} alt="" /> {info.getValue().slug}</div>,
  }),
  columnHelper.accessor('name', {
    header: () => <div>Название</div>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('sum', {
    header: () => <div>Сумма</div>,
    cell: (info) => info.renderValue(),
  }),
];

export const BalanceTable: FC<Props> = (props) => {
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
