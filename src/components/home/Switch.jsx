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

const ROWS = [
  { label: 'Pricing', vendor: 'Per-module bundles, annual hikes', us: 'Fixed price, rate-locked' },
  { label: 'Setup', vendor: 'Quarter-long onboarding', us: 'Live in weeks, not quarters' },
  { label: 'Support', vendor: 'Ticket queues and SLAs', us: 'A real person, by name' },
  { label: 'Updates', vendor: 'Paid upgrades', us: 'Included — every release' },
  { label: 'Built for', vendor: 'Generic government', us: 'Clerks, by clerks' },
];

export default function Switch() {
  return (
    <section className="switch-home compare-home" data-reveal-section>
      <div className="container">
        <div className="cmp-grid">
          <div className="cmp-copy" data-reveal>
            <span className="ps-eyebrow">Switching from other vendors?</span>
            <h2>
              Same job.<br />Half the cost. None of the queue.
            </h2>
            <p>
              Municipalities come to us after years of rising costs, slow tickets, and add-ons that
              fix what the platform should have done. Here's the short version of why they stay.
            </p>
            <div className="cmp-actions">
              <a className="btn btn-primary" href="#/compare">
                See the full comparison
              </a>
            </div>
          </div>

          <div className="cmp-table" data-reveal data-reveal-delay="1">
            <div className="cmp-table-head">
              <span className="cmp-cell cmp-cell-label" />
              <span className="cmp-cell cmp-h cmp-h-vendor">Other vendors</span>
              <span className="cmp-cell cmp-h cmp-h-us">
                Clerkware
              </span>
            </div>
            <ul className="cmp-rows">
              {ROWS.map((row) => (
                <li key={row.label} className="cmp-row">
                  <span className="cmp-cell cmp-cell-label">{row.label}</span>
                  <span className="cmp-cell cmp-cell-vendor">
                    <span className="cmp-ic cmp-ic-x"><XIcon /></span>
                    <span className="cmp-text">{row.vendor}</span>
                  </span>
                  <span className="cmp-cell cmp-cell-us">
                    <span className="cmp-ic cmp-ic-ok"><CheckIcon /></span>
                    <span className="cmp-text">{row.us}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
