import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import { ReactComponent as NumbBg } from 'public/images/how-to-exchange/numb.svg';
import styles from './styles.module.scss';

export type Props = {
  text: ReactNode
  title: string
  numb: string
  className?: string
}

export const NumberedItem: FC<Props> = (props) => {
  const {
    text, title, numb, className,
  } = props;
  return (
    <div className={cn(styles.cardContainer, className)}>
      <div className={styles.numbWrapper}>
        <NumbBg className={styles.numbBg} />
        <span className={styles.numb}>{numb}</span>
      </div>
      <div className={styles.textWrapper}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
