const CATEGORIES = [
  {
    num: '01',
    flip: false,
    eyebrow: 'For your team',
    title: 'Internal Operations',
    blurb:
      'Stop pasting between systems. Meetings, content, and approvals run from one place — so clerks can run the show, not chase it.',
    illo: 'internal',
    lead: {
      href: '#/feature/meetings',
      title: 'Meetings & Minutes',
      body:
        'Agendas, recordings, AI-drafted minutes, and one-click publishing. Your evening back, every week.',
      snippet: 'minutes',
    },
    cards: [
      {
        href: '#/feature/content',
        title: 'Content & Documents',
        body: 'Write once — site, email, and notices stay in sync.',
        snippet: 'content',
      },
      {
        href: '#/feature/forms',
        title: 'Forms & Workflows',
        body: 'Drag-and-drop builder routes every submission to the right desk.',
        snippet: 'forms',
      },
    ],
  },
  {
    num: '02',
    flip: true,
    eyebrow: 'For your residents',
    title: 'Citizen Engagement',
    blurb:
      'Residents get a town that answers them. Subscriptions, 311 reporting, and shared calendars keep everyone in the loop.',
    illo: 'citizen',
    lead: {
      href: '#/feature/notifications',
      title: 'Notifications & Alerts',
      body:
        'Topic subscriptions for the things residents care about — delivered by email, text, or both.',
      snippet: 'alerts',
    },
    cards: [
      {
        href: '#/feature/311',
        title: '311 & Online Forms',
        body: 'Potholes and outages reported from a phone, with photos and location.',
        snippet: 'reports',
      },
      {
        href: '#/feature/calendar',
        title: 'Event Calendar',
        body: 'Post once — Google, Outlook, and your site all stay in sync.',
        snippet: 'calendar',
      },
    ],
  },
  {
    num: '03',
    flip: false,
    eyebrow: 'For your bottom line',
    title: 'Revenue & Services',
    blurb:
      'Online payments, bookings, and permits — collected, tracked, and reconciled without paper, lines, or duplicate entry.',
    illo: 'revenue',
    lead: {
      href: '#/feature/payments',
      title: 'Online Payments',
      body:
        'Credit, debit, ACH, and e-checks for utilities, permits, parking, and rec — receipts emailed automatically.',
      snippet: 'payments',
    },
    cards: [
      {
        href: '#/feature/facility',
        title: 'Facility Booking',
        body: 'Pavilions, rooms, and fields booked online with real-time availability.',
        snippet: 'facility',
      },
      {
        href: '#/feature/permits',
        title: 'Permits & Licensing',
        body: 'Submit, pay, and track — building, zoning, business, special events.',
        snippet: 'permits',
      },
    ],
  },
];

const ILLO_SRC = {
  internal: '/assets/images/category-internal.png',
  citizen: '/assets/images/category-citizen.png',
  revenue: '/assets/images/category-revenue.png',
};

function Illo({ kind, title }) {
  return (
    <img className="fc-illo-img" src={ILLO_SRC[kind]} alt={`${title} illustration`} loading="lazy" />
  );
}

function Snippet({ kind }) {
  if (kind === 'minutes') {
    return (
      <div className="fc-snip">
        <div className="fc-snip-chrome">
          <span className="hd-dot" />
          <span className="hd-dot" />
          <span className="hd-dot" />
          <span className="fc-snip-title">Meeting · Sept 12, 7:00 PM</span>
        </div>
        <div className="fc-snip-body">
          <div className="fc-snip-row"><b>Motion</b><span>Approve roads contract</span></div>
          <div className="fc-snip-row"><b>Action</b><span>Clerk to publish minutes</span></div>
          <div className="fc-snip-row"><b>Vote</b><span className="fc-snip-ok">5–0 passed</span></div>
        </div>
      </div>
    );
  }
  if (kind === 'content') {
    return (
      <div className="fc-snip fc-snip-sm">
        <div className="fc-snip-body">
          <span className="fc-line fc-line-w70" />
          <span className="fc-line fc-line-w90" />
          <span className="fc-line fc-line-w55" />
          <span className="fc-pill">Published</span>
        </div>
      </div>
    );
  }
  if (kind === 'forms') {
    return (
      <div className="fc-snip fc-snip-sm">
        <div className="fc-snip-body">
          <span className="fc-field">Name<i /></span>
          <span className="fc-field">Address<i /></span>
          <span className="fc-pill fc-pill-red">Submit</span>
        </div>
      </div>
    );
  }
  if (kind === 'alerts') {
    return (
      <div className="fc-snip">
        <div className="fc-snip-chrome">
          <span className="hd-live-dot" />
          <span className="fc-snip-title">Boil-water notice · scheduled 6:00 PM</span>
        </div>
        <div className="fc-snip-body">
          <div className="fc-snip-row"><b>SMS</b><span>1,420 subscribers</span></div>
          <div className="fc-snip-row"><b>Email</b><span>3,860 subscribers</span></div>
          <div className="fc-snip-row"><b>Posted</b><span className="fc-snip-ok">Site + social</span></div>
        </div>
      </div>
    );
  }
  if (kind === 'reports') {
    return (
      <div className="fc-snip fc-snip-sm">
        <div className="fc-snip-body">
          <div className="fc-snip-row"><b>Pothole</b><span>Elm St.</span></div>
          <div className="fc-snip-row"><b>Status</b><span className="fc-snip-ok">Routed to DPW</span></div>
        </div>
      </div>
    );
  }
  if (kind === 'calendar') {
    return (
      <div className="fc-snip fc-snip-sm">
        <div className="fc-snip-body fc-snip-cal">
          {[12,13,14,15,16,17,18].map((d, i) => (
            <span key={d} className={'fc-cal-day' + (i === 3 ? ' is-on' : '')}>{d}</span>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'payments') {
    return (
      <div className="fc-snip">
        <div className="fc-snip-chrome">
          <span className="hd-dot" />
          <span className="hd-dot" />
          <span className="hd-dot" />
          <span className="fc-snip-title">Payments · today</span>
        </div>
        <div className="fc-snip-body">
          <div className="fc-snip-row"><b>Water bill</b><span>$84.20</span></div>
          <div className="fc-snip-row"><b>Building permit</b><span>$240.00</span></div>
          <div className="fc-snip-row"><b>Park rental</b><span>$60.00</span></div>
          <div className="fc-snip-row fc-snip-total"><b>Total</b><span className="fc-snip-ok">$4,210.20</span></div>
        </div>
      </div>
    );
  }
  if (kind === 'facility') {
    return (
      <div className="fc-snip fc-snip-sm">
        <div className="fc-snip-body fc-snip-cal">
          {Array.from({length:7}).map((_, i) => (
            <span key={i} className={'fc-cal-day' + (i === 2 || i === 5 ? ' is-busy' : '')}>{8 + i}</span>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'permits') {
    return (
      <div className="fc-snip fc-snip-sm">
        <div className="fc-snip-body">
          <div className="fc-snip-row"><b>Building</b><span className="fc-snip-ok">Approved</span></div>
          <div className="fc-snip-row"><b>Event</b><span>In review</span></div>
        </div>
      </div>
    );
  }
  return null;
}

export default function FeatureCategories() {
  return (
    <section className="fc-section" data-reveal-section>
      <div className="container">
        <div className="sec-head sec-head-center fc-section-head" data-reveal>
          <span className="ps-eyebrow">The platform, by area of work</span>
          <h2>Nine connected products. Three jobs to do.</h2>
          <p>
            Built around how municipalities actually run — keep the office moving, keep residents
            informed, and keep revenue collected.
          </p>
        </div>

        {CATEGORIES.map((cat) => (
          <div key={cat.num} className={'fc-cat' + (cat.flip ? ' fc-cat--flip' : '')} data-reveal>
            <div className="fc-text">
              <span className="fc-num">{cat.num}</span>
              <span className="fc-eyebrow">{cat.eyebrow}</span>
              <h3 className="fc-title">{cat.title}</h3>
              <p className="fc-blurb">{cat.blurb}</p>
              <div className="fc-illo"><Illo kind={cat.illo} title={cat.title} /></div>
            </div>

            <div className="fc-cards">
              <a className="fc-card fc-card-lead" href={cat.lead.href}>
                <div className="fc-card-text">
                  <h4>{cat.lead.title}</h4>
                  <p>{cat.lead.body}</p>
                  <span className="fc-card-link">Explore <i className="arrow" /></span>
                </div>
                <div className="fc-card-screen"><Snippet kind={cat.lead.snippet} /></div>
              </a>
              <div className="fc-card-row">
                {cat.cards.map((c) => (
                  <a key={c.href} className="fc-card" href={c.href}>
                    <div className="fc-card-text">
                      <h4>{c.title}</h4>
                      <p>{c.body}</p>
                    </div>
                    <div className="fc-card-screen fc-card-screen-sm"><Snippet kind={c.snippet} /></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
