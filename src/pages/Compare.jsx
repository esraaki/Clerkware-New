import PageHero from '../components/shared/PageHero.jsx';
import CTABand from '../components/shared/CTABand.jsx';

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const Y = ({ children }) => (
  <span className="yes">
    <Check />
    {children}
  </span>
);
const M = ({ children }) => <span className="meh">{children}</span>;
const N = ({ children }) => <span className="no">{children}</span>;

const ROWS = [
  {
    label: 'All-in-one platform (site + payments + minutes + alerts)',
    us: <Y>Built-in</Y>,
    cells: [<M key="cp">Add-ons</M>, <M key="gr">Add-ons</M>, <N key="rv">— Site only</N>, <M key="ct">Bundled vendors</M>],
  },
  {
    label: 'AI-drafted meeting minutes',
    us: <Y>Included</Y>,
    cells: [<N key="cp">— No</N>, <M key="gr">Separate product</M>, <N key="rv">— No</N>, <N key="ct">— No</N>],
  },
  {
    label: 'Real human phone support (no Tier-1 script)',
    us: <Y>Standard</Y>,
    cells: [<M key="cp">Ticket-based</M>, <M key="gr">Ticket-based</M>, <M key="rv">Limited</M>, <M key="ct">Ticket-based</M>],
  },
  {
    label: 'No annual price increases',
    us: <Y>Forever-rate</Y>,
    cells: [<N key="cp">— Annual hikes</N>, <N key="gr">— Annual hikes</N>, <M key="rv">Varies</M>, <N key="ct">— Annual hikes</N>],
  },
  {
    label: 'Multi-step form approval workflows',
    us: <Y>Built-in</Y>,
    cells: [<Y key="cp">Pro tier</Y>, <Y key="gr">Pro tier</Y>, <N key="rv">— Basic only</N>, <Y key="ct">Yes</Y>],
  },
  {
    label: '311 reporting with photo + GPS',
    us: <Y>Mobile-first</Y>,
    cells: [<M key="cp">Add-on</M>, <Y key="gr">Yes</Y>, <N key="rv">— No</N>, <M key="ct">Add-on</M>],
  },
  {
    label: 'Online payments built-in',
    us: <Y>Native</Y>,
    cells: [<M key="cp">Third-party</M>, <Y key="gr">Native</Y>, <M key="rv">Third-party</M>, <Y key="ct">Native</Y>],
  },
  {
    label: 'ADA compliance with continuous audits',
    us: <Y>WCAG 2.1 AA</Y>,
    cells: [<Y key="cp">Yes</Y>, <Y key="gr">Yes</Y>, <Y key="rv">Yes</Y>, <Y key="ct">Yes</Y>],
  },
  {
    label: '.gov domain registration handled for you',
    us: <Y>Included</Y>,
    cells: [<M key="cp">Self-serve</M>, <M key="gr">Self-serve</M>, <M key="rv">Self-serve</M>, <M key="ct">Self-serve</M>],
  },
  {
    label: 'Free onboarding & data migration',
    us: <Y>Included</Y>,
    cells: [<N key="cp">— Extra fee</N>, <N key="gr">— Extra fee</N>, <M key="rv">Varies</M>, <N key="ct">— Extra fee</N>],
  },
  {
    label: 'Year-to-year contract (no multi-year lock-in)',
    us: <Y>Standard</Y>,
    cells: [<N key="cp">— Multi-year</N>, <N key="gr">— Multi-year</N>, <M key="rv">Varies</M>, <N key="ct">— Multi-year</N>],
  },
  {
    label: 'Typical launch time',
    us: <Y>4–6 weeks</Y>,
    cells: [<M key="cp">3–6 months</M>, <M key="gr">3–6 months</M>, <Y key="rv">4–8 weeks</Y>, <M key="ct">3–6 months</M>],
  },
];

export default function Compare() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '#/home' }, { label: 'Compare' }]}
        headlineHtml="Clerkware vs. <em>the alternatives</em>."
        leadHtml="An honest look at how Town Web compares to CivicPlus, Granicus, Revize, and Catalis (GovOffice) on the things municipal clerks actually care about."
        actions={
          <>
            <a className="btn btn-primary" href="#/demo">
              Book a demo<span className="arrow" />
            </a>
            <a className="btn btn-outline" href="#/quote">
              Get a switch quote
            </a>
          </>
        }
      />

      <section className="switch-band">
        <div className="container">
          <div className="sb-grid">
            <div className="sb-copy" data-reveal>
              <span className="eyebrow">
                <span className="dot" />
                For switchers
              </span>
              <h2>Considering a switch from a larger vendor?</h2>
              <p className="lead">
                Most municipalities don't need enterprise procurement to run a professional website
                and a connected platform. They need a clerk-focused team that picks up the phone —
                and software priced for civic budgets.
              </p>

              <ol className="sb-points">
                <li>
                  <span className="sb-num">01</span>
                  <div>
                    <strong>Professional municipal websites — without enterprise complexity.</strong>
                    <span>Custom-designed, ADA-compliant, .gov-ready. Four-to-six week launch, not a nine-month procurement cycle.</span>
                  </div>
                </li>
                <li>
                  <span className="sb-num">02</span>
                  <div>
                    <strong>Clerk-focused support from real people.</strong>
                    <span>Named contact. First-ring phone. No Tier-1 scripts, no ticket queues, no escalation paths.</span>
                  </div>
                </li>
                <li>
                  <span className="sb-num">03</span>
                  <div>
                    <strong>Connected tools across meetings, payments, forms and alerts.</strong>
                    <span>One identity. One bill. No add-on fees. Year-to-year pricing — we've never raised an existing customer's rate.</span>
                  </div>
                </li>
              </ol>

              <div className="sb-actions">
                <a className="btn btn-primary" href="#/quote">
                  Get a switch quote<span className="arrow" />
                </a>
                <a className="btn btn-outline" href="#/demo">
                  Talk through a switch
                </a>
              </div>
            </div>

            <aside className="sb-dossier" data-reveal data-reveal-delay="1">
              <header className="sbd-head">
                <span className="sbd-mark" aria-hidden="true" />
                <span className="sbd-title">What changes after switching</span>
              </header>
              <dl className="sbd-list">
                <div className="sbd-row"><dt>Migration</dt><dd>Handled end-to-end</dd></div>
                <div className="sbd-row"><dt>Contract</dt><dd>Year-to-year</dd></div>
                <div className="sbd-row"><dt>Annual increase</dt><dd>$0 · never raised</dd></div>
                <div className="sbd-row"><dt>Onboarding</dt><dd>Included, no add-on</dd></div>
                <div className="sbd-row"><dt>Phone support</dt><dd>First-ring, named</dd></div>
                <div className="sbd-row"><dt>Typical launch</dt><dd>4–6 weeks</dd></div>
              </dl>
              <figure className="sbd-voice">
                <blockquote>"It's the first vendor where I don't dread the renewal call."</blockquote>
                <figcaption>Clerk, ~3,000 pop. township · WI · onboarded 2024</figcaption>
              </figure>
              <p className="sbd-foot">
                From onboarding interviews with clerks who switched from CivicPlus, Granicus, Revize and
                Catalis (GovOffice). 2024–2026.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="compare-wrap" data-reveal>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th className="us">Town Web · Clerkware™</th>
                  <th>CivicPlus</th>
                  <th>Granicus</th>
                  <th>Revize</th>
                  <th>Catalis</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label}>
                    <td className="row-label">{r.label}</td>
                    <td className="us-col">{r.us}</td>
                    {r.cells.map((c, i) => (
                      <td key={i}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="compare-foot">
              <span>
                <strong>Town Web wins on 11 of 12 rows</strong> vs. the average competitor.
              </span>
            </div>
          </div>
          <p style={{ marginTop: 18, fontSize: 12.5, color: 'var(--ink-400)', textAlign: 'center' }}>
            Capability comparisons based on publicly available product information and customer
            interviews as of 2026.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Why clerks switch
            </span>
            <h2>The reasons we hear most often.</h2>
            <p>From new-customer onboarding interviews. Quoted with permission.</p>
          </div>
          <div className="benefit-grid" data-reveal data-reveal-delay="1">
            <article className="benefit">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h4>"We never get a human anymore"</h4>
              <p>
                Tier-1 scripts. Ticket queues. Two-day response times. We answer the phone on the
                first ring with someone who knows your town.
              </p>
            </article>
            <article className="benefit">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h4>"Our renewal went up 22% again"</h4>
              <p>
                Annual price increases on platform contracts are standard. Not at Town Web. We've
                held this policy for 20+ years.
              </p>
            </article>
            <article className="benefit">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <h4>"We're paying for five vendors"</h4>
              <p>
                Website, payments, minutes, alerts, forms — bundled together, talking to each
                other, billed as one number.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTABand
        headingHtml="See what <em>switching</em> looks like."
        bodyHtml="30-minute demo, no obligation. We'll show you exactly how Clerkware compares for your municipality, with migration timeline included."
      />
    </>
  );
}
