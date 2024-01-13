import React, { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props = {
  icon: string
  text: string
  className?: string
}

export const DropdownItem: FC<Props> = (props) => {
  const {
    text, icon, className,
  } = props;

  return (
    <div className={cn(styles.dropdownItem, className)}>
      <Image className={styles.icon} src={icon} width={26} height={26} alt={text} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};
