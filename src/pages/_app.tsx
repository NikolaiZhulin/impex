import React, { useMemo } from 'react';
import type { AppProps } from 'next/app';
import '../styles/global.scss';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import '../styles/fonts.css';
import { useSetAppHeight } from '@hooks/use-set-app-height';
import English from '../../content/locales/en.json';
import Russian from '../../content/locales/ru.json';

export default function App({ Component, ...pageProps }: AppProps) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['ru'];
  useSetAppHeight();

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'en':
        return English;
      case 'ru':
        return Russian;
      default:
        return Russian;
    }
  }, [shortLocale]);

  return (
    <IntlProvider
      locale={shortLocale}
      messages={messages}
      onError={() => null}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}
