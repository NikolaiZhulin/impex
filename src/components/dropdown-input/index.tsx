import React, {
  DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, useState,
} from 'react';
import cn from 'classnames';
import { Input } from '@components/input';
import { Dropdown } from '@components/dropdown';
import styles from './styles.module.scss';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  placeholder?: string
  className?: string
  wrapClassName?: string
  inputError?: string | null
  errorClassName?: string
  label?: string
  rightLabel?: string
  labelClassName?: string
  icon?: ReactNode
  iconContainerClassName?: string
  dropdownValue?: number
  options: { label: ReactNode, value: ReactNode }[]
}

export const DropdownInput: FC<Props> = (props) => {
  const {
    className,
    options,
    ...inputProps
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(styles.container, className)}>
      <Input
        {...inputProps}
        type="number"
        className={styles.input}
      />
      <div className={cn(styles.dropdownWrapper, { [styles.open]: isOpen })}>
        <Dropdown setIsOpen={setIsOpen} options={options} />
      </div>
    </div>
  );
};
