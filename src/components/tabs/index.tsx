import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props = {
  labels: React.ReactNode[]
  activeLabelIndex: number
  onClickTab: (tabIndex: number) => void
  className?: string
  tabItemClassname?: string
  activeTabItemClassname?: string
}

const getButtonOverlayStyles = (width: number, x: number) => ({ width: `${width}px`, transform: `translateX(${x}px)` });

export const Tabs = ({
  labels, activeLabelIndex, onClickTab, tabItemClassname, className, activeTabItemClassname = '',
}: Props) => {
  const navButtonsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const navRef = useRef<HTMLElement>(null);
  const [buttonOverlayProps, setButtonOverlayProps] = useState({
    width: 0,
    x: 0,
  });

  const updateButtonOverlayProps = useCallback((tabIndex: number) => {
    const currentButtonElement = navButtonsRef.current[tabIndex];
    const navElement = navRef.current;
    if (!currentButtonElement || !navElement) return;
    const { width, left: childLeft } = currentButtonElement.getBoundingClientRect();
    const { left: parentLeft } = navElement.getBoundingClientRect();
    setButtonOverlayProps({ width, x: Math.round(childLeft - parentLeft) });
  }, []);

  useEffect(() => {
    updateButtonOverlayProps(activeLabelIndex);
  }, [updateButtonOverlayProps, activeLabelIndex]);

  useEffect(() => {
    const listener = () => updateButtonOverlayProps(activeLabelIndex);
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [updateButtonOverlayProps, activeLabelIndex]);

  return (
    <nav ref={navRef} className={cn(styles.nav, className)}>
      <div
        style={getButtonOverlayStyles(buttonOverlayProps.width, buttonOverlayProps.x)}
        className={styles.buttonOverlay}
      />
      {labels.map((label, index) => (
        <button
          type="button"
          ref={(buttonElement) => {
            navButtonsRef.current[index] = buttonElement;
          }}
          disabled={activeLabelIndex === index}
          className={cn(styles.button, tabItemClassname, { [activeTabItemClassname]: activeLabelIndex === index })}
          onClick={() => onClickTab(index)}
          key={Math.random()}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};
