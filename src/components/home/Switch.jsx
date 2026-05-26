const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path d="m8.5 8.5 7 7m0-7-7 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path
      d="m7.5 12.5 3 3 6-7"
      stroke="#fff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const LARGE_VENDORS = [
  'Complex systems and contracts',
  'Expensive add-ons and surprises',
  'Slow support and ticket queues',
  "You're just another account",
];

const TOWN_WEB = [
  'Fixed-price, rate-locked',
  'Built for clerks, by clerks',
  'Real people. Real support.',
  'One platform. One partner.',
];

export default function Switch() {
  return (
    <section className="switch-home" data-reveal-section>
      <div className="container">
        <div className="sw-grid">
          <div className="sw-copy" data-reveal>
            <h2>
              Considering a switch<br />from a larger provider?
            </h2>
            <p>
              Many municipalities come to us after years of rising costs, slow support, and systems
              that just don't fit.
            </p>
            <a className="btn btn-primary" href="#/compare">
              Compare your options
            </a>
          </div>
          <div className="sw-compare" data-reveal data-reveal-delay="1">
            <div className="sw-col sw-col-vs">
              <span className="sw-h sw-h-vendor">Large vendors</span>
              <ul>
                {LARGE_VENDORS.map((text) => (
                  <li key={text}>
                    <span className="sw-x">
                      <XIcon />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <span className="sw-vs" aria-hidden="true">
              vs
            </span>
            <div className="sw-col sw-col-us">
              <span className="sw-h sw-h-us">Town Web</span>
              <ul>
                {TOWN_WEB.map((text) => (
                  <li key={text}>
                    <span className="sw-ok">
                      <CheckIcon />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
