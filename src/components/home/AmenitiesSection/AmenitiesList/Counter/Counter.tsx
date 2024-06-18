'use client';
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

interface CounterProps {
  target: number;
  duration: number;
  title: string;
}

const Counter: React.FC<CounterProps> = ({ target, duration, title }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        separator="."
        useEasing={true}
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
      +
    </div>
  );
};

export default Counter;
