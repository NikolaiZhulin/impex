import React, { FC } from 'react';
import cn from 'classnames';
import { ReactComponent as ArrowRight } from 'public/images/icons/arrow-right.svg';
import styles from './styles.module.scss';

export type Props = {
  direction: 'left' | 'right'
  onClick?: () => void
  disabled?: boolean
  className?: string
  id?: string
}

export const ArrowButton: FC<Props> = (props) => {
  const {
    onClick, direction, id, disabled, className,
  } = props;
  return (
    <button id={id} className={cn(styles.button, { [styles.disabled]: disabled }, className)} onClick={onClick}>
      <ArrowRight
        className={cn(styles.arrowIcon, { [styles.left]: direction === 'left' },
          { [styles.right]: direction === 'right' })}
      />
    </button>
  );
};
