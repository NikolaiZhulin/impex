import React, { FC, memo, ReactNode } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props ={
  href: string
  text: ReactNode
  isActive?: boolean
  className?: string
}

const LightedLink: FC<Props> = (props) => {
  const {
    href, text, isActive, className,
  } = props;

  return (
    <Link href={href || ''} className={cn(styles.link, { [styles.active]: isActive }, className)}>
      {text}
    </Link>
  );
};

export default memo(LightedLink);
