import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export type Props = {
  onClick: () => void
  children: ReactNode;
  outline?: boolean
  isFullWidth?: boolean;
  green?: boolean
  className?: string
}

export const Button: FC<Props> = (props) => {
  const {
    onClick, children, isFullWidth, green, outline, className,
  } = props;
  return (
    <button className={cn(styles.button, { [styles.fullWidth]: isFullWidth, [styles.outline]: outline, [styles.green]: green }, className)} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
