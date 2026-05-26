import PageHero from '../components/shared/PageHero.jsx';
import CTABand from '../components/shared/CTABand.jsx';

const PRINCIPLES = [
  {
    title: 'Partnership, not vendorship',
    body: "We're not here to sell software and disappear. We're your long-term partner — and that compounds.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 11l-3 3-3-3M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      </svg>
    ),
  },
  {
    title: 'Simplicity first',
    body: "Government tech doesn't have to be complicated. Powerful tools that anyone in your office can actually use.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Clerk-centered design',
    body: 'Every feature starts with one question: "will this make the clerk\'s job easier?"',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Transparent pricing',
    body: 'No hidden fees. No surprise charges. No annual increases. The number on your invoice is the number we agreed on.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '#/home' }, { label: 'Company' }]}
        headlineHtml="Built for clerks. By people who <em>answer the phone</em>."
        leadHtml="Twenty years ago we built one municipal website. We never stopped picking up when those clerks called. Today, Town Web is the civic-tech ecosystem 800+ municipalities run on — and we still answer on the first ring."
        actions={
          <>
            <a className="btn btn-primary" href="#/contact">
              Get in touch<span className="arrow" />
            </a>
            <a className="btn btn-outline" href="#/compare">
              See how we compare
            </a>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <div className="usecase">
            <div className="usecase-copy" data-reveal>
              <span className="tag">Mission</span>
              <h3 dangerouslySetInnerHTML={{ __html: 'Make municipal software that actually <em>works</em>.' }} />
              <p>
                Municipal clerks wear a dozen hats. You're the keeper of records, the face of local
                government, and often the first call when a resident needs help. Your tools should
                make that job easier — not harder.
              </p>
              <p style={{ marginTop: 14 }}>
                Every feature we ship, every design choice we make, every support call we take is
                focused on one thing: empowering clerks to serve their communities better.
              </p>
            </div>
            <div className="shot" data-reveal data-reveal-delay="1">
              <div className="shot-chrome">
                <div className="dots">
                  <span /><span /><span />
                </div>
                <div className="title">about.townweb.com</div>
              </div>
              <div className="shot-body">
                <span className="ph-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6" />
                  </svg>
                </span>
                <div className="ph-title">Screenshot placeholder</div>
                <p className="ph-desc">
                  Photo: the Town Web team gathered outside the Madison, WI office. Casual group
                  shot — about 16 people, warm lighting, midwestern town-square feel.
                </p>
                <p className="ph-note">Photo placeholder — replace with team photo asset</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              The shape of Town Web
            </span>
            <h2 dangerouslySetInnerHTML={{ __html: 'Twenty years, <em>one focus</em>.' }} />
          </div>
          <div className="stats stats-3" data-reveal data-reveal-delay="1">
            <div className="stat-cell">
              <div className="num">
                800<em>+</em>
              </div>
              <div className="label">municipalities</div>
            </div>
            <div className="stat-cell">
              <div className="num">40</div>
              <div className="label">states</div>
            </div>
            <div className="stat-cell">
              <div className="num">
                20<em>+</em>
              </div>
              <div className="label">years</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              What we believe
            </span>
            <h2>Four principles that guide every decision.</h2>
          </div>
          <div className="benefit-grid" data-reveal data-reveal-delay="1">
            {PRINCIPLES.map((p) => (
              <article key={p.title} className="benefit">
                <div className="ic">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headingHtml="Ready to <em>partner</em> with Town Web?"
        bodyHtml="Join 800+ municipalities who trust us as their friendly full-service partner."
      />
    </>
  );
}
