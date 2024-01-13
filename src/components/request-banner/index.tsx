import React, { FC } from 'react';
import cn from 'classnames';
import { ReactComponent as CloseIcon } from 'public/images/icons/close.svg';
import { ReactComponent as InfoIcon } from 'public/images/icons/info.svg';

import { FormattedMessage } from 'react-intl';
import styles from './styles.module.scss';

export type Props = {
  requestQty: number
  className?: string
}

export const RequestBanner: FC<Props> = (props) => {
  const {
    requestQty, className,
  } = props;
  console.log(requestQty);
  return (
    <div className={cn(styles.cardContainer, className)}>
      <InfoIcon className={styles.infoIcon} />
      <span className={styles.text}><FormattedMessage id="" defaultMessage="У нас 6 новых заявок" /></span>
      <span className={styles.textMobile}><FormattedMessage id="" defaultMessage="6 заявок" /></span>
      <button className={styles.closeButton}>
        <CloseIcon className={styles.closeIcon} />
      </button>
    </div>
  );
};
