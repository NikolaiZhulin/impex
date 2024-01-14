import React, { FC, memo, ReactNode } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props ={
  href: string
  text: ReactNode
  onClick?: () => void
  isActive?: boolean
  className?: string
}

const LightedLink: FC<Props> = (props) => {
  const {
    href, text, isActive, onClick, className,
  } = props;

  if (onClick) {
    return (
      <button onClick={onClick} className={cn(styles.link, { [styles.active]: isActive }, className)}>
        {text}
      </button>
    );
  }

  return (
    <Link href={href || ''} className={cn(styles.link, { [styles.active]: isActive }, className)}>
      {text}
    </Link>
  );
};

export default memo(LightedLink);
