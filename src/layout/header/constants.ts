import { defineMessages } from 'react-intl';
import { ROUTES } from '@constants/routes.constants';

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
});

export const HEADER_LINKS = [
  { href: ROUTES.HOME_PAGE, text: intlMessages.home },
  { href: ROUTES.ADVANTAGES, text: intlMessages.advantages },
  { href: ROUTES.SCHEME_OF_WORK, text: intlMessages.scheme_of_work },
  { href: ROUTES.FAQ, text: intlMessages.faq },
  { href: ROUTES.CONTACTS, text: intlMessages.contacts },
  { href: ROUTES.RULES, text: intlMessages.community_rules },
];
