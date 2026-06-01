import { useEffect, useState } from 'react';

// Repeating the 5 available logos to fill 8 visible slots. Acceptable per spec.
const LOGOS = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1];

const SHOWN = 8;
const ROTATE_INTERVAL = 2600;
const PER_CYCLE = 3; // how many slots flip each cycle
const STAGGER_MS = 220; // delay between each slot's flip within a cycle

function pickInitial() {
  return LOGOS.slice(0, SHOWN).map((n, i) => ({ n, key: i }));
}

function pickSlots(count) {
  const all = Array.from({ length: SHOWN }, (_, i) => i);
  for (let i = all.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.slice(0, count);
}

export default function Municipalities() {
  const [cells, setCells] = useState(pickInitial);
  const [fading, setFading] = useState({});

  useEffect(() => {
    let nextKey = SHOWN;
    let mounted = true;
    const timeouts = new Set();

    const schedule = (fn, delay) => {
      const id = setTimeout(() => {
        timeouts.delete(id);
        if (mounted) fn();
      }, delay);
      timeouts.add(id);
    };

    const flipSlot = (slot) => {
      setFading((f) => ({ ...f, [slot]: true }));
      schedule(() => {
        setCells((arr) => {
          const visibleNs = arr.map((c) => c.n);
          const candidates = LOGOS.filter((n) => !visibleNs.includes(n));
          const pool = candidates.length ? candidates : LOGOS;
          const pick = pool[Math.floor(Math.random() * pool.length)];
          const updated = arr.slice();
          updated[slot] = { n: pick, key: nextKey++ };
          return updated;
        });
        setFading((f) => ({ ...f, [slot]: false }));
      }, 440);
    };

    const tick = () => {
      if (!mounted) return;
      const slots = pickSlots(PER_CYCLE);
      slots.forEach((slot, i) => schedule(() => flipSlot(slot), i * STAGGER_MS));
    };

    const interval = setInterval(tick, ROTATE_INTERVAL);
    return () => {
      mounted = false;
      clearInterval(interval);
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <section className="muni-section" data-reveal-section>
      <div className="container">
        <div className="muni-head" data-reveal>
          <span className="muni-eyebrow">Trusted by 800+ municipalities across 40 states</span>
          <h2>Real towns. Real clerks. Real work, every day.</h2>
        </div>

        <div className="muni-logos" data-reveal data-reveal-delay="1">
          {cells.map((cell, idx) => (
            <span
              key={cell.key}
              className={'muni-slot' + (fading[idx] ? ' is-out' : ' is-in')}
              style={{ transitionDelay: `${(idx % 4) * 50}ms` }}
            >
              <img
                src={`/assets/images/municipality-logo-${cell.n}.png`}
                alt=""
                loading="lazy"
              />
            </span>
          ))}
        </div>

        <p className="muni-more">…and hundreds more</p>
      </div>
    </section>
  );
}
