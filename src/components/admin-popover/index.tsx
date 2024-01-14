import React, { FC } from 'react';
import { Popover } from '@headlessui/react';
import cn from 'classnames';
import { ReactComponent as ExitIcon } from 'public/images/icons/exit.svg';
import { ReactComponent as ChevronDown } from 'public/images/icons/chevron-down.svg';
import styles from './styles.module.scss';

export type Props = {
  className?: string
}

export const AdminPopover: FC<Props> = (props) => {
  const {
    className,
  } = props;
  return (
    <Popover className={cn(styles.container, className)}>
      <Popover.Button className={styles.popoverButton}>
        <div className={styles.adminInfo}>
          <div>USERNAME</div>
          <div className={styles.role}>ADMIN</div>
        </div>
        <ChevronDown className={styles.chevronDown} />
      </Popover.Button>

      <Popover.Panel className={styles.panel}>
        <button className={styles.button} onClick={() => console.log(1)}>
          <div>ВЫХОД</div>
          <ExitIcon className={styles.exitIcon} />
        </button>
      </Popover.Panel>
    </Popover>
  );
};
