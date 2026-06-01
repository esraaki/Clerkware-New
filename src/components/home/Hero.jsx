import { useEffect, useState } from 'react';

const FLOATING_CARDS = [
  { key: 'minutes', label: 'Minutes generated', pos: 'tl' },
  { key: 'website', label: 'Website updated', pos: 'mr' },
  { key: 'alert', label: 'Alert sent', pos: 'bl' },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#0fb37e" />
    <path
      d="M7.5 12.5l3 3 6-7"
      stroke="#fff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default function Hero() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const timers = [];
    // Stagger reveal — 700 ms after hero enters, then 380 ms apart.
    [700, 1080, 1460].forEach((delay, i) => {
      const id = setTimeout(() => {
        if (!cancelled) setVisible(i + 1);
      }, delay);
      timers.push(id);
    });
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="hero hero--red" data-reveal-section>
      <div className="container-wide">
        <div className="hero-grid">
          <div className="hero-copy" data-reveal>
            <h1>
              Municipal Websites &amp;<br />
              <span className="accent">
                Clerkware<span className="tm">™</span>
              </span>
              <br />
              for clerks who<br />
              run the show.
            </h1>
            <p className="hero-sub">
              Professional websites. Connected tools.<br />
              Real people. Built for how local<br />
              government actually works.
            </p>
            <div className="hero-actions">
              <a className="btn btn-hero-primary btn-lg" href="#/demo">
                Request a demo
              </a>
              <a className="btn btn-hero-ghost btn-lg" href="#/feature/meetings">
                See it in action
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-cell">
                <span className="trust-val">
                  800<small>+</small>
                </span>
                <span className="trust-meta">municipalities</span>
              </div>
              <div className="trust-cell">
                <span className="trust-val">40</span>
                <span className="trust-meta">states</span>
              </div>
              <div className="trust-cell">
                <span className="trust-val">
                  20<small>+</small>
                </span>
                <span className="trust-meta">years</span>
              </div>
            </div>
          </div>

          <div className="hero-stage hero-stage--tablet" data-reveal data-reveal-delay="1">
            <img
              className="hero-tablet-img"
              src="/assets/images/hero-real-image.png"
              alt="Hands holding a tablet showing the Clerkware dashboard"
              loading="eager"
            />
            {FLOATING_CARDS.map((card, i) => (
              <div
                key={card.key}
                className={`hero-float hero-float-${card.pos}` + (i < visible ? ' is-in' : '')}
                aria-hidden="true"
              >
                <span className="hero-float-ic"><CheckIcon /></span>
                <span className="hero-float-label">{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
