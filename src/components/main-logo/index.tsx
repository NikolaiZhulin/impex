import cn from 'classnames';
import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@constants/routes.constants';
import styles from './styles.module.scss';

type Props= {
  className?: string
}

export const MainLogo = ({ className }: Props) => (
  <Link href={ROUTES.HOME_PAGE} className={cn(styles.mainLogo, className)}>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
    <img
      onClick={(e) => e.preventDefault()}
      className={styles.logoIcon}
      src="/images/logo-1.png"
      alt="logo"
    />
    <div className={styles.text}>Impex Crypto</div>
  </Link>
);
