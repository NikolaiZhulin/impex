import React, { FC } from 'react';
import cn from 'classnames';
import { ReactComponent as ChevronRight } from 'public/images/icons/arrow-right.svg';
import { ReactComponent as StepForward } from 'public/images/icons/step-forward.svg';
import styles from './styles.module.scss';

export type Props = {
  onClick: () => void
  direction?: 'left' | 'right'
  isLastPageButton?: boolean
  disabled?: boolean
  className?: string
}

export const PaginationButton: FC<Props> = (props) => {
  const {
    onClick, direction, isLastPageButton, disabled, className,
  } = props;

  const iconClass = cn(styles.icon, {
    [styles.left]: direction === 'left',
  });

  return (
    <button className={cn(styles.button, { [styles.disabled]: disabled }, className)} onClick={onClick}>
      {isLastPageButton
        ? <StepForward className={iconClass} />
        : <ChevronRight className={iconClass} />}
    </button>
  );
};
