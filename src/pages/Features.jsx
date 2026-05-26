import PageHero from '../components/shared/PageHero.jsx';
import CTABand from '../components/shared/CTABand.jsx';

const Breadcrumb = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const BENTO_LAYOUTS = {
  internal: [
    { cls: 'bento-card bento-wide', href: '#/feature/meetings', kicker: 'Signature', title: 'AI Meeting Minutes',
      body: 'Build the agenda. Record the session. AI drafts. You approve. The site, archive, and subscribers all update together.' },
    { cls: 'bento-card bento-med', href: '#/feature/content', kicker: 'Content', title: 'Documents & Content',
      body: 'Ordinances, policies, budgets. Tagged, searchable, version-controlled.' },
    { cls: 'bento-card bento-med', href: '#/feature/forms', kicker: 'Workflow', title: 'Forms & Workflows',
      body: 'Drag-and-drop builder. Multi-step approvals. Audit trails baked in.' },
  ],
  citizen: [
    { cls: 'bento-card bento-tall', href: '#/feature/notifications', kicker: 'Reach', title: 'Notifications & Alerts',
      body: 'Compose once. Email, SMS, voice and on-site banner all go out together. Pre-approved templates for emergencies.' },
    { cls: 'bento-card bento-half', href: '#/feature/311', kicker: 'Mobile-first', title: '311 & Online Reporting',
      body: 'Snap a photo, drop a pin, hit send. Auto-routed by issue type and location. Status visible to applicant.' },
    { cls: 'bento-card bento-half', href: '#/feature/calendar', kicker: 'Sync', title: 'Event Calendar',
      body: 'Post once. Lands on your site, syncs to Google & Outlook, notifies subscribers.' },
  ],
  revenue: [
    { cls: 'bento-card bento-tall', href: '#/feature/payments', kicker: 'Revenue', title: 'Online Payments',
      body: 'Cards, debit, ACH, e-checks for utilities, permits, tickets, recreation. PCI Level 1. Auto-receipts. Recurring autopay.' },
    { cls: 'bento-card bento-half', href: '#/feature/facility', kicker: 'Booking', title: 'Facility Booking',
      body: 'Park pavilions, community rooms, athletic fields. Real-time availability. Integrated payment. One staff calendar.' },
    { cls: 'bento-card bento-half', href: '#/feature/permits', kicker: 'Workflow', title: 'Permits & Licensing',
      body: 'Building, zoning, business, special events. One central review queue. Audit trails preserved.' },
  ],
};

function BentoSection({ pillarTitle, pillarNum, eyebrow, intro, items, bg }) {
  const sectionStyle = bg
    ? { background: '#fff', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }
    : undefined;
  return (
    <section className="section" style={sectionStyle}>
      <div className="container">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            {eyebrow}
          </span>
          <h2>{pillarTitle}</h2>
          <p>{intro}</p>
        </div>
        <div className="bento" data-reveal data-reveal-delay="1">
          {items.map((it) => (
            <a key={it.href} className={it.cls} href={it.href}>
              <span className="b-kicker">{it.kicker}</span>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: 'Home', href: '#/home' },
          { label: 'Features' },
        ]}
        headlineHtml="Nine products. <em>One civic stack.</em>"
        leadHtml="The Clerkware™ platform replaces the five-vendor mess most municipalities are stuck with. Every module shares one identity layer, one document store, one resident graph. Built for clerks. Used by 800+ municipalities."
        actions={
          <>
            <a className="btn btn-primary" href="#/demo">
              Book a demo<span className="arrow" />
            </a>
            <a className="btn btn-outline" href="#/quote">
              Request a quote
            </a>
          </>
        }
      />
      <BentoSection
        eyebrow="Pillar 01 · For your team"
        pillarTitle="Internal operations"
        intro="Run the office without the late nights. The back-office work municipalities lose hours to — automated and connected."
        items={BENTO_LAYOUTS.internal}
      />
      <BentoSection
        eyebrow="Pillar 02 · For your residents"
        pillarTitle="Citizen engagement"
        intro="Residents expect to report a pothole from their phone at 10 PM. Subscribe to road closure alerts. Find meeting minutes without calling Town Hall. Make that the default — not the exception."
        items={BENTO_LAYOUTS.citizen}
        bg
      />
      <BentoSection
        eyebrow="Pillar 03 · For your bottom line"
        pillarTitle="Revenue & services"
        intro="Every transaction that requires a Town Hall visit is a barrier. Let residents pay, book, and apply online — anytime, from anywhere."
        items={BENTO_LAYOUTS.revenue}
      />
      <CTABand
        headingHtml="See how it fits <em>your town</em>."
        bodyHtml="A 30-minute demo tailored to your municipality's size and workflows. We'll show only what's relevant to you."
      />
    </>
  );
}
