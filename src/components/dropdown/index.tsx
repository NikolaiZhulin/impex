import React, { FC, ReactNode, useState } from 'react';
import cn from 'classnames';
import { ReactComponent as ChevronDown } from 'public/images/icons/chevron-down.svg';
import Select, {
  components, DropdownIndicatorProps, MultiValue,
} from 'react-select';
import styles from './styles.module.scss';

type Option = {
  label: React.ReactNode;
  value: React.ReactNode;
}

type Props = {
  options: Option[]
  setIsOpen?: (value: boolean) => void
  className?: string
}

export const Dropdown: FC<Props> = (props) => {
  const {
    options, setIsOpen, className,
  } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [option, setOption] = useState< MultiValue<Option> | null>(null);

  const handleOnOpen = () => {
    setIsDropdownOpen(true);
    setIsOpen?.(true);
  };
  const handleOnClose = () => {
    setIsDropdownOpen(false);
    setIsOpen?.(false);
  };

  const DropdownIndicator = (
    prop: DropdownIndicatorProps<{ label: ReactNode; value: ReactNode; }, true>,
  ) => (
    <components.DropdownIndicator {...prop}>
      <ChevronDown className={styles.icon} />
    </components.DropdownIndicator>
  );

  const handleOnChange = (selectedOption: MultiValue<Option> | null) => {
    setOption(selectedOption);
  };

  return (
    <Select
      className={cn(styles.dropdown, { [styles.open]: isDropdownOpen }, className)}
      classNamePrefix="select"
      defaultValue={options[0]}
      name="color"
      options={options}
      onChange={handleOnChange}
      value={option || options[0]}
      unstyled
      onMenuOpen={handleOnOpen}
      onMenuClose={handleOnClose}
      components={{ DropdownIndicator }}
    />
  );
};
