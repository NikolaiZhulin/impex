import { defineMessages } from 'react-intl';

export const ROUTES = {
  HOME_PAGE: '/',
  ADVANTAGES: '#advantages',
  SCHEME_OF_WORK: '#scheme-of-work',
  FAQ: '/#faq',
  CONTACTS: '#contacts',
  RULES: '/rules',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_AND_CONDITIONS: '/terms-and-conditions',
  EXCHANGE_CURRENCY: '/exchange-currency',
} as const;

export const intlMessages = defineMessages({
  home: {
    id: 'header.home_page',
    defaultMessage: 'Главная',
  },
  advantages: {
    id: 'header.advantages',
    defaultMessage: 'Преимущества',
  },
  scheme_of_work: {
    id: 'header.scheme_of_work',
    defaultMessage: 'Схема работы',
  },
  faq: {
    id: 'header.faq',
    defaultMessage: 'FAQ',
  },
  contacts: {
    id: 'header.contacts',
    defaultMessage: 'Контакты',
  },
  community_rules: {
    id: 'header.community_rules',
    defaultMessage: 'Правила сообщества',
  },
  company: {
    id: 'company',
    defaultMessage: 'Компания',
  },
  legality: {
    id: 'legality',
    defaultMessage: 'Легальность',
  },
  privacy_policy: {
    id: 'privacy_policy',
    defaultMessage: 'Политика конфеденциальности',
  },
  terms_and_conditions: {
    id: 'terms_and_conditions',
    defaultMessage: 'Условия и положения',
  },
});
