import React, { FC } from 'react';
import { Popup } from '@components/popup';
import { FormattedMessage } from 'react-intl';
import { Button } from '@components/button';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes.constants';
import styles from './styles.module.scss';

type Props = {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export const SuccessModal: FC<Props> = (props) => {
  const { isOpen, onClose, className } = props;
  const router = useRouter();

  const redirectToMainPage = () => {
    router.push(ROUTES.HOME_PAGE).catch(null);
    onClose();
  };

  return (
    <Popup appearFrom="center" isOpen={isOpen} onClose={onClose} className={className}>
      <div className={styles.container}>
        <h3 className={styles.title}><FormattedMessage id="" defaultMessage="Данные успешно отправлены" /></h3>
        <p className={styles.subTitle}>
          <FormattedMessage id="" defaultMessage="Платеж поступит на ваш счетв течение 72 часов" />
        </p>

        <img className={styles.image} src="/images/card.png" alt="card" />

        <Button className={styles.button} onClick={redirectToMainPage} isFullWidth>
          <FormattedMessage id="" defaultMessage="Вернуться на главную" />
        </Button>
      </div>
    </Popup>
  );
};
