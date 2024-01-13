import React, { FC } from 'react';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { ROUTES } from '@constants/routes.constants';
import styles from './styles.module.scss';

export type Props = {
  className?: string
}

export const RulesBlock: FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={cn(styles.container, className)}>
      <h4 className={styles.title}><FormattedMessage id="" defaultMessage="Правила обмена криптовалюты" /></h4>
      <div className={styles.rulesWrapper}>
        <p>
          <FormattedMessage id="" defaultMessage="1. Все транзакции проходят проверку на предмет ПОД." />
        </p>
        <p>
          <FormattedMessage
            id=""
            defaultMessage="2. Новый заказ активен в течение 60 минут; после этого система
           автоматически удаляет его. Обменный курс фиксируется в рабочее время сервиса в течение 30 минут с момента
            создания нового заказа. Подробности — условия фиксации. Если вы произвели оплату, но ваш заказ был удален,
             пожалуйста, свяжитесь со службой технической поддержки через диалоговое окно на сайте или в Telegram."
          />
        </p>
        <p>
          <FormattedMessage
            id=""
            defaultMessage="3. Стандартное время выполнения платежных поручений составляет до 24
           часов; максимальное время оплаты - до 72 часов (в рабочее время обменника)."
          />
        </p>
        <p>
          <FormattedMessage
            id=""
            defaultMessage="4. Обменник использует следующие криптовалютные биржи в
           качестве оракула цен: binance.com, bitexbit.com, whitebit.com, bitstamp.net, huobi.com. Заказы
            хеджируются рыночным ордером."
          />
        </p>
        <p>
          <FormattedMessage
            id="exchange.5rule"
            values={{
              a: (chunks) => <Link href={ROUTES.RULES}>{chunks}</Link>,
            }}
            defaultMessage="5. Более подробную информацию об инструкциях по обмену можно найти
           здесь."
          />
        </p>
        <p>
          <FormattedMessage
            id=""
            defaultMessage="6. Запросы о любых изменениях в заказе (реквизиты, контактная
           информация и т.д.) осуществляются исключительно по электронной почте, которая была указана в заказе."
          />
        </p>
      </div>
      <div className={styles.divider} />
      <div className={cn(styles.rulesWrapper, styles.bottomText)}>
        <p>
          <FormattedMessage
            id=""
            defaultMessage="Пожалуйста, будьте внимательны! Все поля должны быть заполнены точно в соответствии с
             инструкциями. В противном случае платеж может не пройти."
          />
        </p>
        <p>
          <FormattedMessage
            id=""
            defaultMessage="Убедитесь, что ваши личные и контактные данные указаны правильно. Контактная информация
             в заявке должна быть действительной и доступной, поскольку любые апелляции и изменения данных в заявке
              осуществляются с помощью этих контактов."
          />
        </p>
      </div>
    </div>
  );
};
