import React, {
  DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode,
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
  options: {text: string, value: string, icon: string}[]
  selectedOption: {text: string, value: string, icon: string}
  setSelectedOption: (value: {text: string, value: string, icon: string}) => void
}

export const DropdownInput: FC<Props> = (props) => {
  const {
    className,
    options,
    selectedOption,
    setSelectedOption,
    ...inputProps
  } = props;

  return (
    <div className={cn(styles.container, className)}>
      <Input
        {...inputProps}
        type="number"
        className={styles.input}
        additionalComponent={<Dropdown options={options} setSelected={setSelectedOption} selected={selectedOption} />}
      />
    </div>
  );
};
