import React from 'react';
import { EMAIL, ORGANIZATION, UNP } from '@constants/ui.constants';
import { Messengers } from '@components/messengers';

export const CONTACT_INFO = [
  {
    title: 'ЭЛЕКТРОННЫЙ АДРЕС',
    text: EMAIL,
  },
  {
    title: 'ОРГАНИЗАЦИЯ',
    text: ORGANIZATION,
  },
  {
    title: 'УНП',
    text: UNP,
  }, {
    title: 'МЕССЕНДЖЕРЫ',
    text: <Messengers />,
  },
];

export const JURISTIC_DOCUMENTS = [
  { text: 'Уведомление о рисках', href: '/1' },
  { text: 'Общие условия реализиции токенов', href: '/2' },
  { text: 'Правила обращения с персональными данными', href: '/3' },
  { text: 'Правила обращения с персональными данными', href: '/4' },
  { text: 'Разрешение споров', href: '/5' },
  { text: 'Публичная оферта', href: '/6' },
];
