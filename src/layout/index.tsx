import cn from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import dynamic from 'next/dynamic';
import Header from './header';
import styles from './styles.module.scss';
import BackgroundEllipsis from './background-ellipsis';

const NavBar = dynamic(() => import('./header/navbar').then((mod) => mod.NavBar));
const Footer = dynamic(() => import('./footer'));

type Props= {
  isAdminLayout?: boolean
  className?: string
}

export const Layout = ({
  children, className, isAdminLayout = false,
}: PropsWithChildren<Props>) => {
  const [isNavMenuActive, setNavMenuActive] = useState(false);

  return (
    <div className={cn(styles.box, className)}>
      {!isAdminLayout && <NavBar className={styles.nav} isOpen={isNavMenuActive} onClose={() => setNavMenuActive(false)} />}
      <Header className={styles.header} onOpenNavBar={() => setNavMenuActive(true)} isAdminLayout={isAdminLayout} />
      <main className={styles.main}>
        {children}
      </main>
      {!isAdminLayout && <Footer />}
      <BackgroundEllipsis />
    </div>
  );
};
