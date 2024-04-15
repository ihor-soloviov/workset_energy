import { useEffect } from 'react';

type UseObserver = (selector: string, visibleClass: string) => void;

const useObserver: UseObserver = (selector, visibleClass) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
          }
        });
      },
      { threshold: 0 },
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
