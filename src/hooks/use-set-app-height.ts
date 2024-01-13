import { useEffect } from 'react';

export const useSetAppHeight = () => {
  const setAppHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };

  useEffect(() => {
    setAppHeight();

    const handleResize = () => {
      setAppHeight();
    };

    const handleOrientationChange = () => {
      setAppHeight();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange, false);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange, false);
    };
  }, []);
};
