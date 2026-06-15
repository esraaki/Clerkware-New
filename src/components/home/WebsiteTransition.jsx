import { useEffect, useRef, useState } from 'react';
import {
  FRAME_COUNT,
  framePath,
  FINAL_FRAME,
  SCROLL_VH,
  CONTENT_REVEAL_AT,
} from './websiteTransition.config.js';

const LABELS = [
  'Website updates',
  'Alerts',
  'Events',
  'Meeting minutes',
  'AI-assisted content',
];

const ARIA_LABEL =
  'Animated illustration: a municipal clerk moves from reviewing information on a tablet ' +
  'to working at a desk and publishing updates to the town website.';

// Ivory canvas backdrop — matches --canvas so the contained illustration sits
// on the same warm paper as the rest of the page.
const CANVAS_BG = '#fbfaf7';

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Scroll-driven image sequence that bridges the Hero and the Municipal Websites
 * copy. The stage pins (sticky) while the frames scrub from "reviewing on a
 * tablet" to "publishing the town website", then releases into normal flow.
 *
 * Rendering: a single <canvas> drawn with `object-fit: contain` semantics,
 * device-pixel-ratio aware, advanced via requestAnimationFrame. Frames load
 * progressively and only once the section nears the viewport, so initial page
 * load is never blocked.
 *
 * Reduced motion: the whole scroll mechanism is skipped and the final frame is
 * shown as a static illustration alongside the copy.
 */
export default function WebsiteTransition() {
  const [reduced, setReduced] = useState(false);
  const [contentIn, setContentIn] = useState(false);

  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);

  const imagesRef = useRef([]); // HTMLImageElement per frame
  const loadedRef = useRef([]); // boolean per frame
  const targetFrameRef = useRef(0); // 0-based frame we want shown
  const drawnFrameRef = useRef(-1); // 0-based frame currently painted
  const rafRef = useRef(0);
  const dirtyRef = useRef(true); // force a repaint (e.g. after resize)

  // Resolve reduced-motion preference once, and react to changes.
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  // --- Reduced-motion path: no canvas, no scroll wiring. Render static below.
  useEffect(() => {
    if (reduced) return undefined;

    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return undefined;

    const ctx = canvas.getContext('2d', { alpha: false });
    let started = false;

    // --- Progressive frame loading ----------------------------------------
    imagesRef.current = new Array(FRAME_COUNT);
    loadedRef.current = new Array(FRAME_COUNT).fill(false);

    const loadFrame = (i) =>
      new Promise((resolve) => {
        if (loadedRef.current[i]) return resolve();
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => {
          loadedRef.current[i] = true;
          imagesRef.current[i] = img;
          // First frame paints as soon as it's ready; later frames mark dirty
          // so the next rAF repaints if the user is already scrubbing past them.
          if (i === drawnFrameRef.current || i === targetFrameRef.current) {
            dirtyRef.current = true;
          }
          if (i === 0) dirtyRef.current = true;
          resolve();
        };
        img.onerror = () => resolve();
        img.src = framePath(i + 1); // config is 1-based
        imagesRef.current[i] = img;
      });

    // Load the first frame immediately, then stream the rest in small batches
    // so we never fire 73 requests at once.
    const BATCH = 6;
    const streamFrames = async () => {
      await loadFrame(0);
      for (let start = 1; start < FRAME_COUNT; start += BATCH) {
        const batch = [];
        for (let i = start; i < Math.min(start + BATCH, FRAME_COUNT); i += 1) {
          batch.push(loadFrame(i));
        }
        // eslint-disable-next-line no-await-in-loop
        await Promise.all(batch);
      }
    };

    // Only begin loading once the section is approaching the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            streamFrames();
            io.disconnect();
          }
        });
      },
      { rootMargin: '600px 0px' }
    );
    io.observe(section);

    // --- Canvas sizing (DPR aware) -----------------------------------------
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        dirtyRef.current = true;
      }
    };

    const nearestLoaded = (target) => {
      if (loadedRef.current[target]) return target;
      for (let d = 1; d < FRAME_COUNT; d += 1) {
        if (target - d >= 0 && loadedRef.current[target - d]) return target - d;
        if (target + d < FRAME_COUNT && loadedRef.current[target + d]) return target + d;
      }
      return -1;
    };

    // Draw a frame with object-fit: contain semantics on the ivory backdrop.
    const draw = (frame) => {
      const cw = canvas.width;
      const ch = canvas.height;
      ctx.fillStyle = CANVAS_BG;
      ctx.fillRect(0, 0, cw, ch);
      const img = imagesRef.current[frame];
      if (!img || !img.naturalWidth) return;
      const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    // --- Scroll → frame mapping --------------------------------------------
    const computeProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return 0;
      // rect.top goes from 0 (top hits viewport top) to -scrollable.
      const p = -rect.top / scrollable;
      return Math.min(1, Math.max(0, p));
    };

    const onScroll = () => {
      const p = computeProgress();
      targetFrameRef.current = Math.round(p * (FRAME_COUNT - 1));
      setContentIn(p >= CONTENT_REVEAL_AT);
    };

    // --- rAF render loop ----------------------------------------------------
    const tick = () => {
      const target = targetFrameRef.current;
      if (dirtyRef.current || target !== drawnFrameRef.current) {
        const frame = nearestLoaded(target);
        if (frame >= 0) {
          draw(frame);
          drawnFrameRef.current = target; // remember intent even if approximated
        }
        dirtyRef.current = false;
      }
      rafRef.current = window.requestAnimationFrame(tick);
    };

    resize();
    onScroll();
    rafRef.current = window.requestAnimationFrame(tick);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);

    return () => {
      io.disconnect();
      window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
    };
  }, [reduced]);

  // ----------------------------------------------------------------------------
  // Reduced-motion: static final illustration + copy, normal page flow.
  // ----------------------------------------------------------------------------
  if (reduced) {
    return (
      <section className="wt wt--static" data-reveal-section aria-label={ARIA_LABEL}>
        <div className="container wt-static-grid">
          <figure className="wt-static-figure" data-reveal>
            <img
              src={framePath(FINAL_FRAME)}
              alt={ARIA_LABEL}
              loading="lazy"
            />
          </figure>
          <WebsiteTransitionCopy revealed data-reveal />
        </div>
      </section>
    );
  }

  // ----------------------------------------------------------------------------
  // Motion: pinned scroll-driven canvas sequence.
  // ----------------------------------------------------------------------------
  return (
    <section
      ref={sectionRef}
      className="wt"
      style={{ height: `calc(100vh + ${SCROLL_VH * 100}vh)` }}
      aria-label={ARIA_LABEL}
    >
      <div ref={stickyRef} className="wt-sticky">
        <canvas
          ref={canvasRef}
          className="wt-canvas"
          role="img"
          aria-label={ARIA_LABEL}
        />
        <div className={'wt-content' + (contentIn ? ' is-in' : '')} aria-hidden={!contentIn}>
          <div className="container">
            <WebsiteTransitionCopy revealed={contentIn} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Shared Municipal Websites copy block, used by both render paths.
function WebsiteTransitionCopy({ revealed }) {
  return (
    <div className={'wt-copy' + (revealed ? ' is-in' : '')}>
      <span className="wt-eyebrow">Municipal websites</span>
      <h2>
        Beautiful town websites.
        <br />
        Easy for clerks to update.
      </h2>
      <p>
        Town Web designs, hosts, and maintains modern municipal websites connected to
        Clerkware, so staff can publish alerts, minutes, events, and updates from one place.
      </p>
      <ul className="wt-labels">
        {LABELS.map((label) => (
          <li key={label} className="wt-label">
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
