import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export type Props = {
  slug: string
  name?: string
  icon: string
  isFullWidth?: boolean
  className?: string
}

export const CurrencyDropdownItem: FC<Props> = (props) => {
  const {
    name, slug, icon, isFullWidth, className,
  } = props;

  return (
    <div className={cn(styles.container, className)}>
      <span className={styles.slugWrapper}>
        <img data-attribute="icon" className={cn(styles.icon, { [styles.small]: isFullWidth })} src={icon} alt={name} />
        <span data-attribute="slug" className={cn(styles.slug, { [styles.open]: isFullWidth })}>{slug}</span>
      </span>
      { isFullWidth && <span data-attribute="name" className={styles.name}>{name}</span>}
    </div>
  );
};
