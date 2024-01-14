import React from 'react';
import { FormattedMessage } from 'react-intl';
import { SectionHeader } from '@components/section-header';
import { Card } from '@components/card';
import { COMPANY_VALUES } from '@containers/main-page/values-section/constants';
import styles from './styles.module.scss';

export const ValuesSection = () => (
  <section className={styles.container} id="advantages">
    <SectionHeader
      text={<FormattedMessage id="company_values" defaultMessage="Ценности компании Impex Crypto" />}
      labelText="ПРЕИМУЩЕСТВА"
    />
    <div className={styles.cardsContainer}>
      {COMPANY_VALUES.map(({ title, icon, text }) => <Card key={title} text={text} title={title} icon={icon} />)}
    </div>
  </section>
);
