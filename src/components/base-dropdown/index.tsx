import React, { FC, ReactNode, useState } from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import { ReactComponent as ChevronDown } from 'public/images/icons/chevron-down.svg';
import cn from 'classnames';
import styles from './styles.module.scss';

export type Props = {
  options: { label: ReactNode, value: ReactNode }[]
  className?: string
}

export const BaseDropdown: FC<Props> = (props) => {
  const {
    options, className,
  } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const DropdownIndicator = (
    prop: DropdownIndicatorProps<{ label: ReactNode; value: ReactNode; }, true>,
  ) => (
    <components.DropdownIndicator {...prop}>
      <ChevronDown className={styles.icon} />
    </components.DropdownIndicator>
  );

  return (
    <Select
      className={cn(styles.dropdown, { [styles.open]: isDropdownOpen }, className)}
      classNamePrefix="select"
      defaultValue={options[0]}
      name="color"
      options={options}
      unstyled
      onMenuOpen={() => setIsDropdownOpen(true)}
      onMenuClose={() => setIsDropdownOpen(false)}
      components={{ DropdownIndicator }}
    />
  );
};
