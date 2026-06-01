import { useEffect, useRef, useState } from 'react';

const SNIPPETS = [
  {
    key: 'minutes',
    pos: 'tl',
    title: 'AI Minutes',
    meta: 'Auto-drafted',
    accent: 'red',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    key: 'website',
    pos: 'tr',
    title: 'Website',
    meta: 'Published',
    accent: 'red',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
  },
  {
    key: 'alert',
    pos: 'lm',
    title: 'Alert sent',
    meta: '3,860 subs',
    accent: 'red',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    key: 'payment',
    pos: 'rm',
    title: 'Payment',
    meta: '$184.20',
    accent: 'red',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M2 10h20M6 14h4" />
      </svg>
    ),
  },
  {
    key: 'form',
    pos: 'bl',
    title: 'Permit form',
    meta: 'Submitted',
    accent: 'red',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    key: 'permit',
    pos: 'br',
    title: 'Licensing',
    meta: 'Approved',
    accent: 'red',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 16.8 6.5 19.5l1-6.3L3 8.9 9 8z" />
      </svg>
    ),
  },
];

export default function ConnectedDashboard() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let timer = null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !timer) {
            timer = setInterval(() => {
              setVisible((n) => {
                if (n >= SNIPPETS.length) {
                  clearInterval(timer);
                  timer = null;
                  return n;
                }
                return n + 1;
              });
            }, 360);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <section className="cd-section" data-reveal-section>
      <div className="container">
        <div className="sec-head sec-head-center cd-head" data-reveal>
          <span className="ps-eyebrow">One platform. One login.</span>
          <h2>Everything municipal — connected.</h2>
          <p>
            Clerkware isn't a folder of disconnected tools. Minutes, websites, alerts, payments,
            forms, and permits all run from one platform — so a single update updates everything.
          </p>
        </div>

        <div className="cd-stage" ref={ref} data-reveal data-reveal-delay="1">
          <svg className="cd-lines" aria-hidden="true" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <path d="M120 60 Q160 70 210 90" />
            <path d="M880 60 Q840 70 790 90" />
            <path d="M110 300 Q160 300 210 300" />
            <path d="M890 300 Q840 300 790 300" />
            <path d="M120 540 Q160 530 210 510" />
            <path d="M880 540 Q840 530 790 510" />
          </svg>

          <figure className="cd-hub">
            <img
              src="/assets/images/one-platform.png"
              alt="Clerkware — one connected platform"
              loading="lazy"
            />
          </figure>

          {SNIPPETS.map((s, i) => (
            <div
              key={s.key}
              className={`cd-snip cd-snip-${s.pos} cd-accent-${s.accent}` + (i < visible ? ' is-in' : '')}
              aria-hidden="true"
            >
              <span className="cd-snip-ic">{s.icon}</span>
              <div className="cd-snip-text">
                <b>{s.title}</b>
                <em>{s.meta}</em>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
