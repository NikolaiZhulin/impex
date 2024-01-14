import React, { FC } from 'react';
import cn from 'classnames';
import { PaginationButton } from '@components/pagination-button';
import { SmallDropdown } from '@components/small-dropdown';
import styles from './styles.module.scss';

type Props = {
  className?: string
}

const PAGE_OPTIONS = [
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
];

export const Pagination: FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={cn(styles.pagination, className)}>
      <div className={styles.buttonsBlock}>
        <PaginationButton disabled onClick={() => console.log(1)} direction="left" isLastPageButton />
        <PaginationButton disabled onClick={() => console.log(1)} direction="left" />
      </div>
      <SmallDropdown options={PAGE_OPTIONS} />
      <div className={styles.buttonsBlock}>
        <PaginationButton onClick={() => console.log(1)} />
        <PaginationButton onClick={() => console.log(1)} isLastPageButton />
      </div>

    </div>
  );
};
