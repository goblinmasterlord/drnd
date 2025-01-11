// src/hooks/useHashScroll.js
import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export function useHashScroll(deps = []) {
  const location = useLocation();

  const scrollToHash = useCallback(() => {
    const hash = location.hash;
    if (hash) {
      // Remove the '#' from the hash to get the ID
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Add a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    scrollToHash();
  }, [scrollToHash, location.pathname, ...deps]);

  return scrollToHash;
}