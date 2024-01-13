import {
  FC, PropsWithChildren, useEffect, useState,
} from 'react';

export const ClientOnly: FC<PropsWithChildren> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return children;
};
