import React, { FC } from 'react';
import { Popup } from '@components/popup';
import { FormattedMessage } from 'react-intl';
import { Button } from '@components/button';
import Textarea from '@components/textarea';
import styles from './styles.module.scss';

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const TransactionCancelModal: FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Popup appearFrom="center" isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.container}>
        <h3 className={styles.title}><FormattedMessage id="" defaultMessage="Причина отмены" /></h3>
        <div className={styles.transactionInfoWrapper}>
          <div className={styles.infoItem}>
            <span className={styles.subTitle}>
              <FormattedMessage id="" defaultMessage="Дата" />
            </span>
            <span className={styles.info}>
              05/12/2023 | 11:16:23
            </span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.subTitle}>
              <FormattedMessage id="" defaultMessage="Данные получателя" />
            </span>
            <span className={styles.info}>
              Александр Алехсандрович Александров, alex.parfenkov@gmail.com
            </span>
          </div>
        </div>
        <div className={styles.textareaWrapper}>
          <div className={styles.tableHeadText}>
            <span className={styles.subTitle}><FormattedMessage id="" defaultMessage="Денежный перевод" /></span>
          </div>
          <Textarea className={styles.textarea} placeholder="Укажите причину по которой перевод невозможен" />
        </div>

        <div className={styles.buttonsWrapper}>
          <Button onClick={() => console.log(1)}>
            <FormattedMessage id="" defaultMessage="Отправить" />
          </Button>
        </div>
      </div>
    </Popup>
  );
};
