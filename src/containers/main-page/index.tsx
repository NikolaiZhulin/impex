import React from 'react';
import { FaqSection } from '@containers/main-page/faq-section';
import { HeadSection } from '@containers/main-page/head-section';
import { ValuesSection } from '@containers/main-page/values-section';
import { HowToExchangeSection } from '@containers/main-page/how-to-exchange-section';
import { OurContactsSection } from 'src/components/our-contacts-section';
import { Layout } from '../../layout';

import styles from './styles.module.scss';

export const MainPage = () => (
  <Layout>
    <div className={styles.container}>
      <HeadSection />
      <ValuesSection />
      <HowToExchangeSection />
      <FaqSection />
      <OurContactsSection />
    </div>
  </Layout>
);
