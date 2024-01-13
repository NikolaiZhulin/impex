import React, { FC, ReactNode } from 'react';
import { BaseDropdown } from '@components/base-dropdown';
import styles from './styles.module.scss';

export type Props = {
  options: { label: ReactNode, value: ReactNode }[]
}

export const SmallDropdown: FC<Props> = (props) => {
  const {
    options,
  } = props;

  return (
    <BaseDropdown options={options} className={styles.smallDropdown} />
  );
};
