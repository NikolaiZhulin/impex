import { useEffect, useState } from 'react';

 type WindowSize = {
   width: number | undefined;
   height: number | undefined;
 };

export const useWindowSize = (): WindowSize => {
  const [windowDimensions, setWindowDimensions] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
