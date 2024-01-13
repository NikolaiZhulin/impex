import React, { FC, useState } from 'react';
import cn from 'classnames';
import { Button } from '@components/button';
import { FormattedMessage } from 'react-intl';
import { Tabs } from '@components/tabs';
import { DropdownInput } from '@components/dropdown-input';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes.constants';
import styles from './styles.module.scss';

export type Props = {
  className?: string
}

const OPTIONS = [
  { text: 'RUB', value: '1', icon: '/images/icons/ruble.svg' },
  { text: 'BTC', value: '2', icon: '/images/icons/ruble.svg' },
  { text: 'ETC', value: '3', icon: '/images/icons/ruble.svg' },
  { text: 'QWE', value: '4', icon: '/images/icons/ruble.svg' },
  { text: 'RUB', value: '5', icon: '/images/icons/ruble.svg' },
];

export const ConverterForm: FC<Props> = (props) => {
  const { className } = props;
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selected, setSelected] = useState(OPTIONS[0]);

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
            selectedOption={selected}
            setSelectedOption={setSelected}
          />
          <DropdownInput
            label="Вы получаете"
            options={OPTIONS}
            selectedOption={selected}
            setSelectedOption={setSelected}
          />
        </div>
        <Button className={styles.formButton} onClick={redirectToExchangeCurrencyPage} isFullWidth>
          <FormattedMessage id="buy_currency_now" defaultMessage="Купить BNB сейчас" />
        </Button>
      </div>
    </div>
  );
};
