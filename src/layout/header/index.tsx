import cn from 'classnames';
import React, { memo } from 'react';
import { LanguageDropdown } from '@components/language-dropdown';
import { ReactComponent as BurgerIcon } from 'public/images/icons/burger-icon.svg';
import { MainLogo } from '@components/main-logo';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';

const HeaderLinks = dynamic(() => import('./header-links'));

type Props= {
  onOpenNavBar: () => void
  isAdminLayout?: boolean
  className?: string
}

const Header = ({ className, isAdminLayout, onOpenNavBar }: Props) => (
  <header className={cn(styles.header, className)}>
    <div className={cn(styles.headerContent, { [styles.admin]: isAdminLayout })}>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      {!isAdminLayout && <button className={styles.burgerButton} onClick={onOpenNavBar}><BurgerIcon /></button>}
      <MainLogo className={styles.headerLogo} />
      {!isAdminLayout && <HeaderLinks className={styles.headerLinks} />}
      <LanguageDropdown className={styles.languageDropdown} />
    </div>
  </header>
);

Header.defaultProps = {
  className: '',
};

export default memo(Header);
