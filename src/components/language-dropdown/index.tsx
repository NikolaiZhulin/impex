import React, { FC, useState } from 'react';
import { Listbox } from '@headlessui/react';
import cn from 'classnames';
import { ReactComponent as ChevronDown } from 'public/images/icons/chevron-down.svg';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import styles from './styles.module.scss';

type Props = {
  className?: string
}

export const LanguageDropdown: FC<Props> = (props) => {
  const { className } = props;
  const { locale } = useIntl();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('ru');
  const handleChangeLocale = (lang: 'ru' | 'en') => {
    setSelectedLanguage(lang);
    const urlWithLocale = `${lang === 'ru' ? '' : `/${ lang}`}${router.asPath}`;
    (window as any).location = `${window.location.protocol}//${window.location.host}${urlWithLocale}`;
  };

  return (
    <Listbox value={selectedLanguage} onChange={handleChangeLocale}>
      <div className={cn(styles.listBoxWrapper, className)}>
        <Listbox.Button className={styles.listBoxButton}><ChevronDown />{locale.toUpperCase()}</Listbox.Button>
        <Listbox.Options className={styles.optionsList}>
          <Listbox.Option
            className={styles.listBoxItem}
            value="ru"
          >
            <span>RU</span>
          </Listbox.Option>
          <Listbox.Option
            className={styles.listBoxItem}
            value="en"
          >
            <span>EN</span>
          </Listbox.Option>
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
