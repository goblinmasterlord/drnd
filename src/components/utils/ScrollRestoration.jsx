import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollRestoration() {
  const { pathname } = useLocation();
  const positions = useRef(new Map());
  
  // Save scroll position before unmounting
  useEffect(() => {
    return () => {
      positions.current.set(pathname, window.scrollY);
    };
  }, [pathname]);
  
  // Restore scroll position after mounting
  useEffect(() => {
    const savedPosition = positions.current.get(pathname);
    if (savedPosition != null) {
      window.scrollTo(0, savedPosition);
    }
  }, [pathname]);
  
  return null;
}