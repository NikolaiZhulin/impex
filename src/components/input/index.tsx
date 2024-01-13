import React, {
  DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode,
} from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  placeholder?: string
  className?: string
  wrapClassName?: string
  inputError?: string | null
  errorClassName?: string
  label?: ReactNode
  rightLabel?: string
  labelClassName?: string
  icon?: ReactNode
  iconContainerClassName?: string
  additionalComponent?: ReactNode
}

export const Input: FC<Props> = (props) => {
  const {
    placeholder,
    value,
    label,
    rightLabel,
    onChange,
    className,
    wrapClassName,
    inputError,
    errorClassName,
    labelClassName,
    additionalComponent,
    ...rest
  } = props;

  return (
    <div className={cn(styles.container, { [styles.containerError]: inputError }, wrapClassName)}>
      {Boolean(label) || Boolean(rightLabel) ? (
        <div className={styles.labels}>
          <label
            className={cn(styles.label, labelClassName)}
            htmlFor={label as string}
          >{label}
          </label>
          <label
            className={cn(styles.label, styles.rightLabel)}
            htmlFor={label as string}
          >{rightLabel}
          </label>
        </div>
      ) : null}

      <div className={styles.inputWrapper}>
        <input
          autoComplete="off"
          onChange={onChange}
          className={
            cn(styles.input,
              { [styles.withoutContent]: !value },
              className)
          }
          name={placeholder}
          id={placeholder}
          placeholder={placeholder}
          value={value}
          {...rest}
        />

        <div className={styles.additionalComponent}>
          {additionalComponent}
        </div>
      </div>
      {inputError && (
        <div
          className={cn(styles.errorText,
            errorClassName)}
        >{inputError}
        </div>
      )}
    </div>
  );
};
