import React, {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import { ReactComponent as CloseIcon } from 'public/images/icons/close.svg';
import { KEYBOARD_KEYS } from '@constants/ui.constants';
import styles from './styles.module.scss';

type Props = {
  isOpen: boolean
  children: ReactNode
  onClose?: () => void
  appearFrom: 'left' | 'bottom' | 'center' | 'right'
  canClose?: boolean
  className?: string
}

export const PortalWrapper = ({ children }: {children: ReactNode}) => {
  if (typeof window === 'undefined') return null;

  return createPortal(children, document.body);
};

export const Popup: FC<Props> = (props) => {
  const {
    isOpen, children, className, canClose = true, onClose, appearFrom,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const setBodyOverflow = (overflow: string) => {
      document.body.style.overflow = overflow;
    };

    if (isOpen) {
      setBodyOverflow('hidden');
      setTimeout(() => {
        setIsVisible(true);
      }, 200);
    } else {
      setIsVisible(false);
      setBodyOverflow('overlay');
    }

    return (): void => setBodyOverflow('overlay');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <PortalWrapper>
      <>
        {canClose && (
          <div
            className={cn(styles.overlay, { [styles.showOverlay]: isOpen })}
            onClick={onClose}
            onKeyDown={(event) => event.key === KEYBOARD_KEYS.ENTER && onClose?.()}
            role="button"
            tabIndex={0}
            aria-label="Close"
          />
        )}
        <div
          className={cn(styles.container, styles[appearFrom],
            className, {
              [styles.show]: isVisible,
            })}
        >
          {canClose && (
            <button className={styles.closeButton} onClick={onClose}>
              <CloseIcon />
            </button>
          )}
          {children}
        </div>
      </>
    </PortalWrapper>
  );
};
