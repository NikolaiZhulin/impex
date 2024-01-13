import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import styles from './styles.module.scss';

export type Props = {
  title: string
  icon: string
  children: ReactNode
  className?: string
}

export const ContactsCard: FC<Props> = (props) => {
  const {
    title, icon, children, className,
  } = props;
  return (
    <div className={cn(styles.cardContainer, className)}>
      <h4 className={styles.title}>{title}</h4>
      {children}
      <Image width={78} height={61} src={icon} alt="icon" className={styles.icon} />
      <Image width={100} height={100} src="/images/values/ornament.svg" alt="coin" className={styles.ornament} />
    </div>
  );
};
