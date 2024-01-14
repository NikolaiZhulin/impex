import React, { FC, useState } from 'react';
import cn from 'classnames';
import { Button } from '@components/button';
import { FormattedMessage } from 'react-intl';
import { Tabs } from '@components/tabs';
import { DropdownInput } from '@components/dropdown-input';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes.constants';
import { CurrencyDropdownItem } from '@components/currency-dropdown-item';
import styles from './styles.module.scss';

export type Props = {
  className?: string
}

const OPTIONS = [
  { label: <CurrencyDropdownItem icon="/images/icons/ruble.svg" slug="ВТС" name="Bitcoin" isFullWidth />, value: '1' },
  { label: <CurrencyDropdownItem icon="/images/icons/ruble.svg" slug="QWE" name="Bitcoin" isFullWidth />, value: '2' },
  { label: <CurrencyDropdownItem icon="/images/icons/ruble.svg" slug="RUB" name="Bitcoin" isFullWidth />, value: '3' },
  { label: <CurrencyDropdownItem icon="/images/icons/ruble.svg" slug="EEE" name="Bitcoin" isFullWidth />, value: '4' },
  { label: <CurrencyDropdownItem icon="/images/icons/ruble.svg" slug="SJS" name="Bitcoin" isFullWidth />, value: '5' },
];

export const ConverterForm: FC<Props> = (props) => {
  const { className } = props;
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const redirectToExchangeCurrencyPage = () => {
    router.push(ROUTES.EXCHANGE_CURRENCY).catch(null);
  };

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.tabsWrapper}>
        <Tabs
          labels={['КУПИТЬ', 'ПРОДАТЬ', 'ОБМЕНЯТЬ']}
          activeLabelIndex={activeTabIndex}
          onClickTab={setActiveTabIndex}
          tabItemClassname={styles.tabItem}
          activeTabItemClassname={styles.activeTabItem}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.infoText}>Мин. 500 RUB – Mакс.  3,500,000 RUB</span>
        <div className={styles.inputsWrapper}>
          <DropdownInput
            label="Вы отправляете"
            rightLabel="1 SOL ≈ 5,421.00938185 RUB"
            options={OPTIONS}
          />
          <DropdownInput
            label="Вы получаете"
            options={OPTIONS}
          />
        </div>
        <Button className={styles.formButton} onClick={redirectToExchangeCurrencyPage} isFullWidth>
          <FormattedMessage id="buy_currency_now" defaultMessage="Купить BNB сейчас" />
        </Button>
      </div>
    </div>
  );
};
