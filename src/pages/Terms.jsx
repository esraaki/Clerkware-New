import PageHero from '../components/shared/PageHero.jsx';

export default function Terms() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '#/home' }, { label: 'Legal' }]}
        headlineHtml="Terms of Service"
        leadHtml="Last updated: January 2026"
        innerStyle={{ maxWidth: 780 }}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="form-card" style={{ padding: 40 }}>
            <h3 style={{ marginBottom: 14 }}>Agreement</h3>
            <p style={{ color: 'var(--ink-500)', marginBottom: 18, lineHeight: 1.65 }}>
              By using Town Web's services, you agree to these terms. They cover our service
              obligations to you, your responsibilities, payment terms, and how either side can end
              the relationship.
            </p>
            <h3 style={{ margin: '28px 0 14px' }}>Our commitments</h3>
            <p style={{ color: 'var(--ink-500)', marginBottom: 14, lineHeight: 1.65 }}>
              99.9% uptime SLA. Daily backups. PCI compliance. ADA compliance. Real human support
              during business hours.
            </p>
            <h3 style={{ margin: '28px 0 14px' }}>Your responsibilities</h3>
            <p style={{ color: 'var(--ink-500)', marginBottom: 14, lineHeight: 1.65 }}>
              Keep account credentials secure. Use the platform lawfully. Pay invoices on time.
              Don't upload content that infringes copyright or violates law.
            </p>
            <h3 style={{ margin: '28px 0 14px' }}>Termination</h3>
            <p style={{ color: 'var(--ink-500)', marginBottom: 14, lineHeight: 1.65 }}>
              Year-to-year contracts. Either side can end with 60 days notice. Your data exports
              cleanly — you take it with you.
            </p>
            <p style={{ color: 'var(--ink-400)', fontSize: 13, marginTop: 24 }}>
              Full Master Services Agreement available on request. Questions:{' '}
              <a href="mailto:legal@townweb.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                legal@townweb.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
