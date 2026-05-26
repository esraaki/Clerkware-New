import { useEffect, useRef, useState } from 'react';

/**
 * Minimal testimonial carousel state hook.
 * - Active index + setters (next/prev/goTo)
 * - Auto-shuffle every `interval` ms unless the user prefers reduced motion
 * - Pauses on hover via the returned hover handlers
 */
export function useTestimonialCarousel(slideCount, interval = 7000) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const hoveredRef = useRef(false);

  const next = () => setIndex((i) => (i + 1) % slideCount);
  const prev = () => setIndex((i) => (i - 1 + slideCount) % slideCount);
  const goTo = (i) => setIndex(((i % slideCount) + slideCount) % slideCount);

  // Auto-shuffle
  useEffect(() => {
    if (slideCount < 2) return undefined;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const start = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!hoveredRef.current) {
          setIndex((i) => (i + 1) % slideCount);
        }
      }, interval);
    };
    start();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slideCount, interval]);

  const hoverHandlers = {
    onMouseEnter: () => {
      hoveredRef.current = true;
    },
    onMouseLeave: () => {
      hoveredRef.current = false;
    },
  };

  return { index, next, prev, goTo, hoverHandlers };
}
