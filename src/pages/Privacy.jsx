import PageHero from '../components/shared/PageHero.jsx';

export default function Privacy() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '#/home' }, { label: 'Legal' }]}
        headlineHtml="Privacy Policy"
        leadHtml="Last updated: January 2026"
        innerStyle={{ maxWidth: 780 }}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="form-card" style={{ padding: 40 }}>
            <h3 style={{ marginBottom: 14 }}>Summary</h3>
            <p style={{ color: 'var(--ink-500)', marginBottom: 18, lineHeight: 1.65 }}>
              Town Web takes your privacy seriously. We collect only what we need to deliver our
              services. We never sell your information. We never share it without your explicit
              permission.
            </p>
            <h3 style={{ margin: '28px 0 14px' }}>What we collect</h3>
            <p style={{ color: 'var(--ink-500)', marginBottom: 14, lineHeight: 1.65 }}>
              Account info (name, email, organization), usage data (which features you use), and any
              content you upload to your municipal site.
            </p>
            <h3 style={{ margin: '28px 0 14px' }}>How we use it</h3>
            <p style={{ color: 'var(--ink-500)', marginBottom: 14, lineHeight: 1.65 }}>
              To operate the platform, support your municipality, send service updates, and improve
              our products. That's it.
            </p>
            <h3 style={{ margin: '28px 0 14px' }}>Your rights</h3>
            <p style={{ color: 'var(--ink-500)', marginBottom: 14, lineHeight: 1.65 }}>
              You can request a copy of your data, request deletion, or opt out of non-essential
              communications at any time. Email{' '}
              <a href="mailto:privacy@townweb.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                privacy@townweb.com
              </a>
              .
            </p>
            <p style={{ color: 'var(--ink-400)', fontSize: 13, marginTop: 24 }}>
              Full policy available on request. We follow GDPR, CCPA, and FERPA standards where
              applicable to municipal data.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
