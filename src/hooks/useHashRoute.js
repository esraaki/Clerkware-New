import { useEffect, useState } from 'react';

/**
 * Hash-based router that mirrors the original static site:
 *   #/home, #/feature/meetings, #/legal/privacy, ...
 *
 * Returns { name, param } from the current hash, and re-renders on hashchange.
 * Also handles scroll-to-top on each route change.
 */
export function parseHash() {
  const raw = (typeof window !== 'undefined' ? window.location.hash || '#/home' : '#/home').replace(
    /^#\/?/,
    ''
  );
  const parts = raw.split('/').filter(Boolean);
  if (parts[0] === 'legal') return { name: 'legal/' + (parts[1] || ''), param: null };
  return { name: parts[0] || 'home', param: parts[1] || null };
}

export function useHashRoute() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHash();
      setRoute(next);
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}
