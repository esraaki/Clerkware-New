import PageHero from '../components/shared/PageHero.jsx';
import CTABand from '../components/shared/CTABand.jsx';

export default function Services() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: 'Home', href: '#/home' },
          { label: 'Solutions' },
        ]}
        headlineHtml="Beyond the platform: <em>full-service civic infrastructure</em>."
        leadHtml="Custom design, ADA compliance, .gov registration, fixed pricing — handled by our team so you don't have to manage four vendors."
        actions={
          <>
            <a className="btn btn-primary" href="#/quote">
              Request a quote<span className="arrow" />
            </a>
            <a className="btn btn-outline" href="#/demo">
              Book a demo
            </a>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <div className="bento" data-reveal>
            <a className="bento-card flagship bento-wide" href="#/service/design">
              <span className="b-kicker">Flagship</span>
              <h3>Municipal Websites</h3>
              <p>
                Custom design — not a template. Built around your community's brand, content, and
                real workflows. Mobile-first. ADA-compliant from day one.
              </p>
              <div className="b-bigstat">
                <b>4–6 wk</b>
                <span>typical launch time</span>
              </div>
              <div className="b-foot">
                See design service{' '}
                <span className="arrow-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
            <a className="bento-card bento-med" href="#/service/ada">
              <span className="b-kicker">Compliance</span>
              <h3>ADA Compliance</h3>
              <p>WCAG 2.1 AA. Built in, audited continuously, documented for any inquiry.</p>
              <div className="b-foot">
                Open service{' '}
                <span className="arrow-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
            <a className="bento-card bento-med" href="#/service/gov">
              <span className="b-kicker">Domain</span>
              <h3>.gov Registration</h3>
              <p>Federal CISA verification handled end-to-end. Email, DNS, SSL, MFA — done.</p>
              <div className="b-foot">
                Open service{' '}
                <span className="arrow-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
            <a className="bento-card bento-wide" href="#/service/packages">
              <span className="b-kicker">Pricing</span>
              <h3>Fixed-Price Packages</h3>
              <p>
                Predictable annual billing. No price increases — ever. All-inclusive: platform,
                hosting, support, updates, features.
              </p>
              <div className="b-foot">
                See packages{' '}
                <span className="arrow-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              By the numbers
            </span>
            <h2 dangerouslySetInnerHTML={{ __html: 'Trusted by <em>800+ municipalities</em>.' }} />
          </div>
          <div className="stats" data-reveal data-reveal-delay="1">
            <div className="stat-cell">
              <div className="num">
                800<em>+</em>
              </div>
              <div className="label">municipalities served</div>
            </div>
            <div className="stat-cell">
              <div className="num">40</div>
              <div className="label">states covered</div>
            </div>
            <div className="stat-cell">
              <div className="num">
                20<em>+</em>
              </div>
              <div className="label">years building for clerks</div>
            </div>
            <div className="stat-cell">
              <div className="num">0</div>
              <div className="label">annual price hikes</div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        headingHtml="Ready to talk <em>specifics</em>?"
        bodyHtml="Get a quote sized to your municipality. We respond within one business day."
      />
    </>
  );
}
