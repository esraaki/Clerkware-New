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

export default function Demo() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '#/home' }, { label: 'Book a demo' }]}
        headlineHtml="Book a <em>30-minute</em> demo."
        leadHtml="Personalized walkthrough sized to your municipality. No sales pressure — just a look at how the Clerkware platform fits your workflows."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="usecase" style={{ borderTop: 0, paddingTop: 0 }}>
            <div>
              <h3 style={{ marginBottom: 14 }}>What you'll see</h3>
              <p style={{ color: 'var(--ink-500)', marginBottom: 28, fontSize: 15, lineHeight: 1.6 }}>
                A live walkthrough tailored to your municipality's size and priorities:
              </p>
              <ol style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <li style={stepRow}>
                  <span style={stepNum}>1</span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--ink-900)', marginBottom: 4, fontSize: 15, fontWeight: 650 }}>
                      Features tour
                    </strong>
                    <span style={{ color: 'var(--ink-500)', fontSize: 14, lineHeight: 1.5 }}>
                      See the CMS, content tools, and admin dashboard.
                    </span>
                  </div>
                </li>
                <li style={stepRow}>
                  <span style={stepNum}>2</span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--ink-900)', marginBottom: 4, fontSize: 15, fontWeight: 650 }}>
                      Features that matter most
                    </strong>
                    <span style={{ color: 'var(--ink-500)', fontSize: 14, lineHeight: 1.5 }}>
                      We focus on what you actually need — payments, alerts, meeting tools, or all of it.
                    </span>
                  </div>
                </li>
                <li style={stepRow}>
                  <span style={stepNum}>3</span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--ink-900)', marginBottom: 4, fontSize: 15, fontWeight: 650 }}>
                      Design options
                    </strong>
                    <span style={{ color: 'var(--ink-500)', fontSize: 14, lineHeight: 1.5 }}>
                      Browse municipal-specific designs &amp; customization examples.
                    </span>
                  </div>
                </li>
                <li style={stepRow}>
                  <span style={accentNum}>4</span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--ink-900)', marginBottom: 4, fontSize: 15, fontWeight: 650 }}>
                      Q&amp;A
                    </strong>
                    <span style={{ color: 'var(--ink-500)', fontSize: 14, lineHeight: 1.5 }}>
                      Ask anything. Pricing, timelines, migration, integrations.
                    </span>
                  </div>
                </li>
              </ol>
              <div
                style={{
                  marginTop: 32,
                  padding: '20px 22px',
                  background: '#fff',
                  border: '1px solid var(--ink-100)',
                  borderRadius: 14,
                }}
              >
                <strong style={{ display: 'block', marginBottom: 6, color: 'var(--ink-900)', fontSize: 14 }}>
                  Bring your team
                </strong>
                <span style={{ fontSize: 13.5, color: 'var(--ink-500)', lineHeight: 1.55 }}>
                  Demos work best with the people who'll use the platform. Anyone welcome — clerk,
                  admin, IT, elected officials.
                </span>
              </div>
            </div>
            <FormCard kind="demo">
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
              <div className="form-group">
                <label>Municipality *</label>
                <input type="text" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>State *</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Your role</label>
                  <select>
                    <option>Select…</option>
                    <option>City/Town Clerk</option>
                    <option>Administrator</option>
                    <option>IT</option>
                    <option>Elected official</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Primary interest</label>
                <select>
                  <option>Full platform overview</option>
                  <option>Website &amp; CMS</option>
                  <option>Online Payments</option>
                  <option>Notifications &amp; Alerts</option>
                  <option>Meetings &amp; Minutes</option>
                  <option>Permits &amp; Licensing</option>
                  <option>ADA Compliance</option>
                </select>
              </div>
              <div className="form-group">
                <label>Anything specific to cover?</label>
                <textarea placeholder="Optional — but helpful for us to prep." />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Schedule my demo<span className="arrow" />
              </button>
              <p className="form-note">
                We'll email you with available times. Demos are typically available within 2–3 business days.
              </p>
            </FormCard>
          </div>
        </div>
      </section>
    </>
  );
}
