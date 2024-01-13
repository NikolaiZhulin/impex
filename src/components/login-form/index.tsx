import React, { FC } from 'react';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Input } from '@components/input';
import { Button } from '@components/button';
import styles from './styles.module.scss';

export type Props = {
  className?: string
}

export const LoginForm: FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={cn(styles.container, className)}>
      <h3 className={styles.formTitle}><FormattedMessage id="" defaultMessage="Авторизация" /></h3>

      <div className={styles.inputsWrapper}>
        <Input
          placeholder="username@gmail.com"
          label={<FormattedMessage id="" defaultMessage="Введите  ваш username" />}
        />

        <Input
          type="password"
          label={<FormattedMessage id="" defaultMessage="Введите ваш пароль" />}
        />
      </div>

      <Button className={styles.submitButton} onClick={() => console.log('1111')} isFullWidth>
        <FormattedMessage id="" defaultMessage="Войти в систему" />
      </Button>
    </div>
  );
};
