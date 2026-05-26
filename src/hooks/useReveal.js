import { useEffect } from 'react';

/**
 * Wires the IntersectionObserver-based reveal behaviour used across the site.
 * Watches every element with [data-reveal] or [data-reveal-section] that
 * has not already been revealed, and adds .is-in when it enters the viewport.
 *
 * Re-runs on `pathKey` so navigating between routes re-observes the new content.
 */
export function useReveal(pathKey) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.05 }
    );

    document
      .querySelectorAll('[data-reveal]:not(.is-in), [data-reveal-section]:not(.is-in)')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathKey]);
}
