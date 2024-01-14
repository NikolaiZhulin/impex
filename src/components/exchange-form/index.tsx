import React, { FC, useState } from 'react';
import cn from 'classnames';
import { Button } from '@components/button';
import { FormattedMessage } from 'react-intl';
import { DropdownInput } from '@components/dropdown-input';
import { Input } from '@components/input';
import Textarea from '@components/textarea';
import { useCopyToClipboard } from '@hooks/use-copy-to-clipboard';
import { Checkbox } from '@components/checkbox';
import { SuccessModal } from '@components/success-modal';
import { ErrorModal } from '@components/error-modal';
import { CurrencyDropdownItem } from '@components/currency-dropdown-item';
import styles from './styles.module.scss';

export type Props = {
  className?: string
}

const OPTIONS = [
  { label: <CurrencyDropdownItem icon="/images/icons/ruble.svg" slug="ВТС" name="Bitcoin" isFullWidth />, value: '1' },
  { label: <CurrencyDropdownItem icon="/images/icons/ruble.svg" slug="QWE" name="Bitcoin" isFullWidth />, value: '2' },
  { label: <CurrencyDropdownItem icon="/images/icons/ruble.svg" slug="RUB" name="Bitcoin" isFullWidth />, value: '3' },
  { label: <CurrencyDropdownItem icon="/images/icons/ruble.svg" slug="EEE" name="Bitcoin" isFullWidth />, value: '4' },
  { label: <CurrencyDropdownItem icon="/images/icons/ruble.svg" slug="SJS" name="Bitcoin" isFullWidth />, value: '5' },
];

const TARGET_WALLET = '0x01DA2rC43B443a94F5aaa30ScE977864390eB676';

export const ExchangeForm: FC<Props> = (props) => {
  const { className } = props;
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorOpen, setErrorModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [, copy] = useCopyToClipboard();

  // TODO: temporary function for opening modals
  const randomFunctionCaller = () => {
    const randomIndex = Math.floor(Math.random() * 2);

    if (randomIndex === 0) {
      setSuccessModalOpen(true);
    } else {
      setErrorModalOpen(true);
    }
  };

  const bottomForm = {
    buy: <Input
      label="Введите номер вашего криптокошелька*"
      placeholder="0x01DA2rC43B443a94F5aaa30ScE977864390eB676"
    />,
    sell:
  <>
    <Input
      label="Введите номер вашей карты*"
      placeholder="**** **** **** ****"
    />
    <Input
      label="Дата действия карты*"
      placeholder="MM/YY"
    />
    <div className={styles.recipientWalletInfo}>
      <span className={styles.recipientWalletTitle}>
        <FormattedMessage id="" defaultMessage="Номер криптокошелька получателя" />
      </span>
      <div className={styles.recipientWalletContent}>
        <span className={styles.wallet}>{TARGET_WALLET}</span>
        <button className={styles.walletCopy} onClick={() => copy(TARGET_WALLET)}>
          <FormattedMessage id="" defaultMessage="Скопировать" />
        </button>
      </div>
    </div>
  </>,
  };

  return (
    <>
      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setSuccessModalOpen(false)} />
      <ErrorModal isOpen={isErrorOpen} onClose={() => setErrorModalOpen(false)} />
      <div className={cn(styles.container, className)}>
        <h4 className={styles.formTitle}>
          <FormattedMessage id="" defaultMessage="Обменяйте RUB (российский рубль) на BNB" />
        </h4>
        <span className={styles.infoText}>Мин. 500 RUB – Mакс.  3,500,000 RUB</span>
        <div className={styles.dropdownInputsWrapper}>
          <DropdownInput
            label="Вы отправляете"
            rightLabel="1 SOL ≈ 5,421.00938185 RUB"
            options={OPTIONS}
          />
          <DropdownInput
            label="Вы получаете"
            options={OPTIONS}
          />
        </div>
        <div className={styles.userDataForm}>
          <h4 className={styles.useDataFormTitle}>
            <FormattedMessage id="" defaultMessage="Данные пользователя" />
          </h4>
          <div className={styles.inputsWrapper}>
            <Input
              label="Имя*"
              placeholder="Введите ваше имя"
            />
            <Input
              label="Фамилия*"
              placeholder="Введите вашу фамилию"
            />
            <Input
              label="Отчество*"
              placeholder="Введите ваше отчество"
            />
            <Input
              label="E-mail*"
              placeholder="username@gmail.com"
            />
            <Input
              label="Телефон*"
              placeholder="+7"
            />
            <Textarea label="Комментарий" placeholder="Введите ваш комментарий" />
          </div>
        </div>
        <div className={styles.userDataForm}>
          <h4 className={styles.useDataFormTitle}>
            <FormattedMessage id="" defaultMessage="Введите данные перевода" />
          </h4>
          <div className={styles.inputsWrapper}>
            {bottomForm.sell}
          </div>
        </div>
        <Button className={styles.formButton} onClick={randomFunctionCaller} isFullWidth>
          <FormattedMessage id="buy_currency_now" defaultMessage="Купить BNB сейчас" />
        </Button>
        <Checkbox className={styles.checkbox} label="Я прочитал и согласен с Условиями пользования" name="conditions" checked={checked} onChange={setChecked} />
      </div>
    </>
  );
};
