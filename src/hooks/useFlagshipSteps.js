import { useEffect, useRef, useState } from 'react';

/**
 * Auto-advances the active step in the flagship "Stop typing minutes" section
 * while the section is in view. Returns the active step index.
 *
 * Driven by an IntersectionObserver on the watchRef element — the cycle
 * starts when the element enters the viewport and stops when it leaves.
 */
export function useFlagshipSteps(stepCount, intervalMs = 2600) {
  const [activeIndex, setActiveIndex] = useState(0);
  const watchRef = useRef(null);

  useEffect(() => {
    if (!stepCount) return undefined;
    const watchEl = watchRef.current;
    if (!watchEl) return undefined;

    let timer = null;
    const startCycle = () => {
      if (timer) return;
      timer = setInterval(() => {
        setActiveIndex((i) => (i + 1) % stepCount);
      }, intervalMs);
    };
    const stopCycle = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) startCycle();
          else stopCycle();
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(watchEl);

    return () => {
      observer.disconnect();
      stopCycle();
    };
  }, [stepCount, intervalMs]);

  return { activeIndex, watchRef };
}
