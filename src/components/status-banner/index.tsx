import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import { ReactComponent as InfoIcon } from 'public/images/icons/info.svg';
import { ReactComponent as CheckIcon } from 'public/images/icons/check-circle.svg';
import { ReactComponent as SpinnerIcon } from 'public/images/icons/spinner.svg';
import { FormattedMessage } from 'react-intl';
import styles from './styles.module.scss';

export type Props = {
  status: string
  onClick: () => void
  className?: string
}

type BannerVariant = {
  [key: string]: {
    text: ReactNode;
    icon: ReactNode;
  };
};

export const StatusBanner: FC<Props> = (props) => {
  const {
    status, onClick, className,
  } = props;
  const bannerVariant: BannerVariant = {
    error: {
      text: <FormattedMessage id="" defaultMessage="Ошибка" />,
      icon: <InfoIcon className={styles.icon} />,
    },
    processing: {
      text: <FormattedMessage id="" defaultMessage="В ожидании" />,
      icon: <SpinnerIcon className={styles.icon} />,
    },
    completed: {
      text: <FormattedMessage id="" defaultMessage="Отправлено" />,
      icon: <CheckIcon className={styles.icon} />,
    },
  };
  return (
    <button onClick={onClick} className={cn(styles.bannerContainer, styles[status], className)}>{bannerVariant[status].text}{bannerVariant[status].icon}</button>
  );
};
