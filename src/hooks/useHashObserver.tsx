import { useEffect } from 'react';

const useHashObserver = (elementId: string, threshold: number = 0.2) => {
  useEffect(() => {
    const targetElement = document.getElementById(elementId);

    const addHashToUrl = (hash: string): void => {
      const url = new URL(window.location.toString());
      if (!url.hash.includes(hash)) {
        url.hash = hash;
        window.history.replaceState(null, '', url.toString());
      }
    };

    const removeHashFromUrl = (hash: string): void => {
      const url = new URL(window.location.toString());
      if (url.hash.includes(hash)) {
        url.hash = '';
        window.history.replaceState(null, '', url.toString());
      }
    };

    if (targetElement) {
      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      };

      const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              addHashToUrl(elementId);
            } else {
              removeHashFromUrl(elementId);
            }
          });
        },
        observerOptions,
      );

      observer.observe(targetElement);

      return () => {
        observer.disconnect();

        removeHashFromUrl(elementId);
      };
    }
  }, [elementId, threshold]);
};

export default useHashObserver;
