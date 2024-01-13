import React from 'react';
import { FormattedMessage } from 'react-intl';
import { SectionHeader } from '@components/section-header';
import { ContactsCard } from '@components/contacts-card';
import { useWindowSize } from '@hooks/use-window-size';
import { CONTACT_INFO, JURISTIC_DOCUMENTS } from '@components/our-contacts-section/constants';
import { ReactComponent as Document } from '../../../public/images/icons/document-info.svg';
import styles from './styles.module.scss';

export const OurContactsSection = () => {
  const { width } = useWindowSize();
  const isTablet = Number(width) <= 768;

  return (
    <section className={styles.container}>
      <SectionHeader
        text={<FormattedMessage id="our_contacts" defaultMessage="Наши контакты" />}
        labelText="МЫ НА СВЯЗИ"
      />
      <div className={styles.cardsContainer}>
        <ContactsCard
          title="Контактаная информация"
          icon={isTablet ? '/images/contacts/home-tablet.png' : '/images/contacts/home.png'}
        >
          <div className={styles.contactInformation}>
            {CONTACT_INFO.map((item) => (
              <div key={item.title} className={styles.contactInformationItem}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.text}>{item.text}</div>
              </div>
            ))}
          </div>
        </ContactsCard>
        <ContactsCard
          title="Юридические документы"
          icon={isTablet ? '/images/contacts/document-tablet.png' : '/images/contacts/document.png'}
        >
          <div className={styles.juristicDocuments}>
            <div className={styles.row}>
              {JURISTIC_DOCUMENTS.slice(0, 3).map((item) => (
                <a key={item.href} className={styles.juristicDocumentsLink}>
                  <Document className={styles.documentIcon} />
                  <div className={styles.text}>{item.text}</div>
                </a>
              ))}
            </div>
            <div className={styles.row}>
              {JURISTIC_DOCUMENTS.slice(3, 6).map((item) => (
                <a key={item.href} className={styles.juristicDocumentsLink}>
                  <Document className={styles.documentIcon} />
                  <div className={styles.text}>{item.text}</div>
                </a>
              ))}
            </div>
          </div>
        </ContactsCard>
      </div>
    </section>
  );
};
