import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import { Label } from '@components/label';
import styles from './styles.module.scss';

export type Props = {
  text: ReactNode
  labelText: string
  className?: string
}

export const SectionHeader: FC<Props> = (props) => {
  const { text, labelText, className } = props;
  return (
    <div className={cn(styles.sectionHeader, className)}>
      <Label text={labelText} />
      <h2 className={styles.text}>{text}</h2>
    </div>
  );
};
