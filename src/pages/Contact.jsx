import PageHero from '../components/shared/PageHero.jsx';
import FormCard from '../components/shared/FormCard.jsx';

const iconWrap = {
  flexShrink: 0,
  width: 44,
  height: 44,
  borderRadius: 12,
  background: 'var(--accent-wash)',
  color: 'var(--accent)',
  border: '1px solid var(--accent-line)',
  display: 'grid',
  placeItems: 'center',
};
const row = { display: 'flex', gap: 16, alignItems: 'flex-start' };

export default function Contact() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '#/home' }, { label: 'Contact' }]}
        headlineHtml="Talk to a <em>real person</em>."
        leadHtml="No pressure, no obligation — just a friendly conversation about your municipality's needs. We respond to every message — and we answer the phone on the first ring."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="usecase" style={{ borderTop: 0, paddingTop: 0 }}>
            <div>
              <h3 style={{ marginBottom: 14 }}>Let's talk</h3>
              <p style={{ color: 'var(--ink-500)', marginBottom: 28, fontSize: 15, lineHeight: 1.6 }}>
                Whether you're ready to get started or just exploring, we're here. We respond to
                every message — and we answer the phone on the first ring.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                <div style={row}>
                  <div className="ic" style={iconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 4 }}>Phone</h4>
                    <a href="tel:+16085355388" style={{ color: 'var(--ink-900)', fontWeight: 650, fontSize: 15 }}>
                      608-535-5388 ext. 303
                    </a>
                    <p style={{ fontSize: 13, color: 'var(--ink-400)', marginTop: 4 }}>Mon–Fri, 8am–5pm CT</p>
                  </div>
                </div>
                <div style={row}>
                  <div className="ic" style={iconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 4 }}>Email</h4>
                    <a href="mailto:hello@townweb.com" style={{ color: 'var(--ink-900)', fontWeight: 650, fontSize: 15 }}>
                      hello@townweb.com
                    </a>
                    <p style={{ fontSize: 13, color: 'var(--ink-400)', marginTop: 4 }}>Typical response in under 4 hours</p>
                  </div>
                </div>
                <div style={row}>
                  <div className="ic" style={iconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 4 }}>Office</h4>
                    <p style={{ fontWeight: 650, color: 'var(--ink-900)', fontSize: 15, lineHeight: 1.5 }}>
                      1360 Regent Street #355
                      <br />
                      Madison, WI 53715
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <FormCard kind="contact">
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
                <label>Municipality</label>
                <input type="text" placeholder="City of …" />
              </div>
              <div className="form-group">
                <label>What can we help with?</label>
                <select>
                  <option>Select…</option>
                  <option>New website</option>
                  <option>Website redesign</option>
                  <option>Additional features</option>
                  <option>Support question</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us a bit about your needs…" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Send message<span className="arrow" />
              </button>
              <p className="form-note">We typically respond within 4 hours during business hours.</p>
            </FormCard>
          </div>
        </div>
      </section>
    </>
  );
}
