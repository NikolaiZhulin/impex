import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export type Props = {
  slug: string
  name: string
  icon: string
  price: number
  className?: string
}

export const PopularCurrencyItem: FC<Props> = (props) => {
  const {
    name, slug, icon, price, className,
  } = props;
  return (
    <div className={cn(styles.container, className)}>
      <img className={styles.icon} src={icon} alt={name} />
      <span className={styles.slug}>{slug}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>${price}</span>
    </div>
  );
};
