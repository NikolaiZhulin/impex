import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export type Props = {
  slug?: string
  icon?: string
  price?: number
  className?: string
}

export const CurrencyInfo: FC<Props> = (props) => {
  const {
    slug, icon, price, className,
  } = props;
  return (
    <div className={cn(styles.container, className)}>
      {icon && <img className={styles.icon} src={icon} alt={slug} />}
      <div><span>{price}</span><span>&nbsp;{slug}</span></div>
    </div>
  );
};
