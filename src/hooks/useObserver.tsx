import { useEffect } from 'react';

type UseObserver = (selector: string, visibleClass: string) => void;

const useObserver: UseObserver = (selector, visibleClass) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement; // Приведення типу
          if (entry.isIntersecting && !target.dataset.hasBeenVisible) {
            target.classList.add(visibleClass);
            target.dataset.hasBeenVisible = 'true';
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
      },
    );

    const elements = document.querySelectorAll(selector);

    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
      observer.disconnect();
    };
  }, [visibleClass, selector]);
};

export default useObserver;
