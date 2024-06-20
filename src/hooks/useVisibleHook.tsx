import { useEffect } from 'react';

type UseObserver = (selector: string, visibleClass: string) => void;

const useVisibleHook: UseObserver = (selector, visibleClass) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add(visibleClass);
          } else {
            target.classList.remove(visibleClass);
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
      console.log('Observer stopped');
      observer.disconnect();
    };
  }, [visibleClass, selector]);
};

export default useVisibleHook;
