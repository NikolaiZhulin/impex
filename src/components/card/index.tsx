import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import styles from './styles.module.scss';

export type Props = {
  text: ReactNode
  title: string
  icon: string
  className?: string
}

export const Card: FC<Props> = (props) => {
  const {
    text, title, icon, className,
  } = props;
  return (
    <div className={cn(styles.cardContainer, className)}>
      <Image width={78} height={61} src={icon} alt="icon" className={styles.icon} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <Image width={100} height={100} src="/images/values/ornament.svg" alt="coin" className={styles.ornament} />
    </div>
  );
};
