import React, { memo } from 'react';
import LightedLink from '@components/lighted-link';
import cn from 'classnames';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { HEADER_LINKS } from '../constants';

type Props= {
  className?: string
}

const HeaderLinks = ({ className }: Props) => {
  const router = useRouter();
  const intl = useIntl();

  return (
    <ul className={cn(styles.linksList, className)}>
      {HEADER_LINKS.map(({ text, href }) => (
        <LightedLink
          key={href}
          isActive={router.asPath === href}
          text={intl.formatMessage(text)}
          href={href}
        />
      ))}
    </ul>
  );
};

HeaderLinks.defaultProps = {
  className: '',
};

export default memo(HeaderLinks);
