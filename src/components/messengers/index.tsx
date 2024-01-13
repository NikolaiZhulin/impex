import React, { FC } from 'react';
import cn from 'classnames';
import { MESSENGERS } from '@components/messengers/constants';
import styles from './styles.module.scss';

export type Props = {
  className?: string
}

export const Messengers: FC<Props> = (props) => {
  const {
    className,
  } = props;
  return (
    <div className={cn(styles.container, className)}>
      {MESSENGERS.map(({ icon, link }) => <a key={link} href={link}>{icon}</a>)}
    </div>
  );
};
