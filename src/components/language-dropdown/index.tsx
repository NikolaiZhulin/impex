import React, { FC } from 'react';
import { Listbox } from '@headlessui/react';
import cn from 'classnames';
import { ReactComponent as ChevronDown } from 'public/images/icons/chevron-down.svg';
import styles from './styles.module.scss';

type Props = {
  className?: string
}

export const LanguageDropdown: FC<Props> = (props) => {
  const { className } = props;

  return (
    <Listbox value="RU" onChange={() => console.log()}>
      <div className={cn(styles.listBoxWrapper, className)}>
        <Listbox.Button className={styles.listBoxButton}><ChevronDown />RU</Listbox.Button>
        <Listbox.Options className={styles.optionsList}>
          <Listbox.Option
            className={styles.listBoxItem}
            value="RU"
          >
            <span>RU</span>
          </Listbox.Option>
          <Listbox.Option
            className={styles.listBoxItem}
            value="EN"
          >
            <span>EN</span>
          </Listbox.Option>
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
