import React, {
  FC,
} from 'react';
import cn from 'classnames';
import { ReactComponent as CheckBoxIcon } from 'public/images/icons/check.svg';
import { ReactComponent as CheckBoxGradientIcon } from 'public/images/icons/geadient-check.svg';

import styles from './styles.module.scss';

type Props = {
  name: string
  checked: boolean,
  onChange: (checked: boolean) => void,
  className?: string,
  label?: string | React.ReactNode,
}

export const Checkbox: FC<Props> = ({
  className, label, checked, name, onChange, ...props
}) => (
  <div className={cn(styles.box, className)}>
    <label
      className={cn(styles.container, { [styles.containerChecked]: checked })}
      htmlFor={name}
    >
      <input
        type="checkbox"
        id={name}
        value={name}
        checked={checked}
        onChange={() => onChange(!checked)}
        {...props}
      />
      <CheckBoxGradientIcon className={styles.checkGradientIcon} />
      <CheckBoxIcon className={styles.checkIcon} />
    </label>
    <span className={styles.text}>{label}</span>
  </div>
);
