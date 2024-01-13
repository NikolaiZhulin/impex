import React, {
  PropsWithChildren, useEffect, useRef, useState,
} from 'react';
import cn from 'classnames';
import { KEYBOARD_KEYS } from '@constants/ui.constants';
import styles from './styles.module.scss';

type Props = {
  title: string
  className?: string
}

const PADDING_REGEXP = /[^0-9.]/g;

export const Accordion = ({ title, children, className }: PropsWithChildren<Props>) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [padding, setPadding] = useState<number>();
  const [accordionHeight, setAccordionHeight] = useState<number>();

  useEffect(() => {
    const handleResize = () => {
      if (itemRef.current && titleRef.current) {
        setAccordionHeight(() => titleRef?.current?.scrollHeight);
        const style = getComputedStyle(itemRef.current);
        setPadding(Number(style.paddingBottom.replace(PADDING_REGEXP, '')));
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onKeyDown={(event) => event.key === KEYBOARD_KEYS.ENTER && toggleAccordion()}
      role="button"
      tabIndex={0}
      onClick={toggleAccordion}
      style={isOpen
        ? { height: itemRef?.current?.scrollHeight }
        : { height: (accordionHeight || 0) + (padding || 0) * 2 }}
      className={
        cn(styles.accordion,
          { [styles.openAccordion]: isOpen },
          className)
      }
    >
      <div className={styles.contentWrapper} ref={itemRef}>
        <div className={styles.accordionHeader} ref={titleRef}>
          <span>
            {title}
          </span>
          <div className={styles.iconWrapper}>
            <div className={cn(styles.plusMinus, { [styles.active]: isOpen })} />
          </div>
        </div>
        <div className={cn(styles.accordionContent, { [styles.open]: isOpen })}>
          {children}
        </div>
      </div>
    </div>
  );
};
