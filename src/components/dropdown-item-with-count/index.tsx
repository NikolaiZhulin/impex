import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export type Props = {
  text: ReactNode
  count: number;
  className?: string
}

export const DropdownItemWithCount: FC<Props> = (props) => {
  const {
    count, text, className,
  } = props;
  return (
    <span className={cn(styles.container, className)}>
      <span>{text}</span><span className={styles.count}>{count}</span>
    </span>
  );
};
