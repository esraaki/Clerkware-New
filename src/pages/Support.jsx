import PageHero from '../components/shared/PageHero.jsx';
import CTABand from '../components/shared/CTABand.jsx';
import FAQ from '../components/shared/FAQ.jsx';

const FAQ_ITEMS = [
  {
    q: 'How do I update my website content?',
    a: 'Log in to your admin dashboard and use the visual editor. Changes save automatically; preview before publishing.',
  },
  {
    q: 'What if I need help outside business hours?',
    a: 'For urgent issues (site down, emergency alerts not sending), we have on-call after-hours support. Email emergency@townweb.com or call our after-hours line.',
  },
  {
    q: 'How long does it take to get a response?',
    a: 'Phone and chat are immediate during business hours. Email is typically answered within 4 hours, often much sooner.',
  },
  {
    q: 'Do you offer training?',
    a: 'Comprehensive training when your site launches and ongoing sessions as needed. Video tutorials available 24/7.',
  },
];

export default function Support() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '#/home' }, { label: 'Support' }]}
        headlineHtml="Get help. Fast. <em>From a real human</em>."
        leadHtml="Phone, email, or live chat with people who know your municipality. No tickets. No scripts. No hold music. Standard support, no surcharge."
      />

      <section className="section">
        <div className="container">
          <div className="benefit-grid" data-reveal>
            <a className="benefit" href="tel:+16085355388" style={{ textDecoration: 'none' }}>
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h4>Call us. We answer.</h4>
              <p>
                608-535-5388 ext. 303
                <br />
                Mon–Fri, 8am–5pm CT
              </p>
              <span className="btn btn-primary btn-sm" style={{ marginTop: 14 }}>
                Call now<span className="arrow" />
              </span>
            </a>
            <a className="benefit" href="mailto:hello@townweb.com" style={{ textDecoration: 'none' }}>
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h4>Email support</h4>
              <p>
                hello@townweb.com
                <br />
                Typical response in under 4 hours
              </p>
              <span className="btn btn-outline btn-sm" style={{ marginTop: 14 }}>
                Send email
              </span>
            </a>
            <div className="benefit">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h4>Live chat</h4>
              <p>Instant answers via the chat widget on any page. Real humans, no bots.</p>
              <span className="btn btn-ghost btn-sm" style={{ marginTop: 14 }}>
                Start chat
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Common questions
            </span>
            <h2>Quick answers.</h2>
          </div>
          <FAQ id="support-faq" items={FAQ_ITEMS} />
        </div>
      </section>

      <CTABand
        headingHtml="Still need <em>help</em>?"
        bodyHtml="Our team is ready to assist with any question — platform, billing, training, integrations."
      />
    </>
  );
}
