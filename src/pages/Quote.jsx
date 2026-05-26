import PageHero from '../components/shared/PageHero.jsx';
import FormCard from '../components/shared/FormCard.jsx';

const stepRow = { display: 'grid', gridTemplateColumns: '34px 1fr', gap: 14, alignItems: 'flex-start' };
const stepNum = {
  width: 30,
  height: 30,
  borderRadius: '50%',
  background: 'var(--ink-900)',
  color: '#fff',
  display: 'grid',
  placeItems: 'center',
  fontFamily: 'Inter,sans-serif',
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: '-0.01em',
};
const accentNum = { ...stepNum, background: 'var(--accent)' };

const Bullet = ({ children }) => (
  <li
    style={{
      display: 'grid',
      gridTemplateColumns: '18px 1fr',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 14,
      color: 'var(--ink-700)',
      lineHeight: 1.5,
    }}
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" style={{ marginTop: 3 }}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
    {children}
  </li>
);

export default function Quote() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '#/home' }, { label: 'Get a quote' }]}
        headlineHtml="Request a <em>no-obligation</em> quote."
        leadHtml="Transparent pricing tailored to your municipality. We respond within one business day."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="usecase" style={{ borderTop: 0, paddingTop: 0 }}>
            <div>
              <h3 style={{ marginBottom: 14 }}>What happens next</h3>
              <ol style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <li style={stepRow}>
                  <span style={stepNum}>1</span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--ink-900)', marginBottom: 4, fontSize: 15, fontWeight: 650 }}>
                      Quick response
                    </strong>
                    <span style={{ color: 'var(--ink-500)', fontSize: 14, lineHeight: 1.55 }}>
                      We review your request and respond within 1 business day.
                    </span>
                  </div>
                </li>
                <li style={stepRow}>
                  <span style={stepNum}>2</span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--ink-900)', marginBottom: 4, fontSize: 15, fontWeight: 650 }}>
                      Discovery call
                    </strong>
                    <span style={{ color: 'var(--ink-500)', fontSize: 14, lineHeight: 1.55 }}>
                      A brief call to understand your specific needs and goals.
                    </span>
                  </div>
                </li>
                <li style={stepRow}>
                  <span style={accentNum}>3</span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--ink-900)', marginBottom: 4, fontSize: 15, fontWeight: 650 }}>
                      Custom quote
                    </strong>
                    <span style={{ color: 'var(--ink-500)', fontSize: 14, lineHeight: 1.55 }}>
                      A detailed proposal with transparent, fixed pricing. No surprises.
                    </span>
                  </div>
                </li>
              </ol>
              <div
                style={{
                  marginTop: 32,
                  padding: 28,
                  background: 'linear-gradient(180deg,#fff5f0,#fff)',
                  border: '1px solid var(--accent-line)',
                  borderRadius: 18,
                }}
              >
                <h4 style={{ marginBottom: 14, color: 'var(--ink-900)', fontSize: 15 }}>Why choose Town Web?</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 0 }}>
                  <Bullet>No annual price increases — ever</Bullet>
                  <Bullet>All-inclusive packages — no hidden fees</Bullet>
                  <Bullet>ADA compliance guaranteed</Bullet>
                  <Bullet>Dedicated support team</Bullet>
                  <Bullet>20+ years of municipal experience</Bullet>
                </ul>
              </div>
            </div>
            <FormCard kind="quote">
              <div className="form-row">
                <div className="form-group">
                  <label>First name *</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Last name *</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="form-group">
                <label>Work email *</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Municipality *</label>
                  <input type="text" required placeholder="City of Madison" />
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input type="text" required placeholder="WI" />
                </div>
              </div>
              <div className="form-group">
                <label>Approximate population</label>
                <select>
                  <option>Select…</option>
                  <option>Under 1,000</option>
                  <option>1,000 – 5,000</option>
                  <option>5,000 – 25,000</option>
                  <option>25,000 – 100,000</option>
                  <option>100,000+</option>
                </select>
              </div>
              <div className="form-group">
                <label>When are you looking to get started? *</label>
                <select required>
                  <option value="">Select…</option>
                  <option>As soon as possible</option>
                  <option>Within 1–3 months</option>
                  <option>Within 3–6 months</option>
                  <option>Just exploring options</option>
                </select>
              </div>
              <div className="form-group">
                <label>Anything else we should know?</label>
                <textarea placeholder="Current vendor, pain points, integrations needed…" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Request my quote<span className="arrow" />
              </button>
              <p className="form-note">
                By submitting this form, you agree to receive communications from Town Web. We respect
                your privacy and never share your information.
              </p>
            </FormCard>
          </div>
        </div>
      </section>
    </>
  );
}
