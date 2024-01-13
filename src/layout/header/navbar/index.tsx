import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { useClickOutside } from '@hooks/use-click-outside';
import { ReactComponent as CloseIcon } from 'public/images/icons/close.svg';
import Image from 'next/image';
import { MainLogo } from '@components/main-logo';
import styles from './styles.module.scss';
import { HEADER_LINKS } from '../constants';

type Props= {
  isOpen?: boolean
  onClose: () => void
  className?: string
}

export const NavBar = ({ className, isOpen, onClose }: Props) => {
  const intl = useIntl();
  const ref = useRef(null);
  useClickOutside(ref, async () => (new Promise(() => onClose())));

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const setBodyOverflow = (overflow: string) => {
      document.body.style.overflow = overflow;
    };
    if (isOpen) {
      setBodyOverflow('hidden');
    } else {
      setBodyOverflow('overlay');
      timeout = setTimeout(() => null, 250);
    }

    return (): void => {
      setBodyOverflow('overlay');
      clearTimeout(timeout);
    };
  }, [isOpen]);

  return (
    <nav className={cn(styles.navBarContainer, { [styles.active]: isOpen }, className)} ref={ref}>
      <div className={styles.navBarHead}>
        <MainLogo className={styles.headerLogo} />

        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <ul className={cn(styles.nav)}>
        {HEADER_LINKS.map(({ text, href }) => (
          <li className={styles.navItem} key={href}>
            <Link href={href} onClick={onClose}>
              {intl.formatMessage(text)}
            </Link>
          </li>
        ))}
      </ul>
      <Image width={250} height={250} src="/images/nav/coin1.png" alt="coin" className={styles.firstCoin} />
      <Image width={250} height={250} src="/images/nav/coin2.png" alt="coin" className={styles.secondCoin} />
      <Image width={250} height={250} src="/images/nav/coin3.png" alt="coin" className={styles.thirdCoin} />
    </nav>
  );
};
