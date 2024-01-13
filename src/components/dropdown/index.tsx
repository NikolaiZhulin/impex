import React, { FC } from 'react';
import { Listbox } from '@headlessui/react';
import cn from 'classnames';
import { DropdownItem } from '@components/dropdown/dropdown-item';
import { ReactComponent as ChevronDown } from 'public/images/icons/chevron-down.svg';
import styles from './styles.module.scss';

type Props = {
  selected: {text: string, value: string, icon: string}
  setSelected: (value: {text: string, value: string, icon: string}) => void
  options: {text: string, value: string, icon: string}[]
  className?: string
}

export const Dropdown: FC<Props> = (props) => {
  const {
    options, setSelected, selected, className,
  } = props;

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={cn(styles.listBoxWrapper, className)}>

        <Listbox.Button className={styles.listBoxButton}>
          <DropdownItem text={selected.text} icon={selected.icon} />
          <ChevronDown />
        </Listbox.Button>

        <Listbox.Options className={styles.optionsList}>
          {options.map((option) => (
            <Listbox.Option
              className={styles.listBoxItem}
              value={option}
            >
              <DropdownItem text={option.text} icon={option.icon} />
            </Listbox.Option>
          ))}
        </Listbox.Options>

      </div>
    </Listbox>
  );
};
