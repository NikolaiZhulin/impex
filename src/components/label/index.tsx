import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export type Props = {
  text: string
  className?: string
}

export const Label: FC<Props> = (props) => {
  const { text, className } = props;
  return (
    <div className={cn(styles.container, className)}>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
