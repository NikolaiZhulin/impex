import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './styles.module.scss';

type BreadcrumbLink = {
  link: string,
  name: ReactNode,
};

type Props = {
  links: BreadcrumbLink[]
  className?: string
}

export const Breadcrumbs: FC<Props> = (props) => {
  const {
    links, className,
  } = props;

  const [lastLink, ...restLinks] = [...links].reverse();

  return (
    <div className={cn(styles.container, className)}>
      {restLinks.map(({ link, name }) => <Link key={link} className={styles.link} href={link}>{name}<span>|</span></Link>)}
      <span className={cn(styles.lastLink, styles.link)}>{lastLink.name}</span>
    </div>
  );
};
