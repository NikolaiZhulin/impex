import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export type Props = {
  id: number
  className?: string
}

export const IdItem: FC<Props> = (props) => {
  const {
    id, className,
  } = props;

  const truncateToFourDigits = (number: number) => {
    let numberString = number.toString();

    if (numberString.length > 4) {
      numberString = `${numberString.slice(0, 4) }...`;
    }

    return numberString;
  };

  const shortId = truncateToFourDigits(id);

  return <span className={cn(styles.idContainer, className)}>{shortId}</span>;
};
