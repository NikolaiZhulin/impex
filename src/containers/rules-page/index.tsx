import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as BitcoinIcon } from 'public/images/icons/bitcoin-icon.svg';
import { OurContactsSection } from '@components/our-contacts-section';
import { Breadcrumbs } from '@components/breadcrumbs';
import { Layout } from '../../layout';

import styles from './styles.module.scss';
import { scrollToElement } from '../../lib/scroll-to-element';

export const RulesPage = () => (
  <Layout>
    <div className={styles.container}>
      <Breadcrumbs
        links={[
          { name: <FormattedMessage id="" defaultMessage="Главная" />, link: '/' },
          { name: <FormattedMessage id="" defaultMessage="Правила сообщества" />, link: '/' },
        ]}
      />
      <h1 className={styles.mainTitle}>
        <FormattedMessage id="" defaultMessage="Правила сообщества" />
      </h1>

      <div className={styles.mainDescription}>
        <p>
          <FormattedMessage
            id=""
            defaultMessage="Криптовалюты становятся все более популярными и
       привлекательными для многих людей, но перед тем, как пользоваться нашей платформой,
        рекомендуем  ознакомиться с основными правилами сообщества."
          />
        </p>
      </div>

      <div className={styles.content}>
        <h4 className={styles.contentTitle}>
          <FormattedMessage id="community_rules" defaultMessage="Содержание" />
        </h4>
        <div className={styles.contentPoint} onClick={() => scrollToElement('ad-ban')}>
          <BitcoinIcon className={styles.bitcoinIcon} />
          <span className={styles.contentPointText}>
            <FormattedMessage id="" defaultMessage="Запрет на спам и рекламу" />
          </span>
        </div>
        <div className={styles.contentPoint} onClick={() => scrollToElement('scam_ban')}>
          <BitcoinIcon className={styles.bitcoinIcon} />
          <span className={styles.contentPointText}>
            <FormattedMessage id="" defaultMessage="Запрет на распространение мошеннических схем" />
          </span>
        </div>
        <div className={styles.contentPoint} onClick={() => scrollToElement('personal-data-ban')}>
          <BitcoinIcon className={styles.bitcoinIcon} />
          <span className={styles.contentPointText}>
            <FormattedMessage id="" defaultMessage="Запрет на публикацию личных данных" />
          </span>
        </div>
        <div className={styles.contentPoint} onClick={() => scrollToElement('safety-ban')}>
          <BitcoinIcon className={styles.bitcoinIcon} />
          <span className={styles.contentPointText}>
            <FormattedMessage id="" defaultMessage="Соблюдение правил безопасности при обмене криптовалюты" />
          </span>
        </div>
        <div className={styles.contentPoint} onClick={() => scrollToElement('safety-guarantee')}>
          <BitcoinIcon className={styles.bitcoinIcon} />
          <span className={styles.contentPointText}>
            <FormattedMessage id="" defaultMessage="Гарантия безопасности для пользователей Impex Crypto" />
          </span>
        </div>
      </div>

      <div className={styles.rules}>
        <div className={styles.rulesPoint}>
          <h2 className={styles.rulesPointTitle} id="ad-ban">
            <span className={styles.pointNumber}>01</span>
            <FormattedMessage id="" defaultMessage="Запрет на спам и рекламу" />
          </h2>

          <div className={styles.textContainer}>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="Запрет на спам и рекламу на платформе криптовалюты является важной
             мерой для обеспечения безопасности и удобства пользователей. Это означает, что нельзя отправлять
              нежелательную рекламу или спам-сообщения на платформе, которые могут быть навязчивыми и раздражающими
               для пользователей."
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="В целях соблюдения запрета на спам и рекламу, платформа криптовалюты может использовать
               различные методы, включая фильтры для определения и блокировки нежелательных сообщений, а также механизмы
                жалоб, которые пользователи могут использовать для сообщения о нежелательной рекламе или спаме."
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="Кроме того, пользователи также могут сами принять меры для защиты себя от спама и
               нежелательной рекламы, такие как не предоставлять свои контактные данные третьим лицам и не подписываться
                на подозрительные рассылки."
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="В целом, запрет на спам и рекламу на платформе криптовалюты является важным шагом для
               обеспечения безопасности и удобства пользователей. Пользователи могут быть уверены, что их личные данные
                и финансовые средства защищены, а платформа криптовалюты может сохранить свою репутацию как надежный
                 и безопасный сервис для использования."
              />
            </p>
          </div>
        </div>

        <div className={styles.rulesPoint}>
          <h2 className={styles.rulesPointTitle} id="scam_ban">
            <span className={styles.pointNumber}>02</span>
            <FormattedMessage id="" defaultMessage="Запрет на распространение мошеннических схем" />
          </h2>

          <div className={styles.textContainer}>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="Мошенничество является серьезным преступлением. Поэтому, запрещено распространять
               мошеннические схемы на бирже, а также совершать любые действия, которые могут навредить другим
                участникам сообщества."
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="В целях соблюдения запрета на спам и рекламу, платформа криптовалюты может использовать
               различные методы, включая фильтры для определения и блокирования нежелательных сообщений, а также
                механизмы жалоб, которые пользователи могут использовать для сообщения о нежелательной рекламе
                 или спаме."
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="Кроме того, пользователи также могут сами принять меры для защиты себя от спама
               и нежелательной рекламы, такие как не предоставлять свои контактные данные третьим лицам и не
                подписываться на подозрительные рассылки."
              />
            </p>
          </div>
        </div>

        <div className={styles.rulesPoint}>
          <h2 className={styles.rulesPointTitle} id="personal-data-ban">
            <span className={styles.pointNumber}>03</span>
            <FormattedMessage id="" defaultMessage="Запрет на публикацию личных данных" />
          </h2>

          <div className={styles.textContainer}>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="Защита личной информации является важным аспектом безопасности на бирже. Поэтому,
               запрещено публиковать личные данные других участников сообщества без их согласия."
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="В целях соблюдения запрета на спам и рекламу, платформа криптовалюты может использовать
               различные методы, включая фильтры для определения и блокировки нежелательных сообщений, а
                также механизмы жалоб, которые пользователи могут использовать для сообщения о нежелательной
                 рекламе или спаме."
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="Кроме того, пользователи также могут сами принять меры для защиты себя от
               спама и нежелательной рекламы, такие как не предоставлять свои контактные данные третьим
                лицам и не подписываться на подозрительные рассылки."
              />
            </p>
          </div>
        </div>

        <div className={styles.rulesPoint}>
          <h2 className={styles.rulesPointTitle} id="safety-ban">
            <span className={styles.pointNumber}>04</span>
            <FormattedMessage id="" defaultMessage="Соблюдение правил безопасности при обмене криптовалюты" />
          </h2>

          <div className={styles.textContainer}>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="Безопасность при обмене криптовалюты является важным аспектом работы на бирже. Поэтому,
               необходимо соблюдать правила безопасности при обмене криптовалюты."
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="В целях соблюдения запрета на спам и рекламу, платформа криптовалюты может использовать
               различные методы, включая фильтры для определения и блокировки нежелательных сообщений, а также
                механизмы жалоб, которые пользователи могут использовать для сообщения о нежелательной рекламе или спаме."
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="Кроме того, пользователи также могут сами принять меры для защиты себя от спама и
               нежелательной рекламы, такие как не предоставлять свои контактные данные третьим лицам и не
                подписываться на подозрительные рассылки."
              />
            </p>
          </div>
        </div>

        <div className={styles.rulesPoint}>
          <h2 className={styles.rulesPointTitle} id="safety-guarantee">
            <span className={styles.pointNumber}>05</span>
            <FormattedMessage id="" defaultMessage="Гарантия безопасности для пользователей Impex Crypto" />
          </h2>

          <div className={styles.textContainer}>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="Безопасность является нашим приоритетом. Наша биржа не разглашает данные пользователя
               другим лицам. "
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="В целях соблюдения запрета на спам и рекламу, платформа криптовалюты может использовать
               различные методы, включая фильтры для определения и блокировки нежелательных сообщений,
                а также механизмы жалоб, которые пользователи могут использовать для сообщения
                 о нежелательной рекламе или спаме."
              />
            </p>
            <p>
              <FormattedMessage
                id=""
                defaultMessage="Кроме того, пользователи также могут сами принять меры для защиты себя
               от спама и нежелательной рекламы, такие как не предоставлять свои контактные
                данные третьим лицам и не подписываться на подозрительные рассылки."
              />
            </p>
          </div>
        </div>
      </div>
      <div className={styles.contactsSection}>
        <OurContactsSection />
      </div>

    </div>
  </Layout>
);
