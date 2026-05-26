const ICONS = {
  meetings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
    </svg>
  ),
  content: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M8 13h8M8 17h5" />
    </svg>
  ),
  forms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  notifications: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  reports: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 6h6M12 18h.01" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  payments: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </svg>
  ),
  facility: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  permits: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  ),
};

const PILLARS = [
  {
    num: '01',
    key: 'Internal Operations',
    sub: 'For your team',
    cards: [
      {
        href: '#/feature/meetings',
        icon: 'meetings',
        title: 'Meetings & Minutes',
        body: 'Create agendas, notify stakeholders, and record sessions with one click. AI drafts minutes you review and approve — then auto-publishes to your site and subscribers.',
        lead: true,
      },
      {
        href: '#/feature/content',
        icon: 'content',
        title: 'Content & Documents',
        body: 'Write once, publish everywhere — website, email, social, notifications. All in sync from a single update.',
      },
      {
        href: '#/feature/forms',
        icon: 'forms',
        title: 'Forms & Workflows',
        body: 'Drag-and-drop builder for permits, applications, and requests. Built-in routing sends each submission to the right department.',
      },
    ],
  },
  {
    num: '02',
    key: 'Citizen Engagement',
    sub: 'For your residents',
    cards: [
      {
        href: '#/feature/notifications',
        icon: 'notifications',
        title: 'Notifications & Alerts',
        body: 'Residents subscribe to the topics they care about — road closures, agendas, utility updates — and get notified via email, text, or both.',
        lead: true,
      },
      {
        href: '#/feature/311',
        icon: 'reports',
        title: '311 & Online Forms',
        body: 'Residents report potholes, outages, and code violations from their phone — with photos and location data attached.',
      },
      {
        href: '#/feature/calendar',
        icon: 'calendar',
        title: 'Event Calendar',
        body: 'Post once — it appears on your site, pushes to subscribers, and syncs to Google Calendar and Outlook with one click.',
      },
    ],
  },
  {
    num: '03',
    key: 'Revenue & Services',
    sub: 'For your bottom line',
    cards: [
      {
        href: '#/feature/payments',
        icon: 'payments',
        title: 'Online Payments',
        body: 'Credit cards, debit, ACH, e-checks — for utilities, permits, parking tickets, rec registrations, and anything else.',
        lead: true,
      },
      {
        href: '#/feature/facility',
        icon: 'facility',
        title: 'Facility Booking',
        body: 'Park pavilions, community rooms, athletic fields — booked online with real-time availability, integrated payment, and instant confirmation.',
      },
      {
        href: '#/feature/permits',
        icon: 'permits',
        title: 'Permits & Licensing',
        body: 'Building, zoning, business licenses, special events — submitted online with document uploads, fee payment, and status tracking.',
      },
    ],
  },
];

export default function Platform() {
  return (
    <section className="platform-section" data-reveal-section>
      <div className="container">
        <div className="sec-head sec-head-center" data-reveal>
          <span className="ps-eyebrow">The Clerkware platform</span>
          <h2>One platform. One partner. One bill.</h2>
          <p>
            Nine connected products. One login. One bill. Everything a municipality needs to run
            online — built for clerks, used by 800+ towns.
          </p>
        </div>

        <div className="platform-stack" data-reveal data-reveal-delay="1">
          {PILLARS.map((pillar) => (
            <div key={pillar.num} className="pg-group">
              <div className="pg-head">
                <span className="pg-num">{pillar.num}</span>
                <div>
                  <span className="pg-key">{pillar.key}</span>
                  <span className="pg-sub">{pillar.sub}</span>
                </div>
              </div>
              <div className="platform-grid">
                {pillar.cards.map((card) => (
                  <a
                    key={card.href}
                    className={'pcard' + (card.lead ? ' pcard-lead' : '')}
                    href={card.href}
                  >
                    <span className="pc-ic">{ICONS[card.icon]}</span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
