import React, { memo } from 'react';
import { MainLogo } from '@components/main-logo';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import cn from 'classnames';
import styles from './styles.module.scss';
import { FOOTER_LINKS } from './constants';

const Footer = () => {
  const intl = useIntl();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>

      <div className={styles.footerContent}>
        <div className={styles.logoWrapper}>
          <MainLogo />
          <span className={cn(styles.companyInfo)}>
            ООО &quot;Импекс Крипто&quot; УНП: 591029489
          </span>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.infoItem}>
            <h4 className={styles.infoItemTitle}>КОМПАНИЯ</h4>
            {FOOTER_LINKS.company.map((item) => (
              <Link key={item.href} href={item.href} className={styles.infoItemText}>
                {intl.formatMessage(item.text)}
              </Link>
            ))}
          </div>
          <div className={styles.infoItem}>
            <h4 className={styles.infoItemTitle}>ЛЕГАЛЬНОСТЬ</h4>
            {FOOTER_LINKS.legality.map((item) => (
              <Link key={item.href} href={item.href} className={styles.infoItemText}>
                {intl.formatMessage(item.text)}
              </Link>
            ))}
          </div>
          <div className={styles.infoItem}>
            <h4 className={styles.infoItemTitle}>КОНТАКТЫ</h4>
            {FOOTER_LINKS.contacts.map((item) => <span key={item.text} className={styles.infoItemText}>{item.text}</span>)}
          </div>
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <span className={styles.companyInfo}>
          ООО &quot;Импекс Крипто&quot; УНП: 591029489
        </span>
        <span className={styles.bottomText}>© 2020–{currentYear} Impex Crypto</span>
      </div>
      <div className={styles.backgroundEllipse1} />
      <div className={styles.backgroundEllipse2} />
    </footer>
  );
};

export default memo(Footer);
